import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBarcodeById, generateBarcode } from "../api/products";

function AdminBarcodeViewerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData]             = useState(null);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    async function loadBarcode() {
      try {
        const result = await getBarcodeById(id);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadBarcode();
  }, [id]);

  async function handleGenerate() {
    setGenerating(true);
    try {
      const result = await generateBarcode(id);
      setData((prev) => ({
        ...prev,
        barcodeUrl: result.barcodeUrl,
        codeValue: result.codeValue,
      }));
      alert("✅ Barcode generated successfully!");
    } catch (err) {
      alert("❌ Failed to generate barcode: " + err.message);
    } finally {
      setGenerating(false);
    }
  }

  function handlePrint() {
    if (!data?.barcodeUrl) return;

    const printWindow = window.open("", "_blank", "width=600,height=400");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Barcode – ${data.product.title}</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              font-family: 'Poppins', sans-serif;
              background: #fff;
            }
            .product-name {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 12px;
              color: #0a1230;
              text-align: center;
            }
            .barcode-img {
              max-width: 320px;
              border: 1px solid #e6ddc9;
              padding: 12px;
              border-radius: 8px;
            }
            .code-text {
              margin-top: 10px;
              font-size: 11px;
              color: #6b7280;
              word-break: break-all;
              text-align: center;
              max-width: 320px;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="product-name">${data.product.title}</div>
          <img class="barcode-img" src="${data.barcodeUrl}" alt="barcode" />
          <div class="code-text">${data.codeValue}</div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  async function handleDownload() {
    if (!data?.barcodeUrl) return;

    try {
      const response = await fetch(data.barcodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      const safeTitle = data.product.title.replace(/\s+/g, "_").toLowerCase();
      a.download = `barcode_${safeTitle}.png`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Download failed: " + err.message);
    }
  }

  if (loading) {
    return (
      <div className="admin-state-box">
        <div className="icon">⏳</div>
        <p>Loading barcode...</p>
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
        <h1>Product Barcode</h1>
        <p>View, print, or download the barcode for this product.</p>
      </div>

      <div className="admin-card admin-barcode-card">
        <h2 style={{ fontSize: 20, marginBottom: 4, marginTop: 0 }}>{data.product.title}</h2>
        <p style={{ fontSize: 13, color: "var(--admin-text-muted)", marginBottom: 20, marginTop: 0 }}>
          {Array.isArray(data.product.brand) ? data.product.brand.join(", ") : data.product.brand}
          &nbsp;·&nbsp;
          {Array.isArray(data.product.category) ? data.product.category.join(", ") : data.product.category}
        </p>

        {data.barcodeUrl ? (
          <>
            <div className="admin-barcode-image-box">
              <img
                src={data.barcodeUrl}
                alt={`Barcode for ${data.product.title}`}
              />
            </div>

            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8, marginTop: 0 }}>
              🔗 Code Value (what the barcode encodes):
            </p>
            <div className="admin-code-value-box">
              {data.codeValue}
            </div>

            <div className="admin-barcode-actions">
              <button className="admin-btn admin-btn-primary" onClick={handlePrint}>
                🖨️ Print Barcode
              </button>
              <button className="admin-btn admin-btn-gold" onClick={handleDownload}>
                ⬇️ Download PNG
              </button>
              <button 
                className="admin-btn admin-btn-outline" 
                onClick={handleGenerate}
                disabled={generating}
                title="Regenerate barcode to apply the new short format without URL text"
              >
                {generating ? "Regenerating..." : "🔄 Regenerate Barcode"}
              </button>
            </div>
          </>
        ) : (
          <div className="admin-state-box" style={{ padding: "40px 0" }}>
            <div className="icon">⚠️</div>
            <p style={{ marginBottom: 16 }}>No barcode found for this product.</p>
            <button 
              className="admin-btn admin-btn-primary" 
              onClick={handleGenerate}
              disabled={generating}
            >
              {generating ? "Generating..." : "⚡ Generate Barcode Now"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminBarcodeViewerPage;
