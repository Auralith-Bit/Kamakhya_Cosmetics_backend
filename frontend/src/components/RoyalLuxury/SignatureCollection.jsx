import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector1 from "../../assets/Vector (1).svg";
import img1 from "../../assets/Rectangle 4647.svg";
import img2 from "../../assets/Rectangle 4648.svg";
import img3 from "../../assets/Rectangle 4649.svg";
import img4 from "../../assets/Rectangle 4650.svg";
import img5 from "../../assets/Rectangle 4651.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const PRODUCTS = [
  {
    num: "01", cat: "Kitchencare", badge: "KITCHENCARE", name: "Radiance Renewal Serum",
    desc: [
      "A lightweight brightening serum with stabilised",
      "vitamin C and botanical extracts for visibly",
      "even, luminous skin.",
    ],
    notes: ["Stabilised vitamin C complex", "Dermatologically tested", "Fragrance-free formulation", "Glass bottle with gold collar"],
    moq: "500 units", lead: "10–15 days", img: img1,
  },
  {
    num: "02", cat: "Haircare", badge: "SKIN CARE", name: "Soothing Aloe Gel",
    desc: [
      "A cooling, fragrance-free aloe gel that calms and",
      "hydrates, leaving scalp and strands refreshed",
      "without residue.",
    ],
    notes: ["Fragrance-free formulation", "Stabilised vitamin C complex", "Dermatologically tested", "Glass bottle with gold collar"],
    moq: "500 units", lead: "10–15 days", img: img2,
  },
  {
    num: "03", cat: "Lipcare", badge: "SKIN CARE", name: "Hydrating Balance Cream",
    desc: [
      "A balancing daily cream that restores moisture and",
      "comfort, leaving lips and skin soft, supple and",
      "protected.",
    ],
    notes: ["Stabilised vitamin C complex", "Dermatologically tested", "Fragrance-free formulation", "Glass bottle with gold collar"],
    moq: "750 units", lead: "01–10 days", img: img3,
  },
  {
    num: "04", cat: "Skincare", badge: "SKIN CARE", name: "Night Repair Elixir",
    desc: [
      "A lightweight brightening serum with stabilised",
      "vitamin C and botanical extracts for visibly",
      "even, luminous skin.",
    ],
    notes: ["Fragrance-free formulation", "Glass bottle with gold collar", "Fragrance-free formulation", "Glass bottle with gold collar"],
    moq: "500 units", lead: "10–15 days", img: img4,
  },
  {
    num: "05", cat: "Skincare", badge: "SKIN CARE", name: "Vitamin C Glow Drops",
    desc: [
      "Concentrated glow drops with stabilised vitamin C",
      "and botanical extracts for visibly even, luminous",
      "skin.",
    ],
    notes: ["Dermatologically tested", "Fragrance-free formulation", "Dermatologically tested", "Fragrance-free formulation"],
    moq: "250 units", lead: "7–9 days", img: img5,
  },
];

const pad = (n) => String(n).padStart(2, "0");

const ChevL = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 1.5 2 7l5.5 5.5" /></svg>
);
const ChevR = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m1.5 1.5 6 5.5-6 5.5" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="#CCA466" strokeWidth="1.4" />
    <path d="m6 10.4 2.6 2.6 5.4-5.8"
      stroke="#E38F2E" strokeWidth="2.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Plus = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 3v12M3 9h12" /></svg>
);
const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" /></svg>
);
const Spark = () => (
  <svg viewBox="0 0 18 18" fill="currentColor"><path d="M9 1l1.8 5.2L16 8l-5.2 1.8L9 15l-1.8-5.2L2 8l5.2-1.8Z" /></svg>
);

