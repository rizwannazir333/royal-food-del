import React, { useState } from 'react';
import { ViewTab } from '../types';
import { LOGO_URL } from '../data/dishes';
import { CheckCircle2, Phone, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ViewTab) => void;
  onOpenConcierge: () => void;
  onOpenMembership: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenConcierge,
  onOpenMembership,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f6f3ed] pt-12 pb-8 border-t border-[#dbc0c2]/30 shadow-[0_-1px_12px_rgba(43,17,24,0.03)]">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto">
        
        {/* Top Royal Appointment Banner */}
        <div className="pb-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#f0eee8] rounded-2xl p-6 border border-[#dbc0c2]/30 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#661426] flex items-center justify-center text-[#ffdeae] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#470013] font-bold">
                By Appointment to Epicurean Nobility
              </h4>
              <p className="text-xs text-[#554243]">
                Guaranteed heated golden cloche transit &amp; private butler presentation service across Greater London.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold px-3 py-1 bg-white/70 rounded-full border border-[#dbc0c2]/40">
              Certified Royal Purveyor
            </span>
          </div>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Royal Kitchen Emblem"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-lg text-[#470013] font-bold">
                ROYAL KITCHEN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#554243] max-w-sm leading-relaxed">
              Bespoke haute-cuisine commissions curated by Michelin-starred culinary directorship, chauffeured under velvet warmth directly to private estates and embassies.
            </p>

            {/* Equerry Hotline */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#470013] border border-[#dbc0c2]/40">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#7f5700] font-bold block">
                  Private Equerry Direct
                </span>
                <a
                  href="tel:+442079460920"
                  className="font-sans text-sm text-[#470013] font-bold hover:text-[#7f5700] transition-colors"
                >
                  +44 (0) 20 7946 0920
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Culinary Offerings */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm text-[#470013] font-bold tracking-wide">
              Culinary Offerings
            </h5>
            <ul className="space-y-2 text-xs text-[#554243]">
              <li>
                <button
                  onClick={() => setActiveTab('the-royal-menu')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Seasonal Degustation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('chefs-table')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Master Caviar &amp; Truffle
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sommelier-and-cellar')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Grand Cru Vintage Pairings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('private-banquets')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  St. James Banquet Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('the-royal-menu')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Imperial Pâtisserie
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Private Commission */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm text-[#470013] font-bold tracking-wide">
              Private Commission
            </h5>
            <ul className="space-y-2 text-xs text-[#554243]">
              <li>
                <button
                  onClick={() => setActiveTab('private-banquets')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Diplomatic Catering
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConcierge}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Private Yacht Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sommelier-and-cellar')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Sommelier Consultations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('our-heritage')}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Royal Household Protocols
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMembership}
                  className="hover:text-[#470013] transition-colors cursor-pointer text-left"
                >
                  Discrete Delivery Windows
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: The Gazette */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm text-[#470013] font-bold tracking-wide">
              The Gazette
            </h5>
            <p className="text-xs text-[#554243] leading-relaxed">
              Receive seasonal tasting menu unveilings and rare vintage acquisitions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-[#f0eee8] rounded-full p-1 shadow-sm border border-[#dbc0c2]/40">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Lordship or Estate Email"
                  className="bg-transparent px-3 py-1 text-xs text-[#1c1c18] placeholder:text-[#887273] focus:outline-none w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#470013] text-white flex items-center justify-center shrink-0 hover:bg-[#661426] transition-colors cursor-pointer"
                  aria-label="Subscribe to Gazette"
                >
                  <ArrowRight className="w-4 h-4 text-[#ffdeae]" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-[#7f5700] flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>The Lordship Gazette dispatch confirmed.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal & Discretion */}
        <div className="pt-6 border-t border-[#dbc0c2]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#554243]">
          <p>© 2025 Royal Kitchen Haute Cuisine Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenMembership}
              className="hover:text-[#470013] transition-colors cursor-pointer"
            >
              Privileged Discretion
            </button>
            <button
              onClick={onOpenMembership}
              className="hover:text-[#470013] transition-colors cursor-pointer"
            >
              Bespoke Terms
            </button>
            <button
              onClick={() => setActiveTab('our-heritage')}
              className="hover:text-[#470013] transition-colors cursor-pointer"
            >
              Diplomatic Protocols
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
