import React, { useState } from 'react';
import { Dish } from '../types';
import { X, Wine, Flame, Clock, Thermometer, ShieldCheck, Plus, Minus, Sparkles } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, options?: { addGoldLeaf?: boolean; addTruffleShavings?: boolean; quantity?: number; specialInstructions?: string }) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [addGoldLeaf, setAddGoldLeaf] = useState(dish.artisanalNotes.includes('24K Edible Gold'));
  const [addTruffleShavings, setAddTruffleShavings] = useState(dish.artisanalNotes.includes('Périgord Winter Truffle'));
  const [specialInstructions, setSpecialInstructions] = useState('');

  let calculatedPrice = dish.price;
  if (addGoldLeaf) calculatedPrice += 12;
  if (addTruffleShavings) calculatedPrice += 15;
  const totalPrice = calculatedPrice * quantity;

  const handleConfirm = () => {
    onAddToCart(dish, {
      quantity,
      addGoldLeaf,
      addTruffleShavings,
      specialInstructions,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#dbc0c2]/50 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f0eee8] text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-6 bg-[#f0eee8] shadow-inner">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#470013]/70 via-transparent to-transparent"></div>
          
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#470013] text-white text-[10px] uppercase font-bold tracking-wider">
            {dish.tag}
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold block">
              {dish.subtitle}
            </span>
            <h3 className="font-serif text-2xl font-bold">{dish.name}</h3>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#f0eee8] flex flex-col items-center text-center border border-[#dbc0c2]/30">
            <Clock className="w-4 h-4 text-[#7f5700] mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-[#887273]">Timing</span>
            <span className="text-xs font-bold text-[#470013]">{dish.prepTime}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#f0eee8] flex flex-col items-center text-center border border-[#dbc0c2]/30">
            <Thermometer className="w-4 h-4 text-[#7f5700] mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-[#887273]">Thermal Lock</span>
            <span className="text-xs font-bold text-[#470013]">{dish.temperatureTarget}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#f0eee8] flex flex-col items-center text-center border border-[#dbc0c2]/30">
            <ShieldCheck className="w-4 h-4 text-[#7f5700] mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-[#887273]">Presentation</span>
            <span className="text-xs font-bold text-[#470013]">{dish.portion}</span>
          </div>
        </div>

        {/* Narrative & Provenance */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-serif text-sm font-bold text-[#470013] mb-1">
              Culinary Composition
            </h4>
            <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
              {dish.description}
            </p>
          </div>

          {dish.heritageRecipe && (
            <div className="p-3 rounded-xl bg-[#f6f3ed] border-l-2 border-[#7f5700]">
              <span className="text-[10px] uppercase tracking-wider text-[#7f5700] font-bold block">
                Heritage Provenance
              </span>
              <p className="text-xs text-[#554243] italic mt-0.5">
                {dish.heritageRecipe}
              </p>
            </div>
          )}

          {/* Sommelier Pairing */}
          <div className="p-3 rounded-xl bg-[#f0eee8] flex items-start gap-3 border border-[#dbc0c2]/30">
            <Wine className="w-5 h-5 text-[#7f5700] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7f5700] font-bold block">
                Cellar Master Pairing
              </span>
              <span className="text-xs text-[#470013] font-semibold italic">
                {dish.sommelierPairing}
              </span>
            </div>
          </div>

          {/* Ingredients list */}
          {dish.ingredients && (
            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-[#887273] font-bold mb-2">
                Prime Artisanal Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-[#f0eee8] text-[#554243] text-xs"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customization Add-ons */}
        <div className="p-4 rounded-xl bg-[#f0eee8] mb-6 space-y-3 border border-[#dbc0c2]/30">
          <h4 className="text-xs uppercase tracking-wider text-[#470013] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#7f5700]" />
            <span>Bespoke Garnish Commissions</span>
          </h4>

          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addGoldLeaf}
                  onChange={(e) => setAddGoldLeaf(e.target.checked)}
                  className="rounded text-[#470013] focus:ring-[#470013]"
                />
                <span>Florentine 24K Edible Gold Leaf Guilding</span>
              </div>
              <span className="font-semibold text-[#7f5700]">+£12.00</span>
            </label>

            <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addTruffleShavings}
                  onChange={(e) => setAddTruffleShavings(e.target.checked)}
                  className="rounded text-[#470013] focus:ring-[#470013]"
                />
                <span>Fresh Table-side Périgord Winter Truffle Shavings</span>
              </div>
              <span className="font-semibold text-[#7f5700]">+£15.00</span>
            </label>
          </div>

          <div className="pt-2">
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Butler plating instructions or allergy protocol..."
              className="w-full bg-[#ffffff] px-3 py-1.5 rounded-lg text-xs text-[#1c1c18] placeholder:text-[#887273] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#dbc0c2]/30">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-3 bg-[#f0eee8] px-3 py-1.5 rounded-xl border border-[#dbc0c2]/40">
            <span className="text-xs text-[#887273]">Vessels:</span>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-serif font-bold text-sm w-4 text-center text-[#470013]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#470013] hover:bg-[#661426] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Seal Into Heated Cloche</span>
            <span className="text-[#ffdeae] font-serif font-bold">
              • £{totalPrice.toFixed(2)}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
