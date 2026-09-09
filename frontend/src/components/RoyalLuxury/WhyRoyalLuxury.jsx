import React from "react";
import centerImg from "../../assets/image 12.png";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✅ inline gold squiggle — no asset dependency, always renders */
const Squiggle = ({ className }) => (
  <svg className={className} viewBox="0 0 172 24" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30161 52.2131 7.71489 50.3663 9.83612C49.646 10.6617 49.2582 11.4887 49.245 13.1143Z" fill="#CCA466"/>
  </svg>
);

/* ---- gold outline icons matched to the design ---- */
const Leaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const Droplets = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05Z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);
/* ✅ Cruelty Free — exact lucide "rabbit" (matches the design) */
const Rabbit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 16a3 3 0 0 1 2.24 5" />
    <path d="M18 12h.01" />
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
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
    <path d="M12 4l1.7 4.8 4.8 1.7-4.8 1.7L12 17l-1.7-4.8-4.8-1.7 4.8-1.7Z" />
    <circle cx="6.2" cy="17.8" r="1.7" />
    <path d="M18.5 15.5v4M16.5 17.5h4" />
  </svg>
);
const Crown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4.5 4L12 6l4.5 6L21 8l-2 10H5L3 8Z" />
    <path d="M9 21h6" />
  </svg>
);

const LEFT = [
  { cls: "wc-l1", Icon: Leaf,     title: "Premium Ingredients",  lines: ["Carefully selected for", "maximum effectiveness."] },
  { cls: "wc-l2", Icon: Droplets, title: "Dermatologist Tested", lines: ["Safe for all skin types", "even sensitive skin"] },
  { cls: "wc-l3", Icon: Rabbit,   title: "Cruelty Free",         lines: ["Beauty that's kind to", "animals"] },
];
const RIGHT = [
  { cls: "wc-r1", Icon: Flask, title: "Advanced Formulas", lines: ["Backed by science and", "innovation."] },
  { cls: "wc-r2", Icon: Spark, title: "Visible Results",   lines: ["Real results you can see", "and feel."] },
  { cls: "wc-r3", Icon: Crown, title: "Luxury Experience", lines: ["Indulge in elegance,", "every day."] },
];

