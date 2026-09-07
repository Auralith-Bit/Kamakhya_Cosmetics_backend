import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const OrderSummaryCard = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, subtotal, tax, shipping, total } = useCart();

  return (
    <div className="bg-white rounded-[10px] border border-[#D7DAE4] overflow-hidden shadow-sm">
      <div className="px-[25px] pt-[30px] pb-0">
        <div className="border-b border-[#D7DAE4] pb-4 flex items-center justify-between">
          <h2 className="m-0 font-title text-brand-blue text-[22px] font-bold leading-tight">
            Order Summary
          </h2>
          {cartItems.length > 0 && (
            <span className="text-xs text-gray-500 font-medium">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>
      </div>

      <div className="px-[25px] pt-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-10 px-4">
            <div className="w-14 h-14 bg-[#FCF8EE] text-[#CCA466] rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Your cart is empty</h3>
            <p className="text-xs text-gray-500 mb-4 max-w-[240px] mx-auto">
              Explore our formulations catalogue and add items to your custom order.
            </p>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#2E3192] text-white text-xs font-semibold rounded-lg hover:bg-[#252775] transition cursor-pointer border-none"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="order-summary-scroll max-h-[336px] overflow-y-auto pr-1">
            {cartItems.map((item) => (
              <CartItem
                key={item.variantKey || item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="px-[25px] pt-5 pb-[30px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex justify-between text-[14px]">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-800 font-medium">NRs. {Number(subtotal).toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-gray-500">Tax (13%)</span>
              <span className="text-gray-800 font-medium">NRs. {Number(tax).toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-gray-500">Estimated Shipping</span>
              <span className="text-gray-800 font-medium">NRs. {Number(shipping).toLocaleString()}.00</span>
            </div>
          </div>

          <div className="border-t border-[#D7DAE4] mt-5 mb-5" />

          <div className="flex justify-between items-center">
            <span className="text-[17px] font-bold text-brand-blue">Estimated Total</span>
            <span className="text-[20px] font-bold text-brand-blue">NRs. {Number(total).toLocaleString()}.00</span>
          </div>

          <div className="mt-6">
            {/* Submit Request → /order-review */}
            <button
              type="button"
              onClick={() => navigate('/order-review')}
              className="w-full h-[55px] flex items-center justify-center gap-[10px] bg-[#2E3192] !text-white font-semibold text-[15px] rounded-[7px] border-none cursor-pointer transition-all hover:bg-[#252775] active:scale-[0.98]"
            >
              <LockIcon />
              Submit Request
            </button>
            <p className="text-center text-[13px] text-gray-400 mt-4 m-0">
              Final invoice will be issued after review
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryCard;