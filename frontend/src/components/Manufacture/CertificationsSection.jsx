import imgCertISO from "../../assets/manufactureAssets/ceritification/isoBadge.png";
import imgCertGMP from "../../assets/manufactureAssets/ceritification/gmpBadge.png";
import imgCertQA from "../../assets/manufactureAssets/ceritification/qualityAssuranceBadge.png";
import imgCertHACCP from "../../assets/manufactureAssets/ceritification/haccpBadge.png";
import imgCertSustain from "../../assets/manufactureAssets/ceritification/sustainableBadge.png";
import imgCertBadge from "../../assets/manufactureAssets/ceritification/iconShieldCheck.svg";
import imgCertBadge2 from "../../assets/manufactureAssets/ceritification/iconFactory.svg";
import imgCertBadge3 from "../../assets/manufactureAssets/ceritification/iconSearchCheck.svg";
import imgCertBadge4 from "../../assets/manufactureAssets/ceritification/iconEarthLeaf.svg";
import imgWaveDecor from "../../assets/manufactureAssets/ceritification/decorSquiggle.svg";
// eslint-disable-next-line no-unused-vars
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

/* ═══════════════════════════════════════════════════════════
   ✏️ EDIT EVERYTHING HERE — ALL CONTROLS IN ONE PLACE
═══════════════════════════════════════════════════════════ */

const LAYOUT = {
  cardMinH: 420,
  cardPadX: 12,
  cardPadY: 24,
  cardRadius: 10,
  gridGap: 30,
  gridGapMobile: 14,
  gridAlign: "center", // "start" | "center" | "end"

  sectionShiftPx: 0, // moves EVERYTHING (header + cards)
  cardsShiftPx: 15, // moves ONLY the 5-card row

  // ✏️ VERTICAL GAPS INSIDE EACH CARD
  gapBadgeCode: -15,
  gapCodeTitle: 18,
  gapTitleDesc: 15,
  bottomIconGap: 24, // desc → small icon
  gapIconBottom: 18, // ✏️ NEW — small icon → card bottom edge

  headerMaxW: 948,

  // ✏️ BADGE SIZING — the alignment fix
  badgeBox: 220, // FIXED area height on EVERY card → all text lines align across cards
  badgeSize: 190, // global image size (fallback when a card has no badgeSize)

  bottomIconSize: 40,
};

// static class map so Tailwind can see the full class names
const ALIGN_CLASS = {
  start: "justify-items-start",
  center: "justify-items-center",
  end: "justify-items-end",
};

const TYPE = {
  eyebrow: 18,
  h2: 36,
  h2Min: 22,
  intro: 20,
  introMin: 14,
  introWeight: 500,
  introColor: "#666",
  code: 18,
  codeMin: 14,
  codeWeight: 700,
  codeColor: "#2e3192",
  title: 21,
  titleMin: 14,
  titleWeight: 700,
  titleColor: "#e38f2e",
  titleLineH: 1.35,
  desc: 17,
  descMin: 13,
  descWeight: 400,
  descColor: "#333",
  descLineH: 1.6,
};

/* ═══════════════════════════════════════════════════════════
   ✏️ badgeSize = visual size of the image INSIDE the fixed box.
   Changing it NO LONGER breaks alignment between cards.
═══════════════════════════════════════════════════════════ */

const CERTS = [
  {
    img: imgCertISO,
    code: "ISO 9001:2015",
    title: "Quality Management",
    desc: "International standards ensuring consistent product quality.",
    badgeIcon: imgCertBadge,
    badgeSize: 190,
  },
  {
    img: imgCertGMP,
    code: "GMP Certified",
    title: "Manufacturing Excellence",
    desc: "Produced under strict hygiene and manufacturing practices.",
    badgeIcon: imgCertBadge2,
    badgeSize: 175,
  },
  {
    img: imgCertQA,
    code: "Quality Assurance",
    title: "100% Batch Tested",
    desc: "Inspected through rigorous quality assurance before final packaging.",
    badgeIcon: imgCertBadge3,
    badgeSize: 200,
  },
  {
    img: imgCertHACCP,
    code: "HACCP Certified",
    title: "Safety Standards",
    desc: "Maintained through strict preventive quality control practices.",
    badgeIcon: imgCertBadge,
    badgeSize: 185,
  },
  {
    img: imgCertSustain,
    code: "Sustainable Practices",
    title: "Eco-Friendly Production",
    desc: "Responsible manufacturing with strong environmental commitment.",
    badgeIcon: imgCertBadge4,
    badgeSize: 190,
  },
];

