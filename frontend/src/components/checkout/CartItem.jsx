import React from 'react';
import QuantityControl from './QuantityControl';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
    <path d="M3.75 7.5H26.25" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.75 7.5V25C23.75 26.25 22.5 27.5 21.25 27.5H8.75C7.5 27.5 6.25 26.25 6.25 25V7.5" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 7.5V5C10 3.75 11.25 2.5 12.5 2.5H17.5C18.75 2.5 20 3.75 20 5V7.5" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 13.75V21.25" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 13.75V21.25" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const itemKey = item.variantKey || item.id;
  const unitLabel = item.unitPrice ? `NRs. ${Number(item.unitPrice).toFixed(2)} / unit` : '';

  return (
    <div className="flex items-start gap-3 py-4 border-b border-gray-100 last:border-b-0">
      <div className="w-[56px] h-[56px] rounded-lg overflow-hidden shrink-0 bg-[#f0e6d6] flex items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-bold text-[#2E3192]">
            KM
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="m-0 text-[14px] font-semibold text-gray-800 leading-snug truncate">
              {item.name}
            </h4>
            <p className="m-0 text-[12px] text-gray-400 mt-0.5">{item.size}</p>
          </div>
          <button
            type="button"
            onClick={() => onRemove && onRemove(itemKey)}
            aria-label={`Remove ${item.name}`}
            className="flex items-center justify-center w-7 h-7 rounded-md border-none bg-transparent cursor-pointer shrink-0 hover:bg-red-50 transition-colors"
          >
            <TrashIcon />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-3">
            <QuantityControl
              quantity={item.quantity}
              onIncrease={() => onQuantityChange && onQuantityChange(itemKey, item.quantity + 1)}
              onDecrease={() => onQuantityChange && onQuantityChange(itemKey, item.quantity - 1)}
            />
            <p className="m-0 text-[12px] text-gray-400">
              {item.quantity} {item.quantity > 1 ? 'batches' : 'batch'} ({Number(item.totalUnits || 0).toLocaleString()} units)
            </p>
          </div>
          <span className="text-[14px] font-bold text-brand-blue whitespace-nowrap">
            NRs. {Number(item.price || 0).toLocaleString()}.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
