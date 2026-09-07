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
      {/* Animated background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#e38f2e]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2e3192]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
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
            className="font-['Poppins'] font-semibold uppercase text-[#e38f2e] transform hover:scale-105 transition-transform duration-300"
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
              height: s(24),
              width: s(172),
              animation: "float 3s ease-in-out infinite",
            }}
          />

          <p
            className="font-['Poppins'] text-[#666] mt-6"
            style={{
              fontSize: fluid(TYPE.intro, TYPE.introMin),
              fontWeight: TYPE.introWeight,
              lineHeight: 1.6,
            }}
          >
            Quality is more than a promise—it's independently verified. Our
            internationally recognized certifications ensure the highest
            standards of safety, performance, and excellence.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          className={`grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${ALIGN_CLASS[LAYOUT.gridAlign]}`}
          style={{
            gap: fluid(LAYOUT.gridGap, LAYOUT.gridGapMobile),
            marginLeft: s(LAYOUT.cardsShiftPx),
          }}
        >
          {CERTS.map((cert, index) => (
            <div
              key={cert.code}
              className="relative flex h-full w-full flex-col items-center border border-[#d7dae4] bg-[#fcf9f2] shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out opacity-0 animate-card-enter group cursor-pointer"
              style={{
                minHeight: s(LAYOUT.cardMinH),
                borderRadius: s(LAYOUT.cardRadius),
                paddingTop: s(LAYOUT.cardPadY),
                paddingBottom: s(LAYOUT.cardPadY),
                paddingLeft: s(LAYOUT.cardPadX),
                paddingRight: s(LAYOUT.cardPadX),
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* ✏️ FIX — FIXED-HEIGHT badge box on every card.
                  The image inside can be any size (cert.badgeSize)
                  but the box height is identical → code/title/desc
                  lines align perfectly across all 5 cards. */}
              <div
                className="flex w-full shrink-0 items-center justify-center"
                style={{ height: s(LAYOUT.badgeBox) }}
              >
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="object-contain drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    height: s(cert.badgeSize ?? LAYOUT.badgeSize),
                    width: s(cert.badgeSize ?? LAYOUT.badgeSize),
                    maxHeight: "100%",
                  }}
                />
              </div>

              {/* blue code */}
              <p
                className="text-center font-['Poppins'] transform transition-all duration-300 group-hover:-translate-y-1"
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
                className="text-center font-['Playfair_Display'] transform transition-all duration-300 group-hover:-translate-y-1"
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
                className="text-center font-['Poppins'] transform transition-all duration-300 group-hover:-translate-y-1"
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

              {/* bottom icon — pinned bottom + ✏️ gap below it now */}
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
                  className="transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                  style={{
                    height: s(LAYOUT.bottomIconSize),
                    width: s(LAYOUT.bottomIconSize),
                  }}
                />
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(227,143,46,0.1) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes card-enter {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-card-enter { animation: card-enter 0.6s ease-out; }
      `}</style>
    </section>
  );
};

export default CertificationsSection;
