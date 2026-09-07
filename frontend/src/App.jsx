import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Distributor from "./pages/Distributor";
import ShinePage from "./pages/brands/ShinePage";
import BulkQuote from "./pages/BulkQuote";
import RoyalLuxuryPage from "./pages/brands/RoyalLuxuryPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import Manufacture from "./pages/Manufacturing";
import ProductPage from "./pages/ProductPage";
import OrderReview from "./pages/OrderReview";
import ProductDetails from "./pages/ProductDetailed";
import Wishlist from "./pages/Wishlist";
import BarcodeScannerPage from "./pages/BarcodeScannerPage";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// Admin Panel Imports
import AdminLayout from "./admin/components/AdminLayout";
import AdminProductsPage from "./admin/pages/AdminProductsPage";
import AdminAddProductPage from "./admin/pages/AdminAddProductPage";
import AdminEditProductPage from "./admin/pages/AdminEditProductPage";
import AdminBarcodeViewerPage from "./admin/pages/AdminBarcodeViewerPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => (
  <>
    <Navbar />
    <main className="w-full pt-[130px]">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Customer Panel Routes (includes Navbar/Footer) */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/brands/shine" element={<ShinePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/brands/royal-luxury" element={<RoyalLuxuryPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/distributor" element={<Distributor />} />
              <Route path="/bulk-quote" element={<BulkQuote />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/manufacture" element={<Manufacture />} />
              <Route path="/order-review" element={<OrderReview />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/scan" element={<BarcodeScannerPage />} />
              <Route path="/barcode-scanner" element={<BarcodeScannerPage />} />
            </Route>

            {/* Admin Panel Routes (isolated Layout) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/products" replace />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="products/add" element={<AdminAddProductPage />} />
              <Route path="products/:id/edit" element={<AdminEditProductPage />} />
              <Route path="products/:id/barcode" element={<AdminBarcodeViewerPage />} />
              <Route path="*" element={<Navigate to="/admin/products" replace />} />
            </Route>

            {/* Catch-all for non-admin pages -> Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;

