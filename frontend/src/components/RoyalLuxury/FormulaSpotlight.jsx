import React from "react";
import vector1 from "../../assets/Vector (1).svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✏️ All copy editable here */
const CARDS = [
  { title: "24K Gold Infusion", body: ["Enhances skin radiance for a luminous,", "youth-looking complexion."] },
  { title: "Collagen Complex", body: ["Supports skin firmness and improves natural", "elasticity over time."] },
  { title: "Hyaluronic Moisture Lock", body: ["Provides deep hydration for soft, smooth, and ", "plump-looking skin."] },
  { title: "Vitamin C Brightening", body: ["Brightens dull skin and promotes a naturally", "even complexion."] },
  { title: "Botanical Recovery Blend", body: ["Nourishes and calms skin with carefully", "selected botanical extracts."] },
  { title: "Peptide Firming Technology", body: ["Helps improve skin firmness for a smoother,", "youthful appearance."] },
];

const FormulaSpotlight = () => (
  <section id="shine-formula" className="fs-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .fs-sec{position:relative;width:100%;height:40.3125vw;background:#fff;overflow:hidden;}

      /* ---- header ---- */
      .fs-tag{
      position:absolute;
      top:3.8vw;
      width:100%;
      text-align:center;
      color:#E38F2E;     
      font-family:${sans};
      font-size:0.85vw;
      font-weight:600;
      letter-spacing:0.18em;
      text-transform:uppercase;
      }
      
      .fs-title{
      position:absolute;
      top:5vw;
      width:100%;
      text-align:center;
      color:#2E3192;
      font-family:${serif};
      font-size:1.65vw;
      font-weight:600;
      line-height:normal;
      text-transform:capitalize;
      }
      
      .fs-vector{
      position:absolute;
      top:7.2917vw;
      left:50%;
      transform:translateX(-50%);
      width:9.4583vw;
      height:auto;
      }
      
      .fs-sub{
        position:absolute;
        top:8.9063vw;
        width:100%;
        text-align:center;
        color:#666666;
        font-family:${sans};
        font-size:0.93vw;
        font-weight: 500;
        letter-spacing: 0.045em;
        line-height:1.5625vw;
       }

      /* ---- 3x2 card grid (500x180, gap 40) ---- */
      .fs-grid{position:absolute;left:8.8542vw;top:14.375vw;width:82.2917vw;
        display:grid;grid-template-columns:repeat(3, 26.0417vw);gap:2.0833vw;}

      /* ✅ BASE SHADOW aligned with the other sections */
      .fs-card{
      background:#FCF9F2;
      border:0.0521vw solid #D7DAE4;
      border-radius:0.5208vw;
      height:9.375vw;
      padding:2.0833vw 1.5625vw;
      box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                 0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
      cursor:pointer;
      /* ✅ shadow-only transition — no transform */
      transition:border-color .3s ease, box-shadow .3s ease;
      }

      /* ✅ REPLACED HOVER — same softened, wide-spreading shadow as the
         other sections (was 0.16 / 0.30); NO movement */
      .fs-card:hover{
      border-color:#CCA466;
      box-shadow:
        0 0.625vw 1.25vw rgba(0,0,0,0.12),
        0 1.5625vw 3.125vw rgba(43,46,126,0.20);
      }
      
      .fs-card h3{
      color:#2E3192;
      font-family:${serif};
      font-size:1.0417vw;
      font-style: normal;
      font-weight:600;
      letter-spacing: 0.025em;
      line-height: normal;
      }
      .fs-rule{width:2.6042vw;height:0.1563vw;background:#CCA466;margin-top:0.625vw;border-radius:0.0781vw;}
      .fs-card p{margin-top:0.8333vw;color:#666666;font-family:${sans};
        font-size:0.8333vw;line-height:1.4063vw;}

      /* ============ MOBILE+TABLET ≤1023 — ONE CARD PER ROW, no columns ============ */
      @media (max-width:1023px){
        .fs-sec{height:auto;padding:10vw 5vw;}

        .fs-tag{position:static;font-size:clamp(12px, 1.4vw, 18px);}
        .fs-title{position:static;font-size:clamp(20px, 2.3vw, 32px);margin-top:2vw;}
        .fs-vector{position:static;transform:none;display:block;
          width:clamp(70px, 12vw, 120px);margin:2.5vw auto 0;}
        .fs-sub{position:static;font-size:clamp(12px, 1.35vw, 17px);
          line-height:clamp(18px, 2vw, 26px);margin-top:2.5vw;}
        .fs-sub br{display:none;}

        /* single column = each template on its own full-width row */
        .fs-grid{position:static;left:auto;top:auto;width:auto;
          grid-template-columns:1fr;gap:4vw;margin-top:8vw;}

        /* ✅ px-based base shadow for small screens */
        .fs-card{height:auto;padding:5vw;border-radius:2vw;
          box-shadow:0 2px 6px rgba(0,0,0,0.08),
                     0 6px 16px rgba(43,46,126,0.08);}

        /* ✅ REPLACED hover — same softened spread, still no movement */
        .fs-card:hover{
          box-shadow:
            0 4px 10px rgba(0,0,0,0.10),
            0 12px 24px rgba(43,46,126,0.18);
        }

        .fs-card h3{font-size:clamp(14px, 1.7vw, 21px);}
        .fs-rule{width:clamp(36px, 7vw, 50px);height:3px;margin-top:2vw;border-radius:2px;}
        .fs-card p{margin-top:2.5vw;font-size:clamp(11px, 1.25vw, 15px);
          line-height:clamp(16px, 1.8vw, 22px);}
        .fs-card p br{display:none;}
      }

      /* ============ TABLET 640–1023 — same rows, larger type only ============ */
      @media (min-width:640px) and (max-width:1023px){
        .fs-sec{padding:8vw 6vw;}
        .fs-tag{font-size:13px;}
        .fs-title{font-size:28px;}
        .fs-sub{font-size:14px;line-height:1.6;}
        .fs-card{padding:5vw 4vw;}
        .fs-card h3{font-size:16px;}
        .fs-rule{width:44px;}
        .fs-card p{font-size:13px;line-height:1.5;}
      }
    `}</style>

    <p className="fs-tag">Formula Spotlight</p>
    <h2 className="fs-title">Advanced Beauty Science, Perfected</h2>
    <img className="fs-vector" src={vector1} alt="" aria-hidden="true" />
    <p className="fs-sub">
      Every Royal Luxury formula blends premium ingredients, advanced skincare science, 
      <br />
      and luxurious Care.
    </p>

    <div className="fs-grid">
      {CARDS.map((c) => (
        <div className="fs-card" key={c.title}>
          <h3>{c.title}</h3>
          <div className="fs-rule" />
          <p>{c.body[0]}<br />{c.body[1]}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FormulaSpotlight;