import React, { useState } from "react";
import { Link } from "react-router-dom";
import vector1 from "../../assets/Vector (1).svg";
import RLimage from "../../assets/RLimage.png";
import Shineimage from "../../assets/Shineimage.png";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ---------------- icons ---------------- */
const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const MailI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" />
  </svg>
);
const ClockI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
);
const Send = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);
const ArrowR = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);
const ChatI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  </svg>
);
const WaI = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
);
const Headset = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" /><path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
  </svg>
);
/* ✅ proper handshake (Wholesale Orders) */
const Handshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);
/* ✅ delivery truck (Reliable Support) */
const TruckI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35a1 1 0 0 0-.78-.38H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);
const ShieldI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Z" /><path d="m9 11.5 2.2 2.2L15.5 9" />
  </svg>
);

/* ---------------- data ---------------- */
const INFO = [
  { Icon: Pin,    title: "Our Location",  lines: ["Kamakhya Cosmetics Pvt.Ltd", "Tilottama–06,Rupandehi", "Lumbini Province, Nepal"] },
  { Icon: PhoneI, title: "Phone Number",  lines: ["+977 9800000000", "+977 9800000000", "(10 A.M–6 P.M.)"] },
  { Icon: MailI,  title: "Email Address", lines: ["kcimanigram@gmail.com", "support@kcimanigram.com", "We reply within 24 hours"] },
  { Icon: ClockI, title: "Working Hours", lines: ["Monday–Friday: 10 A.M.–6 P.M.", "Sunday: 10 A.M.–3 P.M", "Saturday Closed"] },
];

const BRANDS = [
  { img: RLimage,    name: "Royal Luxury", to: "/brands/royal-luxury", desc: "Skincare that defines elegance and delivers royal indulgence every day." },
  { img: Shineimage, name: "Shine",        to: "/brands/shine",        desc: "Skincare that defines elegance and delivers royal indulgence every day." },
];

const FEATS = [
  { Icon: Headset,    title: "Product Consultation", text: "Get expert advice for the right products ." },
  { Icon: Handshake,  title: "Wholesale Orders",     text: "Competitive wholesale prices for bulk orders." },
  { Icon: TruckI,     title: "Reliable Support",     text: "We ensure with quick responses and solutions." },
  { Icon: ShieldI,    title: "Trusted Quality",      text: "Pure quality products made in Nepal." },
];

