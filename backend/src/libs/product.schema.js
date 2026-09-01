import * as z from "zod";
import { PRODUCT_BRANDS } from "../constants/brands.js";
import { PRODUCT_TYPES } from "../constants/types.js"
import { PRODUCT_CATEGORIES } from "../constants/categories.js"
import { PRODUCT_TAGS } from "../constants/tags.js"

const productSchema = z.object({

    tag: z.array(z.enum(PRODUCT_TAGS)),

    brand: z.array(z.enum(PRODUCT_BRANDS)),

    category: z.array(z.enum(PRODUCT_CATEGORIES)),

    type: z.array(z.enum(PRODUCT_TYPES)),

    title: z.string().trim().min(1),

    moq: z.coerce.number().min(1),

    imageUrl: z.array(z.string()).optional(),

    barcode: z.string().optional(),

    lead: z.string().trim().min(1),

    desc: z.string().trim().min(1),
})


export default productSchema;