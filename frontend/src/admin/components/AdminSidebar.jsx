import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: "📦", label: "Products", path: "/admin/products" },
  { icon: "➕", label: "Add Product", path: "/admin/products/add" },
];

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/admin/products/add") {
      return location.pathname === "/admin/products/add";
    }
    if (path === "/admin/products") {
      return location.pathname === "/admin/products" || 
             (location.pathname.startsWith("/admin/products/") && location.pathname !== "/admin/products/add");
    }
    return location.pathname === path;
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <h2>Kamakhya</h2>
        <p>Admin CMS</p>
      </div>

      <nav className="admin-sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`admin-sidebar-link ${isActive(item.path) ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
