import React from "react";
import processBar from "../../assets/manufactureAssets/processBAR.png";
import vectorGold from "../../assets/Vector (1).svg";

/* ✅ IMAGES NOW LOCAL — direct imports from src/assets/figmaAssets
   (filenames contain spaces, which is fine inside import strings) */
import imgImage37 from "../../assets/figmaAssets/image 37.png";
import imgImage38 from "../../assets/figmaAssets/image 38.png";
import imgImage39 from "../../assets/figmaAssets/image 39.png";
import imgImage40 from "../../assets/figmaAssets/image 40.png";
import imgImage41 from "../../assets/figmaAssets/image 41.png";

import iconPlant from "../../assets/manufactureAssets/Vector.svg";
import iconLab from "../../assets/manufactureAssets/lab.svg";
import iconSetting from "../../assets/manufactureAssets/setting.svg";
import iconBox from "../../assets/manufactureAssets/Box.svg";
import iconTruck from "../../assets/manufactureAssets/truck.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CANVAS = { w: 1580, h: 1116 };
const DEBUG = false;

const SECTION_PAD = { left: 0, right: 150 };
const WAVE = { left: -70, width: 1820, top: 200 };
const LINE_CLIP = { left: 27, width: 2000 };

const SIZE = {
  cardWidth: 325,
  cardRadius: 20,
  cardImageH: 233,
  badge: 40,
  badgeBorder: 4,
  circle: 80,
  circleBorder: 8,
  circleIcon: 35,
  connectorH: 57,
  connectorW: 3,
  dot: 12,
  cardTextGap: 10,
  cardPadX: 18,
  cardPadY: 20,
  descLineHeight: 1.6,
  desktopTopSpace: 110,
};

/* px → vw @1920 */
const vw = (px) => `${(px / 19.2).toFixed(4)}vw`;

const STEPS = [
  { step: "01", title: "Raw Material Selection", description: "We source finest natural and premium ingredients from trusted suppliers.", image: imgImage37, icon: iconPlant, x: 186, y: 625, align: "bottom", numberSide: "left" },
  { step: "02", title: "Research & Formulation", description: "Our expert team blends science and nature to create safe, effective beauty formulas.", image: imgImage38, icon: iconLab, x: 510, y: 560, align: "top", numberSide: "right" },
  { step: "03", title: "Manufacturing & Process", description: "Using advanced technology, we manufacture every product with precision and hygiene.", image: imgImage40, icon: iconSetting, x: 850, y: 475, align: "bottom", numberSide: "left" },
  { step: "04", title: "Quality Assurance", description: "Every batch undergoes rigorous testing to ensure safety, purity, and quality.", image: imgImage39, icon: iconBox, x: 1150, y: 470, align: "top", numberSide: "right" },
  { step: "05", title: "Packaging & Distribution", description: "Products are carefully packaged, sealed, and delivered with quality standards.", image: imgImage41, icon: iconTruck, x: 1553, y: 215, align: "bottom", numberSide: "left" },
];

const NumberBadge = ({ step }) => (
  <div className={`ps-badge ${step.numberSide === "right" ? "ps-badge--right" : "ps-badge--left"}`}>
    <span>{step.step}</span>
  </div>
);

const ProcessCard = ({ step }) => (
  <article className="ps-card">
    <NumberBadge step={step} />
    <div className="ps-card-img">
      <img src={step.image} alt={step.title} />
    </div>
    <div className="ps-card-body">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </article>
);

const IconCircle = ({ step }) => (
  <div className="ps-circle">
    <img src={step.icon} alt="" />
  </div>
);

const StackColumn = ({ step }) => (
  <div className="ps-stack">
    <IconCircle step={step} />
    <div className="ps-conn ps-conn--sm" aria-hidden="true" />
    <ProcessCard step={step} />
  </div>
);

const ProcessColumn = ({ step }) => (
  <div className="ps-col">
    {step.align === "top" ? (
      <>
        <ProcessCard step={step} />
        <div className="ps-dot" aria-hidden="true" />
        <div className="ps-conn" aria-hidden="true" />
        <IconCircle step={step} />
      </>
    ) : (
      <>
        <IconCircle step={step} />
        <div className="ps-conn" aria-hidden="true" />
        <div className="ps-dot" aria-hidden="true" />
        <ProcessCard step={step} />
      </>
    )}
  </div>
);

