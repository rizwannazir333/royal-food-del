import React, { useState } from 'react';
import { Shield, Sparkles, Check, ArrowRight, Utensils, Users, Calendar, Award } from 'lucide-react';

interface PrivateBanquetsViewProps {
  onOpenConcierge: () => void;
}

export const PrivateBanquetsView: React.FC<PrivateBanquetsViewProps> = ({ onOpenConcierge }) => {
  const [guests, setGuests] = useState(16);
  const [courses, setCourses] = useState<'5-course' | '7-course' | '9-course'>('7-course');
  const [tableware, setTableware] = useState<'limoges' | 'christofle' | 'royal-gilt'>('christofle');
  const [sommelierLevel, setSommelierLevel] = useState<'grand-cru' | 'premier-cru' | 'legendary'>('grand-cru');
  const [booked, setBooked] = useState(false);

  // Approximate calculation
  const basePerGuest = courses === '5-course' ? 185 : courses === '7-course' ? 260 : 340;
  const sommelierPerGuest = sommelierLevel === 'premier-cru' ? 95 : sommelierLevel === 'grand-cru' ? 160 : 280;
  const tablewarePerGuest = tableware === 'limoges' ? 20 : tableware === 'christofle' ? 35 : 55;
  const totalPerGuest = basePerGuest + sommelierPerGuest + tablewarePerGuest;
  const totalBanquet = totalPerGuest * guests;

  return (
    <div className="w-full bg-[#fcf9f3] py-10 sm:py-14 animate-in fade-in duration-300">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eee8] text-[#7f5700] text-[10px] font-bold uppercase tracking-widest border border-[#dbc0c2]/40">
            <Award className="w-3.5 h-3.5" />
            <span>Diplomatic &amp; St. James Banqueting</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#470013]">
            Private Banquets &amp; State Occasions
          </h1>
          <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
            From intimate diplomatic summits in Mayfair townhouses to grand celebrations in stately country estates, our master brigade deploys complete mobile culinary chambers, antique brass cloches, and liveried equerries.
          </p>
        </div>

        {/* Interactive Banquet Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#ffffff] p-6 lg:p-10 rounded-2xl shadow-xl border border-[#dbc0c2]/40">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#470013]">
              Configure Your Banquet Commission
            </h3>

            {/* Guest Count */}
            <div>
              <label className="text-xs font-bold text-[#470013] uppercase tracking-wider block mb-2">
                Noble Guests in Attendance: <span className="text-[#7f5700] font-serif text-base">{guests} Guests</span>
              </label>
              <input
                type="range"
                min="6"
                max="80"
                step="2"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[#470013] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#887273] mt-1">
                <span>Intimate Salon (6)</span>
                <span>Grand Ballroom (40)</span>
                <span>State Pavilion (80)</span>
              </div>
            </div>

            {/* Course Sequence */}
            <div>
              <label className="text-xs font-bold text-[#470013] uppercase tracking-wider block mb-2">
                Degustation Movement
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: '5-course', title: '5 Courses', sub: 'Imperial Prelude (£185/p)' },
                  { id: '7-course', title: '7 Courses', sub: 'The Master Sovereign (£260/p)' },
                  { id: '9-course', title: '9 Courses', sub: 'Grand Durbar Royal (£340/p)' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCourses(c.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      courses === c.id
                        ? 'border-[#470013] bg-[#470013] text-white shadow-md'
                        : 'border-[#dbc0c2]/40 bg-[#f6f3ed] text-[#1c1c18] hover:border-[#7f5700]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{c.title}</span>
                    <span className={`text-[10px] ${courses === c.id ? 'text-[#ffdeae]' : 'text-[#887273]'}`}>
                      {c.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tableware Service */}
            <div>
              <label className="text-xs font-bold text-[#470013] uppercase tracking-wider block mb-2">
                Tableware &amp; Silver Protocol
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'limoges', title: 'Limoges Porcelain', sub: '24K Edged French Ceramic' },
                  { id: 'christofle', title: 'Christofle Silverware', sub: 'Hand-Polished Heavy Silver' },
                  { id: 'royal-gilt', title: 'Hand-Hammered Brass', sub: 'Antique Embossed Royal Cloches' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTableware(t.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      tableware === t.id
                        ? 'border-[#7f5700] bg-[#7f5700] text-white shadow-md'
                        : 'border-[#dbc0c2]/40 bg-[#f6f3ed] text-[#1c1c18] hover:border-[#7f5700]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{t.title}</span>
                    <span className={`text-[10px] ${tableware === t.id ? 'text-white/80' : 'text-[#887273]'}`}>
                      {t.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sommelier Pairing */}
            <div>
              <label className="text-xs font-bold text-[#470013] uppercase tracking-wider block mb-2">
                Cellar Master Wine Allocation
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'premier-cru', title: 'Premier Cru', sub: '+£95/guest' },
                  { id: 'grand-cru', title: 'Grand Cru Reserve', sub: '+£160/guest' },
                  { id: 'legendary', title: 'DRC & Krug Historic', sub: '+£280/guest' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSommelierLevel(s.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      sommelierLevel === s.id
                        ? 'border-[#661426] bg-[#661426] text-white shadow-md'
                        : 'border-[#dbc0c2]/40 bg-[#f6f3ed] text-[#1c1c18] hover:border-[#7f5700]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{s.title}</span>
                    <span className={`text-[10px] ${sommelierLevel === s.id ? 'text-[#ffdeae]' : 'text-[#887273]'}`}>
                      {s.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-[#f6f3ed] p-6 rounded-2xl border border-[#dbc0c2]/40 space-y-6">
            <div className="border-b border-[#dbc0c2]/30 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold block">
                Bespoke Banquet Pro-Forma
              </span>
              <h4 className="font-serif text-xl font-bold text-[#470013]">
                Estimated Commission Total
              </h4>
            </div>

            <div className="space-y-2 text-xs text-[#554243]">
              <div className="flex justify-between">
                <span>Guest Count</span>
                <span className="font-bold text-[#1c1c18]">{guests} Nobles</span>
              </div>
              <div className="flex justify-between">
                <span>Degustation ({courses})</span>
                <span className="font-bold text-[#1c1c18]">£{(basePerGuest * guests).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Wine Pairings ({sommelierLevel})</span>
                <span className="font-bold text-[#1c1c18]">£{(sommelierPerGuest * guests).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tableware Protocol</span>
                <span className="font-bold text-[#1c1c18]">£{(tablewarePerGuest * guests).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Butler Brigade &amp; Chauffeured Van</span>
                <span className="font-bold text-[#7f5700]">Complimentary Royal Service</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#dbc0c2]/30 text-sm font-bold text-[#470013]">
                <span>Total Banquet Commission</span>
                <span className="font-serif text-2xl">£{totalBanquet.toLocaleString()}.00</span>
              </div>
            </div>

            {booked ? (
              <div className="p-4 rounded-xl bg-[#470013] text-white text-center space-y-2">
                <Check className="w-6 h-6 text-[#ffdeae] mx-auto" />
                <span className="text-xs font-bold block">Banquet Commission Transmitted</span>
                <span className="text-[11px] text-[#ffdeae] block">
                  Our Chancellor of Private Banquets will contact you within 15 minutes.
                </span>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setBooked(true)}
                  className="w-full py-3.5 rounded-xl bg-[#470013] hover:bg-[#661426] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Commission Banquet Brigade</span>
                  <ArrowRight className="w-4 h-4 text-[#ffdeae]" />
                </button>
                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="w-full py-2.5 rounded-xl bg-transparent hover:bg-white text-[#7f5700] text-xs font-semibold border border-[#7f5700]/30 transition-colors cursor-pointer"
                >
                  Consult Master Chef Directly
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
