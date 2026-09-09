import { Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'   // ✅ was 'react-router'

const EmptyProducts = () => {
    return (
        <div className="w-full min-h-[180px] sm:min-h-0 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center rounded-2xl bg-white border border-[#EFE6D6] shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-3 py-8 sm:px-8 sm:py-16">
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#FBF3E6] flex items-center justify-center mb-4 sm:mb-6">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#E38F2E]" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-poppins text-xl sm:text-[28px] font-bold text-[#222222] mb-2 sm:mb-3">
                        Your wishlist is empty
                    </h3>
                    <p className="font-poppins text-xs sm:text-base text-[#6B6B6B] max-w-md mx-auto leading-relaxed mb-5 sm:mb-8 px-2">
                        We haven&apos;t saved any items yet. Browse our products and click the
                        heart icon to add them here.
                    </p>

                    <Link
                        to="/products"
                        className="no-underline inline-flex items-center justify-center gap-2 bg-[#2E3192] hover:bg-[#1d1f5c] text-white font-poppins text-xs sm:text-sm font-semibold rounded-lg px-5 py-2.5 sm:px-6 sm:py-3 transition-colors"
                    >
                        Browse Products
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyProducts