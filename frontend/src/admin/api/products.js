// API Helper – all backend calls for the admin panel live here
// Since we are running under the same frontend app, we use http://localhost:8000
const BASE_URL = "http://localhost:8000";

export async function getProducts(page = 1, limit = 10) {
  const response = await fetch(`${BASE_URL}/products?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Product not found");
  }
  return response.json();
}

export async function createProduct(formData) {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create product");
  }
  return response.json();
}

export async function updateProduct(id, formData) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update product");
  }
  return response.json();
}

export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
  return response.json();
}

export async function getBarcodeById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}/barcode`);
  if (!response.ok) {
    throw new Error("Failed to fetch barcode");
  }
  return response.json();
}

export async function generateBarcode(id) {
  const response = await fetch(`${BASE_URL}/products/${id}/barcode`, {
    method: "POST"
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to generate barcode");
  }
  return response.json();
}
