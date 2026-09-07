import ProductImg from '../assets/ProductImg.svg';

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

/**
 * Normalizes raw MongoDB product documents or static product objects into
 * a standard, consistent shape for all frontend components.
 */
export function normalizeProduct(p) {
  if (!p) return null;
  const id = p._id || p.id;
  const brandVal = Array.isArray(p.brand) ? p.brand[0] : (p.brand || "Royal Luxury");
  const defaultTag = brandVal?.toLowerCase?.().includes("shine") ? "SHINE" : "ROYAL LUXURY";

  const imagesList = Array.isArray(p.imageUrl) && p.imageUrl.length > 0
    ? p.imageUrl
    : (p.image ? [p.image] : [ProductImg]);

  return {
    ...p,
    id: id ? String(id) : undefined,
    _id: id ? String(id) : undefined,
    title: p.title || "Untitled Product",
    desc: p.desc || p.description || "",
    description: p.desc || p.description || "",
    brand: brandVal,
    brands: Array.isArray(p.brand) ? p.brand : [brandVal],
    category: Array.isArray(p.category) ? p.category[0] : (p.category || "Body Care"),
    categories: Array.isArray(p.category) ? p.category : [p.category || "Body Care"],
    type: Array.isArray(p.type) ? p.type[0] : (p.type || "Featured"),
    tag: Array.isArray(p.tag) ? p.tag[0] : (p.tag || defaultTag),
    moq: typeof p.moq === "number" ? `${p.moq} pcs` : (p.moq || "300 pcs"),
    rawMoq: typeof p.moq === "number" ? p.moq : parseInt(p.moq, 10) || 300,
    lead: `${p.lead} days` || `${p.leadTime} days` || "5-7 days",
    leadTime: `${p.lead} days` || `${p.leadTime} days` || "5-7 days",
    image: imagesList[0] || ProductImg,
    images: imagesList,
    barcode: p.barcode || null,
    qrCode: p.qrCode || null,
    createdAt: p.createdAt,
  };
}

/**
 * Fetches products from backend with optional filters, pagination, and sorting.
 */
export async function getProducts(params = {}) {
  const query = new URLSearchParams();

  if (params.search) query.set("search", params.search.trim());
  if (params.brand) query.set("brand", params.brand);
  if (params.category) query.set("category", params.category);
  if (params.type) query.set("type", params.type);
  if (params.sort) query.set("sort", params.sort);
  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));

  const queryString = query.toString();
  const url = `${BASE_URL}/products${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to fetch products");
  }

  const data = await response.json();
  const rawList = Array.isArray(data.products) ? data.products : (Array.isArray(data) ? data : []);
  
  return {
    products: rawList.map(normalizeProduct),
    pagination: data.pagination || {
      currentPage: Number(params.page) || 1,
      limit: Number(params.limit) || rawList.length,
      totalProducts: rawList.length,
      totalPages: 1
    }
  };
}

/**
 * Fetches details for a single product by ID.
 */
export async function getProductDetails(id) {
  if (!id) throw new Error("Product ID is required");

  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Product not found");
  }
  const data = await response.json();
  return normalizeProduct(data);
}

export const getProductById = getProductDetails;

/**
 * Scans / looks up a product by barcode or QR code text.
 */
export async function lookupBarcode(rawCode) {
  if (!rawCode) throw new Error("Barcode is empty");

  const cleanCode = encodeURIComponent(String(rawCode).trim());
  const response = await fetch(`${BASE_URL}/products/barcode/scan/${cleanCode}`);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Product not found for this code");
  }

  const data = await response.json();
  return normalizeProduct(data.product);
}

const productsApi = {
  getProducts,
  getProductDetails,
  getProductById,
  lookupBarcode,
  normalizeProduct
};

export default productsApi;