const ContactSections = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact-body" className="cx-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 ============ */
        .cx-sec{width:100%;background:#F7F3EC;padding:2.5vw 0 4.5vw;}

        /* ---- info strip ---- */
        /* ✅ BASE SHADOW softened to match the family */
        .cx-info{width:82.2917vw;margin:0 auto;background:#FCF9F2;
          border:0.0521vw solid #D7DAE4;border-radius:0.5208vw;
          box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                     0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
          display:flex;justify-content:space-between;align-items:stretch;
          padding:0.9375vw 1.5625vw;min-height:12.4vw;}
        .cx-info-item{position:relative;flex:1;display:flex;flex-direction:column;
          align-items:center;text-align:center;padding:0 1.2vw;}
        .cx-info-item:first-child{padding:0 3vw 0 0.5vw;}
        .cx-info-item:last-child{padding:0 0.5vw 0 3vw;}
        .cx-info-item + .cx-info-item::before{content:"";position:absolute;left:0;top:50%;
          transform:translateY(-50%);width:1px;height:58%;background:#E3E1D9;}

        .cx-ico{width:3.8542vw;height:3.8542vw;border-radius:50%;background:#2E3192;color:#fff;
          display:grid;place-items:center;flex-shrink:0;}
        .cx-ico svg{width:1.5625vw;height:1.5625vw;}

        .cx-info-title{margin-top:0.8333vw;color:#2E3192;font-family:${serif};
          font-size:1.317vw;font-weight:500;letter-spacing:0.023em;}

        .cx-info-rule{position:relative;width:6.9792vw;height:0.5208vw;
          margin:0.5208vw 0 0.625vw;display:flex;align-items:center;justify-content:center;}
        .cx-info-rule::before,.cx-info-rule::after{content:"";position:absolute;top:50%;
          transform:translateY(-50%);width:44%;height:0.26vw;}
        .cx-info-rule::before{left:0;
          background:linear-gradient(to right, rgba(204,164,102,0), #CCA466);
          clip-path:polygon(0 50%, 100% 0, 100% 100%);}
        .cx-info-rule::after{right:0;
          background:linear-gradient(to left, rgba(204,164,102,0), #CCA466);
          clip-path:polygon(100% 50%, 0 0, 0 100%);}
        .cx-info-rule span{width:0.4688vw;height:0.4688vw;border-radius:50%;background:#CCA466;}

        .cx-info-text{color:#555555;font-family:${sans};font-size:0.9375vw;
          font-weight:500;line-height:1.75;}

        /* ---- main row ---- */
        .cx-main{width:82.2917vw;margin:2.5vw auto 0;display:grid;
          grid-template-columns:51.25fr 28.34fr;gap:2.83vw;align-items:stretch;}

        /* ✅ BASE SHADOW softened to match the family */
        .cx-form{background:#FBFBFD;border:1px solid #E6E6EE;border-radius:0.9vw;
          padding:2.2vw 2.7vw 2.7vw;
          box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                     0 1.0417vw 2.0833vw rgba(43,46,126,0.08);}

        .cx-form h3{color:#2E3192;font-family:${sans};font-size:1.35vw;font-weight:600;}
        .cx-form-sub{margin-top:0.4vw;color:#555555;font-family:${sans};font-size:1.05vw;}

        .cx-label{display:block;margin:1.4vw 0 0.55vw;color:#333333;
          font-family:${sans};font-size:1.04vw;font-weight:500;}

        .cx-input,.cx-select,.cx-area{width:100%;background:#F1F1F5;border:1px solid #D9D9E3;
          border-radius:0.68vw;padding:0.9vw 1vw;color:#333333;font-family:${sans};
          font-size:0.9vw;outline:none;transition:border-color .2s;}
        .cx-input::placeholder,.cx-area::placeholder{color:#999999;}
        .cx-input:focus,.cx-select:focus,.cx-area:focus{border-color:#2E3192;}
        .cx-row{display:grid;grid-template-columns:1fr 1fr;gap:2.7vw;}
        .cx-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23333' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat:no-repeat;background-position:right 1vw center;}
        .cx-area{height:10.5vw;resize:vertical;}
        .cx-send{margin-top:1.9vw;width:100%;height:2.75vw;background:#2E3192;border:none;border-radius:0.68vw;
          color:#fff;font-family:${sans};font-size:1.04vw;font-weight:500;letter-spacing:0.02em;
          display:flex;align-items:center;justify-content:center;gap:0.6vw;cursor:pointer;transition:background .2s;}
        .cx-send:hover{background:#252775;}
        .cx-send svg{width:1.04vw;height:1.04vw;}

        /* ---- aside ---- */
        .cx-aside{display:flex;flex-direction:column;gap:1.8vw;}

        .cx-brands{
        background:var(--Blue-700, #252775);
        border-radius:0.9vw;padding:1.6vw 1.6vw 1.2vw;
        color:#fff;flex:1 1 auto;display:flex;flex-direction:column;}
        
        .cx-brands > h4{
        font-family:${sans};
        font-size:1.15vw
        ;font-weight:600;
        margin:0 0 0.4vw 0.3vw;
        }
        
        .cx-brand{flex:1;display:flex;flex-direction:column;justify-content:center;padding:1.3vw 0;}
        .cx-brand + .cx-brand{border-top:1px solid rgba(255,255,255,0.25);}
        
        .cx-brand-head{display:flex;align-items:center;gap:1vw;}
        
        .cx-logo{width:3.8vw;height:3.8vw;border-radius:0.9vw;overflow:hidden;flex-shrink:0;
          display:block;background:#fff;}
        .cx-logo img{width:100%;height:100%;object-fit:contain;display:block;}
        .cx-brand-name{color:#CCA466;font-family:${serif};font-size:1.55vw;font-weight:700;
          line-height:1.15;text-decoration:none;display:inline-block;letter-spacing:0.01em;}
        .cx-brand-name:hover{color:#E3B877;}
        .cx-brand-sub{color:#fff;font-family:${sans};font-size:0.83vw;font-weight:500;margin-top:0.25vw;}
        .cx-brand p{margin-top:1.05vw;color:background: #D9D9D9;font-family:${sans};
          font-size:0.86vw;font-weight:400;line-height:1.6;}
        
        .cx-explore{
        margin-top:1.25vw;
        display:inline-flex;
        align-items:center;
        gap:0.55vw;
        background:transparent;
        border:2px solid #F7DDAF;
        border-radius:0.68vw;
        color:#F7DDAF;
        font-family:${sans};
        font-size:0.88vw;
        font-weight:500;
        letter-spacing:0.02em;
        padding:0.72vw 1.25vw;
        cursor:pointer;
        transition:background .2s;
        text-decoration:none;
        align-self:flex-start;
        }
        
        .cx-explore svg{width:0.85vw;height:0.6vw;color:#CCA466;}

        /* WhatsApp card */
        .cx-quick{background:#E1F0E1;border:1px solid #BFE3C0;border-radius:0.9vw;
          padding:1.5vw 1.3vw;text-align:center;flex-shrink:0;}
        .cx-quick > svg{width:2vw;height:2vw;color:#22C55E;margin:0 auto;display:block;}
        .cx-quick h4{margin-top:0.7vw;color:#333333;font-family:${sans};font-size:1.2vw;font-weight:600;}
        .cx-quick p{margin-top:0.35vw;color:#666666;font-family:${sans};font-size:0.9vw;}
        .cx-wa{margin-top:0.9vw;display:inline-flex;align-items:center;gap:0.5vw;background:#22C55E;color:#fff;
          border:none;border-radius:0.68vw;padding:0.65vw 1.3vw;font-family:${sans};font-size:0.9vw;font-weight:600;
          cursor:pointer;transition:background .2s;}
        .cx-wa:hover{background:#1aad50;}
        .cx-wa svg{width:0.95vw;height:0.95vw;}

        /* ---- why-contact header ---- */
        .cx-head{margin-top:5.7vw;text-align:center;padding:0 8vw;}
        
        .cx-head-tag{
        color:#E38F2E;
        font-family:${sans};
        font-size:0.8333vw;
        font-weight:600;
        letter-spacing:0.18em;
        text-transform:uppercase;
        }
        
        .cx-head-title{
        margin-top:0.6vw;
        color:#2E3192;
        font-family:${serif};
        font-size:1.5625vw;
        font-weight:700;
        }
        
        .cx-squiggle{
        display:block;
        width:9.25vw;
        height:auto;
        margin:0.58vw auto 0;
        }
        
        .cx-head-p{
        margin-top:1vw;
        color:#666666;
        font-family:${sans};
        font-size:1vw;
        line-height: 1.4583vw;
        letter-spacing: 0%;
        max-width:60vw;
        margin-left:auto;
        margin-right:auto;
        }

        .cx-head-p2{display:block;}

        /* ---- feature cards — circles resized to design (≈76px @1920) ---- */
        .cx-feats{width:82.2917vw;margin:3vw auto 0;display:grid;grid-template-columns:repeat(4,1fr);gap:1.6vw;}
        
        /* ✅ BASE SHADOW aligned with the other sections + smooth transition */
        .cx-feat{background:#fff;border-radius:0.9vw;
          box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                     0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
          padding:1.25vw 1.2vw;display:flex;align-items:center;gap:1.1vw;
          transition:box-shadow .3s ease;cursor:pointer;}
          
        /* ✅ HOVER — same softened, wide-spreading shadow, NO movement */
        .cx-feat:hover{
          box-shadow:0 0.625vw 1.25vw rgba(0,0,0,0.12),
                     0 1.5625vw 3.125vw rgba(43,46,126,0.20);
        }
        
        .cx-feat-ico{width:4vw;height:4vw;border-radius:50%;background:#2E3192;color:#fff;
          display:grid;place-items:center;flex-shrink:0;}
        .cx-feat-ico svg{width:1.9vw;height:1.9vw;}
        
        .cx-feat h5{
        color:#333333;
        font-family:${serif};
        font-size:1.1vw;
        font-weight:700;
        line-height:1.2;
        }
        
        .cx-feat p{
        margin-top:0.35vw;
        color:#666666;
        font-family:${sans};
        font-size:0.89vw;
        font-weight: 400;
        line-height:1.5;
        }

        /* ============ MOBILE+TABLET ≤1023 ============ */
        @media (max-width:1023px){
          .cx-sec{padding:8vw 5vw 10vw;}
          
          /* ✅ px-based shadows for containers on small screens */
          /* ✅ MORE SPACE among the 4 info blocks:
             row-gap 6vw→10vw, column-gap 0→8vw, bigger inner padding */
          .cx-info{width:auto;display:grid;grid-template-columns:1fr 1fr;
            gap:10vw 8vw;
            padding:9vw 7vw;min-height:0;
            box-shadow:0 2px 6px rgba(0,0,0,0.08),
                       0 6px 16px rgba(43,46,126,0.08);}
          .cx-info-item{padding:0 !important;}
          .cx-info-item + .cx-info-item::before{display:none;}
          .cx-ico{width:clamp(48px, 7vw, 74px);height:clamp(48px, 7vw, 74px);}
          .cx-ico svg{width:clamp(20px, 3vw, 30px);height:clamp(20px, 3vw, 30px);}
          .cx-info-title{font-size:clamp(14px, 1.9vw, 20px);}
          .cx-info-rule{width:clamp(64px, 12vw, 134px);height:10px;}
          .cx-info-rule::before,.cx-info-rule::after{height:5px;}
          .cx-info-rule span{width:9px;height:9px;}
          .cx-info-text{font-size:clamp(11px, 1.4vw, 15px);line-height:1.7;}

          .cx-main{width:auto;grid-template-columns:1fr;gap:6vw;margin-top:7vw;align-items:start;}
          .cx-form{padding:6vw 5vw 7vw;
            box-shadow:0 2px 6px rgba(0,0,0,0.08),
                       0 6px 16px rgba(43,46,126,0.08);}
          .cx-form h3{font-size:clamp(16px, 2.2vw, 22px);}
          .cx-form-sub{font-size:clamp(12px, 1.5vw, 16px);}
          .cx-label{margin:4vw 0 2vw;font-size:clamp(12px, 1.5vw, 15px);}
          .cx-input,.cx-select,.cx-area{padding:3vw 3.5vw;font-size:clamp(12px, 1.5vw, 16px);border-radius:2vw;}
          .cx-row{grid-template-columns:1fr;gap:0;}
          .cx-area{height:30vw;}
          .cx-send{height:12vw;border-radius:2vw;font-size:clamp(12px, 1.6vw, 17px);}
          .cx-send svg{width:clamp(14px, 1.8vw, 18px);height:clamp(14px, 1.8vw, 18px);}

          .cx-brands{padding:5vw;flex:0 0 auto;}
          .cx-brands > h4{font-size:clamp(14px, 1.9vw, 20px);}
          .cx-brand{padding:4vw 0;}
          .cx-logo{width:clamp(44px, 8vw, 64px);height:clamp(44px, 8vw, 64px);}
          .cx-brand-name{font-size:clamp(17px, 2.4vw, 26px);}
          .cx-brand-sub{font-size:clamp(10px, 1.2vw, 13px);}
          .cx-brand p{font-size:clamp(11px, 1.4vw, 15px);}
          .cx-explore{font-size:clamp(11px, 1.3vw, 14px);padding:2vw 4vw;border-radius:2vw;}
          .cx-quick{padding:6vw 5vw;}
          .cx-quick > svg{width:clamp(26px, 4vw, 40px);height:clamp(26px, 4vw, 40px);}
          .cx-quick h4{font-size:clamp(15px, 2vw, 21px);}
          .cx-quick p{font-size:clamp(11px, 1.4vw, 15px);}
          .cx-wa{font-size:clamp(12px, 1.5vw, 16px);padding:2.5vw 5vw;border-radius:2vw;}

          .cx-head{margin-top:10vw;padding:0;}
          .cx-head-tag{font-size:clamp(11px, 1.4vw, 16px);}
          .cx-head-title{font-size:clamp(20px, 3vw, 32px);}
          .cx-squiggle{width:clamp(80px, 14vw, 140px);}
          .cx-head-p{font-size:clamp(12px, 1.5vw, 16px);line-height:1.6;max-width:none;}

          .cx-feats{width:auto;grid-template-columns:1fr;gap:4vw;margin-top:7vw;}
          
          /* ✅ px-based base + hover shadows for feature cards on small screens */
          .cx-feat{padding:4vw 3.5vw;
            box-shadow:0 2px 6px rgba(0,0,0,0.08),
                       0 6px 16px rgba(43,46,126,0.08);}
          .cx-feat:hover{
            box-shadow:0 4px 10px rgba(0,0,0,0.10),
                       0 12px 24px rgba(43,46,126,0.18);
          }
          .cx-feat-ico{width:clamp(44px, 8vw, 76px);height:clamp(44px, 8vw, 76px);}
          .cx-feat-ico svg{width:clamp(20px, 3.6vw, 36px);height:clamp(20px, 3.6vw, 36px);}
          .cx-feat h5{font-size:clamp(14px, 1.9vw, 20px);}
          .cx-feat p{font-size:clamp(11px, 1.4vw, 15px);}
        }

        @media (min-width:640px) and (max-width:1023px){
          .cx-feats{grid-template-columns:1fr 1fr;}
          /* ✅ tablet: slightly tighter than phones but still airy */
          .cx-info{gap:8vw 6vw;padding:7vw 6vw;}
        }
      `}</style>

      {/* ---- info strip ---- */}
      <div className="cx-info">
        {INFO.map(({ Icon, title, lines }) => (
          <div className="cx-info-item" key={title}>
            <span className="cx-ico"><Icon /></span>
            <h4 className="cx-info-title">{title}</h4>
            <div className="cx-info-rule"><span /></div>
            <p className="cx-info-text">
              {lines.map((l) => (<React.Fragment key={l}>{l}<br /></React.Fragment>))}
            </p>
          </div>
        ))}
      </div>

      {/* ---- form + aside ---- */}
      <div className="cx-main">
        <form className="cx-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <h3>Send us a Message</h3>
          <p className="cx-form-sub">Fill out the form below and we'll get back to you as soon as possible.</p>

          <label className="cx-label">Name *</label>
          <input className="cx-input" required placeholder="Your full name" />

          <div className="cx-row">
            <div>
              <label className="cx-label">Email</label>
              <input className="cx-input" type="email" placeholder="Your full name" />
            </div>
            <div>
              <label className="cx-label">Phone</label>
              <input className="cx-input" type="tel" placeholder="How can we reach you ?" />
            </div>
          </div>

          <label className="cx-label">Inquiry Types</label>
          <select className="cx-select" defaultValue="">
            <option value="">Select an Option</option>
            <option>Product Inquiry</option>
            <option>Wholesale / Distribution</option>
            <option>Private Label</option>
            <option>Other</option>
          </select>

          <label className="cx-label">Message *</label>
          <textarea className="cx-area" required placeholder="Write your message here …" />

          <button className="cx-send" type="submit">
            <Send /> {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>

        <div className="cx-aside">
          <div className="cx-brands">
            <h4>Which brand is your Inquiry About?</h4>
            {BRANDS.map(({ img, name, to, desc }) => (
              <div className="cx-brand" key={name}>
                <div className="cx-brand-head">
                  <Link to={to} className="cx-logo" aria-label={name}>
                    <img src={img} alt={`${name} logo`} />
                  </Link>
                  <span>
                    <Link to={to} className="cx-brand-name">{name}</Link>
                    <span className="cx-brand-sub" style={{ display: "block" }}>A Pure Experience</span>
                  </span>
                </div>
                <p>{desc}</p>
                <Link to={to} className="cx-explore">Explore Colletctions <ArrowR /></Link>
              </div>
            ))}
          </div>

          <div className="cx-quick">
            <ChatI />
            <h4>Need Quick Help?</h4>
            <p>Chat with us instantly on WhatsApp.</p>
            <button className="cx-wa"><WaI /> Chat on WhatsApp</button>
          </div>
        </div>
      </div>

      {/* ---- why contact ---- */}
      <header className="cx-head">
        <span className="cx-head-tag">Why Contact Us</span>
        <h2 className="cx-head-title">We're Here To Help</h2>
        <img className="cx-squiggle" src={vector1} alt="" aria-hidden="true" />
        <p className="cx-head-p">
          From product inquiries to wholesale partnerships, our team is committed to providing{" "}
          <span className="cx-head-p2">prompt, reliable, and personalized support for both Shine and Royal Luxury.</span>
        </p>
      </header>

      <div className="cx-feats">
        {FEATS.map(({ Icon, title, text }) => (
          <div className="cx-feat" key={title}>
            <span className="cx-feat-ico"><Icon /></span>
            <span>
              <h5>{title}</h5>
              <p>{text}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
  
export default ContactSections;