import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { 
  Camera, 
  FlipHorizontal, 
  Zap, 
  ZapOff, 
  Upload, 
  Search, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Sparkles,
  Loader2
} from "lucide-react";
import { lookupBarcode } from "../../api/products";

// Pleasant audio beep synthesized via Web Audio API
function playSuccessBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.12); // A6 note

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);

    // Vibration on mobile if supported
    if (navigator.vibrate) {
      navigator.vibrate([80, 40, 80]);
    }
  } catch (e) {
    // AudioContext may be blocked before interaction, safe to ignore
  }
}

export default function BarcodeScanner({ onClose, embedded = false }) {
  const navigate = useNavigate();
  const scannerRef = useRef(null);
  const fileInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState("camera"); // "camera" | "file" | "manual"
  const [cameras, setCameras] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasTorch, setHasTorch] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" }); // "idle" | "resolving" | "found" | "error"
  const [foundProduct, setFoundProduct] = useState(null);
  const [manualCode, setManualCode] = useState("");
  const [scannerError, setScannerError] = useState("");

  const isHandlingScanRef = useRef(false);

  // Initialize camera list
  useEffect(() => {
    let isMounted = true;

    async function initCameras() {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (isMounted && devices && devices.length > 0) {
          setCameras(devices);
          // Prefer rear/environment camera on mobile
          const backCam = devices.find(d => 
            d.label.toLowerCase().includes("back") || 
            d.label.toLowerCase().includes("rear") || 
            d.label.toLowerCase().includes("environment")
          );
          setSelectedCameraId(backCam ? backCam.id : devices[0].id);
        }
      } catch (err) {
        if (isMounted) {
          setScannerError("Camera access required to scan live barcodes. You can also upload a photo or type the code.");
        }
      }
    }

    initCameras();

    return () => {
      isMounted = false;
      stopScanner();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Start / restart scanner when camera or tab changes
  useEffect(() => {
    if (activeTab === "camera" && selectedCameraId) {
      startScanner(selectedCameraId);
    } else {
      stopScanner();
    }

    return () => {
      stopScanner();
    };
  }, [activeTab, selectedCameraId]); // eslint-disable-line react-hooks/exhaustive-deps

  async function startScanner(cameraId) {
    if (isScanning) {
      await stopScanner();
    }

    try {
      setScannerError("");
      const scanner = new Html5Qrcode("reader-barcode-viewport", {
        formatsToSupport: [
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.CODE_39,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.UPC_A,
          Html5QrcodeSupportedFormats.UPC_E,
          Html5QrcodeSupportedFormats.QR_CODE,
        ],
        verbose: false,
      });

      scannerRef.current = scanner;

      const config = {
        fps: 15,
        qrbox: { width: 280, height: 160 },
        aspectRatio: 1.0,
      };

      await scanner.start(
        cameraId,
        config,
        (decodedText) => handleBarcodeDetected(decodedText),
        () => {
          // Frame callback - safe to ignore
        }
      );

      setIsScanning(true);

      // Check for torch capability
      try {
        const track = scanner.getRunningTrackCapabilities();
        if (track && track.torch) {
          setHasTorch(true);
        }
      } catch (e) {
        setHasTorch(false);
      }
    } catch (err) {
      setIsScanning(false);
      setScannerError(err.message || "Failed to start camera scanner");
    }
  }

  async function stopScanner() {
    if (scannerRef.current && isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (e) {
        // Safe to ignore on cleanup
      }
      setIsScanning(false);
      setTorchOn(false);
    }
  }

  async function toggleTorch() {
    if (!scannerRef.current || !hasTorch) return;
    try {
      const nextTorch = !torchOn;
      await scannerRef.current.applyVideoConstraints({
        advanced: [{ torch: nextTorch }],
      });
      setTorchOn(nextTorch);
    } catch (e) {
      console.warn("Torch not supported on this track", e);
    }
  }

  function handleFlipCamera() {
    if (cameras.length < 2) return;
    const currentIndex = cameras.findIndex(c => c.id === selectedCameraId);
    const nextIndex = (currentIndex + 1) % cameras.length;
    setSelectedCameraId(cameras[nextIndex].id);
  }

  async function handleBarcodeDetected(code) {
    if (isHandlingScanRef.current || !code) return;
    isHandlingScanRef.current = true;

    playSuccessBeep();
    setStatus({ state: "resolving", message: `Identified: ${code}. Finding product...` });

    try {
      const product = await lookupBarcode(code);
      setFoundProduct(product);
      setStatus({ state: "found", message: `Found "${product.title}"!` });

      // Stop camera once identified
      await stopScanner();

      // Automatically navigate to the product details page
      setTimeout(() => {
        if (onClose) onClose();
        navigate(`/products/${product._id || product.id}`);
      }, 1000);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || `No product matched code: ${code}`,
      });
      // Allow re-scanning after delay
      setTimeout(() => {
        isHandlingScanRef.current = false;
        setStatus({ state: "idle", message: "" });
      }, 3000);
    }
  }

  async function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus({ state: "resolving", message: "Scanning barcode from image..." });
    setScannerError("");

    try {
      const html5QrCode = new Html5Qrcode("reader-file-temp");
      const decodedText = await html5QrCode.scanFile(file, true);
      html5QrCode.clear();
      handleBarcodeDetected(decodedText);
    } catch (err) {
      setStatus({
        state: "error",
        message: "No readable barcode found in this image. Please try another photo or ensure the barcode is clear.",
      });
      setTimeout(() => setStatus({ state: "idle", message: "" }), 4000);
    }
  }

  function handleManualSubmit(e) {
    e.preventDefault();
    if (!manualCode.trim()) return;
    handleBarcodeDetected(manualCode.trim());
  }

  return (
    <div className={`barcode-scanner-wrapper ${embedded ? 'embedded' : 'modal-mode'}`}>
      <style>{`
        .barcode-scanner-wrapper {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1a1a2e;
        }
        .scanner-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
        }
        .scanner-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          background: linear-gradient(135deg, #181d4a 0%, #2E3192 100%);
          color: #ffffff;
        }
        .scanner-header h3 {
          margin: 0;
          font-size: 17px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .scanner-close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: #fff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .scanner-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .scanner-tabs {
          display: flex;
          background: #f4f5fa;
          padding: 4px;
          border-bottom: 1px solid #e5e7eb;
        }
        .scanner-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          font-size: 13px;
          font-weight: 500;
          border: none;
          background: transparent;
          color: #6b7280;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .scanner-tab-btn.active {
          background: #ffffff;
          color: #2E3192;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        }
        .scanner-viewport-container {
          position: relative;
          background: #0a0c1a;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        #reader-barcode-viewport {
          width: 100% !important;
          border: none !important;
        }
        #reader-barcode-viewport video {
          object-fit: cover !important;
          border-radius: 0;
          width: 100% !important;
        }
        .scan-overlay-guide {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .scan-target-box {
          width: 260px;
          height: 150px;
          border: 2px solid rgba(204, 164, 102, 0.8);
          border-radius: 12px;
          position: relative;
          box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.45);
        }
        .scan-target-box::before, .scan-target-box::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #CCA466;
          border-style: solid;
        }
        .scan-target-box::before {
          top: -2px;
          left: -2px;
          border-width: 4px 0 0 4px;
          border-top-left-radius: 8px;
        }
        .scan-target-box::after {
          bottom: -2px;
          right: -2px;
          border-width: 0 4px 4px 0;
          border-bottom-right-radius: 8px;
        }
        .scan-laser-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #CCA466, #ffdd99, #CCA466, transparent);
          box-shadow: 0 0 12px #CCA466;
          animation: scanLaser 2s infinite ease-in-out alternate;
        }
        @keyframes scanLaser {
          0% { transform: translateY(10px); opacity: 0.7; }
          100% { transform: translateY(140px); opacity: 1; }
        }
        .scanner-controls-bar {
          position: absolute;
          bottom: 14px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          z-index: 20;
        }
        .scanner-ctrl-btn {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #1a1a2e;
          padding: 8px 14px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .scanner-ctrl-btn:hover {
          background: #ffffff;
          transform: translateY(-1px);
        }
        .scanner-ctrl-btn.active {
          background: #CCA466;
          color: #ffffff;
        }
        .scanner-status-banner {
          padding: 14px 20px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .status-resolving {
          background: #eff6ff;
          color: #1e40af;
          border-top: 1px solid #bfdbfe;
        }
        .status-found {
          background: #ecfdf5;
          color: #065f46;
          border-top: 1px solid #a7f3d0;
        }
        .status-error {
          background: #fef2f2;
          color: #991b1b;
          border-top: 1px solid #fecaca;
        }
        .product-found-mini-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          animation: slideUp 0.25s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .product-found-img {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid #e2e8f0;
          background: #ffffff;
        }
        .file-upload-zone {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fafafa;
          min-height: 280px;
          border: 2px dashed #cbd5e1;
          margin: 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .file-upload-zone:hover {
          border-color: #2E3192;
          background: #f8f9ff;
        }
        .manual-input-box {
          padding: 24px 20px;
        }
        .manual-input-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }
        .manual-input-field {
          flex: 1;
          padding: 12px 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          font-family: monospace;
          transition: border-color 0.2s;
        }
        .manual-input-field:focus {
          border-color: #2E3192;
          box-shadow: 0 0 0 3px rgba(46, 49, 146, 0.12);
        }
        .manual-submit-btn {
          background: #2E3192;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 0 20px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s;
        }
        .manual-submit-btn:hover {
          background: #1e2270;
        }
      `}</style>

      {/* Hidden container for file scanning */}
      <div id="reader-file-temp" style={{ display: "none" }}></div>

      <div className="scanner-card">
        {/* Header */}
        <div className="scanner-header">
          <h3>
            <Sparkles size={18} color="#CCA466" />
            Barcode Scanner
          </h3>
          {onClose && (
            <button className="scanner-close-btn" onClick={onClose} aria-label="Close scanner">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="scanner-tabs">
          <button 
            className={`scanner-tab-btn ${activeTab === "camera" ? "active" : ""}`}
            onClick={() => setActiveTab("camera")}
          >
            <Camera size={15} />
            Live Camera
          </button>
          <button 
            className={`scanner-tab-btn ${activeTab === "file" ? "active" : ""}`}
            onClick={() => setActiveTab("file")}
          >
            <Upload size={15} />
            Upload Photo
          </button>
          <button 
            className={`scanner-tab-btn ${activeTab === "manual" ? "active" : ""}`}
            onClick={() => setActiveTab("manual")}
          >
            <Search size={15} />
            Enter Code
          </button>
        </div>

        {/* TAB 1: Live Camera Viewport */}
        {activeTab === "camera" && (
          <div className="scanner-viewport-container">
            <div id="reader-barcode-viewport"></div>

            {/* Viewfinder Target & Laser Line */}
            {isScanning && (
              <div className="scan-overlay-guide">
                <div className="scan-target-box">
                  <div className="scan-laser-line"></div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 12, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
                  Align barcode inside the frame to scan
                </p>
              </div>
            )}

            {/* In-camera controls: Flip camera & Torch */}
            {isScanning && (
              <div className="scanner-controls-bar">
                {cameras.length > 1 && (
                  <button className="scanner-ctrl-btn" onClick={handleFlipCamera}>
                    <FlipHorizontal size={14} />
                    Flip Camera
                  </button>
                )}
                {hasTorch && (
                  <button 
                    className={`scanner-ctrl-btn ${torchOn ? "active" : ""}`} 
                    onClick={toggleTorch}
                  >
                    {torchOn ? <Zap size={14} /> : <ZapOff size={14} />}
                    {torchOn ? "Flash On" : "Flash Off"}
                  </button>
                )}
              </div>
            )}

            {scannerError && (
              <div style={{ padding: 24, textAlign: "center", color: "#ffffff" }}>
                <AlertCircle size={32} color="#f87171" style={{ margin: "0 auto 10px" }} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>{scannerError}</p>
                <button 
                  className="scanner-ctrl-btn" 
                  style={{ margin: "0 auto" }}
                  onClick={() => selectedCameraId && startScanner(selectedCameraId)}
                >
                  Retry Camera
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Upload Photo / Select from Gallery */}
        {activeTab === "file" && (
          <div className="file-upload-zone" onClick={() => fileInputRef.current?.click()}>
            <input 
              type="file" 
              ref={fileInputRef} 
              accept="image/*" 
              capture="environment"
              style={{ display: "none" }} 
              onChange={handleFileUpload} 
            />
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#eff2fe", display: "grid", placeItems: "center", color: "#2E3192", marginBottom: 12 }}>
              <Upload size={24} />
            </div>
            <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 600 }}>Choose Barcode Image</h4>
            <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
              Tap to take a photo or select an image from gallery
            </p>
          </div>
        )}

        {/* TAB 3: Enter Code Manually */}
        {activeTab === "manual" && (
          <div className="manual-input-box">
            <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
              Product Barcode / ID Number
            </label>
            <form onSubmit={handleManualSubmit} className="manual-input-row">
              <input
                type="text"
                placeholder="e.g. 67c30953a79d8465134ef012"
                className="manual-input-field"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                autoFocus
              />
              <button type="submit" className="manual-submit-btn">
                Search
              </button>
            </form>
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 8 }}>
              Type the numbers or alphanumeric code displayed underneath the barcode.
            </p>
          </div>
        )}

        {/* Status notification banner */}
        {status.state !== "idle" && (
          <div className={`scanner-status-banner status-${status.state}`}>
            {status.state === "resolving" && <Loader2 size={16} className="animate-spin" />}
            {status.state === "found" && <CheckCircle size={16} />}
            {status.state === "error" && <AlertCircle size={16} />}
            <span>{status.message}</span>
          </div>
        )}

        {/* Product found thumbnail & quick redirect preview */}
        {foundProduct && (
          <div className="product-found-mini-card">
            <img 
              src={foundProduct.imageUrl?.[0] || foundProduct.image || "/placeholder.png"} 
              alt={foundProduct.title} 
              className="product-found-img" 
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {foundProduct.title}
              </div>
              <div style={{ fontSize: 12, color: "#64748b" }}>
                {Array.isArray(foundProduct.brand) ? foundProduct.brand.join(", ") : foundProduct.brand} · Redirecting to product page...
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
