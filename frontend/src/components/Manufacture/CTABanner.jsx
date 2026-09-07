import { imgQuoteIcon } from "../../assets/figmaAssets";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

/* ═══════════════════════════════════════════════════════════
   ✏️ EDIT EVERYTHING HERE — ALL CONTROLS IN ONE PLACE
═══════════════════════════════════════════════════════════ */

const LAYOUT = {
  // ✏️ ALIGNMENT
  containerMax: "100%", // "100%" = same left edge as cards above
  shiftPx: 0, // negative = left, positive = right

  // ✏️ SECTION VERTICAL SPACE
  padY: 55,
  padYMobile: 32,
  minH: 240,
  minHMobile: 180,

  // ✏️ TEXT WIDTHS
  textMaxW: 1050,
  headMaxW: 651, // heading stays 2 lines ("...home-care / partnership.")
  descMaxW: 1050, // ✏️ UPDATED (was 950) — wide enough so forced line 1 never wraps early

  // ✏️ TEXT GAPS
  gapEyebrowHeading: 10,
  gapHeadingDesc: 30, // ✏️ UPDATED (was 20) → more air under the heading
  gapButtons: 30,

  // ✏️ BUTTONS
  btnH: 50,
  btnRadius: 7,
  btnPadX: 28,
};

const TYPE = {
  eyebrow: 18,
  eyebrowMin: 14,
  eyebrowColor: "#cca466",

  heading: 38,
  headingMin: 24,
  headingLine: 1.15,

  desc: 18,
  descMin: 14,
  descColor: "#d9d9d9",
  descLineH: 1.7,

  btnText: 18,
  btnTextMin: 14,
};

/* ═══════════════════════════════════════════════════════════ */

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(LAYOUT.padY, LAYOUT.padYMobile),
        paddingBottom: fluid(LAYOUT.padY, LAYOUT.padYMobile),
      }}
      aria-label="Call to action"
    >
      <div className="absolute inset-0 bg-[#0A1230]" />

      <div
        className="absolute inset-0 border-y border-white/15 bg-white/5"
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex w-full flex-col items-center justify-between lg:flex-row lg:items-center"
        style={{
          minHeight: fluid(LAYOUT.minH, LAYOUT.minHMobile),
          maxWidth: LAYOUT.containerMax,
          gap: fluid(231, 24),
          marginLeft: s(LAYOUT.shiftPx),
        }}
      >
        {/* ── LEFT TEXT ── */}
        <div
          className="flex w-full flex-col"
          style={{ maxWidth: s(LAYOUT.textMaxW) }}
        >
          <div
            className="flex flex-col"
            style={{
              maxWidth: s(LAYOUT.headMaxW),
              gap: s(LAYOUT.gapEyebrowHeading),
            }}
          >
            <p
              className="font-['Poppins'] font-medium text-[#cca466]"
              style={{
                fontSize: fluid(TYPE.eyebrow, TYPE.eyebrowMin),
                color: TYPE.eyebrowColor,
              }}
            >
              Ready to source from Kamakhya?
            </p>

            <h2
              className="font-['Playfair_Display'] font-medium text-white"
              style={{
                fontSize: fluid(TYPE.heading, TYPE.headingMin),
                lineHeight: TYPE.headingLine,
                fontVariationSettings: '"opsz" 12, "wdth" 100',
              }}
            >
              Start a reliable beauty and home-care partnership.
            </h2>
          </div>

          {/* ✏️ UPDATED — whitespace-pre-line + \n after "prepare the"
              = paragraph ALWAYS breaks exactly there */}
          <p
            className="whitespace-pre-line font-['Poppins'] font-normal"
            style={{
              marginTop: s(LAYOUT.gapHeadingDesc), // ✏️ heading → paragraph (now 30)
              fontSize: fluid(TYPE.desc, TYPE.descMin),
              lineHeight: TYPE.descLineH,
              color: TYPE.descColor,
              maxWidth: s(LAYOUT.descMaxW),
            }}
          >
            {
              "Tell us what you need, your target quantity and delivery market. Our trade team will prepare the appropriate next step."
            }
          </p>
        </div>

        {/* ── BUTTONS ── */}
        <div
          className="flex w-full flex-col items-center sm:w-auto sm:flex-row sm:items-center lg:shrink-0"
          style={{ gap: fluid(LAYOUT.gapButtons, 12) }}
        >
          <button
            onClick={() => navigate("/bulk-quote")}
            className="flex items-center justify-center bg-[#cca466] transition-colors hover:bg-[#b8935a] focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              height: s(LAYOUT.btnH),
              gap: s(7),
              borderRadius: s(LAYOUT.btnRadius),
              paddingLeft: s(LAYOUT.btnPadX),
              paddingRight: s(LAYOUT.btnPadX),
            }}
          >
            <span
              className="whitespace-nowrap font-['Poppins'] font-medium text-[#151642]"
              style={{ fontSize: fluid(TYPE.btnText, TYPE.btnTextMin) }}
            >
              Request Quote
            </span>

            <img
              src={imgQuoteIcon}
              alt=""
              style={{ height: s(12), width: s(14) }}
            />
          </button>

          <button
            onClick={() => navigate("/products")}
            className="flex items-center justify-center border-2 border-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              height: s(LAYOUT.btnH),
              borderRadius: s(LAYOUT.btnRadius),
              paddingLeft: s(LAYOUT.btnPadX),
              paddingRight: s(LAYOUT.btnPadX),
            }}
          >
            <span
              className="whitespace-nowrap font-['Poppins'] font-medium text-white"
              style={{ fontSize: fluid(TYPE.btnText, TYPE.btnTextMin) }}
            >
              Explore Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;