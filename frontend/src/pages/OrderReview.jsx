import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const BANNER_TOP_SPACE = 40;    
const BANNER_BOTTOM_SPACE = 40;  
const BANNER_MIN_HEIGHT = 0;    

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="m8.5 12.2 2.3 2.3 4.7-5" />
  </svg>
);
const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /><path d="M7.5 5.5l9 5" />
  </svg>
);

const DEMO_PRODUCTS = [
  { name: "Botanical Resurfacing Serum", meta: "30ml . 3 × 500 = 1,500 units", price: "NRs. 3,860.00" },
  { name: "Botanical Resurfacing Serum", meta: "30ml . 3 × 500 = 1,500 units", price: "NRs. 3,860.00" },
  { name: "Revitalizing Night Cream",    meta: "50ml . 2 × 750 = 1,500 units", price: "NRs. 4,200.00" },
  { name: "Hydrating Facial Mist",       meta: "100ml . 5 × 300 = 1,500 units", price: "NRs. 2,700.00" },
  { name: "Vitamin C Brightening Drops", meta: "15ml . 10 × 150 = 1,500 units", price: "NRs. 5,100.00" },
];

const STEPS = [
  { num: "01", tag: "Current", title: "Request review",
    text: "We verify your business details, product configurations and delivery destination.", state: "current" },
  { num: "02", tag: "Next", title: "Awaiting approval (Pro forma invoice)",
    text: "Availability, freight, tax and payment terms are confirmed by email for your approval.", state: "" },
  { num: "03", tag: "Then", title: "Payment & fulfilment",
    text: "After payment or approved credit terms, production or dispatch is scheduled and tracking is shared.", state: "" },
];

