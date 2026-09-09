import Distributor from '../../assets/Distributor.svg'
import { ChevronRight, Home } from 'lucide-react'

const serif = "'Playfair Display', Georgia, serif"
const sans = "'Poppins', 'Segoe UI', sans-serif"

const HeroBanner = () => (
    <section
        id="bulkquote-hero"
        className="bq-banner"
        style={{ backgroundImage: `url(${Distributor})` }}
    >
        <style>{`
            /* ============ DESKTOP ≥1024 — matches Manufacturing banner ============ */
            .bq-banner{
                position:relative;
                width:100%;
                height:23.4375vw;
                background-color:#F7F1E8;
                background-size:cover;
                background-position:center top;
                overflow:hidden;
            }
            .bq-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
            .bq-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
                font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
            .bq-crumb a{color:#2E3192;text-decoration:none;font-size:1.4583vw;}
            .bq-crumb a:hover{text-decoration:underline;}
            .bq-ic-home{width:1.6667vw;height:1.6667vw;}
            .bq-ic-chev{width:1.5625vw;height:1.5625vw;color:#252775;}
            .bq-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
                font-size:1.4583vw;font-weight:500;}
            .bq-rule{width:7.0313vw;height:0.1563vw;background:#E38F2E;
                margin-top:0.625vw;border-radius:0.0781vw;}
            .bq-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
                font-size:2.8125vw;font-weight:700;line-height:1.15;}
            .bq-p{margin-top:1.0417vw;color:#70768A;font-family:${sans};
                font-size:1.0417vw;line-height:1.5625vw;max-width:40.625vw;}

            /* ============ PHONES ≤639 — compact hero ============ */
            @media (max-width:639px){
                .bq-banner{height:auto;background-position:0% 50%;}
                .bq-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
                    padding:8vw 6vw 24vw;}
                .bq-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
                .bq-crumb a{font-size:clamp(16px, 2vw, 22px);}
                .bq-ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
                .bq-ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
                .bq-tag{margin-top:3vw;font-size:clamp(16px, 2vw, 24px);}
                .bq-rule{width:clamp(80px, 10vw, 135px);height:3px;margin-top:2vw;border-radius:2px;}
                .bq-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
                .bq-p{margin-top:3vw;font-size:clamp(14px, 1.7vw, 20px);
                    letter-spacing:0.01em;line-height:1.2;max-width:80%;}
            }

            /* ============ TABLET 640–1023 ============ */
            @media (min-width:640px) and (max-width:1023px){
                .bq-banner{height:auto;aspect-ratio:16/9;background-position:0% 50%;}
                .bq-copy{position:absolute;left:5.8vw;top:24vw;width:52%;z-index:2;padding:0;}
                .bq-crumb{font-size:15px;gap:8px;}
                .bq-crumb a{font-size:20px;}
                .bq-ic-home{width:20px;height:20px;}
                .bq-ic-chev{width:18px;height:18px;}
                .bq-tag{margin-top:15px;font-size:18px;}
                .bq-rule{width:100px;height:3px;margin-top:10px;border-radius:2px;}
                .bq-title{margin-top:10px;font-size:34px;}
                .bq-p{margin-top:12px;font-size:15px;
                    letter-spacing:0.01em;line-height:1.55;max-width:none;}
            }
        `}</style>

        <div className="bq-copy">
            <nav className="bq-crumb" aria-label="Breadcrumb">
                <Home className="bq-ic-home" strokeWidth={2.5} />
                <span>Home</span>
                <ChevronRight className="bq-ic-chev" strokeWidth={3} />
                <span>Request a Bulk Quote</span>
            </nav>

            <p className="bq-tag">Bulk enquiry</p>
            <div className="bq-rule" aria-hidden="true" />
            <h1 className="bq-title">Request a bulk quote</h1>

            <p className="bq-p">
                Tell us what you need and in what volume. We will return factory-direct
                pricing, MOQ confirmation, lead times and packaging options.
            </p>
        </div>
    </section>
)

export default HeroBanner