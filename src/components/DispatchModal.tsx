import React, { useState, useEffect } from 'react';
import { LondonDistrict, CartItem } from '../types';
import { X, Thermometer, ShieldCheck, Phone, CheckCircle2, Car, Clock, Sparkles } from 'lucide-react';

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDistrict: LondonDistrict;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const DispatchModal: React.FC<DispatchModalProps> = ({
  isOpen,
  onClose,
  selectedDistrict,
  cartItems,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'tracking'>('details');
  const [estateAddress, setEstateAddress] = useState('14 Grosvenor Square, Penthouse Suite');
  const [clientName, setClientName] = useState('Lord Sterling');
  const [clientPhone, setClientPhone] = useState('+44 7700 900821');
  const [diningTime, setDiningTime] = useState('20:15');
  const [temperature, setTemperature] = useState(68.4);
  const [etaMinutes, setEtaMinutes] = useState(selectedDistrict.transitTimeMin);

  // Live telemetry pulse
  useEffect(() => {
    if (step === 'tracking') {
      const interval = setInterval(() => {
        setTemperature((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [step]);

  const grandTotal = cartItems.reduce((acc, item) => {
    let t = item.dish.price * item.quantity;
    if (item.addGoldLeaf) t += 12 * item.quantity;
    if (item.addTruffleShavings) t += 15 * item.quantity;
    return acc;
  }, 0);

  const handleConfirmDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('tracking');
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#dbc0c2]/50 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f0eee8] text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <form onSubmit={handleConfirmDispatch} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#7f5700] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  Diplomatic Dispatch Protocol
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#470013]">
                Commission White-Glove Equerry
              </h3>
              <p className="text-xs text-[#554243] mt-1">
                Your culinary commission will be sealed inside heavy antique brass cloches at 68°C and chauffeured under constant thermal regulation.
              </p>
            </div>

            {/* Estate Details */}
            <div className="space-y-4 bg-[#f0eee8] p-5 rounded-xl border border-[#dbc0c2]/30">
              <h4 className="text-xs uppercase tracking-wider text-[#470013] font-bold">
                Private Estate &amp; Host Credentials
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                    Lordship / Title &amp; Name
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-white px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                    Encrypted Equerry Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-white px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                  Estate Residence Address ({selectedDistrict.name})
                </label>
                <input
                  type="text"
                  required
                  value={estateAddress}
                  onChange={(e) => setEstateAddress(e.target.value)}
                  className="w-full bg-white px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                    Calibrated Dining Bell Time
                  </label>
                  <input
                    type="text"
                    value={diningTime}
                    onChange={(e) => setDiningTime(e.target.value)}
                    placeholder="e.g. 20:15 (Tonight)"
                    className="w-full bg-white px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                    Chauffeured Transit Corridor
                  </label>
                  <div className="w-full bg-white/70 px-3 py-2 rounded-lg text-xs text-[#7f5700] font-semibold border border-[#dbc0c2]/30">
                    {selectedDistrict.name} (~{selectedDistrict.transitTimeMin} Mins)
                  </div>
                </div>
              </div>
            </div>

            {/* Commission Summary */}
            <div className="p-4 rounded-xl bg-[#fcf9f3] border border-[#dbc0c2]/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#887273] block">
                  Commission Grand Total
                </span>
                <span className="font-serif text-2xl font-bold text-[#470013]">
                  £{grandTotal.toFixed(2)}
                </span>
                <span className="text-[11px] text-[#7f5700] block mt-0.5">
                  Includes Hand-Sealed Brass Cloches &amp; Butler Deployment
                </span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#470013] hover:bg-[#661426] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:shadow-xl"
              >
                Seal &amp; Dispatch Order
              </button>
            </div>
          </form>
        ) : (
          /* Real-time Tracking State */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdeae] text-[#470013] text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#7f5700]" />
                <span>Executive Cloche Transit Active</span>
              </div>
              <h3 className="font-serif text-3xl text-[#470013] font-bold">
                Chauffeured Equerry Dispatched
              </h3>
              <p className="text-xs text-[#554243] max-w-md mx-auto">
                Commissioning for {clientName} en route to {estateAddress}.
              </p>
            </div>

            {/* Live Telemetry Card */}
            <div className="p-6 rounded-2xl bg-[#470013] text-white shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#7f5700] flex items-center justify-center text-white">
                    <Thermometer className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold block">
                      Telemetry Sensor Core
                    </span>
                    <span className="font-serif text-2xl font-bold text-white">
                      {temperature}°C
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold block">
                    Estimated Arrival
                  </span>
                  <span className="font-serif text-2xl font-bold text-white">
                    ~{etaMinutes} Mins
                  </span>
                </div>
              </div>

              {/* Progress Milestones */}
              <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#7f5700] text-white flex items-center justify-center text-[10px] font-bold mx-auto">
                    ✓
                  </div>
                  <span className="text-[10px] text-[#ffdeae] block font-semibold">
                    12h Dum Seal
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#7f5700] text-white flex items-center justify-center text-[10px] font-bold mx-auto">
                    ✓
                  </div>
                  <span className="text-[10px] text-[#ffdeae] block font-semibold">
                    Beeswax Crest
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-white text-[#470013] flex items-center justify-center text-[10px] font-bold mx-auto animate-pulse">
                    3
                  </div>
                  <span className="text-[10px] text-white block font-bold">
                    Executive Transit
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white/60 flex items-center justify-center text-[10px] font-bold mx-auto">
                    4
                  </div>
                  <span className="text-[10px] text-white/60 block">
                    Butler Plating
                  </span>
                </div>
              </div>
            </div>

            {/* Assigned Butler Information */}
            <div className="p-4 rounded-xl bg-[#f0eee8] flex items-center justify-between border border-[#dbc0c2]/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#661426] text-[#ffdeae] flex items-center justify-center font-serif font-bold text-base">
                  CM
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#7f5700] font-bold block">
                    Assigned Domestic Equerry
                  </span>
                  <span className="font-serif text-sm font-bold text-[#470013]">
                    Equerry Charles Montgomery
                  </span>
                  <span className="text-xs text-[#554243] block">
                    Household of St. James • Rolls-Royce Phantom VIII
                  </span>
                </div>
              </div>

              <a
                href="tel:+442079460920"
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#661426] hover:text-white text-[#470013] border border-[#dbc0c2]/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Equerry</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#470013] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#661426] transition-colors cursor-pointer"
            >
              Return to Royal Curation
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
