import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Vector.svg";
import goldRule from "../../assets/Vector (1) Gold.svg";
import whiteRule from "../../assets/White Rectangle 13.svg";

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6 2 2 0 0 1 1.9 2.2Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 4.01c-.9.4-1.8.7-2.8.9a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.9 4.7a4 4 0 0 0 1.2 5.4c-.7 0-1.4-.2-2-.6v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.6-2.4.7.9-.5 1.6-1.3 1.9-2.2Z" />
  </svg>
);

/* ✅ link mapping — matches each footer label to an existing App.jsx route */
const FOOTER_LINKS = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Manufacturing & Quality", to: "/manufacture" },
    { label: "Contact Us", to: "/contact" },
  ],
  Brands: [
    { label: "Royal Luxury", to: "/brands/royal-luxury" },
    { label: "Shine", to: "/brands/shine" },
  ],
  "Business Solutions": [
    { label: "Become Distributor", to: "/distributor" },
    { label: "Request Quotes", to: "/bulk-quote" },
  ],
  Products: [
    { label: "Trade catalogue", to: "/products" },
    { label: "Skincare", to: "/products" },
    { label: "Makeup", to: "/products" },
    { label: "Home care", to: "/products" },
    { label: "Saved Products", to: "/wishlist" },   // ✅ routes to /wishlist
  ],
};

const FOOTER_LINK_GROUPS = [
  ["Company", "Brands"],
  ["Business Solutions", "Products"],
];

