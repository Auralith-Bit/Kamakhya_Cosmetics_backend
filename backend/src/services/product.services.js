
import Product from "../models/Product.js";
import uploadFiles from "../utils/fileUploader.js";
import generateBarcode from "../utils/barCodeGenerator.js";
import uploadBarcode from "../utils/barCodeUploader.js";
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

    // Generate Code 128 barcode using the product's _id (much shorter than the full URL)
    const barcodeBuffer = await generateBarcode(product._id.toString());

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


// Get barcode info for a specific product
// Returns the barcode image URL and the text it encodes
const getBarcodeById = async (id) => {
    const product = await Product.findById(id);

    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        };
    }

    // The barcode encodes the product ID (much shorter)
    const codeValue = product._id.toString();

    return {
        product: {
            _id: product._id,
            title: product.title,
            brand: product.brand,
            category: product.category,
        },
        barcodeUrl: product.barcode || null,
        codeValue,
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

    const productUrl = `${config.domainUrl}/products/${product._id}`;
    const barcodeBuffer = await generateBarcode(product._id.toString());
    const uploadedBarcode = await uploadBarcode(barcodeBuffer);
    product.barcode = uploadedBarcode.secure_url;
    await product.save();

    return {
        barcodeUrl: product.barcode,
        codeValue: product._id.toString()
    };
};

export default {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct,
    getBarcodeById,
    generateAndSaveBarcode
};
