import React from 'react';
import { Crown, CheckCircle2, Star, Wine } from 'lucide-react';

interface RoyalDiningClubProps {
  onInquireMembership: () => void;
  onSommelierConsult: () => void;
}

export const RoyalDiningClub: React.FC<RoyalDiningClubProps> = ({
  onInquireMembership,
  onSommelierConsult,
}) => {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f6f3ed]">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Showcase: The Royal Crest Club */}
          <div className="lg:col-span-7 bg-[#fcf9f3] p-6 lg:p-10 rounded-2xl shadow-lg border border-[#dbc0c2]/30 space-y-6">
            <div className="flex items-center gap-2 text-[#7f5700]">
              <Crown className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Privileged Tier Access
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#470013] font-bold leading-tight">
              The Royal Dining Crest Club
            </h3>

            <p className="text-sm text-[#554243] leading-relaxed">
              For residents of London's prime estates, private family offices, and foreign embassies. Membership affords direct WhatsApp equerry access, reserve cellar allocation, and chef de cuisine residency for state and private occasions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#7f5700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm text-[#470013] font-bold block">
                    Personal Equerry Dispatch
                  </span>
                  <span className="text-xs text-[#554243]">
                    Direct encrypted messaging line with your assigned butler team.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#7f5700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm text-[#470013] font-bold block">
                    En Primeur Cellar Allocations
                  </span>
                  <span className="text-xs text-[#554243]">
                    Private reserve Domaine de la Romanée-Conti &amp; rare Krug vintages.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#7f5700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm text-[#470013] font-bold block">
                    Chef Residency &amp; Live Fire
                  </span>
                  <span className="text-xs text-[#554243]">
                    Our executive master chefs available to cook inside your estate kitchen.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#7f5700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs sm:text-sm text-[#470013] font-bold block">
                    Bespoke Gilded Tableware
                  </span>
                  <span className="text-xs text-[#554243]">
                    Limoges porcelain and Christofle silverware supplied upon request.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onInquireMembership}
                className="px-6 py-3 rounded-lg bg-[#470013] hover:bg-[#661426] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer hover:shadow-lg"
                type="button"
                id="membership-inquire-btn"
              >
                Inquire for Estate Membership
              </button>
              <span className="text-[10px] uppercase tracking-wider text-[#887273] font-semibold">
                Strict Discretion Enforced
              </span>
            </div>
          </div>

          {/* Right: Press Critique & Cellar Feature */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Editorial Quote Card */}
            <div className="p-6 rounded-2xl bg-[#f0eee8] shadow-md border border-[#dbc0c2]/30 flex flex-col space-y-3">
              <div className="flex text-[#7f5700] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#7f5700]" />
                ))}
              </div>

              <p className="font-serif text-base sm:text-lg text-[#470013] italic leading-snug">
                “The epitome of high-table domestic dining. Royal Kitchen has solved the impossible riddle of transporting authentic Michelin-grade slow-cooked gastronomy without relinquishing a single nuance of heat, fragrance, or dignity.”
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#dbc0c2]/20">
                <span className="text-xs font-bold text-[#1c1c18]">
                  The Mayfair &amp; Belgravia Gazette
                </span>
                <span className="text-[10px] text-[#7f5700] uppercase font-bold tracking-wider">
                  Autumn Review
                </span>
              </div>
            </div>

            {/* Wine Cellar Vignette */}
            <div
              onClick={onSommelierConsult}
              className="p-5 rounded-2xl bg-[#fcf9f3] flex items-center gap-4 shadow-md border border-[#dbc0c2]/30 hover:border-[#7f5700] transition-colors cursor-pointer group"
              id="sommelier-consult-card"
            >
              <div className="w-14 h-14 rounded-xl bg-[#661426] flex items-center justify-center text-[#ffdeae] shrink-0 group-hover:scale-105 transition-transform">
                <Wine className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold">
                  Sommelier Commission
                </span>
                <span className="font-serif text-base text-[#470013] font-bold">
                  Head Sommelier Cellar Consult
                </span>
                <span className="text-xs text-[#554243]">
                  Direct cellar pairing pairings tailored for your custom menu within 15 minutes.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