const OrderReview = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, shipping, total } = useCart();

  const displayProducts = cartItems.length > 0
    ? cartItems.map((item) => ({
        name: item.name,
        meta: `${item.size} (${Number(item.totalUnits || 0).toLocaleString()} units)`,
        price: `NRs. ${Number(item.price || 0).toLocaleString()}.00`,
      }))
    : DEMO_PRODUCTS;

  const displaySubtotal = cartItems.length > 0 ? `NRs. ${Number(subtotal).toLocaleString()}` : "NRs. 16,720";
  const displayShipping = cartItems.length > 0 ? `NRs. ${Number(shipping).toLocaleString()}` : "NRs. 500";
  const displayTotal = cartItems.length > 0 ? `NRs. ${Number(total).toLocaleString()}.00` : "NRs. 9,760.00";

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleContactSupport = () => {
    navigate("/contact");
  };

  return (
    <section id="order-review" className="or-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 ============ */
        .or-sec{width:100%;background:#F5F2EC;padding:2.6vw 0 5vw;}
        .or-wrap{width:82.2917vw;margin:0 auto;background:#F8F9FB;border-radius:0.5208vw;
          overflow:hidden;box-shadow:0 0.6vw 1.6vw rgba(0,0,0,0.06);}

        /* navy banner — top/bottom space comes from the 3 numbers above */
        .or-banner{background:#1B2051;padding-left:2.6vw;padding-right:2.6vw;
          display:flex;align-items:center;justify-content:space-between;gap:2vw;}
        .or-banner h2{
          color: #FFF;
          font-family: Playfair;
          font-size: 1.85vw;
          font-style: normal;
          font-weight: 500;
          margin-left: -0.5vw;
          letter-spacing: 0.03em;
          line-height: normal;
        }
        
        .or-banner p{
          margin-top:0.7vw;
          color: #D9D9D9;
          font-family: Poppins;
          font-size: 0.92vw;
          font-style: normal;
          font-weight: 400;
          margin-left: 0.1vw;
          line-height: normal;
        }

        /* line break forced after "enterprise" */
        .or-banner p .or-line{display:block;}
        
        .or-status{display:flex;flex-direction:column;align-items:center;gap:0.7vw;flex-shrink:0;}
        .or-status svg{width:2.9vw;height:2.9vw;color:#CCA466;}
        
        .or-status span{
        color:#CCA466;
        font-family:${sans};
        font-size:1.2vw;
        font-weight:500;
        }

        /* ---- body grid ---- */
        .or-body{
        display:grid;
        grid-template-columns:1fr 1.28fr;
        gap:2.6vw;
        margin-left: 3vw;
        margin-right: 3vw;
        padding:2.6vw;
        }

        /* ---- left column ---- */
        .or-label{
        color: var(--Orange-700, #A38352);
        font-family:${sans};
        font-size:1.4vw;
        font-weight:500;
        }
        
        .or-ref{
        margin-top:0.5vw;
        color:#2E3192;
        font-family:${serif};
        font-size:1.8vw;
        letter-spacing: 0.03em;
        font-weight:700;
        }
        
        .or-date{
        margin-top:0.6vw;
        color:#555;
        font-family:${sans};
        font-size:0.92vw;
        letter-spacing: 0.01em;
        }
        
        .or-note{
        margin-top:1.3vw;
        color:#555;
        font-family:${sans};
        font-size:0.92vw;
        line-height:1.6;
        max-width:25vw;
        }

        .or-ship{
        margin-top:1.4vw;
        background:#fff;
        border:1px solid #DFE3EC;
        border-radius:0.467vw;
        padding:1.2vw 1.3vw;
        }
        
        .or-ship h4{
        color:#333;
        font-family:${sans};
        font-size:0.92vw;
        font-weight:600;
        }

        .or-ship .or-name{
        margin-top:0.8vw;
        color:var(--Blue-500, #2E3192);
        font-family:${sans};
        font-size:0.89vw;
        font-weight:500;
        }
        
        .or-ship p{
        margin-top:0.55vw;
        color:#444;
        font-family:${sans};
        font-size:0.89vw;
        line-height:1.5;
        }

        .or-ship hr{margin:0.9vw 0;border:none;border-top:1px solid #E3E6EF;}

        /* ---- step cards ---- */
        .or-step{
        margin-top:1.3vw;
        display:flex;
        align-items:flex-start;
        gap:1vw;
        background:#FBFCFE;
        border:1px solid #E5E7EF;
        border-radius:0.5208vw;
        padding:1.35vw 1.5vw;
        }
        .or-step.current{
        background:#F6F1E7;
        border-color:#EDE6D8;
        }
        .or-step-num{
        width:1.875vw;height:1.875vw;border-radius:50%;flex-shrink:0;
        display:grid;place-items:center;background:#E4E4F0;color:#000;
        font-family:${sans};font-size:0.89vw;font-weight:600;
        }
        /* number 01 in black on gold */
        .or-step.current .or-step-num{background:#B98A3E;color:#000;}
        .or-step-tag{
        color:#B08A4F;
        font-family:${sans};
        font-size:0.83vw;
        font-weight:400;
        }
        .or-step.current .or-step-tag{color:#B08A4F;}
        .or-step h5{
        margin-top:0.35vw;
        color:#2E3192;
        font-family:${serif};
        font-size:1.05vw;
        font-weight:700;
        line-height:1.3;
        letter-spacing:0.03em;
        }
        .or-step-rule{
        display:block;
        width:2.2917vw;
        height:2px;
        background:#C9A05C;
        margin:0.6vw 0 0.7vw;
        }
        .or-step p{
        color: #666;
        font-family: Poppins;
        font-size: 0.89vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        }

        /* ============ RIGHT COLUMN ============ */
        .or-products{
        background:#FAFBFD;
        border:1px solid #E5E7EF;
        border-radius:0.5208vw;
        padding:2vw 1.6vw 1.8vw;
        }
        .or-products-head{
        display:flex;align-items:center;justify-content:space-between;
        padding-bottom:1.3vw;
        border-bottom:1px solid #DDE1EA;
        }
        .or-products-head h4{
        color:#222;
        font-family:${sans};
        font-size:1.15vw;
        font-weight:500;
        margin:0;
        }
        .or-products-head svg{width:1.45vw;height:1.45vw;color:#CCA466;}

        .or-products-head + .or-item{margin-top:2.2vw;}
        .or-item{margin-top:1.7vw;}
        .or-item-row{
        display:flex;
        align-items:baseline;
        justify-content:space-between;
        gap:1vw;
        }
        .or-item-row .n{
        color:#2E3192;
        font-family:${sans};
        font-size:1vw;
        font-weight:500;
        }
        .or-item-row .p{
        color:#2E3192;
        font-family:${sans};
        font-size:0.9vw;
        font-weight:500;
        white-space:nowrap;
        }
        .or-item .m{
        margin-top:0.45vw;
        color:#777;
        font-family:${sans};
        font-size:0.8854vw;
        }

        .or-sum{
        margin-top:2.4vw;
        padding-top:1.2vw;
        border-top:1px solid #DDE1EA;
        }
        .or-sum-row{
        display:flex;justify-content:space-between;
        margin-top:0.9vw;
        color:#333;
        font-family:${sans};
        font-size:0.89vw;
        }
        .or-sum-row span:last-child{
        font-family:${serif};
        color:#444;
        font-weight:600;
        letter-spacing:0.02em;
        }

        .or-total{
        margin-top:1.2vw;
        padding-top:1.2vw;
        border-top:1px solid #DDE1EA;
        display:flex;align-items:baseline;justify-content:space-between;
        }
        .or-total .t{
        color:#2E3192;font-family:${serif};
        font-size:1.3vw;font-weight:700;letter-spacing:0.02em;
        }
        .or-total .v{
        color:#2E3192;font-family:${serif};
        font-size:1.3vw;font-weight:700;letter-spacing:0.02em;
        }
        .or-total-note{
        margin-top:0.7vw;
        color:#888;
        font-family:${sans};
        font-size:0.8854vw;
        }

        .or-actions{margin-top:1.7vw;display:flex;gap:0.9vw;justify-content:center;}
        
        .or-btn1{
        background:#2E3192;
        border:none;
        color:#fff;
        border-radius:0.3125vw;
        padding:0.85vw 1.9vw;
        font-family:${sans};
        font-size:0.83vw;
        font-weight:500;
        cursor:pointer;
        transition:background .2s;
        }
        
        .or-btn2{
        background:var(--Orange-50, #FCFAF7);border:2px solid #CCA466;color:#2E3192;
        border-radius:0.3125vw;padding:0.85vw 1.6vw;font-family:${sans};
        font-size:0.83vw;
        font-weight:500;cursor:pointer;transition:background .2s;}

        /* ============ MOBILE+TABLET ≤1023 ============ */
        @media (max-width:1023px){
        .or-sec{padding:8vw 4vw 12vw;}
        .or-wrap{width:auto;}
        .or-banner{flex-direction:column;align-items:flex-start;
          padding-left:5vw;padding-right:5vw;}
        .or-banner h2{font-size:clamp(18px, 2.6vw, 26px);}
        .or-banner p{font-size:clamp(11px, 1.4vw, 15px);max-width:none;}
        .or-status{flex-direction:row;gap:2.5vw;}
        .or-status svg{width:clamp(34px, 4.5vw, 56px);height:clamp(34px, 4.5vw, 56px);}
        .or-status span{font-size:clamp(12px, 1.5vw, 16px);}

        .or-body{grid-template-columns:1fr;padding:6vw 5vw;gap:7vw;}
        .or-label{font-size:clamp(13px, 1.6vw, 18px);}
        .or-ref{font-size:clamp(20px, 3vw, 30px);}
        .or-date,.or-note{font-size:clamp(11px, 1.4vw, 15px);}
        .or-note{max-width:none;}
        .or-ship h4{font-size:clamp(12px, 1.5vw, 16px);}
        .or-ship p,.or-ship .or-name{font-size:clamp(11px, 1.4vw, 15px);}

        .or-step{padding:4vw 4vw;gap:3vw;margin-top:4vw;}
        .or-step-num{width:clamp(28px, 4.5vw, 40px);height:clamp(28px, 4.5vw, 40px);font-size:clamp(11px, 1.4vw, 15px);}
        .or-step-tag{font-size:clamp(11px, 1.4vw, 15px);}
        .or-step h5{font-size:clamp(15px, 2.1vw, 22px);}
        .or-step p{font-size:clamp(12px, 1.5vw, 16px);}
        .or-step-rule{width:clamp(34px, 4vw, 46px);}

        .or-products{padding:5vw 4vw;}
        .or-products-head h4{font-size:clamp(15px, 1.9vw, 22px);}
        .or-products-head svg{width:clamp(20px, 2.6vw, 28px);height:clamp(20px, 2.6vw, 28px);}
        .or-products-head + .or-item{margin-top:5vw;}
        .or-item{margin-top:4vw;}
        .or-item-row .n,.or-item-row .p{font-size:clamp(13px, 1.6vw, 19px);}
        .or-item .m{font-size:clamp(11px, 1.4vw, 17px);}
        .or-sum-row{font-size:clamp(12px, 1.5vw, 18px);}
        .or-total .t,.or-total .v{font-size:clamp(18px, 2.4vw, 26px);}
        .or-total-note{font-size:clamp(11px, 1.4vw, 17px);}
        .or-actions{flex-direction:column;}
        .or-btn1,.or-btn2{font-size:clamp(12px, 1.5vw, 16px);padding:3vw 5vw;}
        }
      `}</style>

      <div className="or-wrap">
        {/* ---- blue banner: height controlled by the 3 numbers at the top ---- */}
        <div
          className="or-banner"
          style={{
            paddingTop: BANNER_TOP_SPACE,
            paddingBottom: BANNER_BOTTOM_SPACE,
            minHeight: BANNER_MIN_HEIGHT || "auto",
          }}
        >
          <div>
            <h2>Your request is now in review.</h2>
            <p>
              <span className="or-line">A confirmation has been prepared for hos.019260@gmail.com. Our enterprise</span>
              <span className="or-line">team will verify availability, freight and terms before issuing an invoice.</span>
            </p>
          </div>
          <div className="or-status">
            <CheckCircle />
            <span>Order request submitted</span>
          </div>
        </div>

        {/* ---- body ---- */}
        <div className="or-body">
          {/* left */}
          <div>
            <span className="or-label">Order reference</span>
            <h3 className="or-ref">KC-2026-56498</h3>
            <p className="or-date">Submitted August 26,2026</p>
            <p className="or-note">Save this reference for all communication regarding abc beatiul pasal.</p>

            <div className="or-ship">
              <h4>Delivering to :</h4>
              <p className="or-name">abc beatui pasal.</p>
              <p>Akash Prasad Barai</p>
              <p>Rohini-01</p>
              <p>Chanuli, Nepal</p>
              <hr />
              <p>akasbarai@gmail.com</p>
            </div>

            {STEPS.map((s) => (
              <div className={`or-step ${s.state}`} key={s.num}>
                <span className="or-step-num">{s.num}</span>
                <div>
                  <span className="or-step-tag">{s.tag}</span>
                  <h5>{s.title}</h5>
                  <i className="or-step-rule" />
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* right */}
          <div>
            <div className="or-products">
              <div className="or-products-head">
                <h4>Submitted products</h4>
                <BoxIcon />
              </div>

              {displayProducts.map((p, i) => (
                <div className="or-item" key={i}>
                  <div className="or-item-row">
                    <span className="n">{p.name}</span>
                    <span className="p">{p.price}</span>
                  </div>
                  <p className="m">{p.meta}</p>
                </div>
              ))}

              <div className="or-sum">
                <div className="or-sum-row"><span>Sub Total</span><span>{displaySubtotal}</span></div>
                <div className="or-sum-row"><span>Shipping</span><span>{displayShipping}</span></div>
              </div>

              <div className="or-total">
                <span className="t">Total</span>
                <span className="v">{displayTotal}</span>
              </div>
              <p className="or-total-note">Final invoice issued after review</p>
            </div>

            <div className="or-actions">
              <button className="or-btn1" onClick={handleContinueShopping}>Continue Shopping</button>
              <button className="or-btn2" onClick={handleContactSupport}>Contact Business Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;