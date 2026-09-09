import React, { useState } from "react";
import vector1 from "../../assets/Vector (1).svg";
import emoji from "../../assets/emoji.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* 👇 3-line wrap exactly as the Figma frame */
const ANSWER = (
  <>
    How Samples may be available for qualified retailers, distributors and private-label clients.
    <br />
    Availability, sample charges and delivery costs depend on the products and destination
    <br />
    market.
  </>
);

const FAQS = [
  "How do I receive wholesale pricing?",
  "What is the minimum order quantity for wholesale buyers?",
  "Are there any discounts for bulk orders?",
  "Can I return or exchange wholesale items?",
  "How long does shipping take for wholesale orders?",
  "Do you offer international wholesale shipping?",
].map((q, i) => ({ num: `0${i + 1}`, q, a: ANSWER }));

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="shine-faq" className="fq-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
        .fq-sec{position:relative;width:100%;height:54.0625vw;background:#FCF9F2;overflow:hidden;}

        /* ---- header ---- */
        .fq-tag{
          position:absolute;top:3.9vw;width:100%;text-align:center;color:#E38F2E;
          font-family:${sans};font-size:0.8333vw;font-weight:700;
          letter-spacing:0.18em;text-transform:uppercase;
        }
        .fq-title{
          position:absolute;top:5.2vw;width:100%;text-align:center;color:#2E3192;
          font-family:${serif};font-size:1.6vw;font-weight:700;
          line-height:normal;letter-spacing:0.03em;text-transform:capitalize;
        }
        .fq-vector{position:absolute;top:7.2917vw;left:50%;transform:translateX(-50%);width:9.25vw;height:auto;}
        .fq-sub{
          position:absolute;top:9.2vw;width:100%;text-align:center;color:#666666;
          font-family:${sans};font-size:1.05vw;font-weight:500;line-height:1.4583vw;
        }

        /* ---- FAQ accordion (x170 w920 @y274) ---- */
        .fq-list{
          position:absolute;left:8.8542vw;top:14.2708vw;width:47.9167vw;
          height:33.5417vw;               /* 644px — same as right card */
          display:flex;flex-direction:column;gap:0.7813vw;   /* 15px */
        }
        .fq-item{
          background:#ffffff;border:0.0521vw solid #D7DAE4;border-radius:0.4167vw;
          flex-shrink:0;
          transition:border-color .3s, background .3s, box-shadow .3s;
        }
        .fq-item:hover{border-color:#CCA466;}
        .fq-item.open{
          background:#ffffff;border-color:#CCA466;
          box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);
        }

        .fq-q{
          display:flex;align-items:center;gap:1.0417vw;width:100%;
          padding:0 1.3021vw 0 1.5625vw;height:4.0625vw;   /* 78px closed */
          background:none;border:none;cursor:pointer;text-align:left;
        }
        .fq-num{color:#666666;font-family:${serif};font-size:0.9375vw;}
        .fq-qt{
          flex:1;color:#2E3192;font-family:${serif};
          font-size:1.0417vw;font-weight:600;letter-spacing:0.025em;
        }
        .fq-tgl{
          flex:0 0 1.875vw;width:1.875vw;height:1.875vw;border-radius:50%;
          background:#fff;border:0.0521vw solid #D7DAE4;color:#2E3192;
          display:flex;align-items:center;justify-content:center;transition:all .3s;
        }
        .fq-tgl svg{width:0.625vw;height:0.625vw;}
        .fq-item.open .fq-tgl{background:#CCA466;border-color:#CCA466;color:#333333;}

        /* open panel: 78 + 101 = 179px total, like Figma */
        .fq-a{overflow:hidden;max-height:0;transition:max-height .4s ease;}
        .fq-item.open .fq-a{max-height:5.2604vw;}
        .fq-a p{
        margin:0 2.0833vw 1.3021vw 3.125vw;
        color:#666666;
        font-family:${sans};
        font-size:0.89vw;
        line-spacing: 0.5em;
        line-height:1.25vw;  /* 24px — keeps 3 lines inside 101px */
        }

        /* ---- right CTA card (x1150 w600 @y274 h644) ---- */
        .fq-card{
          position:absolute;left:59.8958vw;top:14.2708vw;width:31.25vw;height:33.5417vw;
          background:#ffffff;border:0.0521vw solid #D7DAE4;border-radius:0.5208vw;
          padding:1.5625vw 2.6042vw;text-align:center;overflow:hidden;
          display:flex;flex-direction:column;
        }

        /* ---- illustration (emoji.svg) ---- */
        .fq-art{width:10.4167vw;margin:0 auto;}
        .fq-art img{display:block;width:100%;height:auto;object-fit:contain;}

        .fq-card h3{margin-top:0.7813vw;color:#2E3192;font-family:${serif};
        font-size:1.4583vw;font-weight:700;}
        
        .fq-card .fq-p{
        margin-top:0.5208vw;
        color:#666666;
        font-family:${sans};
        font-size:0.89vw;
        line-height:1.4583vw;
        }
        
        .fq-label{margin-top:0.7813vw;text-align:left;color:#333333;
          font-family:${sans};font-size:0.89vw;font-weight:500;}
        .fq-input{
          margin-top:0.4167vw;width:100%;height:4.6875vw;background:#ffffff;
          border:0.0521vw solid #D7DAE4;border-radius:0.4167vw;padding:0.7813vw;
          color:#333333;font-family:${sans};font-size:0.89vw;resize:none;outline:none;
        }
        .fq-input::placeholder{color:#999999;}
        .fq-input:focus{border-color:#2E3192;}
        .fq-note{margin-top:0.4167vw;color:#666666;font-family:${sans};
          font-size:0.6771vw;letter-spacing:0.06em;}
        .fq-send{
          margin-top:0.7813vw;width:100%;height:2.8646vw;background:#2E3192;color:#fff;
          border:none;border-radius:0.4167vw;display:flex;align-items:center;justify-content:center;
          gap:0.5208vw;font-family:${sans};font-size:0.8333vw;font-weight:600;cursor:pointer;
          transition:background .2s;
        }
        .fq-send:hover{background:#1d2170;}
        .fq-send svg{width:0.9375vw;height:0.625vw;}

        /* ============ MOBILE+TABLET ≤1023 — stacked: header → FAQ rows → CTA card ============ */
        @media (max-width:1023px){
          .fq-sec{height:auto;padding:10vw 5vw;}

          .fq-tag{position:static;font-size:clamp(12px, 1.4vw, 18px);}
          .fq-title{position:static;font-size:clamp(20px, 2.3vw, 32px);margin-top:2vw;}
          .fq-vector{position:static;transform:none;display:block;
            width:clamp(70px, 12vw, 120px);margin:2.5vw auto 0;}
          .fq-sub{position:static;font-size:clamp(12px, 1.35vw, 17px);
            line-height:clamp(18px, 2vw, 26px);margin-top:2.5vw;}
          .fq-sub br{display:none;}

          /* accordion: full-width rows, auto heights, natural wrapping */
          .fq-list{position:static;left:auto;top:auto;width:auto;height:auto;
            gap:3vw;margin-top:8vw;}
          .fq-item{border-radius:2vw;}
          .fq-q{height:auto;padding:3.5vw 4vw;gap:3vw;}
          .fq-num{font-size:clamp(11px, 1.3vw, 15px);}
          .fq-qt{font-size:clamp(13px, 1.6vw, 19px);}
          .fq-tgl{flex:0 0 clamp(28px, 4vw, 40px);width:clamp(28px, 4vw, 40px);
            height:clamp(28px, 4vw, 40px);}
          .fq-tgl svg{width:clamp(10px, 1.6vw, 14px);height:clamp(10px, 1.6vw, 14px);}
          .fq-item.open .fq-a{max-height:80vw;}   /* room for wrapped answer */
          .fq-a p{margin:0 4vw 3.5vw 4vw;font-size:clamp(11px, 1.3vw, 15px);
            line-height:clamp(16px, 1.9vw, 22px);}
          .fq-a p br{display:none;}

          /* CTA card below the accordion */
          .fq-card{position:static;left:auto;top:auto;width:auto;height:auto;
            margin-top:8vw;padding:6vw 5vw;border-radius:2vw;}
          .fq-art{width:clamp(90px, 20vw, 160px);}
          .fq-card h3{margin-top:2vw;font-size:clamp(18px, 2.4vw, 28px);}
          .fq-card .fq-p{margin-top:2vw;font-size:clamp(11px, 1.3vw, 15px);line-height:1.6;}
          .fq-p br{display:none;}
          .fq-label{margin-top:3vw;font-size:clamp(11px, 1.3vw, 15px);}
          .fq-input{margin-top:2vw;height:24vw;padding:3vw;border-radius:2vw;
            font-size:clamp(12px, 1.4vw, 16px);}
          .fq-note{margin-top:2vw;font-size:clamp(9px, 1.1vw, 12px);}
          .fq-send{margin-top:3vw;height:12vw;border-radius:2vw;
            font-size:clamp(12px, 1.5vw, 17px);}
          .fq-send svg{width:clamp(14px, 2vw, 18px);height:clamp(9px, 1.4vw, 12px);}
        }

        /* ============ TABLET 640–1023 — same stack, larger fixed type ============ */
        @media (min-width:640px) and (max-width:1023px){
          .fq-sec{padding:8vw 6vw;}
          .fq-tag{font-size:13px;}
          .fq-title{font-size:28px;}
          .fq-sub{font-size:14px;line-height:1.6;}
          .fq-qt{font-size:16px;}
          .fq-num{font-size:13px;}
          .fq-a p{font-size:13px;line-height:1.5;}
          .fq-item.open .fq-a{max-height:400px;}
          .fq-card h3{font-size:24px;}
          .fq-card .fq-p{font-size:13px;}
          .fq-label{font-size:13px;}
          .fq-input{height:120px;font-size:14px;}
          .fq-note{font-size:11px;}
          .fq-send{height:52px;font-size:15px;}
        }
      `}</style>

      <p className="fq-tag">Frequently Asked Questions</p>
      <h2 className="fq-title">Your Beauty Questions, Answered</h2>
      <img className="fq-vector" src={vector1} alt="" aria-hidden="true" />
      <p className="fq-sub">
        Explore helpful information about our skincare, makeup, haircare, product safety, delivery,
        <br />
        and customer support—all in one place.
      </p>

      <div className="fq-list">
        {FAQS.map((f, i) => (
          <div className={`fq-item${open === i ? " open" : ""}`} key={f.num}>
            <button className="fq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span className="fq-num">{f.num}</span>
              <span className="fq-qt">{f.q}</span>
              <span className="fq-tgl">
                {open === i ? (
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 6h8" /></svg>
                ) : (
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 2v8M2 6h8" /></svg>
                )}
              </span>
            </button>
            <div className="fq-a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>

      <div className="fq-card">
        <div className="fq-art">
          <img src={emoji} alt="Person shrugging with question and exclamation speech bubbles" />
        </div>
        <h3>Any Question?</h3>
        <p className="fq-p">
          Ask anything about products, manufacturing or
          <br />
          supply — our trade team replies within one
          <br />
          business day.
        </p>
        <p className="fq-label">Let us know</p>
        <textarea className="fq-input" placeholder="Type your question here…" />
        <p className="fq-note">No payment is taken here — this simply reaches our trade team.</p>
        <button className="fq-send">Send Question <Arrow /></button>
      </div>
    </section>
  );
};

export default Faq;