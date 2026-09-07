import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'kamakhya-cart';

const readStoredCart = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(readStoredCart);

  // Keep localStorage in sync with state
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const addToCart = (productData) => {
    setCartItems((prev) => {
      const itemKey =
        productData.variantKey ||
        `${productData.id || productData._id || productData.productId}-${productData.size || ''}-${productData.packSize || ''}`;
      
      const existingIndex = prev.findIndex(
        (item) => (item.variantKey && item.variantKey === itemKey) || (item.id === productData.id && item.size === productData.size)
      );

      const addQty = Number(productData.quantity) || 1;
      const unitsPerBatch = Number(productData.unitsPerBatch || productData.units) || 500;
      const unitPrice = Number(productData.unitPrice) || (productData.price ? Number(productData.price) / (unitsPerBatch * addQty) : 0);

      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const newQuantity = (Number(existing.quantity) || 1) + addQty;
        const totalUnits = newQuantity * (Number(existing.unitsPerBatch) || unitsPerBatch);
        const price = (Number(existing.unitPrice) || unitPrice) * totalUnits;

        updated[existingIndex] = {
          ...existing,
          quantity: newQuantity,
          totalUnits,
          price: price > 0 ? price : (Number(existing.price) || 0) + (Number(productData.price) || 0),
        };
        return updated;
      } else {
        const totalUnits = Number(productData.totalUnits) || (addQty * unitsPerBatch);
        const price = productData.price != null ? Number(productData.price) : unitPrice * totalUnits;

        const newItem = {
          id: productData.id || productData._id || productData.productId || Date.now(),
          variantKey: itemKey,
          name: productData.name || productData.title || 'Cosmetic Product',
          size: productData.size || `${productData.packSize || 'Standard'} · ${unitsPerBatch} units`,
          packSize: productData.packSize || 'Standard',
          unitPrice,
          unitsPerBatch,
          quantity: addQty,
          totalUnits,
          price: Math.round(price),
          image: productData.image || '',
        };

        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (cartItemIdOrKey) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          item.variantKey !== cartItemIdOrKey &&
          item.id !== cartItemIdOrKey &&
          String(item.id) !== String(cartItemIdOrKey)
      )
    );
  };

  const updateQuantity = (cartItemIdOrKey, newQuantity) => {
    const qty = Number(newQuantity);
    if (qty <= 0) {
      removeFromCart(cartItemIdOrKey);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.variantKey === cartItemIdOrKey ||
          item.id === cartItemIdOrKey ||
          String(item.id) === String(cartItemIdOrKey)
        ) {
          const unitsPerBatch = Number(item.unitsPerBatch) || 500;
          const totalUnits = qty * unitsPerBatch;
          const unitPrice = Number(item.unitPrice) || (Number(item.price) / (Number(item.totalUnits) || 1));
          const price = Math.round(unitPrice * totalUnits);

          return {
            ...item,
            quantity: qty,
            totalUnits,
            price: price > 0 ? price : item.price,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Cart counter: total item quantity in cart
  const cartCount = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);
  const distinctItemCount = cartItems.length;

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0), 0);
  const tax = subtotal > 0 ? +(subtotal * 0.13).toFixed(2) : 0;
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal > 0 ? +(subtotal + tax + shipping).toFixed(2) : 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        distinctItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        tax,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
