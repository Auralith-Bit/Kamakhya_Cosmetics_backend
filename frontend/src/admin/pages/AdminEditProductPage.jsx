import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../api/products";
import AdminProductForm from "../components/AdminProductForm";

function AdminEditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [saving, setSaving]     = useState(false);
  const [error, setError]       = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  async function handleUpdate(formData) {
    setSaving(true);
    try {
      await updateProduct(id, formData);
      alert("✅ Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="admin-state-box">
        <div className="icon">⏳</div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-state-box">
        <div className="icon">❌</div>
        <p>Error: {error}</p>
        <button className="admin-btn admin-btn-outline" style={{ marginTop: 16 }} onClick={() => navigate("/admin/products")}>
          Back to Products
        </button>
      </div>
    );
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
        <h1>Edit Product</h1>
        <p>Update the product details below and save your changes.</p>
      </div>

      <div className="admin-card">
        <AdminProductForm
          initialData={product}
          onSubmit={handleUpdate}
          submitLabel="Save Changes"
          loading={saving}
        />
      </div>
    </div>
  );
}

export default AdminEditProductPage;
