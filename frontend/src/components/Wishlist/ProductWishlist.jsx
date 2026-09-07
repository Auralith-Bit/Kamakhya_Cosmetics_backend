import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trash2, Package, CalendarClock, Sparkles } from "lucide-react";
import { products as staticProducts } from "../../data/product";
import { useWishlist } from "../../context/WishlistContext";
import { getProducts } from "../../api/products";
import EmptyProducts from "./EmptyProducts";

const WishlistCard = ({ product, onRemove }) => {
    const productId = product._id || product.id;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
            <div className="relative">
                <span className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full text-[#E38F2E]">
                    <Sparkles className="w-3 h-3" />
                    {(product.type || "Featured").toUpperCase()}
                </span>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove(productId);
                    }}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow cursor-pointer hover:bg-red-50 transition"
                    aria-label={`Remove ${product.title} from wishlist`}
                >
                    <Trash2 className="w-4 h-4 text-[#2E3192] hover:text-red-500 transition-colors" />
                </button>

                {/* image → product page */}
                <Link to={`/products/${productId}`} className="block no-underline">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover"
                    />
                </Link>
            </div>

            <div className="p-4">
                {/* title → product page */}
                <Link to={`/products/${productId}`} className="no-underline">
                    <h4 className="text-center font-serif text-lg text-gray-800 mb-1 hover:text-[#2E3192] transition">
                        {product.title}
                    </h4>
                </Link>
                <p className="text-center text-xs text-gray-500 mb-4 line-clamp-2">
                    {product.desc}
                </p>

                <div className="flex justify-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-9 h-9 rounded-full bg-[#FBF6ED] flex items-center justify-center shrink-0">
                            <Package className="w-4 h-4 text-[#CCA466]" />
                        </span>
                        <div className="text-left">
                            <p className="text-[10px] text-[#CCA466]">MOQ</p>
                            <p className="text-xs font-medium text-gray-700">{product.moq}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-9 h-9 rounded-full bg-[#FBF6ED] flex items-center justify-center shrink-0">
                            <CalendarClock className="w-4 h-4 text-[#CCA466]" />
                        </span>
                        <div className="text-left">
                            <p className="text-[10px] text-[#CCA466]">Lead Time</p>
                            <p className="text-xs font-medium text-gray-700">{product.lead}</p>
                        </div>
                    </div>
                </div>

                {/* View Products → product page */}
                <Link
                    to={`/products/${productId}`}
                    className="no-underline w-full flex items-center justify-center gap-2 border border-[#2E3192] text-[#2E3192] rounded-full py-2 text-sm font-medium hover:bg-[#2E3192] hover:text-white transition"
                >
                    View Products
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

const ProductWishlist = () => {
    const { wishlistIds, removeFromWishlist } = useWishlist();
    const [allProducts, setAllProducts] = useState(staticProducts);

    useEffect(() => {
        let isMounted = true;
        async function fetchProductsList() {
            try {
                const res = await getProducts({ limit: 100 });
                if (isMounted && res?.products?.length > 0) {
                    setAllProducts(res.products);
                }
            } catch (err) {
                // Keep static products as fallback
            }
        }
        fetchProductsList();
        return () => { isMounted = false; };
    }, []);

    const wishlistProducts = allProducts.filter((p) => {
        const pId = String(p._id || p.id);
        return wishlistIds.some((id) => String(id) === pId);
    });

    return (
        <section className={`bg-[#FCFAF7] ${wishlistProducts.length === 0 ? "flex flex-col min-h-[calc(100dvh-12.5rem)]" : ""}`}>
            <div className={`${wishlistProducts.length === 0 ? "w-full flex-1 flex flex-col px-[100px] py-[45px]" : "max-w-6xl mx-auto px-5 sm:px-10 py-20"}`}>
                {/* Top Section */}
                {wishlistProducts.length > 0 && (
                    <div className="flex flex-col justify-start">
                        <h2 className="text-[#2E3192] font-playfair text-2xl">Your Wishlist</h2>
                        <p className="text-[#666666] font-poppins">
                            Showing <span className="font-semibold text-gray-800">{wishlistProducts.length}</span> products
                        </p>
                    </div>
                )}

                {/* Product Section */}
                {wishlistProducts.length === 0 ? (
                    <EmptyProducts />
                ) : (
                    <div className="py-14 sm:py-16 lg:py-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                            {wishlistProducts.map((product) => (
                                <WishlistCard
                                    key={product._id || product.id}
                                    product={product}
                                    onRemove={removeFromWishlist}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductWishlist;