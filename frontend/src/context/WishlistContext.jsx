import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'kamakhya-wishlist'

const readStoredWishlist = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const WishlistContext = createContext(null)

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(readStoredWishlist)

  // Keep localStorage in sync so the wishlist survives page reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds))
    } catch {
      // Ignore storage errors (e.g. private browsing mode).
    }
  }, [wishlistIds])

  const isInWishlist = (id) => wishlistIds.includes(id)

  const toggleWishlist = (id) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((existingId) => existingId !== id) : [...prev, id]
    )
  }

  const removeFromWishlist = (id) => {
    setWishlistIds((prev) => prev.filter((existingId) => existingId !== id))
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