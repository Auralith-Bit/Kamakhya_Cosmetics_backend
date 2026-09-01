import { v2 as cloudinary } from "cloudinary";

const uploadBarcode = async (barcodeBuffer) => {
    return await new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    folder: "product-barcodes",
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
            .end(barcodeBuffer);
    });
};

export default uploadBarcode;