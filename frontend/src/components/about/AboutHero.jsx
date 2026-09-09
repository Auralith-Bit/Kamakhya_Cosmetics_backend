import React from "react";
import { Link } from "react-router-dom";
import aboutHeroBg from '../../assets/abouthero.png';

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const HomeIcon = () => (
  <svg className="ah-ic-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);
const Chev = () => (
  <svg className="ah-ic-chev" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const AboutHero = () => (
  <section id="about-hero" className="ah-hero">
    <style>{`
      /* ============ DESKTOP ≥1024 — matches Manufacturing banner ============ */
      .ah-hero{
        position:relative;
        width:100%;
        height:23.4375vw;
        background:#F6E7DC;
        overflow:hidden;
      }
      .ah-bg{position:absolute;inset:0;width:100%;height:100%;
        object-fit:cover;object-position:center top;}
      .ah-veil{position:absolute;inset:0;pointer-events:none;
        background:linear-gradient(90deg,
          rgba(246,231,220,1) 0%,
          rgba(246,231,220,0.7) 45%,
          rgba(246,231,220,0) 65%);}
      .ah-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
      .ah-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
        font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
      .ah-crumb a{color:#2E3192;text-decoration:none;font-size:1.4583vw;}
      .ah-crumb a:hover{text-decoration:underline;}
      .ah-ic-home{width:1.6667vw;height:1.6667vw;}
      .ah-ic-chev{width:1.5625vw;height:1.5625vw;color:#252775;}
      .ah-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
        font-size:1.4583vw;font-weight:500;}
      .ah-rule{width:7.0313vw;height:0.1563vw;background:#E38F2E;
        margin-top:0.625vw;border-radius:0.0781vw;}
      .ah-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
        font-size:2.8125vw;font-weight:700;line-height:1.15;}
      .ah-p{margin-top:1.0417vw;color:#70768A;font-family:${sans};
        font-size:1.0417vw;line-height:1.5625vw;max-width:40.625vw;}

      /* ============ PHONES ≤639 — compact hero ============ */
      @media (max-width:639px){
        .ah-hero{height:auto;}

        .ah-bg{object-position:22% 30%;}

        .ah-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
          padding:8vw 6vw 20vw;}
        .ah-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;
          white-space:normal;flex-wrap:wrap;}
        .ah-crumb a{font-size:clamp(16px, 2vw, 22px);}
        .ah-ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
        .ah-ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
        .ah-tag{margin-top:3vw;font-size:clamp(16px, 2vw, 24px);}
        .ah-rule{width:clamp(80px, 10vw, 135px);height:3px;margin-top:2vw;border-radius:2px;}
        .ah-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
        .ah-p{margin-top:3vw;font-size:clamp(14px, 1.7vw, 20px);
          letter-spacing:0.01em;line-height:1.3;max-width:82%;}

        .ah-veil{background:linear-gradient(90deg,
          rgba(246,231,220,1) 0%,
          rgba(246,231,220,0.85) 55%,
          rgba(246,231,220,0) 70%);}
      }

      /* ============ TABLET 640–1023 — mini-desktop ============ */
      @media (min-width:640px) and (max-width:1023px){
        .ah-hero{
          height:auto;
          aspect-ratio:16/9;
        }

        .ah-copy{
          position:absolute;
          left:5.8vw;
          top:24vw;
          width:52%;
          z-index:2;
          padding:0;
        }

        .ah-crumb{font-size:15px;gap:8px;}
        .ah-crumb a{font-size:20px;}
        .ah-ic-home{width:20px;height:20px;}
        .ah-ic-chev{width:18px;height:18px;}

        .ah-tag{
          margin-top:15px;
          font-size:18px;
        }

        .ah-rule{width:100px;height:3px;margin-top:10px;border-radius:2px;}
        .ah-title{margin-top:10px;font-size:34px;}

        .ah-p{
          margin-top:12px;
          font-size:15px;
          letter-spacing:0.01em;
          line-height:1.55;
          max-width:none;
        }

        .ah-bg{
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:0% 50%;z-index:1;
        }
      }
    `}</style>

    <img className="ah-bg" src={aboutHeroBg} alt="" aria-hidden="true" />
    <div className="ah-veil" aria-hidden="true" />

    <div className="ah-copy">
      <nav className="ah-crumb" aria-label="Breadcrumb">
        <HomeIcon />
        <Link to="/">Home</Link>
        <Chev />
        <span>About</span>
      </nav>

      <p className="ah-tag">We Believe in Beauty</p>
      <div className="ah-rule" />
      <h1 className="ah-title">Our Story</h1>

      <p className="ah-p">
        Discover Kamakhya Cosmetics — where beauty, care, and trust come together
        to make everyday self-care special.
      </p>
    </div>
  </section>
);

export default AboutHero;