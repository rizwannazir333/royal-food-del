import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface StickyCartBarProps {
  cartItems: CartItem[];
  onProceedToDispatch: () => void;
  onOpenCart: () => void;
}

export const StickyCartBar: React.FC<StickyCartBarProps> = ({
  cartItems,
  onProceedToDispatch,
  onOpenCart,
}) => {
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => {
    let price = item.dish.price * item.quantity;
    if (item.addGoldLeaf) price += 12 * item.quantity;
    if (item.addTruffleShavings) price += 15 * item.quantity;
    return acc;
  }, 0);

  if (totalCount === 0) return null;

  return (
    <div className="sticky bottom-4 z-40 px-5 md:px-8 lg:px-9 pointer-events-none transition-all duration-300">
      <div className="max-w-xl mx-auto bg-[#32171e] text-white rounded-full p-2 shadow-2xl backdrop-blur-xl flex items-center justify-between pointer-events-auto border border-[#7f5700]/40">
        
        {/* Left Count & Info */}
        <button
          type="button"
          onClick={onOpenCart}
          className="flex items-center gap-3 pl-3 text-left group cursor-pointer"
          title="Inspect Cloche Cart"
        >
          <div className="w-10 h-10 rounded-full bg-[#7f5700] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            {totalCount}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-semibold">
              Heated Cloche Cart
            </span>
            <span className="text-xs sm:text-sm text-[#fcf9f3] font-bold">
              £{totalPrice.toFixed(2)} • {totalCount} Royal Course{totalCount > 1 ? 's' : ''}
            </span>
          </div>
        </button>

        {/* Proceed Action */}
        <button
          onClick={onProceedToDispatch}
          className="px-5 sm:px-6 py-2.5 rounded-full bg-[#7f5700] hover:bg-[#9d6d00] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer hover:shadow-xl shrink-0"
          type="button"
          id="sticky-cart-dispatch-btn"
        >
          <span>Proceed to Dispatch</span>
          <ArrowRight className="w-4 h-4 text-[#ffdeae]" />
        </button>

      </div>
    </div>
  );
};
