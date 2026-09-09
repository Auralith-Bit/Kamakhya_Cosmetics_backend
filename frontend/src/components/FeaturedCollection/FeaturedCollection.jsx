import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import nailPolish1 from '../../assets/nailpolish.jpg';
import lipstick from '../../assets/lipstick.jpg';
import oil from '../../assets/oil.jpg';
import wash from '../../assets/wash.jpg';
import { getProducts } from '../../api/products';

const DEFAULT_PRODUCTS = [
  {
    id: 2,
    name: 'Nail Polish',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: nailPolish1,
    moq: '500 pcs',
    leadTime: '7-10 days',
    brand: 'Royal Luxury',
    category: 'Face Care',
  },
  {
    id: 5,
    name: 'Nail Polish',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: lipstick,
    moq: '500 pcs',
    leadTime: '10-15 days',
    brand: 'Royal Luxury',
    category: 'Face Care',
  },
  {
    id: 16,
    name: 'Detergent Powder',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: oil,
    moq: '500 pcs',
    leadTime: '7-10 days',
    brand: 'Shine',
    category: 'Laundry',
  },
  {
    id: 12,
    name: 'Dish Washer',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: wash,
    moq: '500 pcs',
    leadTime: '7-10 days',
    brand: 'Shine',
    category: 'Kitchen & Dishwashing',
  },
];

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const FeaturedCollection = () => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [productsList, setProductsList] = useState(DEFAULT_PRODUCTS);

  useEffect(() => {
    let isMounted = true;
    async function loadFeatured() {
      try {
        const res = await getProducts({ limit: 4 });
        if (isMounted && res?.products?.length > 0) {
          const mapped = res.products.slice(0, 4).map((p, idx) => ({
            id: p._id || p.id,
            name: p.title,
            description: p.desc,
            image: p.image || DEFAULT_PRODUCTS[idx % DEFAULT_PRODUCTS.length].image,
            moq: p.moq,
            leadTime: p.lead,
            brand: p.brand,
            category: p.category,
          }));
          setProductsList(mapped);
        }
      } catch (err) {
        // fallback to default products
      }
    }
    loadFeatured();
    return () => { isMounted = false; };
  }, []);

  return (
    <section
      id="featured-collection"
      aria-label="Featured Collection"
      className="relative w-full bg-[#fcfaf7] overflow-hidden py-20 max-lg:py-16 max-sm:py-10"
    >
      {/* ── HEADER ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1100px] mx-auto mb-12 max-sm:mb-8">
        <p
          className="m-0 font-semibold uppercase"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '12px',
            lineHeight: 'normal',
            letterSpacing: '3.5px',
            color: '#e0912f',
            textAlign: 'center',
            alignSelf: 'stretch',
          }}
        >
          Featured Collection
        </p>

        <h2
          className="m-0"
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            lineHeight: 1.25,
            color: '#2e3192',
            textAlign: 'center',
            textTransform: 'capitalize',
            margin: '6px 0 0',
          }}
        >
          Our Most Loved Collections
        </h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{ display: 'block', margin: '8px auto 0' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
        </svg>

        <p
          className="m-0"
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 400,
            fontSize: 'clamp(13px, 1.4vw, 14.5px)',
            lineHeight: 1.7,
            color: '#666680',
            maxWidth: '620px',
            margin: '12px auto 0',
          }}
        >
          Discover the skincare and beauty products trusted by thousands for radiant, healthy-looking
          skin—crafted with premium ingredients and proven results.
        </p>
      </div>

      {/* ── PRODUCT CARDS GRID ── */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="cardImageClip" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative z-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 px-[125px] max-lg:px-8 max-sm:px-5"
        style={{ gridAutoRows: '1fr' }}
      >
        {productsList.map((product) => {
          const saved = isInWishlist(product.id);
          return (
            <div
              key={product.id}
              className="relative bg-white"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                border: '1px solid rgba(204, 164, 102, 0.15)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                height: '100%',
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('.card-img');
                if (img) img.style.transform = 'scale(1)';
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('.card-img');
                if (img) img.style.transform = 'scale(1.08)';
              }}
            >
              {/* ── Image with curved gold bottom ── */}
              <div className="relative w-full" style={{ aspectRatio: '371 / 314' }}>
                {/* Fixed curved mask – image fills it fully at all times */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'url(#cardImageClip)',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img absolute inset-0 w-full h-full object-cover"
                    style={{
                      objectPosition: 'center 40%',
                      transform: 'scale(1.08)',
                      transition: 'transform 300ms ease-out',
                      transformOrigin: 'center 40%',
                    }}
                  />
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 371 314"
                  fill="none"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 w-full pointer-events-none"
                  style={{ height: '100%', transform: 'translateY(4px)', overflow: 'visible' }}
                >
                  <path d="M371 256.16 C371 259.24 369.4 262.1 366.73 263.82 C318.28 294.53 254.65 314 185 314 C115.83 314 52.64 294.78 4.34 264.48 C1.6 262.76 0 259.87 0 256.79" stroke="#CCA466" strokeWidth="2.5" fill="none" />
                </svg>

                {/* FEATURED badge */}
                <span
                  className="absolute flex items-center"
                  style={{
                    top: '14px',
                    left: '14px',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontFamily: FONT_BODY,
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.8px',
                    background: '#fff',
                    color: '#CCA466',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  FEATURED
                </span>

                {/* Wishlist heart */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute rounded-full cursor-pointer z-10 transition-colors"
                  style={{
                    top: '14px',
                    right: '14px',
                    width: '40px',
                    height: '40px',
                    background: '#fff',
                    border: '2px solid #CCA466',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? "#E38F2E" : "none"} stroke={saved ? "#E38F2E" : "#2E3192"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* ── Content ── */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '18px 20px 18px', overflow: 'hidden' }}>
                {/* Product name */}
                <h3
                  className="m-0"
                  style={{
                    fontFamily: FONT_TITLE,
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: 1.2,
                    color: '#292929',
                    textAlign: 'center',
                    marginBottom: '8px',
                    flexShrink: 0,
                    height: '24px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p
                  className="m-0"
                  style={{
                    fontFamily: FONT_BODY,
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#666',
                    textAlign: 'left',
                    flex: '1 1 auto',
                    minHeight: '0',
                    marginBottom: '14px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.description}
                </p>

                {/* MOQ | divider | Lead Time */}
                <div
                  className="max-sm:flex-wrap"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid #E8D6B8',
                    borderBottom: '1px solid #E8D6B8',
                    padding: '8px 0',
                    marginBottom: '16px',
                    marginTop: 'auto',
                    flexShrink: 0,
                    height: '54px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                  }}
                >
                  {/* MOQ */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#F8EEDC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>MOQ</span>
                      <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.moq}</span>
                    </div>
                  </div>

                  {/* vertical divider */}
                  <div className="max-sm:hidden" style={{ width: '1px', alignSelf: 'stretch', background: '#E8D6B8' }} />

                  {/* Lead Time */}
                  <div className="pl-4 max-sm:pl-0" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#F8EEDC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>Lead Time</span>
                      <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* View Products button */}
                <Link
                  to={product.id && typeof product.id === 'string' && product.id.length === 24 ? `/products/${product.id}` : `/products?brand=${encodeURIComponent(product.brand)}&category=${encodeURIComponent(product.category)}`}
                  className="no-underline transition-colors"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '48px',
                    padding: '0 48px',
                    borderRadius: '107px',
                    border: '2px solid #2E3192',
                    background: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_BODY,
                    fontWeight: 500,
                    fontSize: '15px',
                    color: '#2E3192',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#EEF0FB'; e.currentTarget.style.color = '#2E3192'; const arrow = e.currentTarget.querySelector('.btn-arrow'); if (arrow) arrow.style.transform = 'translateY(-50%) translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#2E3192'; const arrow = e.currentTarget.querySelector('.btn-arrow'); if (arrow) arrow.style.transform = 'translateY(-50%)'; }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>View Products</span>

                  <span
                    className="btn-arrow"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#C9CBEC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      pointerEvents: 'none',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative z-10 flex justify-center mt-10 px-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-lg no-underline transition-colors"
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 600,
            fontSize: '14px',
            color: '#2E3192',
            border: '2px solid #2E3192',
            background: 'transparent',
            padding: '14px 32px',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#EEF0FB'; e.currentTarget.style.color = '#2E3192'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E3192'; }}
        >
          Explore Collections
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCollection;