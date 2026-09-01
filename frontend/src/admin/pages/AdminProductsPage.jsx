import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/products";

function AdminProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [deleteModal, setDeleteModal] = useState({ open: false, productId: null, productName: "" });
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  async function fetchProducts(page) {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(page, 10);
      setProducts(data.products);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function openDeleteModal(product) {
    setDeleteModal({ open: true, productId: product._id, productName: product.title });
  }

  function closeDeleteModal() {
    setDeleteModal({ open: false, productId: null, productName: "" });
  }

  async function confirmDelete() {
    setDeleting(true);
    try {
      await deleteProduct(deleteModal.productId);
      closeDeleteModal();
      fetchProducts(currentPage);
    } catch (err) {
      alert("Failed to delete: " + err.message);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div>
      <div className="admin-page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1>Products</h1>
          <p>Manage all products, view barcodes, edit or delete entries.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => navigate("/admin/products/add")}>
          ➕ Add Product
        </button>
      </div>

      {loading && (
        <div className="admin-state-box">
          <div className="icon">⏳</div>
          <p>Loading products...</p>
        </div>
      )}

      {!loading && error && (
        <div className="admin-state-box">
          <div className="icon">❌</div>
          <p>Error: {error}</p>
          <button className="admin-btn admin-btn-outline" style={{ marginTop: 16 }} onClick={() => fetchProducts(currentPage)}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {products.length === 0 ? (
            <div className="admin-state-box">
              <div className="icon">📭</div>
              <p>No products found. Add your first product!</p>
            </div>
          ) : (
            <div className="admin-table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>MOQ</th>
                    <th>Barcode</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        {product.imageUrl && product.imageUrl.length > 0 ? (
                          <img
                            className="admin-product-thumb"
                            src={product.imageUrl[0]}
                            alt={product.title}
                          />
                        ) : (
                          <div className="admin-no-image">🧴</div>
                        )}
                      </td>
                      <td>
                        <strong>{product.title}</strong>
                      </td>
                      <td>{Array.isArray(product.brand) ? product.brand.join(", ") : product.brand}</td>
                      <td>{Array.isArray(product.category) ? product.category.join(", ") : product.category}</td>
                      <td>{product.moq}</td>
                      <td>
                        {product.barcode ? (
                          <img
                            src={product.barcode}
                            alt="barcode"
                            style={{
                              height: "40px",
                              objectFit: "contain",
                              backgroundColor: "white",
                              padding: "2px",
                              borderRadius: "4px",
                              border: "1px solid var(--admin-border)",
                            }}
                          />
                        ) : (
                          <span className="admin-badge admin-badge-orange">⏳ None</span>
                        )}
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          <button
                            className="admin-btn admin-btn-gold admin-btn-sm"
                            onClick={() => navigate(`/admin/products/${product._id}/barcode`)}
                            title="View Barcode"
                          >
                            🔲 Barcode
                          </button>
                          <button
                            className="admin-btn admin-btn-outline admin-btn-sm"
                            onClick={() => navigate(`/admin/products/${product._id}/edit`)}
                            title="Edit Product"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            className="admin-btn admin-btn-danger admin-btn-sm"
                            onClick={() => openDeleteModal(product)}
                            title="Delete Product"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {pagination && pagination.totalPages > 1 && (
            <div className="admin-pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                ← Prev
              </button>
              <span>
                Page {pagination.currentPage} of {pagination.totalPages}
                &nbsp;({pagination.totalProducts} products)
              </span>
              <button
                disabled={currentPage === pagination.totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}

      {deleteModal.open && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box">
            <h3>Delete Product?</h3>
            <p>
              Are you sure you want to delete <strong>"{deleteModal.productName}"</strong>?
              This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button className="admin-btn admin-btn-outline" onClick={closeDeleteModal} disabled={deleting}>
                Cancel
              </button>
              <button className="admin-btn admin-btn-danger" onClick={confirmDelete} disabled={deleting}>
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProductsPage;
