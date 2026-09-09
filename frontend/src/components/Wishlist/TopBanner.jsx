import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const serif = "'Playfair Display', Georgia, serif"

const TopBanner = () => (
    <section id="wishlist-hero" className="wish-banner">
        <style>{`
            /* ============ DESKTOP ≥1024 — matches Manufacturing banner ============ */
            .wish-banner{
                position:relative;
                width:100%;
                height:23.4375vw;
                background:#F7F0E7;
                overflow:hidden;
            }
            .wish-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
            .wish-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
                font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
            .wish-crumb a{color:#2E3192;text-decoration:none;font-size:1.4583vw;}
            .wish-crumb a:hover{text-decoration:underline;}
            .wish-ic-home{width:1.6667vw;height:1.6667vw;}
            .wish-ic-chev{width:1.5625vw;height:1.5625vw;color:#252775;}
            .wish-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
                font-size:2.8125vw;font-weight:700;line-height:1.15;}

            /* ============ PHONES ≤639 ============ */
            @media (max-width:639px){
                .wish-banner{height:auto;}
                .wish-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
                    padding:8vw 6vw 24vw;}
                .wish-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
                .wish-crumb a{font-size:clamp(16px, 2vw, 22px);}
                .wish-ic-home{width:clamp(16px, 2vw, 22px);height:clamp(16px, 2vw, 22px);}
                .wish-ic-chev{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
                .wish-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
            }

            /* ============ TABLET 640–1023 ============ */
            @media (min-width:640px) and (max-width:1023px){
                .wish-banner{height:auto;aspect-ratio:16/9;}
                .wish-copy{position:absolute;left:5.8vw;top:24vw;width:52%;z-index:2;padding:0;}
                .wish-crumb{font-size:15px;gap:8px;}
                .wish-crumb a{font-size:20px;}
                .wish-ic-home{width:20px;height:20px;}
                .wish-ic-chev{width:18px;height:18px;}
                .wish-title{margin-top:10px;font-size:34px;}
            }
        `}</style>

        <div className="wish-copy">
            <nav className="wish-crumb" aria-label="Breadcrumb">
                <Link to="/" className="flex items-center gap-x-1.5 no-underline">
                    <Home className="wish-ic-home" strokeWidth={2.5} />
                    <span>Home</span>
                </Link>
                <ChevronRight className="wish-ic-chev" strokeWidth={3} />
                <span>Your Wishlist</span>
            </nav>
            <h1 className="wish-title">Your Saved Items</h1>
        </div>
    </section>
)

export default TopBanner