import React from "react";
import { Link } from "react-router-dom";
import brandImg from "../../assets/ShinePromo.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);

const ShinePromo = () => (
  <section id="shine-other-brands" className="ob-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .ob-sec{position:relative;width:100%;height:40.8854vw;background:#fff;overflow:hidden;}

      /* ---- panel 170/70.5 1580x644 ---- */
      .ob-panel{
      position:absolute;
      left:8.8542vw;
      top:3.6719vw;
      width:82.2917vw;
      height:33.5417vw;
      background: #176B221A;
      border: #176B22;
      border-radius:0.5208vw;
      overflow:hidden;
      }

      /* ---- left image 859x644, rounded left corners ---- */
      .ob-img{position:absolute;left:0;top:0;width:44.7396vw;height:33.5417vw;
        object-fit:cover;display:block;}

      /* ---- right column x1093 ---- */
      .ob-right{
      position:absolute;
      left:48.0729vw;
      top:8.6719vw;
      width:30vw;
      }
      
      .ob-tag{
      color:#E38F2E;
      font-family:${sans};
      font-size:0.8333vw;
      font-weight:600;
      letter-spacing:0.25em;
      }
      
      .ob-rule{width:2.6042vw;height:0.1563vw;background:#CCA466;margin-top:0.7813vw;border-radius:0.0781vw;}
      .ob-title{
      margin-top:1.5vw;
      color:#176B22;
      font-family:${serif};
      font-size:2.0833vw;
      font-weight:600;
      font-style: bold;
      letter-spacing: 0.039em;
      line-height:normal;
      text-transform:capitalize;
      }
      
      .ob-para{
      margin-top:1.3021vw;
      color:#666666;
      font-family:${sans};
      font-size:0.89vw;
      letter-spacing: 0.025em;
      line-height:1.4583vw;
      }

      /* ---- outline button → routes to Royal Luxury ---- */
      .ob-btn{margin-top:2.0833vw;display:inline-flex;align-items:center;gap:0.5208vw;
        padding:0.7813vw 1.5625vw;border:0.1302vw solid #176B22;border-radius:0.4167vw;
        color:#176B22;font-family:${sans};font-size:0.8333vw;font-weight:600;
        text-decoration:none;transition:none;}
      .ob-btn svg{width:0.9375vw;height:0.625vw;}

      /* ============ MOBILE+TABLET ≤1023 — panel stacks: image → copy → CTA ============ */
      @media (max-width:1023px){
        .ob-sec{height:auto;padding:10vw 5vw;}

        .ob-panel{position:static;left:auto;top:auto;width:auto;height:auto;
          border-radius:2vw;}

        /* image becomes the top banner, keeps 4:3 crop */
        .ob-img{position:static;left:auto;top:auto;width:100%;height:auto;
          aspect-ratio:4/3;object-fit:cover;}

        .ob-right{position:static;left:auto;top:auto;width:auto;padding:6vw 5vw 7vw;}

        .ob-tag{font-size:clamp(12px, 1.4vw, 18px);}
        .ob-rule{width:clamp(36px, 7vw, 50px);height:3px;margin-top:2vw;border-radius:2px;}
        .ob-title{margin-top:3vw;font-size:clamp(20px, 3vw, 34px);}
        .ob-para{margin-top:3vw;font-size:clamp(12px, 1.35vw, 17px);line-height:1.6;}
        .ob-para br{display:none;}

        /* full-width touch row on small screens */
        .ob-btn{margin-top:5vw;display:flex;justify-content:center;width:100%;
          padding:3.5vw 4vw;border-radius:2vw;font-size:clamp(12px, 1.5vw, 17px);}
        .ob-btn svg{width:clamp(14px, 2vw, 18px);height:clamp(9px, 1.4vw, 12px);}
      }

      /* ============ TABLET 640–1023 — same stack, larger fixed type ============ */
      @media (min-width:640px) and (max-width:1023px){
        .ob-sec{padding:8vw 6vw;}
        .ob-img{aspect-ratio:16/9;}
        .ob-right{padding:5vw 6vw 6vw;}
        .ob-tag{font-size:13px;}
        .ob-title{font-size:30px;}
        .ob-para{font-size:14px;}
        .ob-btn{font-size:15px;padding:3vw 4vw;}
      }
    `}</style>

    <div className="ob-panel">
      <img className="ob-img" src={brandImg} alt="Royal Luxury — a pure essence collection" />

      <div className="ob-right">
        <p className="ob-tag">Also From Kamakhya Cosmetics</p>
        <div className="ob-rule" />
        <h2 className="ob-title">Shine</h2>
        <p className="ob-para">
          Premium home care collections crafted with powerful
          <br />
          ingredients for a cleaner, fresher everyday life.
        </p>
        <Link className="ob-btn" to="/brands/shine">
          Explore Shine <Arrow />
        </Link>
      </div>
    </div>
  </section>
);

export default ShinePromo;