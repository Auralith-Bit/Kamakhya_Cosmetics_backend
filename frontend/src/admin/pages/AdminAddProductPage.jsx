import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/products";
import AdminProductForm from "../components/AdminProductForm";

function AdminAddProductPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleCreate(formData) {
    setLoading(true);
    try {
      const result = await createProduct(formData);
      alert(`✅ Product "${result.product.title}" created successfully! Barcode has been generated.`);
      navigate("/admin/products");
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="admin-page-header">
        <button
          className="admin-btn admin-btn-outline admin-btn-sm"
          onClick={() => navigate("/admin/products")}
          style={{ marginBottom: 12 }}
        >
          ← Back to Products
        </button>
        <h1>Add New Product</h1>
        <p>Fill in the details below. A barcode will be automatically generated after saving.</p>
      </div>

      <div className="admin-card">
        <AdminProductForm
          onSubmit={handleCreate}
          submitLabel="Create Product & Generate Barcode"
          loading={loading}
        />
      </div>
    </div>
  );
}

export default AdminAddProductPage;
