import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/RoyalLuxury.svg";
import shade from "../../assets/Rectangle 4615.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const HomeIcon = () => (
  <svg className="ic-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);
const Chev = () => (
  <svg className="ic-chev" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const HeroBanner = () => (
  <section id="shine-hero" className="sh-hero">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .sh-hero{
        position:relative;
        width:100%;
        height:23.4375vw;
        background:#F6EDE3;
        overflow:hidden;
      }
      .sh-bg{position:absolute;inset:0;width:100%;height:100%;
        object-fit:cover;object-position:center;}
      .sh-shade{position:absolute;top:-1.6146vw;left:-10.9375vw;
        width:98.9583vw;height:26.5625vw;object-fit:fill;
        z-index:1;pointer-events:none;}
      .sh-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
      .sh-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
        font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
      .sh-crumb a{color:#2E3192;text-decoration:none;font-size:1.4583vw;}
      .sh-crumb a:hover{text-decoration:underline;}
      .ic-home{width:1.6667vw;height:1.6667vw;}
      .ic-chev{width:1.5625vw;height:1.5625vw;color:#252775;}
      .sh-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
        font-size:1.4583vw;font-weight:500;}
      .sh-rule{width:7.0313vw;height:0.1563vw;background:#E38F2E;
      margin-top:0.625vw;border-radius:0.0781vw;}

      .sh-title{
      margin-top:1.0417vw;
      color:#2E3192;
      font-family:${serif};
      font-size:2.8125vw;
      font-weight:700;
      line-height:1.15;
      }

      .sh-p{
      margin-top:1.0417vw;
      color:#70768A;
      font-family:${sans};
      font-size:1.0417vw;
      line-height:1.5625vw;
      max-width:40.625vw;
      }

      /* ============ PHONES ≤639 — compact hero (Contact pattern) ============ */
      @media (max-width:639px){
        .sh-hero{height:auto;}

        .sh-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
          padding:8vw 6vw 24vw;}
        .sh-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
        .sh-crumb a{font-size:clamp(16px, 2vw, 22px);}
        .ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
        .ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
        .sh-tag{margin-top:3vw;font-size:clamp(16px, 2vw, 24px);}
        .sh-rule{width:clamp(80px, 10vw, 135px);height:3px;margin-top:2vw;border-radius:2px;}
        .sh-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
        .sh-p{margin-top:3vw;font-size:clamp(14px, 1.7vw, 20px);
          text-align:justify;letter-spacing:0.01em;line-height:1.2;max-width:80%;}

        .sh-bg{position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:0% 50%;z-index:1;}

        .sh-shade{display:none;}
      }

      /* ============ TABLET 640–1023 — mini-desktop ============ */
      @media (min-width:640px) and (max-width:1023px){
        .sh-hero{
          height:auto;
          aspect-ratio:16/9;
          overflow:hidden;
        }

        .sh-copy{
          position:absolute;
          left:5.8vw;
          top:24vw;
          width:52%;
          z-index:2;
          padding:0;
        }

        .sh-crumb{font-size:15px;gap:8px;}
        .sh-crumb a{font-size:20px;}
        .ic-home{width:20px;height:20px;}
        .ic-chev{width:18px;height:18px;}

        .sh-tag{
          margin-top:15px;
          font-size:18px;
        }

        .sh-rule{width:100px;height:3px;margin-top:10px;border-radius:2px;}
        .sh-title{margin-top:10px;font-size:34px;}

        .sh-p{
          margin-top:12px;
          font-size:15px;
          letter-spacing:0.01em;
          line-height:1.55;
          max-width:none;
        }

        .sh-bg{
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:0% 50%;z-index:1;
        }

        .sh-shade{display:none;}
      }
    `}</style>

    <img className="sh-bg" src={banner} alt="Shine Clean & Fresh — dishwash liquid, toilet cleaner, detergent powder, hand wash, surface cleaner" />
    <img className="sh-shade" src={shade} alt="" aria-hidden="true" />

    <div className="sh-copy">
      <nav className="sh-crumb" aria-label="Breadcrumb">
        <HomeIcon />
        <Link to="/">Home</Link>
        <Chev />
        <Link to="/brands/shine">Brands</Link>
        <Chev />
        <span>Royal Luxury</span>
      </nav>

      <p className="sh-tag">A Kamakhya Cosmetics House</p>
      <div className="sh-rule" />
      <h1 className="sh-title">Royal Luxury</h1>

      <p className="sh-p">
        Explore premium beauty, skincare, haircare, and makeup designed
        with quality, safety, and elegance.
      </p>
    </div>
  </section>
);

export default HeroBanner;