const LinkLabel = ({ label }) => {
  if (label === "Manufacturing & Quality") {
    return (
      <>
        Manufacturing &amp;<br />Quality
      </>
    );
  }
  return label;
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-[#e9e9ee] font-sans">
      <style>{`
        .fu-email{background:#ffffff;color:#1c1c1c;}
        .fu-email::placeholder{color:#8b90a0;opacity:1;}
        .fu-email:focus{outline:none;}
      `}</style>

      <div className="pt-16 px-[125px] max-lg:px-8 max-tab:px-5 max-lg:pt-12 max-tab:pt-10">

        {/* ── TOP: brand + nav link groups ── */}
        <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-12 pb-10 max-lg:grid-cols-2 max-lg:gap-y-8 max-tab:grid-cols-1">
          <div className="max-lg:col-span-full">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Kamakhya Cosmetics Logo" className="w-[70px] h-auto block" />
              </Link>
              <Link to="/" className="flex flex-col items-center leading-[1.2] no-underline">
                <span className="font-serif font-bold text-xl text-white tracking-[0.5px]">KAMAKHYA</span>
                <span className="flex items-center gap-2 mt-0.5">
                  <img src={goldRule} alt="" className="block h-[3px] w-[18px] shrink-0" />
                  <span className="font-serif font-semibold text-[13px] text-footer-gold tracking-[3px] whitespace-nowrap">COSMETICS</span>
                  <img src={goldRule} alt="" className="block h-[3px] w-[18px] shrink-0" />
                </span>
                <span className="flex items-center gap-1.5 mt-[3px]">
                  <img src={whiteRule} alt="" className="block h-0.5 w-3.5 shrink-0" />
                  <span className="text-[9px] tracking-[1.5px] text-fog whitespace-nowrap">
                    BEAUTY <em className="not-italic">•</em> CARE <em className="not-italic">•</em> TRUST
                  </span>
                  <img src={whiteRule} alt="" className="block h-0.5 w-3.5 shrink-0" />
                </span>
              </Link>
            </div>
            <p className="m-0 text-fog text-sm leading-[1.6] max-w-[260px] max-lg:max-w-full">
              Kamakhya Cosmetics manufactures premium beauty and home-care
              products for retailers, distributors, private-label brands and
              institutions.
            </p>
          </div>

          {FOOTER_LINK_GROUPS.map((groupHeadings) => (
            <div className="grid grid-cols-2 gap-12 max-tab:grid-cols-1" key={groupHeadings.join("-")}>
              {groupHeadings.map((heading) => (
                <div key={heading}>
                  <h4 className="heading-footer">{heading}</h4>
                  <ul className="m-0 p-0 list-none flex flex-col gap-3">
                    {FOOTER_LINKS[heading].map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className="text-fog no-underline text-sm transition-colors hover:text-footer-gold"
                        >
                          <LinkLabel label={link.label} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

      
{/* Divider  */}

      <div className="w-80vw mb-5 h-px bg-[#D9D9D980]" />


        {/* ── MIDDLE: contact / trade info / newsletter ── */}
        <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-12 py-12 max-lg:grid-cols-1 max-lg:gap-8">
          <div>
            <h4 className="heading-footer">Contact &amp; Registered Office</h4>
            <p className="flex items-start gap-2.5 m-0 mb-3.5 text-fog text-sm leading-[1.5]">
              <span className="shrink-0 text-footer-gold mt-0.5"><PinIcon /></span>
              <span>Kamakhya Cosmetics Pvt. Ltd., manigram, Nepal</span>
            </p>
            <p className="flex items-start gap-2.5 m-0 mb-3.5 text-fog text-sm leading-[1.5]">
              <span className="shrink-0 text-footer-gold mt-0.5"><PhoneIcon /></span>
              <span>
                +977 989XXXXXXX
                <br />
                +977 9700000000
              </span>
            </p>
            <p className="flex items-start gap-2.5 m-0 mb-3.5 text-fog text-sm leading-[1.5]">
              <span className="shrink-0 text-footer-gold mt-0.5"><MailIcon /></span>
              <a href="mailto:info@kamakhya.com.np" className="text-fog no-underline transition-colors hover:text-footer-gold">
                info@kamakhya.com.np
              </a>
            </p>
          </div>

          <div>
            <h4 className="heading-footer">Trade Information</h4>
            <p className="m-0 mb-5 text-fog text-sm leading-[1.6] max-w-[300px] max-lg:max-w-full">
              Kamakhya Cosmetics supplies premium beauty and home-care products
              to distributors, retailers, and private-label partners. Pricing
              is by quotation, with minimum order quantities.
            </p>
          </div>

          <div>
            <h4 className="heading-footer">Trade Updates</h4>
            <p className="m-0 mb-5 text-fog text-sm leading-[1.6] max-w-[300px] max-lg:max-w-full">
              New product &amp; capability updates for trade partners.
            </p>
            <form
              className="flex w-full max-w-[320px] overflow-hidden rounded-[4px] mb-[18px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Business email"
                required
                className="fu-email flex-1 border-none outline-none px-3.5 py-3 text-[13px]"
              />
              <button type="submit" aria-label="Subscribe" className="flex items-center border-none bg-royal px-[18px] text-white cursor-pointer transition-colors hover:bg-royal-dark">
                <SendIcon />
              </button>
            </form>
            <div className="flex gap-3">
              <a href="/" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-gold text-footer-gold no-underline transition-colors hover:bg-footer-gold hover:text-navy"><FacebookIcon /></a>
              <a href="/" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-gold text-footer-gold no-underline transition-colors hover:bg-footer-gold hover:text-navy"><InstagramIcon /></a>
              <a href="/" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-gold text-footer-gold no-underline transition-colors hover:bg-footer-gold hover:text-navy"><TwitterIcon /></a>
              <a href="/" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-gold text-footer-gold no-underline transition-colors hover:bg-footer-gold hover:text-navy"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </div>

{/* divider  */}
      <div className="w-full mb-5 h-px bg-[#D9D9D980]" />

      {/* ── BOTTOM: copyright + legal links ── */}
      <div className="pt-6 pb-10 px-[125px] max-lg:px-8 max-tab:px-5">
        <div className="flex items-center justify-between text-[13px] text-muted max-tab:flex-col max-tab:items-start max-tab:gap-3">
          <p className="m-0">&copy; {year} Kamakhya Cosmetics Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/" className="text-muted no-underline transition-colors hover:text-footer-gold">Privacy Policy</a>
            <a href="/" className="text-muted no-underline transition-colors hover:text-footer-gold">Terms of Trade</a>
            <a href="/" className="text-muted no-underline transition-colors hover:text-footer-gold">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;