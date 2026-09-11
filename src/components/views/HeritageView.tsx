import React from 'react';
import { Award, Shield, Sparkles, BookOpen, Crown, Thermometer } from 'lucide-react';

export const HeritageView: React.FC = () => {
  return (
    <div className="w-full bg-[#fcf9f3] py-10 sm:py-14 animate-in fade-in duration-300">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto space-y-16 max-w-5xl">
        
        {/* Banner */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eee8] text-[#7f5700] text-[10px] font-bold uppercase tracking-widest border border-[#dbc0c2]/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Chronicle of Haute Cuisine Privée</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#470013]">
            Our Aristocratic Heritage
          </h1>
          <p className="text-xs sm:text-sm text-[#554243] max-w-2xl mx-auto leading-relaxed">
            Founded on the conviction that the sanctity of Michelin-starred culinary creation should never be diminished by transit.
          </p>
        </div>

        {/* Narrative Chapters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold">
              Chapter I: The Dilemma of Haute Cuisine
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#470013]">
              Rescuing Dum Pukht &amp; French Classical Dining from Courier Bags
            </h3>
            <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
              In London’s most prominent residences, hostesses and ambassadors faced a perpetual compromise: either dine out in bustling public rooms, or accept lukewarm dishes delivered in paper bags.
            </p>
            <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
              In 2018, our culinary directorship commissioned master coppersmiths in Birmingham and Moradabad to forge hand-hammered antique brass deghs with inner ceramic core heating units.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl border border-[#dbc0c2]/40 space-y-4">
            <div className="flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-[#7f5700]" />
              <div>
                <h4 className="font-serif text-lg font-bold text-[#470013]">
                  The 68°C Thermal Lock Patent
                </h4>
                <span className="text-xs text-[#887273]">Thermodynamic Excellence</span>
              </div>
            </div>
            <p className="text-xs text-[#554243] leading-relaxed">
              68°C is the exact thermodynamic equilibrium where slow-cooked collagen remains liquid, basmati grain aroma oils volatilize without drying, and truffle butter maintains silky viscosity.
            </p>
            <div className="p-3 rounded-xl bg-[#f6f3ed] flex justify-between text-xs font-semibold text-[#470013]">
              <span>Beeswax Crest Seal Integrity</span>
              <span className="text-[#7f5700]">100% Guaranteed</span>
            </div>
          </div>
        </div>

        {/* The 3 Pillars of Butler Service */}
        <div className="p-8 rounded-2xl bg-[#470013] text-white shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold">
              The Butler Creed
            </span>
            <h3 className="font-serif text-2xl font-bold">The Equerry Protocol of London</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white/10 space-y-2">
              <Shield className="w-5 h-5 text-[#ffdeae]" />
              <h4 className="font-serif text-sm font-bold text-[#ffdeae]">Absolute Discretion</h4>
              <p className="text-xs text-[#ebe8e2] leading-relaxed">
                Our equerries sign legally binding state-grade non-disclosure covenants, protecting the privacy of every estate.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/10 space-y-2">
              <Crown className="w-5 h-5 text-[#ffdeae]" />
              <h4 className="font-serif text-sm font-bold text-[#ffdeae]">Formal Table Setting</h4>
              <p className="text-xs text-[#ebe8e2] leading-relaxed">
                Trained in the traditions of royal dining, butlers unfold damask linens and position Christofle cutlery to within a millimeter.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/10 space-y-2">
              <Sparkles className="w-5 h-5 text-[#ffdeae]" />
              <h4 className="font-serif text-sm font-bold text-[#ffdeae]">Table-side Unsealing</h4>
              <p className="text-xs text-[#ebe8e2] leading-relaxed">
                The golden beeswax crest is broken before you, releasing perfumes of saffron, rosewater, and aged truffle into your salon.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
