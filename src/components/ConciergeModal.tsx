import React, { useState } from 'react';
import { X, Send, Phone, Shield, BellRing, MessageSquare, Check } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [message, setMessage] = useState('');
  const [requestType, setRequestType] = useState('Private Estate Banquet');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#dbc0c2]/50 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f0eee8] text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#7f5700] mb-1">
          <BellRing className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Private Equerry Concierge
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#470013]">
          Direct Mayfair Butler Hotline
        </h3>

        <p className="text-xs text-[#554243] mt-1 mb-6">
          Connect immediately with our head equerry for custom banqueting, rare cellar allocations, or discrete security arrangements.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-[#f0eee8] rounded-xl p-6 border border-[#dbc0c2]/30">
            <div className="w-12 h-12 rounded-full bg-[#661426] text-[#ffdeae] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#470013]">
              Equerry Transmitted
            </h4>
            <p className="text-xs text-[#554243]">
              Your dedicated equerry has received your message and will telephone or dispatch to your estate within 5 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                Commission Category
              </label>
              <select
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full bg-[#ffffff] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
              >
                <option>Private Estate Banquet (8–40 Guests)</option>
                <option>Sommelier Cellar Master Allocations</option>
                <option>Executive Master Chef Residency</option>
                <option>Diplomatic Embassy Protocol Catering</option>
                <option>Private Yacht or Jet Logistics</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                Your Specific Culinary Directives
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="E.g. We require a 7-course Awadhi and French tasting dinner for 12 guests at our Kensington residence with 2010 DRC pairings..."
                className="w-full bg-[#ffffff] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
              />
            </div>

            <div className="p-3 rounded-xl bg-[#f0eee8] flex items-center justify-between border border-[#dbc0c2]/30">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7f5700]" />
                <span className="text-xs text-[#470013] font-semibold">
                  Immediate Telephone Line:
                </span>
              </div>
              <a
                href="tel:+442079460920"
                className="text-xs font-bold text-[#470013] hover:text-[#7f5700]"
              >
                +44 (0) 20 7946 0920
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#470013] hover:bg-[#661426] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#ffdeae]" />
              <span>Transmit to Head Equerry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
