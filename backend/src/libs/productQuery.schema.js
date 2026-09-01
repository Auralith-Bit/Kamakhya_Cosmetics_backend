import * as z from "zod";
import { PRODUCT_BRANDS } from "../constants/brands.js";
import { PRODUCT_TYPES } from "../constants/types.js";
import { PRODUCT_CATEGORIES } from "../constants/categories.js";

const productQuerySchema = z.object({
    search: z.string().trim().optional(),

    brand: z.enum(PRODUCT_BRANDS).optional(),

    category: z.enum(PRODUCT_CATEGORIES).optional(),

    type: z.enum(PRODUCT_TYPES).optional(),

    sort: z.enum(["A-Z", "Z-A", "newest", "oldest"]).optional(),

    page: z.coerce.number().int().min(1).optional(),
    
    limit: z.coerce.number().int().min(1).optional()

});

export default productQuerySchema;