const ProcessSection = () => (
  <section id="manufacture-process" className="ps-sec" aria-labelledby="process-heading">
    <style>{`
      /* ============ DESKTOP ≥1024 — 1920 design, all vw ============ */
      .ps-sec{width:100%;background:#FCF9F2;
        padding:${vw(70)} ${vw(SECTION_PAD.right)} ${vw(100)} ${vw(SECTION_PAD.left)};}

      .ps-wrap{max-width:100%;margin:0 auto;display:flex;flex-direction:column;
        align-items:center;gap:2.6042vw;}

      /* heading */
      .ps-head{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        max-width:51.0417vw;
        margin-left: calc(${vw(SECTION_PAD.right)} / 2);
      }
      
      .ps-tag{color:#E38F2E;font-family:${sans};font-size:0.9375vw;font-weight:600;
        letter-spacing:0.12em;text-transform:uppercase;}
      .ps-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};font-size:1.875vw;
        font-weight:700;line-height:1.2;text-transform:capitalize;}
      .ps-squiggle{width:8.9583vw;height:auto;display:block;margin-top:1.5625vw;}
      .ps-intro{margin-top:1.5625vw;color:#666;font-family:${sans};font-size:1.0417vw;
        font-weight:500;line-height:1.6;max-width:51.0417vw;}

      /* desktop timeline */
      .ps-timeline{display:none;position:relative;width:100%;max-width:82.2917vw;
        margin:0 auto;margin-top:5.7292vw;height:58.125vw;}
      .ps-clip{position:absolute;pointer-events:none;overflow:hidden;
        left:1.7089%;width:126.5823%;top:-52.0833vw;height:208.3333vw;}
      .ps-wave{position:absolute;left:-4.85%;width:91%;top:62.5vw;}
      .ps-wave img{width:100%;height:auto;display:block;}
      .ps-step{position:absolute;z-index:10;transform:translateX(-50%);width:20.5696%;}
      .ps-col{display:flex;flex-direction:column;align-items:center;width:100%;}

      /* card */
      .ps-card{position:relative;width:100%;background:#fff;border:1px solid #eee9df;
        border-radius:1.0417vw;cursor:pointer;transition:box-shadow .35s ease;
        box-shadow:0 0.4167vw 1.25vw -0.3125vw rgba(0,0,0,0.08),
                   0 1.0417vw 2.6042vw -0.625vw rgba(0,0,0,0.05);}
                   
      /* ✅ SOFTENED DESKTOP HOVER SHADOW */
      .ps-card:hover{box-shadow:0 0.3125vw 0.7813vw rgba(0,0,0,0.10),
                                0 1.0417vw 2.0833vw rgba(43,46,126,0.18);}
                                
      .ps-badge{position:absolute;z-index:10;top:-1.0417vw;width:2.0833vw;height:2.0833vw;
        border-radius:50%;background:#2E3192;border:0.2083vw solid #FCF9F2;
        display:flex;align-items:center;justify-content:center;}
      .ps-badge--left{left:1.9271vw;}
      .ps-badge--right{right:1.1979vw;}
      .ps-badge span{color:#f2e8d9;font-family:${sans};font-weight:700;font-size:0.8333vw;}
      .ps-card-img{overflow:hidden;height:12.1354vw;
        border-radius:1.0417vw 1.0417vw 0 0;}
      .ps-card-img img{width:100%;height:100%;object-fit:cover;display:block;}
      .ps-card-body{display:flex;flex-direction:column;align-items:center;text-align:center;
        gap:0.5208vw;padding:1.0417vw 0.9375vw;}
      .ps-card-body h3{color:#2E3192;font-family:${serif};font-weight:700;
        font-size:1.25vw;line-height:1.3;}
      .ps-card-body p{color:#121212;font-family:${sans};font-size:0.9375vw;line-height:1.6;}

      .ps-dot{width:0.625vw;height:0.625vw;border-radius:50%;background:#E38F2E;flex-shrink:0;}
      .ps-conn{width:0;border-left:0.1563vw solid #E38F2E;height:2.9688vw;}
      .ps-circle{position:relative;z-index:10;width:4.1667vw;height:4.1667vw;border-radius:50%;
        background:#2E3192;border:0.4167vw solid #f2e8d9;flex-shrink:0;
        display:flex;align-items:center;justify-content:center;}
      .ps-circle img{width:1.8229vw;height:1.8229vw;}

      /* tablet grid + mobile list (hidden by default) */
      .ps-grid{display:none;width:100%;grid-template-columns:repeat(2,1fr);gap:2.0833vw;}
      .ps-grid-item{display:flex;justify-content:center;}
      .ps-grid-item--wide{grid-column:span 2;}
      .ps-grid-inner{width:100%;max-width:384px;}
      .ps-list{display:none;width:100%;flex-direction:column;align-items:center;gap:2.0833vw;}
      .ps-list-inner{width:100%;max-width:300px;}
      .ps-stack{display:flex;flex-direction:column;align-items:center;}
      .ps-conn--sm{height:1.25vw;}

      @media (min-width:1024px){
        .ps-timeline{display:block;}
      }

      /* ============ ≤1023 — shared card/circle px scale ============ */
      @media (max-width:1023px){
        /* ✅ Reset margin on tablet/mobile since their padding is symmetric */
        .ps-head { margin-left: 0; }
        
        .ps-card{border-radius:12px;}
        .ps-card-img{height:auto;aspect-ratio:4/3;border-radius:12px 12px 0 0;}
        .ps-card-body{gap:8px;padding:16px;}
        .ps-card-body h3{font-size:16px;}
        .ps-card-body p{font-size:13px;}
        .ps-badge{top:-10px;width:34px;height:34px;border-width:3px;}
        .ps-badge span{font-size:12px;}
        .ps-badge--left{left:16px;}
        .ps-badge--right{right:12px;}
        .ps-circle{width:64px;height:64px;border-width:5px;}
        .ps-circle img{width:28px;height:28px;}
        .ps-conn{height:24px;border-left-width:2px;}
        .ps-dot{width:10px;height:10px;}
        
        /* ✅ SOFTENED MOBILE/TABLET HOVER SHADOW */
        .ps-card:hover{box-shadow:0 4px 10px rgba(0,0,0,0.10),
                                  0 12px 24px rgba(43,46,126,0.18);}
      }

      /* ============ PHONES ≤639 ============ */
      @media (max-width:639px){
        .ps-sec{padding:8vw 5vw;}
        .ps-wrap{gap:6vw;}
        .ps-head{max-width:none;}
        .ps-tag{font-size:clamp(11px, 3vw, 13px);}
        .ps-title{margin-top:3vw;font-size:clamp(22px, 6vw, 28px);}
        .ps-squiggle{width:clamp(120px, 30vw, 172px);margin-top:3vw;}
        .ps-intro{margin-top:3vw;font-size:clamp(13px, 3.6vw, 15px);max-width:none;}
        .ps-list{display:flex;}
        .ps-circle{width:clamp(56px, 16vw, 64px);height:clamp(56px, 16vw, 64px);}
        .ps-circle img{width:clamp(24px, 7vw, 28px);height:clamp(24px, 7vw, 28px);}
      }

      /* ============ TABLET 640–1023 ============ */
      @media (min-width:640px) and (max-width:1023px){
        .ps-sec{padding:6vw;}
        .ps-wrap{gap:24px;}
        .ps-head{max-width:none;}
        .ps-tag{font-size:13px;}
        .ps-title{margin-top:12px;font-size:28px;}
        .ps-squiggle{width:140px;margin-top:16px;}
        .ps-intro{margin-top:16px;font-size:14px;max-width:none;}
        .ps-grid{display:grid;}
      }
    `}</style>

    <div className="ps-wrap">
      {/* ── Heading ── */}
      <div className="ps-head">
        <p className="ps-tag">Why Our Manufacturing</p>
        <h2 id="process-heading" className="ps-title">Where Quality Meets Precision</h2>
        <img className="ps-squiggle" src={vectorGold} alt="" aria-hidden="true" />
        <p className="ps-intro">
          From premium ingredients to advanced production and rigorous quality
          checks, every step of our manufacturing process ensures safe,
          consistent, and high-quality products.
        </p>
      </div>

      {/* ── Desktop timeline (≥1024) ── */}
      <div className="ps-timeline">
        <div className="ps-clip">
          <div className="ps-wave">
            <img src={processBar} alt="" aria-hidden="true" />
          </div>
        </div>

        {DEBUG &&
          STEPS.map((st) => (
            <div
              key={st.step}
              style={{
                position: "absolute", zIndex: 20, transform: "translate(-50%, -50%)",
                left: `${(st.x / CANVAS.w) * 100}%`,
                top: `${(st.y / CANVAS.h) * 100}%`,
                fontSize: "18px", fontWeight: "bold", color: "red",
              }}
            >
              ✕
            </div>
          ))}

        {STEPS.map((step) => (
          <div
            key={step.step}
            className="ps-step"
            style={{
              left: `${(step.x / CANVAS.w) * 100}%`,
              ...(step.align === "top"
                ? { bottom: vw(CANVAS.h - step.y), marginBottom: vw(-SIZE.circle / 2) }
                : { top: vw(step.y), marginTop: vw(-SIZE.circle / 2) }),
            }}
          >
            <ProcessColumn step={step} />
          </div>
        ))}
      </div>

      {/* ── Tablet (640–1023) — 2-col grid, card 05 spans ── */}
      <div className="ps-grid">
        {STEPS.map((step) => (
          <div
            key={step.step}
            className={`ps-grid-item ${step.step === "05" ? "ps-grid-item--wide" : ""}`}
          >
            <div className="ps-grid-inner">
              <StackColumn step={step} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile (≤639) — single column, 300px cards ── */}
      <div className="ps-list">
        {STEPS.map((step) => (
          <div key={step.step} className="ps-list-inner">
            <StackColumn step={step} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;