import React, { useState } from 'react';
import { CartItem, LondonDistrict } from '../types';
import { X, Trash2, Plus, Minus, Thermometer, ShieldCheck, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface ClocheCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToDispatch: () => void;
  selectedDistrict: LondonDistrict;
}

export const ClocheCartDrawer: React.FC<ClocheCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToDispatch,
  selectedDistrict,
}) => {
  if (!isOpen) return null;

  const [formalButlerPlating, setFormalButlerPlating] = useState(true);
  const [beeswaxMonogramSeal, setBeeswaxMonogramSeal] = useState(true);
  const [christofleCutlery, setChristofleCutlery] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    let itemTotal = item.dish.price * item.quantity;
    if (item.addGoldLeaf) itemTotal += 12 * item.quantity;
    if (item.addTruffleShavings) itemTotal += 15 * item.quantity;
    return acc;
  }, 0);

  const tablewareSurcharge = christofleCutlery ? 25 : 0;
  const grandTotal = subtotal + tablewareSurcharge;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#fcf9f3] shadow-2xl border-l border-[#dbc0c2]/40 flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-[#f6f3ed] border-b border-[#dbc0c2]/30 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold">
                Royal Order Manifest
              </span>
              <h3 className="font-serif text-xl text-[#470013] font-bold">
                Heated Cloche Cart
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#f0eee8] text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Thermal Status Banner */}
          <div className="px-6 py-2.5 bg-[#470013] text-white flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-[#ffdeae] animate-pulse" />
              <span className="font-medium">Active Thermal Cloche:</span>
              <span className="font-bold text-[#ffdeae]">68.4°C Constant Lock</span>
            </div>
            <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">
              Ready
            </span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#f0eee8] mx-auto flex items-center justify-center text-[#887273]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-[#470013] font-bold">Your Cloche is Empty</h4>
                <p className="text-xs text-[#554243] max-w-xs mx-auto">
                  Select artisanal delicacies from our Haute Cuisine Repertoire to begin your imperial feast.
                </p>
              </div>
            ) : (
              cartItems.map((item, index) => {
                const itemPrice =
                  (item.dish.price +
                    (item.addGoldLeaf ? 12 : 0) +
                    (item.addTruffleShavings ? 15 : 0)) *
                  item.quantity;

                return (
                  <div
                    key={`${item.dish.id}-${index}`}
                    className="p-4 rounded-xl bg-white shadow-sm border border-[#dbc0c2]/30 flex flex-col space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#dbc0c2]/30"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif text-sm font-bold text-[#470013] truncate">
                            {item.dish.name}
                          </h4>
                          <span className="font-serif font-bold text-sm text-[#470013] shrink-0">
                            £{itemPrice.toFixed(2)}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#7f5700] uppercase font-semibold block">
                          {item.dish.subtitle}
                        </span>
                        <span className="text-[11px] text-[#887273]">
                          {item.dish.portion}
                        </span>

                        {/* Badges for custom add-ons */}
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.addGoldLeaf && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#ffdeae] text-[#470013] font-bold">
                              +24K Gold Leaf (£12)
                            </span>
                          )}
                          {item.addTruffleShavings && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#4a2c33] text-[#ffdeae] font-bold">
                              +Winter Truffle (£15)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Stepper and Delete */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#f0eee8]">
                      <div className="flex items-center gap-2 bg-[#f0eee8] px-2 py-1 rounded-lg border border-[#dbc0c2]/30">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-[#470013] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-serif font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-[#470013] hover:bg-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-xs text-[#887273] hover:text-[#ba1a1a] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            {/* Protocol Service Options */}
            {cartItems.length > 0 && (
              <div className="p-4 rounded-xl bg-[#f0eee8] border border-[#dbc0c2]/30 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold block">
                  White-Glove Butler Preferences
                </span>

                <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formalButlerPlating}
                      onChange={(e) => setFormalButlerPlating(e.target.checked)}
                      className="rounded text-[#470013] focus:ring-[#470013]"
                    />
                    <span>Complimentary Butler Formal Plating</span>
                  </div>
                  <span className="text-[10px] text-[#7f5700] font-bold uppercase">Included</span>
                </label>

                <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={beeswaxMonogramSeal}
                      onChange={(e) => setBeeswaxMonogramSeal(e.target.checked)}
                      className="rounded text-[#470013] focus:ring-[#470013]"
                    />
                    <span>Hand-Poured Beeswax Crest Wax Seal</span>
                  </div>
                  <span className="text-[10px] text-[#7f5700] font-bold uppercase">Included</span>
                </label>

                <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={christofleCutlery}
                      onChange={(e) => setChristofleCutlery(e.target.checked)}
                      className="rounded text-[#470013] focus:ring-[#470013]"
                    />
                    <span>Christofle Silverware Service Deployment</span>
                  </div>
                  <span className="text-xs text-[#470013] font-bold">+£25.00</span>
                </label>
              </div>
            )}
          </div>

          {/* Footer & Checkout button */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#f6f3ed] border-t border-[#dbc0c2]/30 space-y-4">
              <div className="space-y-1.5 text-xs text-[#554243]">
                <div className="flex justify-between">
                  <span>Culinary Degustation Subtotal</span>
                  <span className="font-semibold text-[#1c1c18]">£{subtotal.toFixed(2)}</span>
                </div>
                {christofleCutlery && (
                  <div className="flex justify-between">
                    <span>Christofle Silverware Commission</span>
                    <span className="font-semibold text-[#1c1c18]">£25.00</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Chauffeured Gate to {selectedDistrict.name}</span>
                  <span className="font-bold text-[#7f5700]">Complimentary Butler Transit</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#dbc0c2]/30 text-sm font-bold text-[#470013]">
                  <span>Total Imperial Commission</span>
                  <span className="font-serif text-lg">£{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToDispatch();
                }}
                className="w-full py-3.5 rounded-xl bg-[#470013] hover:bg-[#661426] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                id="cart-proceed-btn"
              >
                <span>Proceed to Diplomatic Dispatch</span>
                <ArrowRight className="w-4 h-4 text-[#ffdeae]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
