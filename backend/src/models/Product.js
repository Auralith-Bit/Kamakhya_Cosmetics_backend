import mongoose from "mongoose";
import { PRODUCT_CATEGORIES } from "../constants/categories.js";


const productSchema = new mongoose.Schema({

    tag: {
        type: [String],
        enum: [
            "ROYAL LUXURY",
            "SHINE"
        ],
        required: true,
        trim: true
    },
    brand: {
        type: [String],
        enum: ["Royal Luxury", "Shine"],
        required: true,
        trim: true,
    },
    category: {
        type: [String],
        enum: PRODUCT_CATEGORIES,
        required: true
    },
    type: {
        type: [String],
        enum: [
            'Featured',
            'Best Seller',
            'Signatured Products'
        ],
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    moq: {
        type: Number,
        required: true,
        min: 1
    },
    imageUrl: [String],
    lead: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
    },
    barcode: {
        type: String
    }
}, { timestamps: true });
const Product = mongoose.model("Product", productSchema);

export default Product;