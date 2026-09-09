import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'

const FONT_BODY = "'Poppins', sans-serif"
const FONT_TITLE = "'Playfair Display', 'Playfair', serif"

const ProductCard = ({ product }) => {
    const { isInWishlist, toggleWishlist } = useWishlist()
    const inWishlist = isInWishlist(product.id)

    return (
    <div
        className="relative bg-white w-full max-w-[330px] lg:max-w-[340px] mx-auto"
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            border: '1px solid rgba(204, 164, 102, 0.15)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            transition: 'box-shadow 300ms ease-out',
            overflow: 'hidden',
            height: '100%',
        }}
        onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.16)'
            const img = e.currentTarget.querySelector('.card-img')
            const curve = e.currentTarget.querySelector('.card-curve')
            if (img) img.style.transform = 'scale(1)'
            if (curve) curve.style.transform = 'translateY(4px) scale(1)'
        }}
        onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
            const img = e.currentTarget.querySelector('.card-img')
            const curve = e.currentTarget.querySelector('.card-curve')
            if (img) img.style.transform = 'scale(1.08)'
            if (curve) curve.style.transform = 'translateY(4px) scale(1.08)'
        }}
    >
        {/* ── Image with curved gold bottom ── */}
        <div className="relative w-full" style={{ aspectRatio: '371 / 314' }}>
            <div
                className="absolute inset-0"
                style={{ clipPath: 'url(#figureCardImageClip)' }}
            >
                <img
                    src={product.image}
                    alt={product.title}
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
                className="card-curve absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                    height: '100%',
                    transform: 'translateY(4px) scale(1.08)',
                    transformOrigin: 'center bottom',
                    transition: 'transform 300ms ease-out',
                    overflow: 'visible',
                }}
            >
                <path d="M371 256.16 C371 259.24 369.4 262.1 366.73 263.82 C318.28 294.53 254.65 314 185 314 C115.83 314 52.64 294.78 4.34 264.48 C1.6 262.76 0 259.87 0 256.79" stroke="#CCA466" strokeWidth="2.5" fill="none" />
            </svg>

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
                {(product.tag || 'FEATURED').toUpperCase()}
            </span>

            <button
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    toggleWishlist(product.id)
                }}
                className="absolute rounded-full cursor-pointer"
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
                    cursor: 'pointer',
                    padding: 0,
                }}
                aria-label="Toggle wishlist"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={inWishlist ? '#E38F2E' : 'none'}
                    stroke={inWishlist ? '#E38F2E' : '#2E3192'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
        </div>

        {/* ── Content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '18px 20px 18px', overflow: 'hidden' }}>
            {/* Product title */}
            <Link to={`/products/${product.id}`} className="no-underline">
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
                    {product.title}
                </h3>
            </Link>

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
                {product.desc}
            </p>

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
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span
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
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>MOQ</span>
                        <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.moq}</span>
                    </span>
                </div>

                <span className="max-sm:hidden" style={{ width: '1px', alignSelf: 'stretch', background: '#E8D6B8' }} />

                <div className="pl-4 max-sm:pl-0" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span
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
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>Lead Time</span>
                        <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.lead}</span>
                    </span>
                </div>
            </div>

            <Link
                to={`/products/${product.id}`}
                className="no-underline transition-colors"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '40px',
                    padding: '0 48px',
                    borderRadius: '107px',
                    border: '1.5px solid #2E3192',
                    background: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_BODY,
                    fontWeight: 400,
                    fontSize: '15px',
                    color: '#2E3192',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = '#EEF0FB'
                    e.currentTarget.style.color = '#2E3192'
                    const arrow = e.currentTarget.querySelector('.card-arrow')
                    if (arrow) arrow.style.right = '10px'
                    const text = e.currentTarget.querySelector('.card-view-text')
                    if (text) text.style.transform = 'scaleX(1.06)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFF'
                    e.currentTarget.style.color = '#2E3192'
                    const arrow = e.currentTarget.querySelector('.card-arrow')
                    if (arrow) arrow.style.right = '18px'
                    const text = e.currentTarget.querySelector('.card-view-text')
                    if (text) text.style.transform = 'scaleX(1)'
                }}
            >
                <span className="card-view-text" style={{ whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 300ms ease-out' }}>View Products</span>

                <span
                    className="card-arrow"
                    style={{
                        position: 'absolute',
                        right: '18px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#CBCBE4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        pointerEvents: 'none',
                        transition: 'right 300ms ease-out',
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
    )
}

export default ProductCard