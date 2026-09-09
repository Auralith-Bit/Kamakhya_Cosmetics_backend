import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'

const STORAGE_KEY = 'kamakhya-wishlist'

// Coerce ids to numbers, drop invalid values, and remove duplicates so the
// navbar badge and the wishlist page always count the same real products.
const normalizeIds = (ids) =>
  Array.from(
    new Set(
      (Array.isArray(ids) ? ids : [])
        .map((id) => Number(id))
        .filter((id) => Number.isFinite(id) && id > 0)
    )
  )

const readStoredWishlist = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return normalizeIds(stored ? JSON.parse(stored) : [])
  } catch {
    return []
  }
}

const WishlistContext = createContext(null)

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(readStoredWishlist)
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  // Keep localStorage in sync so the wishlist survives page reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds))
    } catch {
      // Ignore storage errors (e.g. private browsing mode).
    }
  }, [wishlistIds])

  // Auto-hide the toast after a short delay.
  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const showToast = useCallback(() => {
    setToast(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(false), 2000)
  }, [])

  const isInWishlist = (id) => wishlistIds.includes(Number(id))

  const toggleWishlist = (id) => {
    const normalized = Number(id)
    if (!Number.isFinite(normalized) || normalized <= 0) return
    if (wishlistIds.includes(normalized)) {
      setWishlistIds((prev) =>
        prev.filter((existingId) => existingId !== normalized)
      )
    } else {
      setWishlistIds((prev) => [...prev, normalized])
      showToast()
    }
  }

  const removeFromWishlist = (id) => {
    const normalized = Number(id)
    setWishlistIds((prev) =>
      prev.filter((existingId) => existingId !== normalized)
    )
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistCount: wishlistIds.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}

      {/* "Product added to wishlist" popup — bottom right corner */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#2E3192',
            color: '#ffffff',
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            padding: '12px 20px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(46, 49, 146, 0.3)',
            animation: 'kamakhya-toast-in 0.25s ease-out',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="#E38F2E"
            stroke="none"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Product added to wishlist
        </div>
      )}

      <style>{`
        @keyframes kamakhya-toast-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </WishlistContext.Provider>
  )
}

// Fast refresh rule insists a file export only components; a context that
// pairs a provider with a use* hook is the standard exception.
export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}