const WhyRoyalLuxury = () => (
  <section id="shine-why" className="wc-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 ============ */
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
        letter-spacing: 0.07em;
        text-transform:capitalize;
      }

      /* ✅ curve CLIPPER: overflow:hidden + fixed height hides the bottom loops */
      .wc-vector{
        position:absolute;
        top:7.55vw;
        left:50%;
        transform:translateX(-50%);
        width:11vw;
        min-width:120px;
        height:0.55vw;
        min-height:6px;
        overflow:hidden;
        display:flex;
        align-items:flex-start;
      }
      .wc-vector svg{
        width:100%;
        height:auto;
        display:block;
        flex-shrink:0;
      }

      .wc-sub{
        position:absolute;
        top:9.6vw;
        width:100%;
        text-align:center;
        color:#666666;
        font-family:${sans};
        font-size:1.08vw;
        font-weight: 500;
        line-height:1.4583vw;
      }

      /* ---- ring + connectors overlay ---- */
      .wc-wires{position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none;}

      /* ---- center artwork ---- */
      .wc-img{position:absolute;left:31.7708vw;top:15.0521vw;width:36.4583vw;height:36.4583vw;
        object-fit:contain;display:block;z-index:1;pointer-events:none;}

      /* ---- cards ---- */
      /* ✅ BASE SHADOW aligned with the other sections */
      .wc-card{position:absolute;width:19.8958vw;height:7.2396vw;background:#fff;
        border-radius:0.5208vw;z-index:3;
        box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                   0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
        display:flex;align-items:center;gap:1.5625vw;padding:0 1.5625vw;
        transition:box-shadow .3s ease;
        cursor:pointer;
      }

      /* ✅ REPLACED HOVER — same softened, wide-spreading shadow as the
         other sections (was 0.16 / 0.30); no translate/scale */
      .wc-card:hover{
        box-shadow:
          0 0.625vw 1.25vw rgba(0,0,0,0.12),
          0 1.5625vw 3.125vw rgba(43,46,126,0.20);
      }

      .wc-l1{left:8.8542vw;top:17.5vw;}
      .wc-l2{left:8.8542vw;top:27.8646vw;}
      .wc-l3{left:8.8542vw;top:38.2292vw;}
      .wc-r1{left:71.25vw;top:17.5vw;}
      .wc-r2{left:71.25vw;top:27.8646vw;}
      .wc-r3{left:71.25vw;top:38.2292vw;}

      /* ✅ BIGGER icon circles + glyphs (desktop) */
      .wc-ico{flex:0 0 5.2vw;width:5.2vw;height:5.2vw;border-radius:50%;
        background:#FCFAF7;border:0.0521vw solid #E8D6BA;color:#CCA466;
        display:flex;align-items:center;justify-content:center;}
      .wc-ico svg{width:2.6vw;height:2.6vw;}

      .wc-card h3{color:#2E3192;font-family:${serif};font-size:1.0417vw;font-weight:700;margin-bottom:0.4167vw;}
      .wc-card p{color:#666666;font-family:${sans};font-size:0.7813vw;line-height:1.1979vw;}

      /* desktop-invisible additions */
      .wc-media{display:contents;}
      .wc-ring-m{display:none;}

      /* ============ MOBILE+TABLET ≤1023 ============ */
      @media (max-width:1023px){
        .wc-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

        /* ✅ px-based base + REPLACED hover shadow for small screens */
        .wc-card{position:static;width:auto;height:auto;margin-top:3vw;
          padding:3.5vw 4vw;gap:3.5vw;border-radius:2vw;align-items:center;text-align:left;
          box-shadow:0 2px 6px rgba(0,0,0,0.08),
                     0 6px 16px rgba(43,46,126,0.08);}
        .wc-card:hover{
          box-shadow:
            0 4px 10px rgba(0,0,0,0.10),
            0 12px 24px rgba(43,46,126,0.18);
        }
        .wc-card p br{display:none;}
        .wc-l1,.wc-l2,.wc-l3,.wc-r1,.wc-r2,.wc-r3{left:auto;top:auto;}

        .wc-tag{order:1;position:static;font-size:clamp(12px, 1.4vw, 18px);}
        .wc-title{order:2;position:static;font-size:clamp(20px, 2.3vw, 32px);margin-top:2vw;}

        /* ✅ mobile clip height — still hides bottom loops */
        .wc-vector{order:3;position:static;transform:none;
          width:clamp(90px, 14vw, 150px);min-width:0;
          height:clamp(8px, 1vw, 12px);
          margin:2.5vw auto 0;}

        .wc-sub{order:4;position:static;font-size:clamp(12px, 1.35vw, 17px);
          line-height:clamp(18px, 2vw, 26px);margin-top:2.5vw;}

        .wc-wires{display:none;}

        .wc-l1{order:5;margin-top:6vw;}
        .wc-l2{order:6;}
        .wc-l3{order:7;}

        .wc-media{order:8;display:block;position:relative;
          width:min(75vw,760px);margin:7vw auto 3vw;}
        .wc-media .wc-img{position:relative;left:auto;top:auto;z-index:1;
          width:100%;height:auto;margin:0;}
        .wc-ring-m{display:block;position:absolute;left:50%;top:50%;
          width:96%;height:96%;transform:translate(-50%,-50%);
          z-index:2;pointer-events:none;}
        .wc-ring-m svg{width:100%;height:100%;display:block;}

        .wc-r1{order:9;margin-top:4vw;}
        .wc-r2{order:10;}
        .wc-r3{order:11;}

        /* ✅ BIGGER icons on mobile */
        .wc-ico{flex:0 0 clamp(48px, 7vw, 72px);
          width:clamp(48px, 7vw, 72px);height:clamp(48px, 7vw, 72px);}
        .wc-ico svg{width:clamp(22px, 3.6vw, 36px);height:clamp(22px, 3.6vw, 36px);}

        .wc-card h3{font-size:clamp(14px, 1.7vw, 21px);margin-bottom:1vw;}
        .wc-card p{font-size:clamp(11px, 1.25vw, 15px);
          line-height:clamp(16px, 1.8vw, 22px);}
      }

      /* ============ TABLET 640–1023 ============ */
      @media (min-width:640px) and (max-width:1023px){
        .wc-sec{padding:8vw 6vw;}
        .wc-tag{font-size:13px;}
        .wc-title{font-size:28px;}
        .wc-sub{font-size:14px;line-height:1.6;}
        .wc-media{width:min(60vw,520px);}
        /* ✅ BIGGER icons on tablet */
        .wc-ico{flex:0 0 64px;width:64px;height:64px;}
        .wc-ico svg{width:32px;height:32px;}
        .wc-card h3{font-size:16px;}
        .wc-card p{font-size:13px;line-height:1.5;}
      }
    `}</style>

    <p className="wc-tag">Why Choose Royal Luxury</p>
    <h2 className="wc-title">Luxury That Complements Your Beauty</h2>

    {/* ✅ curve CLIPPER: fixed height + overflow:hidden hides the bottom loops */}
    <div className="wc-vector">
      <Squiggle />
    </div>

    <p className="wc-sub">
      Explore premium makeup, skincare, haircare, and beauty essentials created to bring quality, 
      <br />
      care, and confidence to your everyday routine.
    </p>

    {/* ✅ ring fade per design: solid through the dots (0.76), short tail, gone by 0.83 —
         nothing reaches the pedestal */}
    <svg className="wc-wires" viewBox="0 0 1920 1089" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="wc-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.76" stopColor="#fff" />
          <stop offset="0.83" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="wc-ringmask">
          <rect x="600" y="245" width="720" height="720" fill="url(#wc-fade)" />
        </mask>
      </defs>

      <circle cx="960" cy="605" r="315" stroke="#E38F2E" strokeWidth="3" mask="url(#wc-ringmask)" />

      <path d="M552 405.5 H660 L702 424" stroke="#E38F2E" strokeWidth="3" />
      <path d="M552 604.5 H645"          stroke="#E38F2E" strokeWidth="3" />
      <path d="M552 803.5 H660 L702 786" stroke="#E38F2E" strokeWidth="3" />

      <path d="M1368 405.5 H1260 L1218 424" stroke="#E38F2E" strokeWidth="3" />
      <path d="M1368 604.5 H1275"           stroke="#E38F2E" strokeWidth="3" />
      <path d="M1368 803.5 H1260 L1218 786" stroke="#E38F2E" strokeWidth="3" />

      <circle cx="702"  cy="424"   r="8" fill="#E38F2E" />
      <circle cx="645"  cy="604.5" r="8" fill="#E38F2E" />
      <circle cx="702"  cy="786"   r="8" fill="#E38F2E" />
      <circle cx="1218" cy="424"   r="8" fill="#E38F2E" />
      <circle cx="1275" cy="604.5" r="8" fill="#E38F2E" />
      <circle cx="1218" cy="786"   r="8" fill="#E38F2E" />
    </svg>

    <span className="wc-media">
      <img className="wc-img" src={centerImg} alt="Royal Luxury Radiance Serum" />
      <span className="wc-ring-m" aria-hidden="true">
        <svg viewBox="0 0 630 630" fill="none">
          <defs>
            <linearGradient id="wc-fade-m" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.76" stopColor="#fff" />
              <stop offset="0.83" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="wc-ringmask-m">
              <rect x="0" y="0" width="630" height="630" fill="url(#wc-fade-m)" />
            </mask>
          </defs>
          <circle cx="315" cy="315" r="312" stroke="#E38F2E" strokeWidth="4" mask="url(#wc-ringmask-m)" />
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

export default WhyRoyalLuxury;