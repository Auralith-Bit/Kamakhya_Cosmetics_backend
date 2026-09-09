import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vector1 from "../../../assets/Vector (1).svg";
import group56 from "../../../assets/Group 56.svg";
import intersect from "../../../assets/Intersect.svg";
import { getProducts } from "../../../api/products";
import { useWishlist } from "../../../context/WishlistContext";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const DEFAULT_PRODUCTS = [
  { id: "detergent-powder", title: "Detergent Powder", image: group56, tint: "#F5F3F6", moq: "500 pcs", lead: "7–10 days", desc: "Nail Polish is the best things in the world and were for protection. i love…" },
  { id: "dish-washer", title: "Dish Washer", image: intersect, tint: "#E7DED3", moq: "500 pcs", lead: "7–10 days", desc: "Nail Polish is the best things in the world and were for protection. i love…" },
  { id: "detergent-powder-2", title: "Detergent Powder", image: group56, tint: "#F5F3F6", moq: "500 pcs", lead: "7–10 days", desc: "Nail Polish is the best things in the world and were for protection. i love…" },
  { id: "dish-washer-2", title: "Dish Washer", image: intersect, tint: "#E7DED3", moq: "500 pcs", lead: "7–10 days", desc: "Nail Polish is the best things in the world and were for protection. i love…" },
];

/* ---------- icons (matched to Figma originals) ---------- */

const Spark = () => (
  <svg width="13" height="13" viewBox="0 0 12.75 12.75" fill="none" aria-hidden="true">
    <path
      d="M6.375 0C6.375 3.521 3.521 6.375 0 6.375C3.521 6.375 6.375 9.229 6.375 12.75C6.375 9.229 9.229 6.375 12.75 6.375C9.229 6.375 6.375 3.521 6.375 0Z"
      stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

/* ✅ gold when wishlisted (matches home FeaturedCollection) */
const Heart = ({ filled }) => (
  <svg
    viewBox="-1 -1 21 18.5"
    fill={filled ? "#E38F2E" : "none"}
    aria-hidden="true"
    style={{ transition: "fill .25s ease" }}
  >
    <path
      d="M3.355 0.768C1.334 1.535 0 3.455 0 5.597C0 7.76 1.425 9.358 2.85 10.769L8.083 15.782C8.446 16.185 8.966 16.413 9.512 16.41C10.057 16.407 10.575 16.171 10.933 15.764L16.15 10.769C17.575 9.358 19 7.75 19 5.597C19.01 3.45 17.677 1.521 15.651 0.752C13.626 -0.016 11.331 0.537 9.889 2.14C9.788 2.247 9.647 2.91 9.5 2.91C9.353 2.91 9.212 2.247 9.112 2.14C7.665 0.547 5.376 0.001 3.355 0.768Z"
      stroke={filled ? "#E38F2E" : "#3436A4"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "stroke .25s ease" }}
    />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
    <path d="m7.5 4.27 9 5.15" />
  </svg>
);

const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />
  </svg>
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

/* ---------- card ---------- */
function BestSellerCard({ p }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const productId = p._id || p.id;
  const liked = productId ? isInWishlist(productId) : false;

  const targetLink = productId && !String(productId).startsWith("detergent-") && !String(productId).startsWith("dish-")
    ? `/products/${productId}`
    : `/products?brand=Shine`;

  return (
    <div className="bs-card">
      {/* media */}
      <div className="bs-media" style={{ backgroundColor: p.tint || "#F5F3F6" }}>
        <span className="bs-badge"><Spark /> BEST SELLER</span>
        <button
          type="button"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (productId) toggleWishlist(productId); }}
          className="bs-wish"
        >
          <Heart filled={liked} />
        </button>

        {/* image: rest 1.065 → hover 1 (zoom out) */}
        <Link to={targetLink} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img className="bs-img" src={p.image} alt={p.title} loading="lazy" />
        </Link>

        {/* golden arc */}
        <svg className="bs-arc" viewBox="0 -8 371 94" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 -8C96 67 275 67 371 -8L371 86L0 86Z" fill="#ffffff" />
          <path d="M0 0C96 75 275 75 371 0" stroke="#CCA466" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      {/* body */}
      <div className="bs-body">
        <Link to={targetLink} style={{ textDecoration: 'none' }}>
          <h3 className="bs-name">{p.title}</h3>
        </Link>
        <p className="bs-desc">{p.desc || p.description || DEFAULT_PRODUCTS[0].desc}</p>

        <div className="bs-meta">
          <div className="bs-meta-item">
            <span className="bs-meta-ico"><BoxIcon /></span>
            <span>
              <span className="bs-meta-label">MOQ</span>
              <span className="bs-meta-value">{p.moq || "500 pcs"}</span>
            </span>
          </div>
          <span className="bs-div" />
          <div className="bs-meta-item">
            <span className="bs-meta-ico"><CalIcon /></span>
            <span>
              <span className="bs-meta-label">Lead Time</span>
              <span className="bs-meta-value">{p.lead || p.leadTime || "7–10 days"}</span>
            </span>
          </div>
        </div>

        <Link to={targetLink} className="bs-cta" style={{ textDecoration: 'none' }}>
          View Products
          <span className="bs-cta-arrow"><Arrow /></span>
        </Link>
      </div>
    </div>
  );
}

