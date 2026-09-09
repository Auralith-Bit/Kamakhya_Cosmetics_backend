import React from "react";
import vector1 from "../../../assets/Vector (1).svg";
import centerImg from "../../../assets/image 34.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ---- gold outline icons (#CCA466) ---- */
const Leaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-8.5 0-14 5-15 13 3.5 2.5 7.5 3 10.5 1C19.5 15.5 20 9 20 4Z" />
    <path d="M5 17c3-5.5 7-8.5 11-10" />
  </svg>
);
const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9" />
  </svg>
);
const Rabbit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6C8 3.5 5.5 2.6 4.8 4c-.6 1.3.4 3.2 2.2 4.2" />
    <path d="M12 6c1-2.5 3.5-3.4 4.2-2 .6 1.3-.4 3.2-2.2 4.2" />
    <circle cx="10.5" cy="13.5" r="5" />
    <path d="M15.5 13.5h2.5l1.5 1.5-1.5 1.5h-3" />
  </svg>
);
const Flask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3h5M9.5 3v6l-5.2 8.6A2.4 2.4 0 0 0 6.4 21h11.2a2.4 2.4 0 0 0 2.1-3.4L14.5 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);
const Spark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 .9 2.6L15.5 6.5l-2.6.9L12 10l-.9-2.6L8.5 6.5l2.6-.9Z" />
    <path d="M6 14c2 0 2 1.3 4 1.3S12 14 14 14s2 1.3 4 1.3" />
    <path d="M6 17.5c2 0 2 1.3 4 1.3s2-1.3 4-1.3 2 1.3 4 1.3" />
  </svg>
);
const HomeLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10.5 12 4l8 6.5" />
    <path d="M6 9.5V19h12V9.5" />
    <path d="M12 16c.4-2.4 1.8-3.8 4-4-.2 2.4-1.6 3.8-4 4Z" />
  </svg>
);

const LEFT = [
  { cls: "wc-l1", Icon: Leaf,   title: "Plant-Based",         lines: ["Plant-based ingredients", "for powerful cleaning."] },
  { cls: "wc-l2", Icon: Shield, title: "Kills 99.9% Germs",   lines: ["Removes germs and", "bacteria effectively."] },
  { cls: "wc-l3", Icon: Rabbit, title: "Cruelty Free",        lines: ["Gentle on animals.", "Tough on dirt."] },
];
const RIGHT = [
  { cls: "wc-r1", Icon: Flask,    title: "Advanced Formulas",     lines: ["Science-backed deep", "cleaning and freshness."] },
  { cls: "wc-r2", Icon: Spark,    title: "Lasting Freshness",     lines: ["Clean with refreshing", "and long-lasting scent."] },
  { cls: "wc-r3", Icon: HomeLeaf, title: "Safe for Everyday use", lines: ["Safe for your family,", "pets, and surroundings."] },
];