const SignatureCollection = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % PRODUCTS.length);
  const prev = () => setIdx((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const p = PRODUCTS[idx];

  return (
    <section id="shine-spotlight" className="psx-sec">
      <style>{`
        /* ================= DESKTOP (>1280): ORIGINAL, UNTOUCHED ================= */
        .psx-sec{position:relative;width:100%;height:64.3229vw;background:#fff;}

        .psx-tag{position:absolute;top:3.7vw;width:100%;text-align:center;color:#E38F2E;
          font-family:${sans};font-size:0.85vw;font-style:normal;font-weight:700;
          letter-spacing:0.18em;text-transform:uppercase;}
        .psx-title{position:absolute;top:5.2vw;width:100%;text-align:center;color:#2E3192;
          font-family:${serif};font-size:1.875vw;font-style:normal;font-weight:700;line-height:1.2;}
        .psx-vector{position:absolute;top:7.4917vw;left:50%;transform:translateX(-50%);
          width:9.25vw;height:auto;}
        .psx-sub{position:absolute;top:9.2vw;width:100%;text-align:center;color:#666666;
          font-family:${sans};font-size:1vw;line-height:1.4583vw;}
        .psx-sub span{display:inline-block;max-width:62vw;}

        .psx-panel{position:absolute;left:8.8542vw;top:14.2708vw;width:82.2917vw;height:44.8438vw;
          background:#FCF9F2;border:0.0521vw solid #D7DAE4;border-radius:0.5208vw;
          display:flex;flex-direction:column;overflow:hidden;}
        .psx-main{flex:1;display:flex;min-height:0;}

        .psx-side{width:20.9375vw;border-right:0.0521vw solid #D7DAE4;
          display:flex;flex-direction:column;padding:2.0833vw 1.9792vw 1.5625vw;}
        .psx-sidehead{padding-bottom:1.5625vw;border-bottom:0.0521vw solid #D7DAE4;text-align:center;}
        .psx-dir{color:#E38F2E;font-family:${sans};font-size:0.9vw;font-style:normal;
          font-weight:500;letter-spacing:0.1em;}
        .psx-sig{margin-top:0vw;color:#2E3192;font-family:${serif};font-size:1.5625vw;font-weight:700;}
        .psx-list{margin-top:1.5625vw;display:flex;flex-direction:column;gap:0.7292vw;flex:1;}

        .psx-item{background:#ffffff;border:0.0521vw solid #D7DAE4;border-radius:0.4167vw;
          padding:0.9375vw 1.0417vw;text-align:left;cursor:pointer;display:flex;
          flex-direction:column;gap:0.3125vw;
          transition:background .25s, border-color .25s, box-shadow .25s, transform .25s;}
        .psx-item:hover:not(.active){
          box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);
          transform:translateY(-0.1042vw);border-color:#ffffff;}
        .psx-item-cat{font-family:${serif};font-size:0.7292vw;color:#666666;letter-spacing:0.05em;}
        .psx-item-name{font-family:${sans};font-size:0.8333vw;font-weight:500;color:#121212;}
        .psx-item.active{background:#2E3192;border-color:#2E3192;}
        .psx-item.active .psx-item-cat{color:var(--Orange-300, #E8D6BA);}
        .psx-item.active .psx-item-name{color:#fff;}

        .psx-nav{margin-top:1.25vw;display:flex;align-items:center;justify-content:space-between;}
        .psx-arrow{width:2.5vw;height:2.5vw;border-radius:50%;background:#F5F5FA;
          border:0.1042vw solid #A1A2CE;color:#2E3192;display:flex;align-items:center;
          justify-content:center;cursor:pointer;transition:border-color .2s;}
        .psx-arrow:hover{border-color:#2E3192;}
        .psx-arrow svg{width:0.4688vw;height:0.7292vw;}
        .psx-count{font-family:${serif};font-size:0.8333vw;color:#7779B8;}
        .psx-count b{color:#2E3192;}

        .psx-center{flex:1;display:flex;align-items:flex-start;justify-content:center;position:relative;}
        .psx-stage{position:relative;margin-top:1.0417vw;width:27.8125vw;height:39.5833vw;
          border-radius:0.5208vw;overflow:hidden;border:0.0521vw solid #D7DAE4;}
        .psx-track{display:flex;width:100%;height:100%;transition:transform .6s ease;}
        .psx-slide{flex:0 0 100%;height:100%;}
        .psx-slide img{width:100%;height:100%;object-fit:cover;display:block;}
        .psx-badge{position:absolute;top:1.0417vw;left:1.6146vw;z-index:2;background:#fff;
          border-radius:1.0417vw;display:flex;align-items:center;gap:0.3125vw;
          padding:0.3646vw 0.7292vw;color:#E38F2E;font-family:${sans};font-size:0.625vw;
          font-weight:600;letter-spacing:0.12em;text-transform:uppercase;}
        .psx-badge svg{width:0.625vw;height:0.625vw;}
        .psx-dots{position:absolute;left:50%;transform:translateX(-50%);bottom:0.9375vw;
          display:flex;align-items:center;gap:0.4167vw;z-index:2;}
        .psx-dot{width:0.9375vw;height:0.9375vw;border-radius:0.4688vw;background:#DEC49C;
          border:0.1042vw solid #fff;padding:0;cursor:pointer;transition:all .3s;}
        .psx-dot.active{width:1.9792vw;background:#E38F2E;}

        .psx-right{width:32.4479vw;padding:2.0833vw 0 2.0833vw 3.6458vw;}

        .psx-dyn{animation:psx-fade .5s ease;}
        @keyframes psx-fade{from{opacity:0;transform:translateX(1.0417vw);}to{opacity:1;transform:none;}}

        .psx-kicker{color:#E38F2E;font-family:${sans};font-size:1vw;font-style:normal;
          font-weight:500;letter-spacing:0.1em;}
        .psx-rule{width:2.6042vw;height:0.1563vw;background:#CCA466;margin-top:0.3vw;border-radius:0.0781vw;}
        .psx-name{margin-top:0.8vw;color:#2E3192;font-family:${serif};font-size:1.6vw;
          font-weight:700;letter-spacing:0.04em;}
        .psx-desc{margin-top:1.0417vw;color:#666666;font-family:${sans};font-size:0.9vw;
          font-weight:400;line-height:1.4583vw;}
        .psx-div{height:0.0521vw;background:#D7DAE4;margin-top:1.5625vw;}
        .psx-notes-h{margin-top:1.5625vw;color:#333333;font-family:${sans};font-size:0.95vw;font-weight:500;}
        .psx-notes{margin-top:1.0417vw;display:flex;flex-direction:column;gap:0.8333vw;list-style:none;}
        .psx-notes li svg{width:1.25vw !important;height:1.25vw !important;}
        .psx-notes li{display:flex;align-items:center;gap:0.5208vw;color:#666666;
          font-family:${sans};font-size:0.95vw;}
        .psx-notes svg{width:0.9375vw;height:0.9375vw;color:#E38F2E;flex-shrink:0;}
        .psx-stats{margin-top:1vw;display:flex;align-items:center;gap:1.5625vw;}
        .psx-stats div{display:flex;flex-direction:column;gap:0.4167vw;}
        .psx-stats span{color:#666666;font-family:${sans};font-size:0.8813vw;}
        .psx-stats strong{font-family:${serif};font-size:1.217vw;font-style:normal;
          font-weight:550;color:#121212;}
        .psx-stats i{width:0.0521vw;height:2.6042vw;background:#D7DAE4;}

        .psx-cta{margin-top:1vw;width:21.8125vw;height:3vw;background:#2E3192;color:#fff;
          border:none;border-radius:0.4167vw;display:flex;align-items:center;
          justify-content:center;gap:0.5208vw;font-family:${sans};font-size:0.92vw;
          font-weight:500;cursor:pointer;transition:background .2s;
          text-decoration:none;}
        .psx-cta svg{width:1.1vw !important;height:1.1vw !important;}
        .psx-cta:hover{background:#1d2170;}
        .psx-cta2{margin-top:0.8333vw;width:21.8125vw;height:3vw;background:transparent;
          border:0.1463vw solid #252775;color:#2E3192;border-radius:0.4167vw;display:flex;
          align-items:center;justify-content:center;gap:0.5208vw;font-family:${sans};
          font-size:0.92vw;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;
          cursor:pointer;text-decoration:none;}
        .psx-cta2 svg{width:1.25vw !important;height:0.8333vw !important;}
        .psx-cta2:hover{background:#eef0fa;}

        .psx-foot{border-top:0.0521vw solid #D7DAE4;height:3.2292vw;display:flex;
          align-items:center;justify-content:space-between;padding:0 1vw;}
        .psx-foot span{color:#666666;font-family:${sans};font-size:0.86vw;}

        /* ============ ≤1280: stacked flow — column list → image → arrows → details ============ */
        @media (max-width:1280px){
          .psx-sec{height:auto;padding:9vw 5vw 10vw;}

          .psx-tag{position:static;font-size:clamp(12px,1.4vw,18px);}
          .psx-title{position:static;font-size:clamp(24px,3.4vw,44px);margin-top:1.5vw;}
          .psx-vector{position:static;transform:none;display:block;
            width:clamp(80px,12vw,160px);margin:2vw auto 0;}
          .psx-sub{position:static;font-size:clamp(13px,1.8vw,20px);line-height:1.6;margin-top:2vw;}
          .psx-sub span{max-width:92%;}
          .psx-sub br{display:none;}

          .psx-panel{position:static;width:auto;height:auto;margin-top:7vw;border-radius:2vw;}
          .psx-main{flex-direction:column;}

          .psx-side{display:contents;}

          .psx-sidehead{order:1;padding:5vw 4vw 3vw;
            border-bottom:0.0521vw solid #D7DAE4;}
          .psx-dir{font-size:clamp(11px,1.3vw,16px);}
          .psx-sig{font-size:clamp(18px,2.4vw,30px);}

          /* ✅ directory now stacks vertically (one column), like the desktop sidebar */
          .psx-list{order:2;flex:none;flex-direction:column;gap:2vw;
            margin-top:0;padding:4vw 4vw 2vw;}
          .psx-item{width:100%;padding:2.2vw 3.5vw;
            border-radius:2vw;gap:1vw;}
          .psx-item-cat{font-size:clamp(10px,1.2vw,14px);}
          .psx-item-name{font-size:clamp(12px,1.4vw,16px);white-space:normal;}

          .psx-center{order:3;}
          .psx-stage{width:min(70vw,440px);height:auto;aspect-ratio:1/1;margin-top:5vw;}
          .psx-badge{top:3vw;left:3vw;padding:1.4vw 2.6vw;border-radius:3vw;
            font-size:clamp(9px,1.1vw,13px);}
          .psx-badge svg{width:2.6vw;height:2.6vw;}
          .psx-dots{bottom:2.5vw;gap:1.4vw;}
          .psx-dot{width:2.6vw;height:2.6vw;border-radius:1.3vw;}
          .psx-dot.active{width:5.5vw;}

          .psx-nav{order:4;display:flex;align-items:center;justify-content:center;
            gap:10vw;margin-top:5vw;}
          .psx-arrow{width:clamp(40px,6vw,56px);height:clamp(40px,6vw,56px);}
          .psx-arrow svg{width:clamp(9px,1.3vw,15px);height:auto;}
          .psx-count{font-size:clamp(12px,1.5vw,18px);}

          .psx-right{order:5;width:auto;padding:6vw 5vw 5vw 4vw;}
          .psx-kicker{font-size:clamp(12px,1.4vw,17px);}
          .psx-rule{width:clamp(40px,6vw,70px);height:1vw;margin-top:1.5vw;}
          .psx-name{font-size:clamp(20px,3vw,36px);margin-top:2vw;}
          .psx-desc{font-size:clamp(13px,1.7vw,19px);line-height:1.6;margin-top:3vw;}
          .psx-desc br{display:none;}
          .psx-div{height:1px;margin-top:5vw;}
          .psx-notes-h{font-size:clamp(13px,1.6vw,18px);margin-top:5vw;}
          .psx-notes{margin-top:3vw;gap:3vw;padding-right:2vw;}
          .psx-notes li{font-size:clamp(12px,1.5vw,17px);gap:2vw;
            overflow-wrap:break-word;}
          .psx-notes li svg{width:4.2vw !important;height:4.2vw !important;flex-shrink:0;}
          .psx-stats{margin-top:4vw;gap:6vw;}
          .psx-stats div{gap:1.5vw;}
          .psx-stats span{font-size:clamp(11px,1.4vw,16px);}
          .psx-stats strong{font-size:clamp(15px,2vw,24px);}
          .psx-stats i{width:1px;height:9vw;}

          .psx-cta{width:100%;height:12vw;margin-top:6vw;border-radius:2vw;
            font-size:clamp(13px,1.6vw,18px);}
          .psx-cta svg{width:4.2vw !important;height:4.2vw !important;}
          .psx-cta2{width:100%;height:12vw;margin-top:3vw;margin-bottom:2vw;
            border-radius:2vw;font-size:clamp(13px,1.6vw,18px);}
          .psx-cta2 svg{width:4.6vw !important;height:3vw !important;}

          .psx-foot{height:auto;padding:3.5vw 4vw;flex-direction:column;gap:1.5vw;
            justify-content:center;text-align:center;}
          .psx-foot span{font-size:clamp(11px,1.3vw,15px);}
        }
      `}</style>

      {/* header */}
      <p className="psx-tag">Our Signature Collection</p>
      <h2 className="psx-title">Beauty, Perfected With Luxury</h2>
      <img className="psx-vector" src={vector1} alt="" aria-hidden="true" />
      <p className="psx-sub">
        <span> Explore Royal Luxury collections across skincare, haircare, makeup, body care , and premium
          <br/>
          beauty essentials.</span>
      </p>

      <div className="psx-panel">
        <div className="psx-main">
          {/* left directory */}
          <aside className="psx-side">
            <div className="psx-sidehead">
              <p className="psx-dir">Collection Directory</p>
              <h3 className="psx-sig">05 Signatures</h3>
            </div>

            <div className="psx-list">
              {PRODUCTS.map((it, i) => (
                <button className={`psx-item${i === idx ? " active" : ""}`} key={it.num} onClick={() => setIdx(i)}>
                  <span className="psx-item-cat">{it.num} · {it.cat}</span>
                  <span className="psx-item-name">{it.name}</span>
                </button>
              ))}
            </div>

            <div className="psx-nav">
              <button className="psx-arrow" aria-label="Previous" onClick={prev}><ChevL /></button>
              <span className="psx-count"><b>{pad(idx + 1)}</b> /05</span>
              <button className="psx-arrow" aria-label="Next" onClick={next}><ChevR /></button>
            </div>
          </aside>

          {/* center stage */}
          <div className="psx-center">
            <div className="psx-stage">
              <span className="psx-badge"><Spark /> {p.badge}</span>
              <div className="psx-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {PRODUCTS.map((it) => (
                  <div className="psx-slide" key={it.num}>
                    <img src={it.img} alt={it.name} />
                  </div>
                ))}
              </div>
              <div className="psx-dots">
                {PRODUCTS.map((_, i) => (
                  <button className={`psx-dot${i === idx ? " active" : ""}`} key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIdx(i)} />
                ))}
              </div>
            </div>
          </div>

          {/* right details */}
          <div className="psx-right">
            <div className="psx-dyn" key={p.num}>
              <p className="psx-kicker">Signature {p.num}</p>
              <div className="psx-rule" />
              <h3 className="psx-name">{p.name}</h3>

              <p className="psx-desc">
                {p.desc.map((ln, i) => (
                  <React.Fragment key={i}>
                    <span>{ln} </span>
                    {i < p.desc.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              <div className="psx-div" />
              <p className="psx-notes-h">Product Notes</p>
              <ul className="psx-notes">
                {p.notes.map((n, i) => (<li key={i}><Check />{n}</li>))}
              </ul>

              <div className="psx-div" />
              <div className="psx-stats">
                <div><span>Minimum order quantity</span><strong>{p.moq}</strong></div>
                <i />
                <div><span>Lead Time</span><strong>{p.lead}</strong></div>
              </div>
            </div>

            <Link to="/distributor" className="psx-cta"><Plus /> Become Distributor</Link>
            <Link to="/bulk-quote" className="psx-cta2">Request Bulk Quote <Arrow /></Link>
          </div>
        </div>

        <div className="psx-foot">
          <span>Shine by Kamakhya Cosmetics</span>
          <span>Use arrow keys to browse the collection</span>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;