/* ---------- section ---------- */
export default function BestSellers() {
  const [productsList, setProductsList] = useState(DEFAULT_PRODUCTS);

  useEffect(() => {
    let isMounted = true;
    async function loadShineBestSellers() {
      try {
        const res = await getProducts({ brand: 'Shine', limit: 4 });
        if (isMounted && res?.products?.length > 0) {
          const tints = ["#F5F3F6", "#E7DED3", "#F5F3F6", "#E7DED3"];
          const mapped = res.products.map((p, idx) => ({
            _id: p._id || p.id,
            id: p._id || p.id,
            title: p.title,
            desc: p.desc,
            image: p.image || DEFAULT_PRODUCTS[idx % DEFAULT_PRODUCTS.length].image,
            tint: tints[idx % tints.length],
            moq: p.moq,
            lead: p.lead,
          }));
          setProductsList(mapped);
        }
      } catch (err) {
        // fallback to default
      }
    }
    loadShineBestSellers();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="shine-best-sellers" className="bs-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
        .bs-sec{position:relative;width:100%;padding:4.0104vw 0 5.2083vw;background:#FCF9F2;overflow:hidden;}
        .bs-head{text-align:center;max-width:78vw;margin:0 auto 3.2292vw;}
        .bs-eyebrow{color:#E38F2E;font-family:${sans};font-size:0.83vw;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;}
        .bs-title{margin-top:0.5vw;color:#2E3192;font-family:${serif};font-size:1.75vw;font-weight:700;line-height:normal;text-transform:capitalize;}
        .bs-squiggle{display:block;margin-left:34.5vw;margin-right:34.5vw;width:9.25vw;height:auto;}
        .bs-sub{color:#666666;font-family:${sans};font-size:0.97vw;font-weight:500;letter-spacing:0.03em;line-height:1.4583vw;}

        .bs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.6667vw;width:82.2917vw;margin:0 auto;}

        .bs-card{display:flex;flex-direction:column;border-radius:0.5208vw;background:#ffffff;overflow:hidden;
          text-decoration:none;box-shadow:0 12px 30px rgba(43,46,126,0.08);
          transition:box-shadow .35s ease;}
        .bs-card:hover{box-shadow:0 22px 44px rgba(43,46,126,0.16);}

        .bs-media{position:relative;display:block;height:17.7083vw;overflow:hidden;background:#ffffff;
          border-radius:0.5208vw 0.5208vw 0 0;}

        .bs-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
          transform:scale(1.065);transform-origin:top center;
          transition:transform .8s cubic-bezier(.22,.61,.36,1);}
        .bs-card:hover .bs-img{transform:scale(1);}

        .bs-arc{position:absolute;left:0;bottom:-1.4583vw;width:100%;height:4.9vw;
          display:block;pointer-events:none;
          transition:transform .8s cubic-bezier(.22,.61,.36,1);}
        .bs-card:hover .bs-arc{transform:translateY(-0.2083vw);}

        .bs-badge{position:absolute;top:0.9375vw;left:0.9375vw;z-index:2;display:inline-flex;align-items:center;gap:0.4167vw;
          background:#ffffff;border-radius:50vw;padding:0.4688vw 0.8333vw;color:#CCA466;
          font-family:${sans};font-size:0.75vw;font-weight:500;letter-spacing:0.12em;line-height:1;
          white-space:nowrap;overflow:hidden;}
        .bs-badge svg{flex:0 0 auto;}

        .bs-wish{position:absolute;top:0.8333vw;right:0.8333vw;z-index:2;width:2.3438vw;height:2.3438vw;border-radius:50%;
          background:#FAF8F4;border:0.1042vw solid rgba(200,155,74,0.5);display:grid;place-items:center;
          cursor:pointer;}
        .bs-wish svg{width:1.0938vw;height:0.9635vw;display:block;}

        .bs-body{flex:1;display:flex;flex-direction:column;padding:1.1979vw 1.0417vw 1.25vw;text-align:center;}
        .bs-name{color:#333333;font-family:${serif};font-size:1.1458vw;font-weight:500;margin-top:-0.5vw;margin-bottom:0.625vw;}
        .bs-desc{color:#666666;font-family:${sans};font-size:0.89vw;font-weight:400;letter-spacing:0.02em;line-height:1.25vw;
          margin-bottom:0.9375vw;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

        .bs-meta{display:flex;align-items:center;justify-content:space-between;gap:0.625vw;
          border-top:1px solid #E8D6BA;padding:0.7292vw 0.1042vw;}
        .bs-meta-item{display:flex;align-items:center;gap:0.5208vw;text-align:left;}
        .bs-meta-item > span > span{display:block;}
        .bs-meta-ico{width:2.3438vw;height:2.3438vw;border-radius:50%;background:#F7F1E8;display:grid;place-items:center;flex-shrink:0;}
        .bs-meta-ico svg{width:1.0417vw;height:1.0417vw;}
        .bs-meta-label{color:#CCA466;font-family:${sans};font-size:0.79vw;font-weight:500;}
        .bs-meta-value{color:#333333;font-family:${sans};font-size:0.79vw;font-weight:500;}
        .bs-div{width:1px;height:2.0313vw;background:#E4E4E4;}

        .bs-cta{margin-top:0.9375vw;display:flex;align-items:center;justify-content:space-between;
          border:0.1042vw solid #2E3192;border-radius:50vw;padding:0.4688vw 0.5208vw 0.4688vw 5.8vw;
          color:#2E3192;font-family:${sans};font-size:0.9vw;font-weight:500;letter-spacing:0.02em;background:#ffffff;
          transition:background .3s ease, color .3s ease, letter-spacing .35s ease;}
        .bs-cta:hover{background:#F5F5FA;font-size:0.93vw;}

        .bs-cta-arrow{width:1.6667vw;height:1.6667vw;border-radius:50%;background:#C7C9EA;color:#2E3192;
          display:grid;place-items:center;flex-shrink:0;transition:transform .35s ease;}
        .bs-cta:hover .bs-cta-arrow{transform:translateX(0.1563vw);}
        .bs-cta-arrow svg{width:0.8333vw;height:0.8333vw;}

        /* ============ TABLET 640–1023 — 2-up grid, scaled type ============ */
        @media (max-width:1023px){
          .bs-grid{grid-template-columns:repeat(2,1fr);width:90vw;}
          .bs-eyebrow{font-size:1.2vw;} .bs-title{font-size:2.6vw;}
          /* font AND line-height scale together — no collapsed lines */
          .bs-sub{font-size:1.3vw;line-height:2vw;}
          .bs-sub br{display:none;}
          .bs-squiggle{width:12vw;margin:0 auto;}
          .bs-media{height:26vw;}
          .bs-arc{height:7.2vw;bottom:-2.1563vw;}
          .bs-name{font-size:1.7vw;} .bs-desc{font-size:1.2vw;line-height:1.8vw;}
          .bs-meta-label{font-size:1vw;} .bs-meta-value{font-size:1.1vw;} .bs-cta{font-size:1.2vw;}
          .bs-badge{font-size:1vw;width:10.5vw;height:2.6vw;} .bs-wish{width:3.4vw;height:3.4vw;}
          .bs-wish svg{width:1.5833vw;height:1.3945vw;}
          .bs-meta-ico{width:2.9vw;height:2.9vw;} .bs-cta-arrow{width:2.4vw;height:2.4vw;}
          .bs-div{height:2.9vw;}
        }

        /* ============ MOBILE <640 — one card per row ============ */
        @media (max-width:639px){
          .bs-grid{grid-template-columns:1fr;}
          .bs-media{height:70vw;}
          .bs-arc{height:19.4vw;bottom:-5.855vw;}
          .bs-title{font-size:5vw;}
          .bs-sub{font-size:3vw;line-height:4.6vw;}
          .bs-name{font-size:4vw;} .bs-desc{font-size:3vw;line-height:4.4vw;}
          .bs-eyebrow{font-size:2.4vw;} .bs-meta-label{font-size:2.4vw;} .bs-meta-value{font-size:2.6vw;}
          .bs-cta{font-size:3vw;} .bs-badge{font-size:2.2vw;width:23vw;height:5.6vw;} .bs-wish{width:8vw;height:8vw;}
          .bs-wish svg{width:3.72vw;height:3.277vw;}
          .bs-meta-ico{width:7vw;height:7vw;} .bs-cta-arrow{width:6vw;height:6vw;}
          .bs-div{height:7vw;} .bs-squiggle{width:24vw;}
        }
      `}</style>

      <header className="bs-head">
        <span className="bs-eyebrow">Best Sellers</span>
        <h2 className="bs-title">Our Cleaning Best Sellers</h2>
        <img className="bs-squiggle" src={vector1} alt="" aria-hidden="true" />
        <p className="bs-sub">
          Discover our best-selling home care essentials trusted by thousands for a cleaner, fresher home—
          <br/>
          crafted with powerful, safe, and effective cleaning formulas.
        </p>
      </header>

      <div className="bs-grid">
        {productsList.map((p, i) => (
          <BestSellerCard key={p._id || p.id || `${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}