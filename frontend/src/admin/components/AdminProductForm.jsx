import React, { useState } from "react";

const TAG_OPTIONS       = ["ROYAL LUXURY", "SHINE"];
const BRAND_OPTIONS     = ["Royal Luxury", "Shine"];
const TYPE_OPTIONS      = ["Featured", "Best Seller", "Signatured Products"];
const CATEGORY_OPTIONS  = [
  "Body Care", "Hair Care", "Face care", "Lip Care", "Sun Cream",
  "Bathroom Cleaners", "Floor and Surface Cleaners", "Glass Cleaners",
  "Kitchen & Dishwashing", "Laundry",
];

function toggleValue(array, value) {
  if (array.includes(value)) {
    return array.filter((v) => v !== value);
  }
  return [...array, value];
}

function AdminProductForm({ initialData = {}, onSubmit, submitLabel = "Save Product", loading = false }) {
  const [title, setTitle]       = useState(initialData.title       || "");
  const [moq, setMoq]           = useState(initialData.moq         || "");
  const [lead, setLead]         = useState(initialData.lead        || "");
  const [desc, setDesc]         = useState(initialData.desc        || "");
  const [tag, setTag]           = useState(initialData.tag         || []);
  const [brand, setBrand]       = useState(initialData.brand       || []);
  const [category, setCategory] = useState(initialData.category    || []);
  const [type, setType]         = useState(initialData.type        || []);
  const [images, setImages]     = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim())    return alert("Please enter a product title.");
    if (!moq)             return alert("Please enter MOQ.");
    if (!lead.trim())     return alert("Please enter a product lead/tagline.");
    if (!desc.trim())     return alert("Please enter a product description.");
    if (tag.length === 0)      return alert("Please select at least one tag.");
    if (brand.length === 0)    return alert("Please select at least one brand.");
    if (category.length === 0) return alert("Please select at least one category.");
    if (type.length === 0)     return alert("Please select at least one type.");

    const formData = new FormData();
    formData.append("title",    title.trim());
    formData.append("moq",      moq);
    formData.append("lead",     lead.trim());
    formData.append("desc",     desc.trim());
    formData.append("tag",      tag.join(","));
    formData.append("brand",    brand.join(","));
    formData.append("category", category.join(","));
    formData.append("type",     type.join(","));

    images.forEach((file) => {
      formData.append("image", file);
    });

    onSubmit(formData);
  }

  function CheckboxGroup({ label, options, selected, onChange }) {
    return (
      <div className="admin-form-group full-width">
        <label>{label}</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
          {options.map((option) => (
            <label
              key={option}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                fontWeight: 400,
                padding: "6px 12px",
                border: selected.includes(option) ? "2px solid var(--admin-royal)" : "1px solid var(--admin-border)",
                borderRadius: 6,
                background: selected.includes(option) ? "rgba(39,53,147,0.07)" : "var(--admin-white)",
                transition: "all 0.15s",
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                style={{ width: 14, height: 14, accentColor: "var(--admin-royal)" }}
                checked={selected.includes(option)}
                onChange={() => onChange(toggleValue(selected, option))}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group">
          <label htmlFor="title">Product Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Royal Luxury Rose Body Lotion"
          />
        </div>

        <div className="admin-form-group">
          <label htmlFor="moq">Minimum Order Quantity (MOQ) *</label>
          <input
            id="moq"
            type="number"
            min="1"
            value={moq}
            onChange={(e) => setMoq(e.target.value)}
            placeholder="e.g. 100"
          />
        </div>

        <div className="admin-form-group full-width">
          <label htmlFor="lead">Product Lead / Tagline *</label>
          <input
            id="lead"
            type="text"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
            placeholder="A short punchy line about this product"
          />
        </div>

        <div className="admin-form-group full-width">
          <label htmlFor="desc">Product Description *</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Detailed description of the product..."
            style={{ minHeight: 120 }}
          />
        </div>

        <CheckboxGroup
          label="Tag *"
          options={TAG_OPTIONS}
          selected={tag}
          onChange={setTag}
        />

        <CheckboxGroup
          label="Brand *"
          options={BRAND_OPTIONS}
          selected={brand}
          onChange={setBrand}
        />

        <CheckboxGroup
          label="Product Type *"
          options={TYPE_OPTIONS}
          selected={type}
          onChange={setType}
        />

        <CheckboxGroup
          label="Category *"
          options={CATEGORY_OPTIONS}
          selected={category}
          onChange={setCategory}
        />

        <div className="admin-form-group full-width">
          <label htmlFor="images">Product Images (optional)</label>
          <input
            id="images"
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={(e) => setImages(Array.from(e.target.files))}
          />
          {images.length > 0 && (
            <p style={{ fontSize: 12, color: "var(--admin-text-muted)", marginTop: 6 }}>
              {images.length} file(s) selected
            </p>
          )}
          {initialData.imageUrl && initialData.imageUrl.length > 0 && images.length === 0 && (
            <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
              {initialData.imageUrl.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`existing-${i}`}
                  style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 6, border: "1px solid var(--admin-border)" }}
                />
              ))}
              <p style={{ fontSize: 12, color: "var(--admin-text-muted)", alignSelf: "center" }}>
                (Upload new files to replace existing images)
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
          {loading ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

export default AdminProductForm;
