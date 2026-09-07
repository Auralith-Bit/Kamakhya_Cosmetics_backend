
import Product from "../models/Product.js";
import uploadFiles from "../utils/fileUploader.js";
import generateBarcode from "../utils/barCodeGenerator.js";
import uploadBarcode, { uploadQrCode } from "../utils/barCodeUploader.js";
import generateQrCode from "../utils/qrCodeGenerator.js";
import config from "../config/config.js"

const getProducts = async (query) => {

    const filter = {};

    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    if (query?.search) {
        const searchWords = query.search.trim().split(/\s+/);

        filter.$or = searchWords.map((word) => ({
            title: {
                $regex: escapeRegex(word),
                $options: "i"
            }
        }));
    }

    if (query?.brand) {
        filter.brand = query.brand;
    }

    if (query?.category) {
        filter.category = query.category;
    }
    if (query?.type) {
        filter.type = query.type;
    }

    let sort = {};

    if (query?.sort) {
        if (query.sort === "A-Z") {
            sort.title = 1;
        } else if (query.sort === "Z-A") {
            sort.title = -1;
        } else if (query.sort === "newest") {
            sort.createdAt = -1;
        } else if (query.sort === "oldest") {
            sort.createdAt = 1;
        }
    }
    const page = Number(query?.page) || 1;
    const limit = Number(query?.limit) || 10;

    const skip = (page - 1) * limit; const products = await Product.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit);

    // Total products matching the filter
    const totalProducts = await Product.countDocuments(filter);

    // Total number of pages
    const totalPages = Math.ceil(totalProducts / limit);

    return {
        products,
        pagination: {
            currentPage: page,
            limit,
            totalProducts,
            totalPages
        }
    };
};
const createProduct = async (data, files) => {

    // Upload product images
    if (files && files.length > 0) {
        const uploadedFiles = await uploadFiles(files);

        data.imageUrl = uploadedFiles.map(
            file => file.secure_url
        );
    }

    // Create product first
    // MongoDB generates the _id
    const product = await Product.create(data);

    // Create the URL that the barcode represents
    const productUrl =
        `${config.domainUrl}/products/${product._id}`;

    // Generate Code 128 barcode label with white background, title, brand, and barcode numbers
    const barcodeBuffer = await generateBarcode(product._id.toString(), {
        title: product.title,
        brand: product.brand,
    });

    // Upload barcode to Cloudinary
    const uploadedBarcode =
        await uploadBarcode(barcodeBuffer);

    // Save Cloudinary URL
    product.barcode = uploadedBarcode.secure_url;

    await product.save();

    return product;
};
const getProductById = async (id) => {
    const product = await Product.findById(id)

    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        }
    }
    return product;
}

const deleteProduct = async (id) => {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error("Product not found.")
    }
    await Product.findByIdAndDelete(id)
    return { message: "Product deleted successfully." }

}
const updateProduct = async (id, data, files) => {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error("Product not found.")
    }

    if (files && files.length > 0) {
        const uploadedFiles = await uploadFiles(files);
        data.imageUrl = uploadedFiles.map(file => file.secure_url);
    }

    return await Product.findByIdAndUpdate(id, data, { new: true });
}


const getTargetProductUrl = (productId, clientOrigin) => {
    const origin = (clientOrigin || process.env.DOMAIN_URL || process.env.CLIENT_URL || "http://localhost:3000").replace(/\/$/, "");
    return `${origin}/products/${productId}`;
};

// Get barcode info for a specific product
// Returns the barcode image URL, QR code URL, and the code/target URL
const getBarcodeById = async (id, clientOrigin) => {
    const product = await Product.findById(id);

    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        };
    }

    // The barcode encodes the product ID
    const codeValue = product._id.toString();
    const targetUrl = getTargetProductUrl(product._id, clientOrigin);

    return {
        product: {
            _id: product._id,
            title: product.title,
            brand: product.brand,
            category: product.category,
        },
        barcodeUrl: product.barcode || null,
        qrCodeUrl: product.qrCode || null,
        codeValue,
        targetUrl,
    };
};

// Generate and save barcode for a specific product
const generateAndSaveBarcode = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        };
    }

    const barcodeBuffer = await generateBarcode(product._id.toString(), {
        title: product.title,
        brand: product.brand,
    });
    const uploadedBarcode = await uploadBarcode(barcodeBuffer);
    await Product.findByIdAndUpdate(id, { barcode: uploadedBarcode.secure_url });

    return {
        barcodeUrl: uploadedBarcode.secure_url,
        codeValue: product._id.toString()
    };
};

// Generate and save QR code for a specific product (redirects to customer product details page)
const generateAndSaveQrCode = async (id, clientOrigin) => {
    const product = await Product.findById(id);
    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        };
    }

    const targetUrl = getTargetProductUrl(product._id, clientOrigin);

    const qrCodeBuffer = await generateQrCode(targetUrl, {
        title: product.title,
        brand: product.brand,
    });
    const uploadedQr = await uploadQrCode(qrCodeBuffer);
    await Product.findByIdAndUpdate(id, { qrCode: uploadedQr.secure_url });

    return {
        qrCodeUrl: uploadedQr.secure_url,
        targetUrl
    };
};

// Lookup product by scanned barcode text or URL
const lookupProductByBarcode = async (rawCode) => {
    if (!rawCode) {
        throw { statusCode: 400, message: "Barcode or product code is required." };
    }

    let code = String(rawCode).trim();
    // If a full URL was scanned (e.g. https://.../products/67c30953a79d8465134ef012)
    const urlMatch = code.match(/\/products\/([a-fA-F0-9]{24}|\d+)/);
    if (urlMatch && urlMatch[1]) {
        code = urlMatch[1];
    }

    // Try finding by MongoDB _id if valid 24-char hex
    if (/^[0-9a-fA-F]{24}$/.test(code)) {
        const product = await Product.findById(code);
        if (product) return product;
    }

    // Try finding by barcode URL, QR code URL, or title match
    const product = await Product.findOne({
        $or: [
            { barcode: { $regex: code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" } },
            { qrCode: { $regex: code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" } },
            { title: { $regex: `^${code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" } }
        ]
    });

    if (!product) {
        throw { statusCode: 404, message: "Product not found for the scanned code." };
    }

    return product;
};

export default {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct,
    getBarcodeById,
    generateAndSaveBarcode,
    generateAndSaveQrCode,
    lookupProductByBarcode
};
