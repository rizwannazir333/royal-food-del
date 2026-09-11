import React from 'react';
import { Utensils, ConciergeBell, Clock, Thermometer, ShieldCheck, Timer } from 'lucide-react';

export const ClocheProtocol: React.FC = () => {
  return (
    <section className="w-full bg-[#470013] text-white py-14 md:py-16 relative overflow-hidden">
      {/* Atmospheric background ornamentation */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#7f5700]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#661426]/60 blur-3xl pointer-events-none"></div>

      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold">
            The Royal Kitchen Standard
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fcf9f3] font-bold">
            The Cloche Protocol &amp; Butler Fleet
          </h3>
          <p className="text-xs sm:text-sm text-[#ffb2ba] leading-relaxed">
            Haute cuisine cannot tolerate the indignities of standard courier bags. Every commission arrives as if transferred straight from a royal kitchen brigade.
          </p>
        </div>

        {/* 3 Protocol Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md shadow-xl flex flex-col space-y-4 group hover:bg-white/[0.1] transition-all duration-300 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#7f5700] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Utensils className="w-6 h-6 text-[#ffdeae]" />
            </div>
            <h4 className="font-serif text-lg text-[#ffdeae] font-bold">
              1. Hand-Sealed Brass Cloches
            </h4>
            <p className="text-xs sm:text-sm text-[#ebe8e2] leading-relaxed flex-1">
              Crafted from heavy hand-hammered antique brass with inner ceramic temperature plates. Each cloche is sealed with our beeswax royal crest, broken exclusively in your presence.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-[#f9bc53] text-[11px] uppercase tracking-wider font-semibold border-t border-white/10">
              <Thermometer className="w-4 h-4 text-[#fcbf55]" />
              <span>Constant 68°C Thermal Lock</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md shadow-xl flex flex-col space-y-4 group hover:bg-white/[0.1] transition-all duration-300 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#7f5700] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <ConciergeBell className="w-6 h-6 text-[#ffdeae]" />
            </div>
            <h4 className="font-serif text-lg text-[#ffdeae] font-bold">
              2. White-Glove Butler Deployment
            </h4>
            <p className="text-xs sm:text-sm text-[#ebe8e2] leading-relaxed flex-1">
              Delivered by trained domestic equerries in discreet executive transit. At your request, our butler unseals the vessels, garnishes courses, and sets your private banquet table.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-[#f9bc53] text-[11px] uppercase tracking-wider font-semibold border-t border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#fcbf55]" />
              <span>Optional Formal Plating</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-md shadow-xl flex flex-col space-y-4 group hover:bg-white/[0.1] transition-all duration-300 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#7f5700] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-[#ffdeae]" />
            </div>
            <h4 className="font-serif text-lg text-[#ffdeae] font-bold">
              3. Precise Diplomatic Dispatch
            </h4>
            <p className="text-xs sm:text-sm text-[#ebe8e2] leading-relaxed flex-1">
              Calibrated timing synced precisely to your desired dining bell. Guaranteed zero idling; each estate receives an individualized chauffeured transit corridor across London.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-[#f9bc53] text-[11px] uppercase tracking-wider font-semibold border-t border-white/10">
              <Timer className="w-4 h-4 text-[#fcbf55]" />
              <span>Exact 5-Minute Window Lock</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
