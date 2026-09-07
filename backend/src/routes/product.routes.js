import express from "express";

import productControllers from "../controllers/product.controllers.js";
import productSchema from "../libs/product.schema.js";
import validator from "../middlewares/validator.js";
import normalizeProductBody from "../middlewares/normalizeProductBody.js";

const router = express.Router();

router.get("/", productControllers.getProducts);

router.post(
    "/",
    normalizeProductBody,
    validator(productSchema),
    productControllers.createProduct
);

// Barcode & QR Code scan & lookup routes must come BEFORE /:id
router.get("/barcode/scan/:code", productControllers.lookupByBarcode);
router.get("/:id/barcode", productControllers.getBarcodeById);
router.post("/:id/barcode", productControllers.generateAndSaveBarcode);
router.get("/:id/qrcode", productControllers.getBarcodeById);
router.post("/:id/qrcode", productControllers.generateAndSaveQrCode);

router.get("/:id", productControllers.getProductById);


router.delete("/:id", productControllers.deleteProduct);


router.put(
    "/:id",
    normalizeProductBody,
    validator(productSchema),
    productControllers.updateProduct
);



export default router;