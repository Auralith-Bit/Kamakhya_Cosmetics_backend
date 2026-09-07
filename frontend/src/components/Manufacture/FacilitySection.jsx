import vectorGold from "../../assets/Vector (1) Gold.svg";
import imgManufacturing from "../../assets/manufactureAssets/aboutManu.png"; // ✏️ REPLACED: local image
import {
  imgPlayBtn,
  imgFacilityIcon1,
  imgFacilityIcon2,
  imgFacilityIcon3,
  imgFacilityIcon4,
} from "../../assets/figmaAssets";
// eslint-disable-next-line no-unused-vars
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

const FEATURES = [
  { icon: imgFacilityIcon1, label: "Advanced\nManufacturing" },
  { icon: imgFacilityIcon2, label: "Quality\nAssurance" },
  { icon: imgFacilityIcon3, label: "International\nCertifications" },
  { icon: imgFacilityIcon4, label: "Sustainable\nPractices" },
];

const FacilitySection = () => {
  return (
    <section
      className="bg-[#f5f7fa]"
      style={{
        paddingLeft: fluid(178, 20),
        paddingRight: fluid(50, 20),
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(100, 40),
      }}
      aria-labelledby="facility-heading"
    >
      <div
        className="mx-auto flex w-full flex-col items-center lg:flex-row"
        style={{
          maxWidth: "100%",
          columnGap: fluid(120, 24),
          rowGap: fluid(60, 24),
        }}
      >
        {/* Left: Video / Image */}
        <div
          className="relative w-full overflow-hidden lg:w-auto lg:shrink-0"
          style={{
            width: s(890),
            height: "auto",
            aspectRatio: "890 / 590",
            maxWidth: "100%",
            marginTop: s(0),
            marginBottom: s(0),
            marginLeft: s(0),
            marginRight: s(0),
            borderRadius: s(10),
          }}
        >
          <img
            src={imgManufacturing}
            alt="Inside Kamakhya Cosmetics manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <button
            aria-label="Play manufacturing facility video"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform hover:scale-105"
            style={{ height: s(72), width: s(72), borderRadius: s(12) }}
          >
            <img
              src={imgPlayBtn}
              alt=""
              style={{ height: s(30), width: s(30) }}
            />
          </button>
        </div>

        {/* Right: Content */}
        <div
          className="flex w-full flex-col lg:flex-1"
          style={{ maxWidth: s(662), gap: fluid(40, 20) }}
        >
          <div className="flex flex-col" style={{ gap: fluid(20, 12) }}>
            <div className="flex flex-col" style={{ gap: fluid(25, 12) }}>
              {/* --- TAG / EYEBROW --- */}
              <div
                className="flex flex-col justify-center"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  gap: fluid(10, 6),
                  marginTop: s(-20),
                  marginBottom: s(0),
                  marginLeft: s(0),
                  marginRight: s(0),
                }}
              >
                <p
                  className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
                  style={{ fontSize: fluid(17, 13), letterSpacing: "0.12em" }}
                >
                  Our Manufacturing Facility
                </p>

                <img
                  src={vectorGold}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: s(75),
                    height: "auto",
                    display: "block",
                    marginLeft: s(0),
                  }}
                />
              </div>

              {/* --- TITLE --- */}
              <h2
                id="facility-heading"
                className="font-['Playfair_Display'] font-bold leading-[1.25] lg:whitespace-nowrap"
                style={{ fontSize: fluid(25, 18), maxWidth: "100%" }}
              >
                <span className="text-[#2e3192]">The World-Class </span>
                <span className="text-[#e38f2e]">Manufacturing</span>
                <span className="text-[#2e3192]">, You Can Trust</span>
              </h2>
            </div>

            {/* --- PARAGRAPHS --- */}
            <div
              className="flex w-full flex-col font-poppins font-normal text-left lg:text-justify text-[#1c1b1b]"
              style={{
                gap: fluid(20, 12),
                fontSize: fluid(16, 14),
                lineHeight: 1.7,
              }}
            >
              <p>
                Our modern manufacturing facility combines advanced technology,
                skilled professionals, and strict quality standards to produce
                premium beauty and home care products with precision, safety,
                and consistency.
              </p>
              <p>
                Every stage—from raw material selection and production to
                quality testing and packaging—is carefully monitored to ensure
                products you can trust.
              </p>
            </div>
          </div>

          {/* Feature icons row */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              gap: fluid(12, 8),
              width: "calc(100% + 24px)",
              marginLeft: "-9px",
            }}
          >
            {FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="flex min-w-0 flex-col items-center"
                style={{ gap: fluid(19, 10) }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full border-[#e38f2e]"
                  style={{ height: s(54), width: s(54), borderWidth: s(1.5) }}
                >
                  <img
                    src={feature.icon}
                    alt=""
                    style={{ height: s(24), width: s(24) }}
                  />
                </div>

                <p
                  className="whitespace-pre-line text-center font-['Poppins'] font-medium leading-snug text-[#333]"
                  style={{ fontSize: fluid(18, 12) }}
                >
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
