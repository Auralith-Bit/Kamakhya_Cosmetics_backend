import productServices from "../services/product.services.js";
import productQuerySchema from "../libs/productQuery.schema.js";

const getProducts = async (req, res) => {
    console.log(req.query.search);
    try {

        const query = productQuerySchema.parse(req.query);

        const result = await productServices.getProducts(query);

        if (result.products.length === 0) {
            return res.status(200).json({
                products: [],
                pagination: result.pagination,
                message: "No products found"
            });
        }

        res.status(200).json(result);

    } catch (error) {

        if (error.name === "ZodError") {
            return res.status(400).json({
                message: "Invalid query parameters",
            });
        }

        res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error"
        });
    }
};
const createProduct = async (req, res) => {
    try {
        const product = await productServices.createProduct(req.body, req.files);

        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getProductById = async (req, res) => {
    try {

        const product = await productServices.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = await productServices.deleteProduct(req.params.id)
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const updateProduct = async (req, res) => {
    try {
        const product = await productServices.updateProduct(req.params.id, req.body, req.files)
        res.status(200).json(product);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get barcode info for a product (used by admin CMS panel)
const getBarcodeById = async (req, res) => {
    try {
        const data = await productServices.getBarcodeById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.statusCode || 404).json({ message: error.message });
    }
};

// Generate and save barcode for an existing product (used by admin CMS panel)
const generateAndSaveBarcode = async (req, res) => {
    try {
        const data = await productServices.generateAndSaveBarcode(req.params.id);
        res.status(200).json({ message: "Barcode generated successfully", ...data });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

export default { getProducts, createProduct, getProductById, deleteProduct, updateProduct, getBarcodeById, generateAndSaveBarcode }