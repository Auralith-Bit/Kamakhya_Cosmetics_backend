import React from "react";
import { Link } from "react-router-dom";
import BarcodeScanner from "../components/BarcodeScanner/BarcodeScanner";
import { ArrowLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function BarcodeScannerPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] py-8 px-4 flex flex-col items-center justify-center">
      {/* Header section */}
      <div className="max-w-md w-full mb-6">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2E3192] hover:text-[#CCA466] transition mb-4"
        >
          <ArrowLeft size={16} />
          Back to Catalogue
        </Link>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#2E3192]/10 text-[#2E3192] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles size={13} className="text-[#CCA466]" />
            Smart Product Identification
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-gray-900 font-bold tracking-tight">
            Scan Product Barcode
          </h1>
          <p className="text-sm text-gray-600 mt-1.5 max-w-sm mx-auto">
            Point your mobile camera at any Kamakhya product barcode label to instantly view full specifications.
          </p>
        </div>
      </div>

      {/* Embedded Barcode Scanner */}
      <div className="w-full max-w-md">
        <BarcodeScanner embedded={true} />
      </div>

      {/* Feature Highlights */}
      <div className="max-w-md w-full grid grid-cols-2 gap-3 mt-6">
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#2E3192]/10 flex items-center justify-center text-[#2E3192] shrink-0">
            <Zap size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Instant Redirect</div>
            <div className="text-[11px] text-gray-500">Auto-navigates on scan</div>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#CCA466]/15 flex items-center justify-center text-[#CCA466] shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">100% Authentic</div>
            <div className="text-[11px] text-gray-500">Verified product codes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
