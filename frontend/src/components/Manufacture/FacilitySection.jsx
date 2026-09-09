import React from "react";
import vectorGold from "../../assets/Vector (1) Gold.svg";
import imgManufacturing from "../../assets/manufactureAssets/aboutManu.png"; 

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✅ inline icons */
const IconFlask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3h5M9.5 3v6l-5.2 8.6A2.4 2.4 0 0 0 6.4 21h11.2a2.4 2.4 0 0 0 2.1-3.4L14.5 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9" />
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5" />
    <path d="M9.5 13.5 8 21l4-2 4 2-1.5-7.5" />
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1b1b1b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 5.5v13l11-6.5Z" />
  </svg>
);
>>>>>>> origin/main

const FEATURES = [
  { Icon: IconFlask,  label: "Advanced\nManufacturing" },
  { Icon: IconShield, label: "Quality\nAssurance" },
  { Icon: IconAward,  label: "International\nCertifications" },
  { Icon: IconLeaf,   label: "Sustainable\nPractices" },
];

const FacilitySection = () => (
  <section id="manufacture-facility" className="mf-sec" aria-labelledby="facility-heading">
    <style>{`
      /* ============ DESKTOP ≥1024 — 1920 design, all vw ============ */
      .mf-sec{width:100%;background:#f5f7fa;
        padding:5.2083vw 2.6042vw 5.2083vw 9.2708vw;}

      .mf-wrap{display:flex;align-items:center;column-gap:8.3333vw;row-gap:3.125vw;}

      .mf-media{position:relative;flex-shrink:0;width:49.4792vw;
        aspect-ratio:890/590;border-radius:1vw;overflow:hidden;}

      .mf-img{
        position:absolute;
        inset:0;
        width:90%;
        height:90%;
        object-fit:cover;
        display:block;
        border-radius:inherit;
      }

      .mf-tint{
        position:absolute;
        inset:0;
        width:90%;
        height:90%;
        background:rgba(0,0,0,0.28);
        border-radius:inherit;
      }

      .mf-play{
        position:absolute;
        left:45%;
        top:45%;
        transform:translate(-50%,-50%);
        width:3.75vw;
        height:3.75vw;
        border-radius:0.625vw;
        border:none;cursor:pointer;
        background:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 1.0417vw 1.3021vw -0.3125vw rgba(0,0,0,0.1), 0 0.4167vw 0.5208vw -0.3125vw rgba(0,0,0,0.1);
      }

      .mf-play svg{width:1.5625vw;height:1.5625vw;}

      .mf-copy{
        flex:1;
        margin-top:-5vw;
        margin-left:-7.8vw;
        max-width:41.6667vw;
        display:flex;
        flex-direction:column;
        gap:2.5vw;
      }

      .mf-tag{
        color:#E38F2E;
        font-family:${sans};
        font-size:0.8854vw;
        font-weight:600;
        letter-spacing:0.15em;
        text-transform:uppercase;
      }

      .mf-squiggle{
        width:4.6875vw;
        height:auto;
        display:block;
        margin-top:0.5vw;
      }

      .mf-title{
        margin-top:0.5vw;
        color:#2E3192;
        font-family:${serif};
        font-size:1.3021vw;
        font-weight:700;
        line-height:1.25;
        letter-spacing:0.095em;
        white-space:nowrap;
      }

      .mf-title .mf-orange{color:#E38F2E;}

      .mf-paras{
        display:flex;
        flex-direction:column;
        gap:1.25vw;
        color:#121212;
        font-family:${sans};
        font-size:0.89vw;
        font-weight:500;
        margin-top:-1vw;
        line-height:1.7;
        max-width:34vw;
        letter-spacing:0.03em;
        text-align:justify;
      }

      .mf-feats{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:0.8333vw;
        width:100%;
        margin-left:-0.89vw;
      }

      .mf-feat{display:flex;flex-direction:column;align-items:center;gap:0.9896vw;min-width:0;}
      .mf-circle{width:3.8542vw;height:3.8542vw;border-radius:50%;
        border:0.0781vw solid #E38F2E;color:#E38F2E;flex-shrink:0;
        display:flex;align-items:center;justify-content:center;}
      .mf-circle svg{width:1.7708vw;height:1.7708vw;}
      .mf-label{white-space:pre-line;text-align:center;color:#121212;
        font-family:${sans};font-weight:500;font-size:0.9375vw;line-height:1.4;}

      /* ============ PHONES ≤639 — stacked, compact ============ */
      @media (max-width:639px){
        .mf-sec{padding:8vw 5vw;}
        .mf-wrap{flex-direction:column;align-items:flex-start;gap:6vw;}

        .mf-media{
          width: 100%;
          height: auto;
          margin-left: 0.9vw;
          aspect-ratio: 4/3;
          border-radius: 2vw;
          overflow: hidden;
          position: relative;
        }

        /* ✅ inherit the 2vw radius on all corners */
        .mf-img, .mf-tint{
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .mf-play{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: clamp(52px, 14vw, 72px);
          height: clamp(52px, 14vw, 72px);
          border-radius: 12px;
        }
        .mf-play svg{width: clamp(22px, 6vw, 30px); height: clamp(22px, 6vw, 30px);}

        .mf-copy{
        margin-top: 3vw;
        max-width: none;
        width: 100%;
        gap: 5vw;
        }

        .mf-tag{
          font-size: clamp(12px, 3.2vw, 15px);
          margin-left: 9vw;
        }

        .mf-squiggle{
          width: clamp(70px, 20vw, 90px);
          margin-left: 9vw;
        }

        .mf-title{
          margin-top: 3vw;
          margin-left: 9vw;
          font-size: clamp(22px, 6vw, 30px);
          text-align: left;
          max-width: 100%;
          white-space: normal;
        }

        .mf-paras{
          gap: 3.5vw;
          font-size: clamp(13px, 3.6vw, 15px);
          text-align: justify;
          margin-left: 9vw;
          width: 90%;
          max-width: 100%;
        }

        .mf-feats{
          grid-template-columns: repeat(2, 1fr);
          gap: 6vw 3vw;
          margin-left: 9vw;
          width: 90%;
        }

        .mf-circle{width: clamp(56px, 16vw, 74px); height: clamp(56px, 16vw, 74px);}
        .mf-circle svg{width: clamp(26px, 8vw, 34px); height: clamp(26px, 8vw, 34px);}
        .mf-label{font-size: clamp(12px, 3.4vw, 14px);}
      }

      /* ============ TABLET 640–1023 — stacked, fixed type ============ */
      @media (min-width:640px) and (max-width:1023px){
        .mf-sec{padding:6vw;}
        .mf-wrap{flex-direction:column;align-items:center;gap:6vw;}

        .mf-media{width:100%;aspect-ratio:16/9;border-radius:2vw;overflow:hidden;position:relative;}

        .mf-img, .mf-tint{
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .mf-play{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 12px;
        }
        .mf-play svg{width: 28px; height: 28px;}

        .mf-copy{
        margin-left: 0vw;
        max-width:none;
        width:100%;
        gap:24px;
        }

        .mf-tag{font-size:14px;}
        .mf-squiggle{width:90px;}
        .mf-title{margin-top:12px;font-size:30px;white-space:normal;}

        .mf-paras{
        gap:14px;
        font-size:14px;
        text-align:justify;
        max-width:100%;
        }

        .mf-feats{grid-template-columns:repeat(4,1fr);gap:16px;}
        .mf-circle{width:64px;height:64px;}
        .mf-circle svg{width:30px;height:30px;}
        .mf-label{font-size:13px;}
      }
    `}</style>

    <div className="mf-wrap">
      {/* Left: Video / Image */}
      <div className="mf-media">
        <img className="mf-img" src={imgManufacturing} alt="Inside Kamakhya Cosmetics manufacturing facility" />
        <div className="mf-tint" aria-hidden="true" />
        <button className="mf-play" aria-label="Play manufacturing facility video">
          <PlayIcon />
        </button>
      </div>

      {/* Right: Content */}
      <div className="mf-copy">
        <div>
          <p className="mf-tag">Our Manufacturing Facility</p>
          <img className="mf-squiggle" src={vectorGold} alt="" aria-hidden="true" />
          <h2 id="facility-heading" className="mf-title">
            The World-Class <span className="mf-orange">Manufacturing</span>, You Can Trust
          </h2>
        </div>

        <div className="mf-paras">
          <p>
            Our modern manufacturing facility combines advanced technology,
            skilled professionals, and strict quality standards to produce
            premium beauty and home care products with precision, safety,
            and consistency.
          </p>
          <p>
            Every stage—from raw material selection and production to
            quality testing and packaging—is carefully monitored to ensure
            products you can trust.
          </p>
        </div>

        {/* Feature icons */}
        <div className="mf-feats">
          {FEATURES.map(({ Icon, label }) => (
            <div className="mf-feat" key={label}>
              <div className="mf-circle"><Icon /></div>
              <p className="mf-label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FacilitySection;