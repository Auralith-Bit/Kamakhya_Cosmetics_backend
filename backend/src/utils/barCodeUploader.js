import { v2 as cloudinary } from "cloudinary";

export const uploadImageBuffer = async (buffer, folder = "product-barcodes") => {
    return await new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    folder,
                    resource_type: "image",
                    format: "png",
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            )
            .end(buffer);
    });
};

export const uploadBarcode = async (barcodeBuffer) => uploadImageBuffer(barcodeBuffer, "product-barcodes");
export const uploadQrCode = async (qrBuffer) => uploadImageBuffer(qrBuffer, "product-qrcodes");

export default uploadBarcode;