const CertificationsSection = () => {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(70, 32),
      }}
      aria-labelledby="cert-heading"
    >
      {/* Static background decoration (no animation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#e38f2e]/5 rounded-full blur-3xl"
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2e3192]/5 rounded-full blur-3xl"
        />
      </div>

      <div
        className="relative z-10 flex w-full flex-col items-center"
        style={{
          maxWidth: "100%",
          gap: fluid(50, 24),
          marginLeft: s(LAYOUT.sectionShiftPx),
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="flex w-full flex-col items-center text-center opacity-0 animate-fade-in-up"
          style={{
            maxWidth: s(LAYOUT.headerMaxW),
            animationDelay: "0.1s",
            animationFillMode: "forwards",
          }}
        >
          <p
            className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
            style={{
              fontSize: fluid(TYPE.eyebrow, 13),
              letterSpacing: "0.12em",
            }}
          >
            Our Certifications
          </p>

          <h2
            id="cert-heading"
            className="font-['Playfair_Display'] font-bold capitalize text-[#2e3192] mt-4"
            style={{
              fontSize: fluid(TYPE.h2, TYPE.h2Min),
              fontVariationSettings: '"opsz" 12, "wdth" 100',
            }}
          >
            Built on Trust. Verified by Global Standards.
          </h2>

          <img
            src={imgWaveDecor}
            alt=""
            className="mt-6"
            style={{
              height: "auto",
              width: s(230),
              marginTop: s(8),
            }}
          />

          <p
            className="font-['Poppins'] text-[#666] mt-6"
            style={{
              fontSize: fluid(TYPE.intro, TYPE.introMin),
              fontWeight: TYPE.introWeight,
              lineHeight: 1.6,
              marginTop: s(8),
            }}
          >
            Quality is more than a promise—it's independently verified. Our
            internationally recognized certifications ensure the highest
            standards of safety, performance, and excellence.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          className={`certs-grid grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${ALIGN_CLASS[LAYOUT.gridAlign]}`}
          style={{
            gap: fluid(LAYOUT.gridGap, LAYOUT.gridGapMobile),
            marginLeft: s(LAYOUT.cardsShiftPx),
          }}
        >
          {CERTS.map((cert, index) => (
            <div
              key={cert.code}
              /* ✅ BASE SHADOW moved from Tailwind utility into <style> for a
                 single source of truth (softer, aligned with other sections). */
              className="ccard relative flex h-full w-full flex-col items-center border border-[#d7dae4] bg-[#fcf9f2] opacity-0 animate-card-enter"
              style={{
                minHeight: s(LAYOUT.cardMinH),
                borderRadius: s(LAYOUT.cardRadius),
                paddingTop: s(LAYOUT.cardPadY),
                paddingBottom: s(LAYOUT.cardPadY),
                paddingLeft: s(LAYOUT.cardPadX),
                paddingRight: s(LAYOUT.cardPadX),
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: "forwards",
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#CCA466';
                e.currentTarget.style.boxShadow = '0 0.25vw 0.5vw rgba(0,0,0,0.09), 0 0.9vw 1.6vw rgba(43,46,126,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d7dae4';
                e.currentTarget.style.boxShadow = '0px 8px 24px -6px rgba(0,0,0,0.08), 0px 20px 50px -12px rgba(0,0,0,0.05)';
              }}
            >
              {/* ✏️ FIX — FIXED-HEIGHT badge box on every card. */}
              <div
                className="badge-box flex w-full shrink-0 items-center justify-center"
                style={{ height: s(LAYOUT.badgeBox) }}
              >
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="badge-img object-contain drop-shadow-lg"
                  style={{
                    height: s(cert.badgeSize ?? LAYOUT.badgeSize),
                    width: s(cert.badgeSize ?? LAYOUT.badgeSize),
                    maxHeight: "100%",
                  }}
                />
              </div>

              {/* blue code */}
              <p
                className="text-center"
                style={{
                  marginTop: s(LAYOUT.gapBadgeCode),
                  fontSize: fluid(TYPE.code, TYPE.codeMin),
                  fontWeight: TYPE.codeWeight,
                  lineHeight: 1.3,
                  color: TYPE.codeColor,
                }}
              >
                {cert.code}
              </p>

              {/* orange title */}
              <p
                className="text-center font-['Playfair_Display']"
                style={{
                  marginTop: s(LAYOUT.gapCodeTitle),
                  fontSize: fluid(TYPE.title, TYPE.titleMin),
                  fontWeight: TYPE.titleWeight,
                  lineHeight: TYPE.titleLineH,
                  color: TYPE.titleColor,
                  fontVariationSettings: '"opsz" 12, "wdth" 100',
                }}
              >
                {cert.title}
              </p>

              {/* description */}
              <p
                className="text-center font-['Poppins']"
                style={{
                  marginTop: s(LAYOUT.gapTitleDesc),
                  fontSize: fluid(TYPE.desc, TYPE.descMin),
                  fontWeight: TYPE.descWeight,
                  lineHeight: TYPE.descLineH,
                  color: TYPE.descColor,
                }}
              >
                {cert.desc}
              </p>

              {/* bottom icon */}
              <div
                className="flex w-full justify-center"
                style={{
                  marginTop: "auto",
                  paddingTop: s(LAYOUT.bottomIconGap),
                  marginBottom: s(LAYOUT.gapIconBottom),
                }}
              >
                <img
                  src={cert.badgeIcon}
                  alt=""
                  className="bottom-icon"
                  style={{
                    height: s(LAYOUT.bottomIconSize),
                    width: s(LAYOUT.bottomIconSize),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations + card hover shadow + tablet fixes */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes card-enter {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-card-enter { animation: card-enter 0.6s ease-out; }

        /* ✅ BASE SHADOW — same softened value used across other sections */
        .ccard{
          transition: box-shadow .3s ease;
          box-shadow:
            0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
            0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
        }

        /* ✅ HOVER — same softened, wide-spreading shadow, NO movement/scale */
        .ccard:hover{
          box-shadow:
            0 0.625vw 1.25vw rgba(0,0,0,0.12),
            0 1.5625vw 3.125vw rgba(43,46,126,0.20);
        }
        
        /* ============ TABLET 640–1023 ============ */
        @media (min-width: 640px) and (max-width: 1023px) {
          .ccard{
            box-shadow:
              0 2px 6px rgba(0,0,0,0.08),
              0 6px 16px rgba(43,46,126,0.08);
          }
          .ccard:hover{
            box-shadow:
              0 4px 10px rgba(0,0,0,0.10),
              0 12px 24px rgba(43,46,126,0.18);
          }
          
          /* Fix squished cards on tablet by enforcing min-height and padding */
          .ccard {
            min-height: 400px !important;
            padding: 24px 16px !important;
          }
          .badge-box {
            height: 160px !important;
          }
          .badge-img {
            height: 140px !important;
            width: 140px !important;
          }
          .bottom-icon {
            height: 32px !important;
            width: 32px !important;
          }
          
          /* Center the 5th orphan card in the 2-column layout */
          .certs-grid > *:nth-child(5) {
            grid-column: 1 / -1;
            max-width: calc(50% - 15px);
            margin: 0 auto;
          }
        }

        /* ============ PHONES ≤639 ============ */
        @media (max-width: 639px) {
          /* ✅ NARROWER CARDS — constrain width to 340px and center */
          .ccard {
            max-width: 340px !important;
            margin: 0 auto;
            box-shadow:
              0 2px 6px rgba(0,0,0,0.08),
              0 6px 16px rgba(43,46,126,0.08);
          }
          .ccard:hover{
            box-shadow:
              0 4px 10px rgba(0,0,0,0.10),
              0 12px 24px rgba(43,46,126,0.18);
          }
          
          /* ✅ MORE SPACE BETWEEN CARDS — increase gap from 14px to 28px */
          .certs-grid {
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;