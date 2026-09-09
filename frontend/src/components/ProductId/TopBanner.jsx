import { ChevronRight, Home } from 'lucide-react'

const serif = "'Playfair Display', Georgia, serif"
const sans = "'Poppins', 'Segoe UI', sans-serif"

const TopBanner = ({ title }) => (
    <section id="product-hero" className="pi-banner">
        <style>{`
            /* ============ DESKTOP ≥1024 ============ */
            .pi-banner{
                position:relative;
                width:100%;
                height:16.5vw;
                background:#F7F0E7;
                overflow:hidden;
            }
            .pi-copy{position:absolute;left:0;right:0;top:50%;
                transform:translateY(-50%);margin:0 auto;
                display:flex;flex-direction:column;align-items:center;
                width:100%;z-index:2;text-align:center;}
            .pi-crumb{display:flex;align-items:center;justify-content:center;
                gap:0.5208vw;color:#E38F2E;
                font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
            .pi-crumb a{color:#E38F2E;text-decoration:none;font-size:1.4583vw;}
            .pi-crumb a:hover{text-decoration:underline;}
            .pi-ic-home{width:1.6667vw;height:1.6667vw;}
            .pi-ic-chev{width:1.5625vw;height:1.5625vw;color:#E38F2E;}
            .pi-title{margin-top:1.0417vw;color:#2E3192;font-family:${sans};
                font-size:2.3vw;font-weight:700;line-height:1.15;}
            a.pi-home-link{font-family:${serif};text-decoration:none;}

            /* ============ PHONES ≤639 ============ */
            @media (max-width:639px){
                .pi-banner{height:auto;}
                .pi-copy{position:relative;z-index:2;left:auto;top:auto;right:auto;
                    transform:none;width:auto;
                    padding:8vw 6vw 10vw;}
                .pi-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
                .pi-crumb a{font-size:clamp(16px, 2vw, 22px);}
                .pi-ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
                .pi-ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
                .pi-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
            }

            /* ============ TABLET 640–1023 ============ */
            @media (min-width:640px) and (max-width:1023px){
                .pi-banner{height:auto;aspect-ratio:16/9;}
                .pi-copy{position:absolute;left:0;right:0;top:50%;
                    transform:translateY(-50%);width:100%;z-index:2;padding:0;
                    display:flex;flex-direction:column;align-items:center;text-align:center;}
                .pi-crumb{font-size:15px;gap:8px;justify-content:center;}
                .pi-crumb a{font-size:20px;}
                .pi-ic-home{width:20px;height:20px;}
                .pi-ic-chev{width:18px;height:18px;}
                .pi-title{margin-top:10px;font-size:34px;}
            }
        `}</style>

        <div className="pi-copy">
            <nav className="pi-crumb" aria-label="Breadcrumb">
                <Home className="pi-ic-home" strokeWidth={2.5} />
                <span className="uppercase">Home</span>
                <ChevronRight className="pi-ic-chev" strokeWidth={3} />
                <span>Products</span>
                <ChevronRight className="pi-ic-chev" strokeWidth={3} />
            </nav>
            <h1 className="pi-title">{title || 'Product Title'}</h1>
        </div>
    </section>
)

export default TopBanner