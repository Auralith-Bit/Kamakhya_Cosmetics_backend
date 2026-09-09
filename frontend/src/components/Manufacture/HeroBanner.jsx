import imgHomeBanner from "../../assets/manufactureAssets/homeBanner.png";
import { ChevronRight, Home } from "lucide-react";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

export default function HeroBanner() {
  return (
    <section id="manufacture-hero" className="mh-hero">
      <style>{`
        /* ============ DESKTOP ≥1024 — absolute positioning ============ */
        .mh-hero{
          position:relative;
          width:100%;
          height:23.4375vw;
          background:#F7F1E8;
          overflow:hidden;
        }
        .mh-bg{position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:center top;}
        .mh-veil{position:absolute;inset:0;
          background:linear-gradient(90deg,
            rgba(247,241,232,1) 0%,
            rgba(247,241,232,0.7) 45%,
            rgba(247,241,232,0) 65%);}
        .mh-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
        .mh-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
          font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
        .mh-crumb a{color:#2E3192;text-decoration:none;font-size:1.4583vw;}
        .mh-crumb a:hover{text-decoration:underline;}
        .mh-ic-home{width:1.6667vw;height:1.6667vw;}
        .mh-ic-chev{width:1.5625vw;height:1.5625vw;color:#252775;}
        .mh-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
          font-size:1.4583vw;font-weight:500;}
        .mh-rule{width:7.0313vw;height:0.1563vw;background:#E38F2E;
          margin-top:0.625vw;border-radius:0.0781vw;}
        .mh-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
          font-size:2.8125vw;font-weight:700;line-height:1.15;}
        .mh-p{margin-top:1.0417vw;color:#70768A;font-family:${sans};
          font-size:1.0417vw;line-height:1.5625vw;max-width:40.625vw;}

        /* ============ PHONES ≤639 — compact hero (Shine pattern) ============ */
        @media (max-width:639px){
          .mh-hero{height:auto;}

          /* copy in flow; 24vw bottom padding = image window below the text */
          .mh-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
            padding:8vw 6vw 24vw;}
          .mh-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
          .mh-crumb a{font-size:clamp(16px, 2vw, 22px);}
          .mh-ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
          .mh-ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
          .mh-tag{margin-top:3vw;font-size:clamp(16px, 2vw, 24px);}
          .mh-rule{width:clamp(80px, 10vw, 135px);height:3px;margin-top:2vw;border-radius:2px;}
          .mh-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
          
          .mh-p{
          margin-top:3vw;
          font-size:clamp(14px, 1.7vw, 20px);
          text-align:justify;
          letter-spacing:0.01em;
          line-height:1.2;
          max-width:80%;
          }

          /* ✅ crop pinned to the FAR-LEFT cream slice — the facility/products
             area (right of the banner) can never enter the visible window */
          .mh-bg{position:absolute;inset:0;width:100%;height:100%;
            object-fit:cover;object-position:0% 50%;z-index:1;}

          /* ✅ right-edge cream fade: guarantees the rectangle area stays cream
             even if a 1–2% sliver of the facility sits at the crop boundary */
          .mh-veil{display:block;
            background:linear-gradient(90deg,
              rgba(247,241,232,0) 0%,
              rgba(247,241,232,0) 55%,
              rgba(247,241,232,1) 90%);}
        }

        /* ============ TABLET 640–1023 — mini-desktop, shorter stage ============ */
        @media (min-width:640px) and (max-width:1023px){
          .mh-hero{
          height:auto;
          aspect-ratio:16/9;
          }

          .mh-copy{
          position:absolute;
          left:5.8vw;
          top:24vw;
          width:52%;
          z-index:2;
          padding:0;
          }
          
          .mh-crumb{font-size:15px;gap:8px;}
          .mh-crumb a{font-size:20px;}
          .mh-ic-home{width:20px;height:20px;}
          .mh-ic-chev{width:18px;height:18px;}
          
          .mh-tag{
          margin-top:15px;
          font-size:18px;
          }
          
          .mh-rule{width:100px;height:3px;margin-top:10px;border-radius:2px;}
          .mh-title{margin-top:10px;font-size:34px;}
          
          .mh-p{
          margin-top:12px;
          font-size:15px;
          letter-spacing:0.01em;
          line-height:1.55;
          max-width:none;
          }

          .mh-bg{
            position:absolute;inset:0;width:100%;height:100%;
            object-fit:cover;object-position:0% 50%;z-index:1;
          }

          .mh-veil{display:none;}
        }
      `}</style>

      <img className="mh-bg" src={imgHomeBanner} alt="Kamakhya Cosmetics manufacturing facility" />
      <div className="mh-veil" aria-hidden="true" />

      <div className="mh-copy">
        <nav className="mh-crumb" aria-label="Breadcrumb">
          <Home className="mh-ic-home" strokeWidth={2.5} />
          <a href="/">Home</a>
          <ChevronRight className="mh-ic-chev" strokeWidth={3} />
          <span>Manufacturing</span>
        </nav>

        <p className="mh-tag">Where Quality Begins</p>
        <div className="mh-rule" aria-hidden="true" />
        <h1 className="mh-title">Our Manufacturing</h1>

        <p className="mh-p">
          Discover our advanced manufacturing process built on quality,
          innovation, and trust every day.
        </p>
      </div>
    </section>
  );
}