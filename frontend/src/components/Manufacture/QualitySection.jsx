import imgQualityBadge from "../../assets/manufactureAssets/QualitySection/GMP_main.svg";
import imgQualityDecor from "../../assets/manufactureAssets/QualitySection/Vector.svg";
import imgISOIcon from "../../assets/manufactureAssets/QualitySection/ISO.svg";
import imgGMPIcon from "../../assets/manufactureAssets/QualitySection/GMP.svg";
import imgQAIcon from "../../assets/manufactureAssets/QualitySection/qualityAssured.svg";
import imgSafetyIcon from "../../assets/manufactureAssets/QualitySection/safety_first.svg";
import imgRoyalLuxuryLogoImg from "../../assets/manufactureAssets/QualitySection/royal.png";
import imgSubtract from "../../assets/manufactureAssets/QualitySection/Vector.svg";
import imgFeatureIcon1 from "../../assets/manufactureAssets/QualitySection/authenticQuality.svg";
import imgFeatureIcon2 from "../../assets/manufactureAssets/QualitySection/ExpertClock.svg";
import imgFeatureIcon3 from "../../assets/manufactureAssets/QualitySection/Trusted_left.svg";
import imgFeatureIcon4 from "../../assets/manufactureAssets/QualitySection/Sustainable_GMP.svg";
import imgFeature1 from "../../assets/manufactureAssets/QualitySection/love-authentic-quality.png";
import imgFeature2 from "../../assets/manufactureAssets/QualitySection/love-expert-craftsmanship.png";
import imgFeature3 from "../../assets/manufactureAssets/QualitySection/love-trusted-ingredients.png";
import imgFeature4 from "../../assets/manufactureAssets/QualitySection/love-sustainable-practices.png";
import shineLogo from "../../assets/manufactureAssets/QualitySection/shine.png";
// eslint-disable-next-line no-unused-vars
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

/* ═══════════════════════════════════════════════════════════
   ✏️ EDIT EVERYTHING HERE
═══════════════════════════════════════════════════════════ */

const LAYOUT = {
  containerMax: "100%",
  panelWidth: 600,
  panelHeight: 819,
  panelRadius: 24,
  containerShift: 8,
};

const TYPE = {
  darkHeading: 32,
  darkPara: 18,
  darkParaWeight: 300,
  darkParaLineHeight: 1.7,
  darkParaColor: "#ECECEC",
  darkParaMaxW: 570,

  badgeLabel: 16,
  badgeLabelWeight: 400,
  badgeLabelLineHeight: 1.25,
  badgeColWidth: 95,
  badgeGap: 16,
  badgeRowMaxW: 500,
  badgeDividerH: 56,

  brandName: 24,
  brandTag: 18,
  eyebrow: 18,
  h2: 40,
  cardTitle: 26,
  cardDesc: 18,
  cardDescWeight: 400, // ✏️ FIX #5 — was 300. Normal weight = darker, like design
  cardDescLineHeight: 1.65,
};

const BADGES = [
  { icon: imgISOIcon, label: "ISO\nCertified" },
  { icon: imgGMPIcon, label: "GMP\nComplaint" },
  { icon: imgQAIcon, label: "Quality\nAssured" },
  { icon: imgSafetyIcon, label: "Safety\nFirst" },
];

const BRANDS = [
  { logo: shineLogo, name: "Shine", tagline: "Premium Home Care Collections." },
  {
    logo: imgRoyalLuxuryLogoImg,
    name: "Royal Luxury",
    tagline: "Skincare, Makeup & Beauty.",
  },
];

/* ✏️ FIX #5 — desc strings now carry hard \n breaks,
   exactly like the desired UI's line structure */
const FEATURES = [
  {
    icon: imgFeatureIcon1,
    iconBg: "rgba(251, 192, 45, 0.4)",
    title: "Authentic Quality",
    desc: "Crafted with trusted\ningredients and quality.",
    bgImg: imgFeature1,
  },
  {
    icon: imgFeatureIcon2,
    iconBg: "#D1B0FB",
    title: "Expert Craftsmanship",
    desc: "Every product is crafted\nwith precision & care.",
    bgImg: imgFeature2,
  },
  {
    icon: imgFeatureIcon3,
    iconBg: "rgba(34, 197, 94, 0.2)",
    title: "Trusted Ingredients",
    desc: "Selected for safety, quality,\nand performance.",
    bgImg: imgFeature3,
  },
  {
    icon: imgFeatureIcon4,
    iconBg: "rgba(211, 47, 47, 0.2)",
    title: "Sustainable Practices",
    desc: "Committed to eco-\nfriendly production.",
    bgImg: imgFeature4,
  },
];

const SIZE = {
  cardRadius: 10,
  cardMinH: 265,
  cardPad: 28,
  circle: 89,
  circleIcon: 35,
  descMaxW: 330,
};

