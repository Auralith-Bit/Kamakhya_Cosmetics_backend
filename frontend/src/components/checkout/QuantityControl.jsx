import React from 'react';

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shrink-0 h-[32px]">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="flex items-center justify-center w-[30px] h-full border-none bg-transparent text-gray-500 cursor-pointer transition-colors hover:bg-gray-100 hover:text-gray-800 text-[14px]"
      >
        -
      </button>
      <span className="flex items-center justify-center w-[32px] h-full text-[14px] font-medium text-gray-800 border-x border-gray-200 select-none">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex items-center justify-center w-[30px] h-full border-none bg-transparent text-gray-500 cursor-pointer transition-colors hover:bg-gray-100 hover:text-gray-800 text-[14px]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
