import photo from "../../assets/image 32.svg";
import play from "../../assets/Button.svg";
import overlay from "../../assets/Rectangle 4576.png";
import { Link } from "react-router-dom";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const IcCrown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4.5 4L12 6l4.5 6L21 8l-2 10H5L3 8Z" />
    <path d="M9 21h6" />
  </svg>
);
const IcGem = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);
const IcHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

const Corner = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 0H100C60 10 10 60 0 100Z" fill="#2E3192" />
  </svg>
);

const CARDS = [
  { Icon: IcCrown, title: "Royal Quality",     text: "Every ingredient is carefully selected for uncompromised standard" },
  { Icon: IcGem,   title: "Timeless Elegance", text: "Our formulations are inspired by the heritage, made for modern worlds" },
  { Icon: IcHeart, title: "Beauty with Care",  text: "We care for your skin, your well-being, and the world around us, every single day." },
];

const BrandPhilosophy = () => (
  <section id="shine-philosophy" className="bp-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 ============ */
      .bp-sec{position:relative;width:100%;height:46.875vw;background:#fff;overflow:hidden;}

      /* ✅ stage owns the position + size; photo/overlay/play live inside it */
      .bp-stage{
        position:absolute;
        top:5.6646vw;
        left:60.875vw;
        width:31.6042vw;
        height:35.25vw;
      }

      .bp-photo{
        position:absolute;inset:0;width:100%;height:100%;
        object-fit:fill;object-position:center;display:block;
      }

      .bp-overlay{
        position:absolute;inset:0;width:100%;height:100%;
        object-fit:fill;pointer-events:none;
      }

      .bp-play{
        position:absolute;
        left:12.7325vw;   /* = 73.6075 - 60.875 (same spot as before, now stage-relative) */
        top:15.6354vw;    /* = 21.3 - 5.6646 */
        width:5.2083vw;
        height:5.2083vw;
        cursor:pointer;
      }

      .bp-copy{position:absolute;left:8.8542vw;top:6.9271vw;width:45.8333vw;}

      .bp-tag{
        color:#E38F2E;
        font-family:${sans};
        font-size:0.8333vw;
        margin-top:-1.25vw;
        font-weight:600;
        letter-spacing:0.18em;
        text-transform:uppercase;
      }

      .bp-rule{width:2.6042vw;height:0.1563vw;background:#E38F2E;
        margin-top:0.68vw;border-radius:0.0781vw;}

      .bp-title{
        color:#2E3192;
        font-family:${serif};
        font-size:1.5625vw;
        font-weight:700;
        margin-top:0.5vw;
        line-height:1.2;
      }

      .bp-accent{
        color:#E38F2E;
      }

      .bp-p{
        color:#333333;
        font-family:${sans};
        font-weight:400;
        letter-spacing:0;
        font-size:0.9375vw;
        margin-top:1.25vw;
        line-height:1.4063vw;
        width:44.5vw;
      }

      .bp-line{
        display:block;
        text-align:justify;
        text-align-last:justify;
        text-justify:inter-word;
      }
      .bp-line:last-child{
        text-align:left;
        text-align-last:left;
      }

      /* ---- cards ---- */
      .bp-cards{
        position:absolute;
        left:8.8542vw;
        top:17.8958vw;
        display:flex;
        gap:2.0833vw;
      }

      .bp-card{
        position:relative;
        width:12.5vw;
        height:14.65vw;
        background:#FBFBFD;
        border:0.0521vw solid #ECECF2;
        border-radius:0.625vw;
        box-shadow:0 0.625vw 1.5625vw rgba(43,46,126,0.07);
        display:flex;flex-direction:column;align-items:center;text-align:center;
        padding:2.1vw 1.35vw 1.4vw;
        overflow:hidden;
        transition:box-shadow .3s ease, border-color .3s ease;
      }

      .bp-card:hover{
        border-color:#D8DBE6;
        box-shadow:0 1.0417vw 2.0833vw rgba(43,46,126,0.16);
      }

      .bp-corner{position:absolute;width:30%;height:22%;display:block;pointer-events:none;}
      .bp-corner.tl{top:0;left:0;}
      .bp-corner.br{bottom:0;right:0;transform:rotate(180deg);}
      .bp-card > :not(.bp-corner){position:relative;}

      /* ✅ TRUE CIRCLE FIX: equal width/height + aspect-ratio + flex-shrink:0 
         (prevents flexbox from squishing it into an oval) */
      .bp-cico{
        width:3.8vw;
        height:3.8vw;
        aspect-ratio: 1 / 1;
        flex-shrink: 0;
        border-radius:50%;
        border:0.1042vw solid #C9A063;
        color:#E38F2E;
        background:#fff;
        display:grid;
        place-items:center;
      }
      .bp-cico svg{width:1.9vw;height:1.9vw;}

      .bp-ctitle{
        color:#333333;font-family:${serif};font-size:1.02vw;font-weight:700;
        margin-top:0.45vw;line-height:1.2;
      }
      .bp-crule{width:2.8vw;height:0.14vw;background:#C9A063;
        margin-top:0.4vw;border-radius:0.0781vw;}
      .bp-ctxt{
        color:#666666;font-family:${sans};font-size:0.74vw;line-height:1.3vw;
        margin-top:0.85vw;
      }

      .bp-btn{
        position:absolute;
        left:8.8542vw;
        top:36.8vw;
        width:17.8125vw;
        height:2.8646vw;
        border-radius:0.3646vw;
        background:#2E3192;
        border:0.1563vw solid #2E3192;
        color:#fff;
        font-family:${sans};
        font-size:0.8854vw;
        letter-spacing:0.05em;
        cursor:pointer;
        transition:background .2s;
        display:flex;align-items:center;
        justify-content:center;
        gap:0.5208vw;
        text-decoration:none;
      }

      .bp-btn svg{width:0.4688vw;height:0.7292vw;flex-shrink:0;}

      .bp-btn2{
      left:28.125vw;
      width:15.5vw;
      background:#FCFAF7;
      border:0.1563vw solid #CCA466;
      color:#E38F2E;
      font-weight:500;
      text-transform:uppercase;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:0.5208vw;
      }
            
      .bp-btn2 svg{width:1.0417vw;height:1.0417vw;flex-shrink:0;}

      /* ============ MOBILE+TABLET ≤1023 ============ */
      @media (max-width:1023px){
        .bp-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

        .bp-copy{position:static;left:auto;top:auto;width:auto;grid-column:1;grid-row:1;}
        .bp-tag{font-size:clamp(12px, 1.4vw, 18px);margin-top:0;}
        .bp-rule{width:clamp(36px, 7vw, 50px);height:3px;border-radius:2px;}
        .bp-title{font-size:clamp(20px, 3vw, 34px);margin-top:2vw;}
        .bp-p{font-size:clamp(12px, 1.35vw, 17px);line-height:1.6;
          margin-top:3vw;width:auto;text-align:left;}
        .bp-line{display:inline;text-align:left;text-align-last:auto;}

        .bp-cards{position:static;left:auto;top:auto;flex-direction:column;
          align-items:center;gap:4vw;grid-column:1;grid-row:2;margin-top:6vw;}
        .bp-card{width:70%;max-width:380px;height:auto;padding:5vw 3.5vw 4.5vw;border-radius:2.5vw;}
        .bp-card:hover{box-shadow:0 12px 24px rgba(43,46,126,0.14);}
        
        /* ✅ TRUE CIRCLE FIX for Mobile */
        .bp-cico{
          width:clamp(56px, 13vw, 74px);
          height:clamp(56px, 13vw, 74px);
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
        }
        .bp-cico svg{width:clamp(20px, 5vw, 27px);height:clamp(20px, 5vw, 27px);}
        .bp-ctitle{font-size:clamp(15px, 2vw, 20px);margin-top:1.2vw;}
        .bp-crule{width:clamp(36px, 6vw, 50px);height:3px;margin-top:1vw;}
        .bp-ctxt{font-size:clamp(11px, 1.4vw, 14px);line-height:1.6;margin-top:2vw;}

        /* ✅ stage = single grid item; photo sets the height,
           overlay stretches over it exactly at ANY width */
        .bp-stage{
          position:relative;
          top:auto;left:auto;width:auto;height:auto;
          grid-column:1;grid-row:3;
          margin-top:6vw;
          border-radius:2vw;
          overflow:hidden;
        }

        .bp-photo{position:relative;inset:auto;width:100%;height:auto;object-fit:cover;}
        .bp-overlay{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;}

        .bp-play{
          position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
          width:clamp(48px, 12vw, 90px);height:auto;
        }

        .bp-btn{position:static;left:auto;top:auto;width:100%;height:auto;
          padding:3.5vw 4vw;border-radius:2vw;font-size:clamp(12px, 1.5vw, 17px);
          grid-column:1;grid-row:4;margin-top:6vw;}
        .bp-btn svg{width:clamp(6px, 0.9vw, 10px);height:clamp(10px, 1.4vw, 15px);}
        .bp-btn2{left:auto;width:100%;grid-row:5;margin-top:3vw;}
        .bp-btn2 svg{width:clamp(16px, 2.2vw, 22px);height:clamp(16px, 2.2vw, 22px);}
      }

      /* ============ TABLET 640–1023 ============ */
      @media (min-width:640px) and (max-width:1023px){
        .bp-sec{padding:8vw 6vw;}
        .bp-tag{font-size:13px;}
        .bp-title{font-size:30px;}
        .bp-p{font-size:14px;}
        .bp-cards{flex-direction:row;align-items:stretch;gap:3.5vw;}
        .bp-card{width:auto;flex:1;max-width:none;padding:2.6vw 1.8vw 2.2vw;}
        
        /* ✅ TRUE CIRCLE FIX for Tablet */
        .bp-cico{
          width:64px;
          height:64px;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
        }
        .bp-ctitle{font-size:16px;margin-top:8px;}
        .bp-crule{margin-top:7px;}
        .bp-ctxt{font-size:12px;margin-top:14px;}
        .bp-stage{border-radius:1.5vw;}
        .bp-btn{font-size:15px;}
      }
    `}</style>

    {/* ✅ one responsive stage → photo + overlay + play always move/scale together */}
    <div className="bp-stage">
      <img className="bp-photo" src={photo} alt="Royal Luxury premium cosmetics and skincare collection" />
      <img className="bp-overlay" src={overlay} alt="" aria-hidden="true" />
      <img className="bp-play" src={play} alt="Watch the Royal Luxury story" />
    </div>

    <div className="bp-copy">
      <p className="bp-tag">Our Brand Philosophy</p>
      <div className="bp-rule" />

      <h2 className="bp-title">
        <span className="bp-accent">Royal</span> in Essence,{" "}
        <span className="bp-accent">Luxury</span> in Experience
      </h2>

      <p className="bp-p">
        <span className="bp-line">
          Royal Luxury believes beauty is more than skincare—it is an experience of elegance,
        </span>
        <span className="bp-line">
          confidence, and timeless luxury. Crafted with premium ingredients and inspired by heritage,
        </span>
        <span className="bp-line">
          every product transforms daily self-care into a refined ritual.
        </span>
      </p>
    </div>

    <div className="bp-cards">
      {CARDS.map(({ Icon, title, text }) => (
        <div className="bp-card" key={title}>
          <Corner className="bp-corner tl" />
          <Corner className="bp-corner br" />
          <span className="bp-cico"><Icon /></span>
          <h3 className="bp-ctitle">{title}</h3>
          <div className="bp-crule" />
          <p className="bp-ctxt">{text}</p>
        </div>
      ))}
    </div>

    {/* ✅ EXPLORE OUR COLLECTIONS → /products?brand=Royal Luxury */}
    <Link to="/products?brand=Royal Luxury" className="bp-btn">
      EXPLORE OUR COLLECTIONS
      <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m1.5 1.5 6 5.5-6 5.5" />
      </svg>
    </Link>

    {/* ✅ DOWNLOAD CATALOG → /products */}
    <Link to="/products" className="bp-btn bp-btn2">
      Download Catalog
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </Link>
  </section>
);

export default BrandPhilosophy;