const WhyChooseShine = () => (
  <section id="shine-why" className="wc-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .wc-sec{position:relative;width:100%;height:56.7188vw;background:#FCF9F2;overflow:hidden;}

      /* ---- header ---- */
      .wc-tag{
      position:absolute;
      top:3.9vw;
      width:100%;
      text-align:center;
      color:#E38F2E;
      font-family:${sans};
      font-size:0.85vw;
      font-weight:700;
      font-style:normal;
      letter-spacing:0.18em;
      text-transform:uppercase;
      }

      .wc-title{
        position:absolute;
        top:5.2vw;
        width:100%;
        color:#2E3192;
        text-align:center;
        font-family:'Playfair Display', Georgia, serif;  
        font-size:1.6vw; 
        font-weight:700;
        line-height:normal;
        letter-spacing: 0;
        text-transform:capitalize;
      }

      .wc-vector{position:absolute;top:7.4917vw;left:50%;transform:translateX(-50%);width:9.25vw;height:auto;}
      .wc-sub{
        position:absolute;top:9.2vw;width:100%;text-align:center;color:#666666;
        font-family:${sans};font-size:1.08vw;line-height:1.4583vw;
      }

      /* ---- ring + connectors overlay (design coords 1920x1089) ---- */
      .wc-wires{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;pointer-events:none;}

      /* ---- center artwork 700² @610/289 ---- */
      .wc-img{position:absolute;left:31.7708vw;top:15.0521vw;width:36.4583vw;height:36.4583vw;
        object-fit:contain;display:block;z-index:2;pointer-events:none;}

      /* ---- cards 382x139 @ x170/1368, y336/535/734 ---- */
      /* ✅ BASE SHADOW strengthened + smooth transition + hover shadow */
      .wc-card{position:absolute;width:19.8958vw;height:7.2396vw;background:#fff;
        border-radius:0.5208vw;z-index:3;
        box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                   0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
        display:flex;align-items:center;gap:1.5625vw;padding:0 1.5625vw;
        transition:box-shadow .3s ease;
        cursor:pointer;}

      /* ✅ HOVER — dark, wide-spreading shadow, NO movement */
      .wc-card:hover{
        box-shadow:0 0.625vw 1.25vw rgba(0,0,0,0.12),
                   0 1.5625vw 3.125vw rgba(43,46,126,0.20);
      }

      .wc-l1{left:8.8542vw;top:17.5vw;}
      .wc-l2{left:8.8542vw;top:27.8646vw;}
      .wc-l3{left:8.8542vw;top:38.2292vw;}
      .wc-r1{left:71.25vw;top:17.5vw;}
      .wc-r2{left:71.25vw;top:27.8646vw;}
      .wc-r3{left:71.25vw;top:38.2292vw;}

      .wc-ico{flex:0 0 4.6354vw;width:4.6354vw;height:4.6354vw;border-radius:50%;
        background:#FCFAF7;border:0.0521vw solid #E8D6BA;color:#CCA466;
        display:flex;align-items:center;justify-content:center;}
      .wc-ico svg{width:2.0833vw;height:2.0833vw;}

      .wc-card h3{color:#2E3192;font-family:${serif};font-size:1.0417vw;font-weight:700;margin-bottom:0.4167vw;}
      .wc-card p{color:#666666;font-family:${sans};font-size:0.7813vw;line-height:1.1979vw;}

      /* desktop-invisible additions */
      .wc-media{display:contents;}
      .wc-ring-m{display:none;}

      /* ============ MOBILE+TABLET ≤1023 — one template per ROW ============ */
      @media (max-width:1023px){
        .wc-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

        /* cards = horizontal rows: icon left, text right; text wraps naturally */
        /* ✅ px-based base shadow so it reads properly on small screens */
        .wc-card{position:static;width:auto;height:auto;margin-top:3vw;
          padding:3.5vw 4vw;gap:3.5vw;border-radius:2vw;align-items:center;text-align:left;
          box-shadow:0 2px 6px rgba(0,0,0,0.08),
                     0 6px 16px rgba(43,46,126,0.08);}
        .wc-card:hover{box-shadow:0 4px 10px rgba(0,0,0,0.10),
                                  0 12px 24px rgba(43,46,126,0.18);}
        .wc-card p br{display:none;}   /* ✅ no forced breaks — copy flows responsively */
        .wc-l1,.wc-l2,.wc-l3,.wc-r1,.wc-r2,.wc-r3{left:auto;top:auto;}

        .wc-tag{order:1;position:static;font-size:clamp(12px, 1.4vw, 18px);}
        .wc-title{order:2;position:static;font-size:clamp(20px, 2.3vw, 32px);margin-top:2vw;}
        .wc-vector{order:3;position:static;transform:none;display:block;
          width:clamp(70px, 12vw, 120px);margin:2.5vw auto 0;}
        .wc-sub{order:4;position:static;font-size:clamp(12px, 1.35vw, 17px);
          line-height:clamp(18px, 2vw, 26px);margin-top:2.5vw;}

        .wc-wires{display:none;}

        .wc-l1{order:5;margin-top:6vw;}
        .wc-l2{order:6;}
        .wc-l3{order:7;}

        .wc-media{order:8;display:block;position:relative;
          width:min(75vw,760px);margin:7vw auto 3vw;}
        .wc-media .wc-img{position:relative;left:auto;top:auto;z-index:2;
          width:100%;height:auto;margin:0;}
        .wc-ring-m{display:block;position:absolute;left:50%;top:50%;
          width:96%;height:96%;transform:translate(-50%,-50%);
          z-index:1;pointer-events:none;}
        .wc-ring-m svg{width:100%;height:100%;display:block;}

        .wc-r1{order:9;margin-top:4vw;}
        .wc-r2{order:10;}
        .wc-r3{order:11;}

        .wc-ico{flex:0 0 clamp(40px, 6vw, 64px);
          width:clamp(40px, 6vw, 64px);height:clamp(40px, 6vw, 64px);}
        .wc-ico svg{width:clamp(18px, 2.8vw, 30px);height:clamp(18px, 2.8vw, 30px);}

        .wc-card h3{font-size:clamp(14px, 1.7vw, 21px);margin-bottom:1vw;}
        .wc-card p{font-size:clamp(11px, 1.25vw, 15px);
          line-height:clamp(16px, 1.8vw, 22px);}
      }

      /* ============ TABLET 640–1023 — same rows, larger type/bottle ============ */
      @media (min-width:640px) and (max-width:1023px){
        .wc-sec{padding:8vw 6vw;}
        .wc-tag{font-size:13px;}
        .wc-title{font-size:28px;}
        .wc-sub{font-size:14px;line-height:1.6;}
        .wc-media{width:min(60vw,520px);}
        .wc-ico{flex:0 0 56px;width:56px;height:56px;}
        .wc-ico svg{width:26px;height:26px;}
        .wc-card h3{font-size:16px;}
        .wc-card p{font-size:13px;line-height:1.5;}
      }
    `}</style>

    <p className="wc-tag">Why Choose Shine</p>
    <h2 className="wc-title">Clean &amp; Fresh, Every Day</h2>
    <img className="wc-vector" src={vector1} alt="" aria-hidden="true" />
    <p className="wc-sub">
      Experience powerful cleaning with safe, effective formulas that keep your home spotless,
      <br />
      fresh, and hygienic every day.
    </p>

    {/* ring + 45° elbow connectors + node dots — desktop only */}
    <svg className="wc-wires" viewBox="0 0 1920 1089" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="wc-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="wc-ringmask">
          <rect x="600" y="245" width="720" height="720" fill="url(#wc-fade)" />
        </mask>
      </defs>

      <circle cx="960" cy="605" r="315" stroke="#176B22" strokeWidth="3" mask="url(#wc-ringmask)" />

      <path d="M552 405.5 H668.5 L696 433"  stroke="#176B22" strokeWidth="3" />
      <path d="M552 604.5 H645"             stroke="#176B22" strokeWidth="3" />
      <path d="M552 803.5 H669.5 L696 777"  stroke="#176B22" strokeWidth="3" />

      <path d="M1368 405.5 H1251.5 L1224 433" stroke="#176B22" strokeWidth="3" />
      <path d="M1368 604.5 H1275"             stroke="#176B22" strokeWidth="3" />
      <path d="M1368 803.5 H1251.5 L1224 777" stroke="#176B22" strokeWidth="3" />

      <circle cx="696"  cy="433"   r="8" fill="#176B22" />
      <circle cx="645"  cy="604.5" r="8" fill="#176B22" />
      <circle cx="696"  cy="777"   r="8" fill="#176B22" />
      <circle cx="1224" cy="433"   r="8" fill="#176B22" />
      <circle cx="1275" cy="604.5" r="8" fill="#176B22" />
      <circle cx="1224" cy="777"   r="8" fill="#176B22" />
    </svg>

    <span className="wc-media">
      <img className="wc-img" src={centerImg} alt="Shine multi-surface cleaner — clean & fresh" />
      <span className="wc-ring-m" aria-hidden="true">
        <svg viewBox="0 0 630 630" fill="none">
          <defs>
            <linearGradient id="wc-fade-m" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.55" stopColor="#fff" />
              <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="wc-ringmask-m">
              <rect x="0" y="0" width="630" height="630" fill="url(#wc-fade-m)" />
            </mask>
          </defs>
          <circle cx="315" cy="315" r="312" stroke="#176B22" strokeWidth="4" mask="url(#wc-ringmask-m)" />
        </svg>
      </span>
    </span>

    {LEFT.map(({ cls, Icon, title, lines }) => (
      <div className={`wc-card ${cls}`} key={title}>
        <span className="wc-ico"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <p>{lines[0]}<br />{lines[1]}</p>
        </div>
      </div>
    ))}
    {RIGHT.map(({ cls, Icon, title, lines }) => (
      <div className={`wc-card ${cls}`} key={title}>
        <span className="wc-ico"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <p>{lines[0]}<br />{lines[1]}</p>
        </div>
      </div>
    ))}
  </section>
);

export default WhyChooseShine;