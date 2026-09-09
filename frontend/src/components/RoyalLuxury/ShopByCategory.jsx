import React, { useState } from "react";
import { Link } from "react-router-dom";
import catImg from "../../assets/Product.svg";
import Curve from "../../assets/Curve.svg";          // ✅ gold squiggle (replaces vector1)

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✅ each category can have its own product photo — swap catImg for real bottle shots */
const CATS = [
  { name: "Body Care",  count: "18+ Products", img: catImg },
  { name: "Body Care",   count: "18+ Products",  img: catImg },
  { name: "Body Care", count: "18+ Products", img: catImg },
  { name: "Body Care",        count: "18+ Products", img: catImg },
  { name: "Body Care",  count: "18+ Products",  img: catImg },
];
const SLOTS = ["pc-c1", "pc-c2", "pc-c3", "pc-c4", "pc-c5"];
const DOTS = [0, 1, 2, 3];

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);
const ChevL = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 1.5 2 7l5.5 5.5" />
  </svg>
);
const ChevR = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ProductCategories = () => {
  const [items, setItems] = useState(CATS);
  const [dot, setDot] = useState(1);

  const next = () => { setItems(a => [...a.slice(1), a[0]]); setDot(d => (d + 1) % DOTS.length); };
  const prev = () => { setItems(a => [a[a.length - 1], ...a.slice(0, -1)]); setDot(d => (d + DOTS.length - 1) % DOTS.length); };

  return (
    <section id="shine-categories" className="pc-sec">
      <style>{`
        /* ================= DESKTOP (>1280): ORIGINAL, UNTOUCHED ================= */
        .pc-sec{position:relative;width:100%;height:42.6563vw;background:#FCF9F2;overflow:hidden;}

        .pc-head{position:absolute;left:0;top:0;width:100%;text-align:center;}
        
        .pc-tag{position:absolute;top:3.0104vw;width:100%;color:#E38F2E;
        font-family:${sans};font-size:0.88vw;font-weight:600;letter-spacing:0.18em;}
        
        .pc-title{position:absolute;top:4.6vw;width:100%;color:#2E3192;
        font-family:${serif};font-size:1.7vw;font-weight:700;line-height:1.2;}
        
        .pc-sub{
        position:absolute;
        top:9vw;
        width:100%;
        color:#666666;
        font-family:${sans};
        font-size:0.95vw;
        line-height:1.5;
        }
        
        /* ✅ squiggle moved BELOW the paragraph (was between title and sub) */
        
        .pc-vector{position:absolute;top:7.2vw;left:50%;transform:translateX(-50%);
          width:10vw;height:auto;}

        /* ✅ cards are now <Link> anchors */
        .pc-card{position:absolute;top:14.2708vw;width:15.1042vw;height:20.0521vw;
          background:#fff;border-radius:0.5208vw;overflow:hidden;
          box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);
          animation:pc-in .45s ease;
          display:block;text-decoration:none;cursor:pointer;
          transition:box-shadow .35s ease;
        }
        @keyframes pc-in{from{opacity:0;transform:translateX(1.5vw);}to{opacity:1;transform:none;}}

        /* ✅ dark wide-spreading hover shadow — no card movement */
        .pc-card:hover{
          box-shadow:
            0 0.5208vw 1.0417vw rgba(0,0,0,0.16),
            0 1.5625vw 3.125vw rgba(43,46,126,0.30);
        }

        .pc-c1{left:8.8542vw;}
        .pc-c2{left:25.651vw;}
        .pc-c3{left:42.4479vw;}
        .pc-c4{left:59.2448vw;}
        .pc-c5{left:76.0417vw;}

        .pc-img{position:absolute;top:0;left:0;width:100%;height:15.1042vw;
          object-fit:cover;border-radius:0.5208vw 0.5208vw 0 0;display:block;
          transition:transform .5s ease;}
        .pc-card:hover .pc-img{transform:scale(1.06);}

        .pc-name{position:absolute;left:1.0417vw;top:16.5104vw;color:#2E3192;
          font-family:${serif};font-size:1.0417vw;font-weight:700;}
        .pc-count{position:absolute;left:1.0417vw;top:18.0729vw;color:#666666;
          font-family:${sans};font-size:0.7292vw;}
        .pc-arrow{position:absolute;right:1.0677vw;top:16.4063vw;width:2.2917vw;height:2.2917vw;
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          background:#F5F5FA;color:#2E3192;transition:background .3s ease;}
        .pc-arrow svg{width:0.8854vw;height:0.5208vw;transition:transform .3s ease;}
        .pc-card:hover .pc-arrow{background:#E4E4F0;}
        .pc-card:hover .pc-arrow svg{transform:rotate(-45deg);}

        .pc-nav{position:absolute;top:36.4583vw;width:2.5vw;height:2.5vw;border-radius:50%;
          background:#F5F5FA;border:0.1042vw solid #A1A2CE;color:#2E3192;
          display:flex;align-items:center;justify-content:center;cursor:pointer;
          transition:border-color .3s;}
        .pc-nav:hover{border-color:#2E3192;}
        .pc-nav svg{width:0.4688vw;height:0.7292vw;}
        .pc-nav.prev{left:39.7917vw;}
        .pc-nav.next{left:57.7083vw;}
        .pc-dots{position:absolute;left:46.0156vw;top:37.3438vw;display:flex;align-items:center;gap:0.5729vw;}
        .pc-dot{width:1.1979vw;height:0.625vw;border-radius:0.3125vw;background:#CBCCE4;
          border:0.1042vw solid #7779B8;padding:0;cursor:pointer;transition:all .3s;}
        .pc-dot.active{width:2.6042vw;height:0.7292vw;border-radius:0.3646vw;
          background:#2E3192;border:none;}

        /* ============ ≤1280: design-order header, bigger type, tight controls ============ */
        @media (max-width:1280px){
          .pc-sec{height:auto;display:grid;grid-template-columns:1fr auto 1fr;
            column-gap:3vw;row-gap:5vw;padding:8vw 6vw;}

          .pc-head{position:static;grid-column:1/-1;grid-row:1;
            display:flex;flex-direction:column;align-items:center;text-align:center;}
          .pc-tag{position:static;order:1;font-size:clamp(12px, 1.4vw, 18px);}
          .pc-title{position:static;order:2;font-size:clamp(26px, 3.4vw, 48px);margin-top:1.5vw;}
          .pc-sub{position:static;order:3;font-size:clamp(13px, 1.8vw, 22px);
            line-height:1.6;margin-top:2vw;max-width:92%;}
          .pc-sub br{display:none;}
          /* ✅ squiggle stays last on mobile too */
          .pc-vector{position:static;order:4;transform:none;display:block;
            width:clamp(90px, 17vw, 220px);margin:2vw auto 0;}

          .pc-card{position:relative;top:0;left:0;grid-column:1/-1;grid-row:2;
            justify-self:center;width:min(55vw, 480px);height:auto;}
          .pc-c1{left:0;}
          .pc-c2,.pc-c3,.pc-c4,.pc-c5{display:none;}

          .pc-img{position:static;width:100%;height:auto;aspect-ratio:1/1;
            border-radius:1.2vw 1.2vw 0 0;}
          .pc-name{position:static;font-size:clamp(14px, 1.7vw, 21px);margin:2.5vw 2.5vw 1vw;}
          .pc-count{position:static;font-size:clamp(11px, 1.25vw, 15px);margin:0 2.5vw 3.5vw;}
          .pc-arrow{top:auto;right:2.5vw;bottom:2.5vw;
            width:clamp(40px, 5vw, 54px);height:clamp(40px, 5vw, 54px);}
          .pc-arrow svg{width:clamp(14px, 2vw, 22px);height:auto;}

          /* ✅ mobile hover — same dark spread, no movement */
          .pc-card:hover{
            box-shadow:
              0 6px 14px rgba(0,0,0,0.15),
              0 16px 32px rgba(43,46,126,0.28);
          }

          .pc-nav{position:static;width:clamp(40px, 6vw, 72px);height:clamp(40px, 6vw, 72px);}
          .pc-nav svg{width:clamp(9px, 1.3vw, 16px);height:auto;}
          .pc-nav.prev{grid-column:1;grid-row:3;justify-self:end;}
          .pc-nav.next{grid-column:3;grid-row:3;justify-self:start;}
          .pc-dots{position:static;grid-column:2;grid-row:3;justify-self:center;}
          .pc-dot{width:clamp(9px, 1.2vw, 14px);height:clamp(5px, 0.8vw, 9px);}
          .pc-dot.active{width:clamp(20px, 2.6vw, 30px);height:clamp(6px, 0.9vw, 10px);}
        }
      `}</style>

      <div className="pc-head">
        <p className="pc-tag">SHOP BY CATEGORY</p>
        <h2 className="pc-title">Luxury for Every Beauty Ritual</h2>
        <p className="pc-sub">
            Explore Royal Luxury collections across skincare, haircare, makeup, body care , and premium
           <br/>
           beauty essentials.
        </p>
        {/* ✅ gold squiggle now BELOW the paragraph (per design) */}
        <img className="pc-vector" src={Curve} alt="" aria-hidden="true" />
      </div>

      {/* ✅ each card is a Link → /products */}
      {items.map((c, i) => (
        <Link to="/products" className={`pc-card ${SLOTS[i]}`} key={c.name}>
          {c.img && <img className="pc-img" src={c.img} alt={`Shine ${c.name}`} />}
          <p className="pc-name">{c.name}</p>
          <p className="pc-count">{c.count}</p>
          <span className="pc-arrow"><Arrow /></span>
        </Link>
      ))}

      <button className="pc-nav prev" aria-label="Previous" onClick={prev}><ChevL /></button>
      <div className="pc-dots">
        {DOTS.map(i => (
          <button key={i} className={`pc-dot${dot === i ? " active" : ""}`} aria-label={`Page ${i + 1}`} onClick={() => setDot(i)} />
        ))}
      </div>
      <button className="pc-nav next" aria-label="Next" onClick={next}><ChevR /></button>
    </section>
  );
};

export default ProductCategories;