/* ═══════════════════════════════════════════════════════════ */

const FeatureCard = ({ feature }) => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: s(SIZE.cardMinH), borderRadius: s(SIZE.cardRadius) }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={feature.bgImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(217, 217, 217, 0) 45%, rgba(244, 244, 244, 0.9) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 flex h-full flex-col items-start"
        style={{ gap: fluid(18, 12), padding: s(SIZE.cardPad) }}
      >
        <div
          className="flex shrink-0 items-center justify-center rounded-full"
          style={{
            height: s(SIZE.circle),
            width: s(SIZE.circle),
            backgroundColor: feature.iconBg,
          }}
        >
          <img
            src={feature.icon}
            alt=""
            style={{ height: s(SIZE.circleIcon), width: s(SIZE.circleIcon) }}
          />
        </div>

        <h4
          className="font-['Playfair_Display'] font-bold leading-snug text-[#2e3192]"
          style={{
            fontSize: fluid(TYPE.cardTitle, 16),
            fontVariationSettings: '"opsz" 12, "wdth" 100',
          }}
        >
          {feature.title}
        </h4>

        {/* ✏️ FIX #5 — whitespace-pre-line so the \n breaks apply;
            weight 400 + #333 = the darker look of the design */}
        <p
          className="whitespace-pre-line font-['Poppins'] text-[#333]"
          style={{
            fontSize: fluid(TYPE.cardDesc, 14),
            fontWeight: TYPE.cardDescWeight,
            lineHeight: TYPE.cardDescLineHeight,
            letterSpacing: "0.01em",
            maxWidth: s(SIZE.descMaxW),
          }}
        >
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

const QualitySection = () => {
  return (
    <section
      className="bg-white"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(70, 32),
      }}
      aria-labelledby="quality-heading"
    >
      <style>{`
        @media (max-width: 1023px) {
          .main-container {
            margin-left: 0 !important;
          }
          .main-panel {
            min-height: auto !important;
          }
          .left-panel {
            width: 100% !important;
          }
          .left-panel-content {
            max-width: 100% !important;
          }
          .badge-row {
            max-width: 100% !important;
          }
          .brands-container {
            max-width: 100% !important;
          }
          .right-panel-heading {
            max-width: 100% !important;
          }
        }
      `}</style>
      <div
        className="main-container w-full"
        style={{
          maxWidth: LAYOUT.containerMax,
          marginLeft: s(LAYOUT.containerShift),
        }}
      >
        <div
          className="main-panel flex flex-col overflow-hidden lg:flex-row lg:items-stretch"
          style={{ borderRadius: s(24), minHeight: s(LAYOUT.panelHeight) }}
        >
          {/* ── LEFT DARK PANEL ── */}
          <div
            className="left-panel flex w-full flex-col items-center lg:shrink-0"
            style={{
              width: s(LAYOUT.panelWidth),
              gap: fluid(40, 20),
              backgroundColor: "#333333",
              borderRadius: `${s(LAYOUT.panelRadius)} 0 0 ${s(LAYOUT.panelRadius)}`,
              paddingLeft: s(15),
              paddingRight: s(15),
              paddingTop: s(29),
              paddingBottom: s(47),
            }}
          >
            <div
              className="left-panel-content flex w-full flex-col items-center lg:max-w-none"
              style={{ maxWidth: s(TYPE.darkParaMaxW), gap: fluid(50, 24) }}
            >
              <div
                className="flex w-full flex-col items-center"
                style={{ gap: fluid(25, 14) }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full border-[#cca466] bg-[#fcf9f2]"
                  style={{ height: s(100), width: s(100), borderWidth: s(5) }}
                >
                  <img
                    src={imgQualityBadge}
                    alt=""
                    style={{ height: s(45), width: s(36) }}
                  />
                </div>

                <div
                  className="flex w-full flex-col items-center"
                  style={{ gap: s(5) }}
                >
                  <h3
                    className="text-center font-['Playfair_Display'] font-bold text-[#dec49c]"
                    style={{
                      fontSize: fluid(TYPE.darkHeading, 22),
                      fontVariationSettings: '"opsz" 12, "wdth" 100',
                    }}
                  >
                    Quality Assured
                  </h3>

                  <img
                    src={imgQualityDecor}
                    alt=""
                    className="max-w-full"
                    style={{ height: s(10), width: s(250) }}
                  />

                  <p
                    className="whitespace-pre-line text-center font-['Poppins']"
                    style={{
                      fontSize: fluid(TYPE.darkPara, 13),
                      fontWeight: TYPE.darkParaWeight,
                      lineHeight: TYPE.darkParaLineHeight,
                      letterSpacing: "0.01em",
                      color: TYPE.darkParaColor,
                    }}
                  >
                    {
                      "Manufactured in our ISO-certified facility, adhering to\nquality, safety, and hygiene standards for premium\nproduct excellence."
                    }
                  </p>
                </div>
              </div>

              <div
                className="badge-row flex w-full flex-wrap items-center justify-center"
                style={{
                  maxWidth: s(TYPE.badgeRowMaxW),
                  gap: s(TYPE.badgeGap),
                }}
              >
                {BADGES.map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex items-center"
                    style={{ gap: s(TYPE.badgeGap) }}
                  >
                    <div
                      className="flex flex-col items-center"
                      style={{ width: s(TYPE.badgeColWidth), gap: s(10) }}
                    >
                      <img
                        src={badge.icon}
                        alt=""
                        style={{ height: s(30), width: s(30) }}
                      />
                      <p
                        className="whitespace-pre-line text-center font-['Playfair_Display'] font-normal text-white"
                        style={{
                          fontSize: fluid(TYPE.badgeLabel, 12),
                          fontWeight: TYPE.badgeLabelWeight,
                          lineHeight: TYPE.badgeLabelLineHeight,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {badge.label}
                      </p>
                    </div>
                    {index < BADGES.length - 1 && (
                      <div
                        className="hidden sm:block"
                        style={{
                          height: s(TYPE.badgeDividerH),
                          width: s(1.5),
                          borderRadius: s(10),
                          backgroundColor: "rgba(217,217,217,0.3)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="brands-container flex w-full flex-col items-stretch"
              style={{ maxWidth: s(510), gap: fluid(25, 14) }}
            >
              <div className="flex flex-col items-center" style={{ gap: s(5) }}>
                <h3
                  className="text-center font-['Playfair_Display'] font-bold text-[#dec49c]"
                  style={{
                    fontSize: fluid(TYPE.darkHeading, 22),
                    fontVariationSettings: '"opsz" 12, "wdth" 100',
                  }}
                >
                  Our Two Brands
                </h3>
                <img
                  src={imgQualityDecor}
                  alt=""
                  className="max-w-full"
                  style={{ height: s(10), width: s(250) }}
                />
              </div>

              <div
                className="flex w-full flex-col items-center justify-center sm:flex-row"
                style={{ gap: s(15) }}
              >
                {BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex w-full items-center justify-center border border-[#d7dae4] bg-[#fcf9f2]"
                    style={{
                      height: s(212),
                      maxWidth: s(245),
                      borderRadius: s(10),
                      paddingLeft: s(30),
                      paddingRight: s(30),
                      paddingTop: s(60),
                      paddingBottom: s(60),
                    }}
                  >
                    <div
                      className="flex flex-col items-center"
                      style={{ gap: s(3) }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="object-contain"
                        style={{ height: s(60), width: s(60) }}
                      />
                      <p
                        className="text-center font-['Playfair_Display'] font-bold text-[#2e3192]"
                        style={{
                          fontSize: fluid(TYPE.brandName, 16),
                          fontVariationSettings: '"opsz" 12, "wdth" 100',
                        }}
                      >
                        {brand.name}
                      </p>
                      <div
                        className="bg-[#cca466]"
                        style={{
                          height: s(3),
                          width: s(65),
                          borderRadius: s(20),
                        }}
                      />
                      <p
                        className="text-center font-['Poppins'] font-normal leading-snug text-[#333]"
                        style={{
                          fontSize: fluid(TYPE.brandTag, 13),
                          lineHeight: 1.5,
                        }}
                      >
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            className="flex flex-1 flex-col justify-center border border-[#d7dae4] bg-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)]"
            style={{
              gap: fluid(40, 20),
              padding: fluid(40, 24),
              borderTopRightRadius: s(20),
              borderBottomRightRadius: s(20),
            }}
          >
            <div
              className="right-panel-heading flex flex-col"
              style={{ maxWidth: s(770) }}
            >
              <p
                className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
                style={{
                  fontSize: fluid(TYPE.eyebrow, 13),
                  letterSpacing: "0.12em",
                }}
              >
                Why You'll Love It
              </p>
              <h2
                id="quality-heading"
                className="font-['Playfair_Display'] font-bold capitalize leading-tight text-[#2e3192]"
                style={{
                  fontSize: fluid(TYPE.h2, 24),
                  fontVariationSettings: '"opsz" 12, "wdth" 100',
                }}
              >
                Experience the Kamakhya Difference
              </h2>
              <img
                src={imgSubtract}
                alt=""
                className="max-w-full"
                style={{ marginTop: s(14), height: s(10), width: s(300) }}
              />
            </div>

            <div
              className="grid flex-1 grid-cols-1 sm:grid-cols-2"
              style={{ gap: fluid(40, 16) }}
            >
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
