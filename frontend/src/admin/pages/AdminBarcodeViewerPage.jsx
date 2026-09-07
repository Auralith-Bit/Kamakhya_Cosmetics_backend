import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBarcodeById, generateBarcode, generateQrCode } from "../api/products";

function AdminBarcodeViewerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData]                     = useState(null);
  const [loading, setLoading]               = useState(true);
  const [error, setError]                   = useState(null);
  const [generatingBarcode, setGeneratingBarcode] = useState(false);
  const [generatingQr, setGeneratingQr]           = useState(false);
  const [copiedCode, setCopiedCode]         = useState(false);
  const [copiedUrl, setCopiedUrl]           = useState(false);

  useEffect(() => {
    async function loadCodes() {
      try {
        const result = await getBarcodeById(id);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadCodes();
  }, [id]);

  async function handleGenerateBarcode() {
    setGeneratingBarcode(true);
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
      setGeneratingBarcode(false);
    }
  }

  async function handleGenerateQrCode() {
    setGeneratingQr(true);
    try {
      const result = await generateQrCode(id);
      setData((prev) => ({
        ...prev,
        qrCodeUrl: result.qrCodeUrl,
        targetUrl: result.targetUrl || prev?.targetUrl,
      }));
      alert("✅ QR Code generated successfully!");
    } catch (err) {
      alert("❌ Failed to generate QR code: " + err.message);
    } finally {
      setGeneratingQr(false);
    }
  }

  function handlePrint(imageUrl, title, typeLabel) {
    if (!imageUrl) return;

    const printWindow = window.open("", "_blank", "width=750,height=600");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${typeLabel} – ${title}</title>
          <style>
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: #fff;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .label-img {
              max-width: 90%;
              max-height: 90vh;
              height: auto;
              display: block;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            @media print {
              body { margin: 0; }
              .label-img { max-width: 100%; box-shadow: none; }
            }
          </style>
        </head>
        <body>
          <img class="label-img" src="${imageUrl}" alt="${typeLabel}" />
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  async function handleDownload(imageUrl, defaultName) {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = defaultName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Download failed: " + err.message);
    }
  }

  function handleCopy(text, setFlag) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setFlag(true);
    setTimeout(() => setFlag(false), 2000);
  }

  if (loading) {
    return (
      <div className="admin-state-box">
        <div className="icon">⏳</div>
        <p>Loading barcode & QR code...</p>
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

  const safeTitle = (data?.product?.title || "product").replace(/\s+/g, "_").toLowerCase();
  const customerPageUrl = data?.targetUrl || `${window.location.origin}/products/${data?.product?._id || id}`;

  return (
    <div>
      <div className="admin-page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
        <div>
          <button
            className="admin-btn admin-btn-outline admin-btn-sm"
            onClick={() => navigate("/admin/products")}
            style={{ marginBottom: 12 }}
          >
            ← Back to Products
          </button>
          <h1 style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>Product Codes & Scanner Labels</span>
          </h1>
          <p>
            Generate, print, and download 1D Barcodes (inventory & POS) and 2D QR Codes (direct customer product page).
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, alignSelf: "center" }}>
          <a
            href={customerPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-outline admin-btn-sm"
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            🌐 Customer Product Page ↗
          </a>
        </div>
      </div>

      {/* Product Summary Header */}
      <div className="admin-card" style={{ marginBottom: 24, padding: "18px 24px" }}>
        <h2 style={{ fontSize: 22, margin: 0, color: "var(--admin-royal)" }}>
          {data.product.title}
        </h2>
        <p style={{ fontSize: 13, color: "var(--admin-text-muted)", margin: "4px 0 0 0" }}>
          <strong>Brand:</strong> {Array.isArray(data.product.brand) ? data.product.brand.join(", ") : data.product.brand}
          &nbsp;·&nbsp;
          <strong>Category:</strong> {Array.isArray(data.product.category) ? data.product.category.join(", ") : data.product.category}
          &nbsp;·&nbsp;
          <strong>Product ID:</strong> <code style={{ fontSize: 12 }}>{data.product._id}</code>
        </p>
      </div>

      {/* Side-by-side Grid: Barcode & QR Code */}
      <div className="admin-codes-grid">
        
        {/* --- 1. BARCODE CARD --- */}
        <div className="admin-card admin-code-card">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <h3 style={{ fontSize: 18, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                🔲 1D Barcode (Code 128)
              </h3>
              <span className="admin-badge admin-badge-royal">POS / Warehouse</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--admin-text-muted)", margin: "0 0 16px 0" }}>
              Encodes product ID for POS scanners, inventory counting, and in-store lookup.
            </p>

            {data.barcodeUrl ? (
              <>
                <div className="admin-barcode-image-box">
                  <img
                    src={data.barcodeUrl}
                    alt={`Barcode for ${data.product.title}`}
                  />
                </div>

                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--admin-text-muted)", marginBottom: 6 }}>
                  🔗 ENCODED VALUE:
                </div>
                <div className="admin-code-value-box">
                  <span className="admin-code-value-text" title={data.codeValue || data.product._id}>
                    {data.codeValue || data.product._id}
                  </span>
                  <button 
                    className="admin-copy-btn"
                    onClick={() => handleCopy(data.codeValue || data.product._id, setCopiedCode)}
                  >
                    {copiedCode ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </>
            ) : (
              <div className="admin-state-box" style={{ padding: "40px 0", minHeight: 240 }}>
                <div className="icon">⚠️</div>
                <p style={{ marginBottom: 16 }}>No barcode generated yet.</p>
                <button 
                  className="admin-btn admin-btn-primary" 
                  onClick={handleGenerateBarcode}
                  disabled={generatingBarcode}
                >
                  {generatingBarcode ? "Generating..." : "⚡ Generate Barcode Now"}
                </button>
              </div>
            )}
          </div>

          {data.barcodeUrl && (
            <div className="admin-barcode-actions">
              <button 
                className="admin-btn admin-btn-primary" 
                onClick={() => handlePrint(data.barcodeUrl, data.product.title, "Barcode")}
              >
                🖨️ Print Barcode
              </button>
              <button 
                className="admin-btn admin-btn-gold" 
                onClick={() => handleDownload(data.barcodeUrl, `barcode_${safeTitle}.png`)}
              >
                ⬇️ Download PNG
              </button>
              <button 
                className="admin-btn admin-btn-outline" 
                onClick={handleGenerateBarcode}
                disabled={generatingBarcode}
                title="Regenerate barcode label image"
              >
                {generatingBarcode ? "Regenerating..." : "🔄 Regenerate"}
              </button>
            </div>
          )}
        </div>

        {/* --- 2. QR CODE CARD --- */}
        <div className="admin-card admin-code-card">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <h3 style={{ fontSize: 18, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                📱 2D QR Code
              </h3>
              <span className="admin-badge admin-badge-gold">Customer Redirect</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--admin-text-muted)", margin: "0 0 16px 0" }}>
              Scanning with any smartphone camera instantly opens this product's customer page.
            </p>

            {data.qrCodeUrl ? (
              <>
                <div className="admin-barcode-image-box">
                  <img
                    src={data.qrCodeUrl}
                    alt={`QR Code for ${data.product.title}`}
                  />
                </div>

                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--admin-text-muted)", marginBottom: 6 }}>
                  🌐 TARGET CUSTOMER URL:
                </div>
                <div className="admin-code-value-box">
                  <span className="admin-code-value-text" title={customerPageUrl}>
                    {customerPageUrl}
                  </span>
                  <button 
                    className="admin-copy-btn"
                    onClick={() => handleCopy(customerPageUrl, setCopiedUrl)}
                  >
                    {copiedUrl ? "✓ Copied" : "Copy URL"}
                  </button>
                </div>
              </>
            ) : (
              <div className="admin-state-box" style={{ padding: "40px 0", minHeight: 240 }}>
                <div className="icon">📱</div>
                <p style={{ marginBottom: 16 }}>No QR Code generated yet for this product.</p>
                <button 
                  className="admin-btn admin-btn-gold" 
                  onClick={handleGenerateQrCode}
                  disabled={generatingQr}
                >
                  {generatingQr ? "Generating..." : "⚡ Generate QR Code Now"}
                </button>
              </div>
            )}
          </div>

          {data.qrCodeUrl && (
            <div className="admin-barcode-actions">
              <button 
                className="admin-btn admin-btn-gold" 
                onClick={() => handlePrint(data.qrCodeUrl, data.product.title, "QR Code")}
              >
                🖨️ Print QR Code
              </button>
              <button 
                className="admin-btn admin-btn-primary" 
                onClick={() => handleDownload(data.qrCodeUrl, `qrcode_${safeTitle}.png`)}
              >
                ⬇️ Download PNG
              </button>
              <button 
                className="admin-btn admin-btn-outline" 
                onClick={handleGenerateQrCode}
                disabled={generatingQr}
                title="Regenerate QR code label image"
              >
                {generatingQr ? "Regenerating..." : "🔄 Regenerate"}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default AdminBarcodeViewerPage;
