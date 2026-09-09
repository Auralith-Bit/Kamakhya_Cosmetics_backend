import React from "react";
import { Link } from "react-router-dom";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const DATA = {
  tag: "Ready to source from Kamakhya?",
  title: ["Start a reliable beauty and home-care", "partnership."],
  body: [
    "Tell us what you need, your target quantity and delivery market. Our trade team will prepare the",
    "appropriate next step.",
  ],
  btnGold: "Request Quote",
  btnOutline: "Explore Collections", 
};

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);

const Cta = () => (
  <section id="shine-cta" className="cb-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .cb-sec{
      position:relative;
      width:100%;
      height:15.625vw;
      background:#0A1230;
      overflow:hidden;
      }

      /* ---- left copy ---- */
      .cb-tag{
      position:absolute;
      left:8.8542vw;
      top:3.2vw;
      color:#CCA466;
      font-family:${sans};
      font-size:0.8333vw;
      font-weight:500;
      letter-spacing:0.08em;
      }
      
      .cb-title{
      position:absolute;
      left:8.8542vw;
      top:4.5313vw;
      width:45vw;
      color:#ffffff;
      font-family:${serif};
      font-size:1.7vw;
      font-weight:500;
      letter-spacing: 0.02em;
      line-height:2.3vw;
      }
      
      .cb-body{
      position:absolute;
      left:8.8542vw;
      top:9.5313vw;
      width:46vw;
      color:#AEB6C8;
      font-family:${sans};
      font-size:0.85vw;
      font-weight: 400;
      letter-spacing: 0.03em;
      line-height:1.4583vw;
      }

      /* ---- gold button 230x50 @ (1260,125) — now a <Link> ---- */
      .cb-gold{
      position:absolute;
      left:65.625vw;
      top:6vw;
      width:11.9792vw;
      height:2.6042vw;
      background:#CCA466;
      border:none;
      border-radius:0.3646vw;
      color:var(--Blue-950, #151642);
      display:flex;
      align-items:center;
      justify-content:center;
      gap:0.5208vw;
      font-family:${sans};
      font-size:0.89vw;
      font-weight:500;
      font-style: normal;
      letter-spacing: 0.05em;
      cursor:pointer;
      transition:background .2s;
      text-decoration:none;
      }
      
      .cb-gold:hover{background:#b8905a;}
      .cb-gold svg{width:0.9375vw;height:0.625vw;}

      /* ---- outline button @ (1537,125) — now a <Link> ---- */
      .cb-line{
      position:absolute;
      left:80.0521vw;
      top:6vw;
      width:12.3438vw;
      height:2.6042vw;
      background:transparent;
      border:0.0781vw solid #ffffff;
      border-radius:0.3646vw;
      color:#ffffff;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family:${sans};
      font-size:0.89vw;
      font-weight:500;
      letter-spacing: 0.03em;
      cursor:pointer;
      transition:background .2s;
      text-decoration:none;
      }

      
      .cb-line:hover{background:rgba(255,255,255,0.08);}

      /* ============ MOBILE+TABLET ≤1023 — stacked copy + row buttons ============ */
      @media (max-width:1023px){
        .cb-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

        .cb-tag{position:static;font-size:clamp(12px, 1.4vw, 18px);}
        .cb-title{position:static;left:auto;top:auto;width:auto;
          font-size:clamp(20px, 2.6vw, 34px);line-height:1.25;margin-top:2vw;}
        .cb-title br{display:none;}
        .cb-body{position:static;left:auto;top:auto;width:auto;
          font-size:clamp(12px, 1.35vw, 17px);line-height:1.6;margin-top:3vw;}
        .cb-body br{display:none;}

        /* full-width touch rows on phones */
        .cb-gold{position:static;left:auto;top:auto;width:100%;height:12vw;
          margin-top:7vw;border-radius:2vw;font-size:clamp(12px, 1.5vw, 17px);}
        .cb-gold svg{width:clamp(14px, 2vw, 18px);height:clamp(9px, 1.4vw, 12px);}
        .cb-line{position:static;left:auto;top:auto;width:100%;height:12vw;
          margin-top:3vw;border-radius:2vw;font-size:clamp(12px, 1.5vw, 17px);}
      }

      /* ============ TABLET 640–1023 — buttons side-by-side, larger type ============ */
      @media (min-width:640px) and (max-width:1023px){
        .cb-sec{grid-template-columns:1fr 1fr;gap:0 3vw;padding:8vw 6vw;}
        .cb-tag,.cb-title,.cb-body{grid-column:1/-1;}
        .cb-tag{font-size:13px;}
        .cb-title{font-size:30px;}
        .cb-body{font-size:14px;}
        .cb-gold{grid-column:1;height:52px;margin-top:6vw;}
        .cb-line{grid-column:2;height:52px;margin-top:6vw;}
      }
    `}</style>

    <p className="cb-tag">{DATA.tag}</p>
    <h2 className="cb-title">{DATA.title[0]}<br />{DATA.title[1]}</h2>
    <p className="cb-body">{DATA.body[0]}<br />{DATA.body[1]}</p>

    {/* ✅ Request Quote → /bulk-quote */}
    <Link to="/bulk-quote" className="cb-gold">{DATA.btnGold} <Arrow /></Link>

    {/* ✅ Explore Collections → /products */}
    <Link to="/products" className="cb-line">{DATA.btnOutline}</Link>
  </section>
);

export default Cta;