import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  mongodbUrl: process.env.MONGODB_URL || "",
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
  domainUrl: process.env.DOMAIN_URL || "",
};

export default config;