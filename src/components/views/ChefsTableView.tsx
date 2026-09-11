import React, { useState } from 'react';
import { Award, Flame, Sparkles, ChefHat, Calendar, Clock, Check, ArrowRight } from 'lucide-react';

interface ChefsTableViewProps {
  onOpenConcierge: () => void;
}

export const ChefsTableView: React.FC<ChefsTableViewProps> = ({ onOpenConcierge }) => {
  const [selectedChef, setSelectedChef] = useState('tariq');
  const [residencyDate, setResidencyDate] = useState('2026-10-14');
  const [requested, setRequested] = useState(false);

  const CHEFS = [
    {
      id: 'tariq',
      name: 'Grand Master Tariq Al-Hussaini',
      title: 'Custodial Ustad of Awadhi Dum Pukht',
      pedigree: '4th Generation Descendant of the Lucknow Royal Durbar Chefs',
      specialty: '120-Spice Atta Dum Seal & 24K Edible Gold Leaf Guilding',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM42ZQyEtyXCJ53N7cLXSFQw0xk_GALjWBuUjuEfLSXaAO9ygSFDkCSnaEU0VWLr04et3vraVAEZrI5FKsCGPIsSidC0ZV5bEJ3daAQp5dQqp_GjeBwUNXaMdJC1kvDhPBnKMGWsYwgvcch3pkP_6cXp8ZXUBV5UDDSgwA9y_HO-DsAIx9Ob6LwZIKWb55XreWT5PZJzapXkkuohjxrtEDLdfhv-VCEmEeDFeqze5xr3e3ws5WO3A',
      fee: '£2,500 / Evening Residency'
    },
    {
      id: 'laurent',
      name: 'Chef Laurent de Montmirail',
      title: 'Officier de l’Ordre du Mérite Agricole',
      pedigree: '3 Michelin Stars, Le Gabriel & Guy Savoy Paris',
      specialty: 'Brittany Blue Lobster, Cave-Aged Thermidor & Truffle Saucier',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCie2OSLSdxIoMziz0P28G-koRYcWtbRgv85MrO0f5NdSQmqa2i1hqzrkQuSkMyzT5MAUBHovuxJZA4xJaQkQqh2-1EM3UNnqOfM7NLmPCQP_rNqxvX-cim243e-5VdpP7uJdtSIt752O8erDxa3bTlyGHyOAt0O2N6yg_004Te8p3ORpSPf_JmUinpt7XFHs_FCgqmr-DkaGVP73oq_TMVmP1oOwqLQvRhRMSoVkD5jdoUS_ept_qO',
      fee: '£3,200 / Evening Residency'
    },
    {
      id: 'kasra',
      name: 'Chef Kasra Pahlavi',
      title: 'Master of the Persian Imperial Charcoal Grill',
      pedigree: 'Executive Directorship Tehran Royal Guild & Mayfair Private Cellars',
      specialty: 'A5 Wagyu Koobideh, Wild Saffron Butter Glaze & Caviar Polo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmdCIjNCDYHH8vJXS6FmkEqoCWawvj1E98WPz3RL4wE4o5mx927KqwJltZSiwcHRMPmUarppEeazEbh7X9a8mmFmxcdbUpWR4D8fArLRN6pzQ_CIaEnrIuxXR-P06-dXGmbGxc3e0QmhZ4hZ9lw8HU1A70h7L7PbNhAL7XHC9MnApZwPXDyt6U3UsCsS9lKy2dzJXDE0Vfim1RImIdDRuYL4JNHkBkLLQRKRBMKrNuTANtTXh7oDtQ',
      fee: '£2,800 / Evening Residency'
    }
  ];

  return (
    <div className="w-full bg-[#fcf9f3] py-10 sm:py-14 animate-in fade-in duration-300">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eee8] text-[#7f5700] text-[10px] font-bold uppercase tracking-widest border border-[#dbc0c2]/40">
            <ChefHat className="w-3.5 h-3.5" />
            <span>Executive Culinary Residency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#470013]">
            Chef's Table in Your Private Estate
          </h1>
          <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
            Relinquish the journey entirely. Our executive directorship master chefs arrive directly at your private estate kitchen to orchestrate live fire, table-side plating, and multi-course bespoke degustations.
          </p>
        </div>

        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHEFS.map((chef) => {
            const isSelected = selectedChef === chef.id;
            return (
              <div
                key={chef.id}
                onClick={() => setSelectedChef(chef.id)}
                className={`p-6 rounded-2xl bg-white transition-all duration-300 border cursor-pointer flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl ${
                  isSelected
                    ? 'border-[#470013] ring-2 ring-[#470013]/20'
                    : 'border-[#dbc0c2]/40'
                }`}
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-[#f0eee8]">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#470013] text-white text-[10px] font-bold">
                      {chef.fee}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7f5700] tracking-wider block">
                      {chef.title}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#470013] mt-0.5">
                      {chef.name}
                    </h4>
                    <p className="text-xs text-[#887273] italic mt-1">
                      {chef.pedigree}
                    </p>
                  </div>

                  <p className="text-xs text-[#554243] leading-relaxed">
                    <strong className="text-[#470013]">Mastery:</strong> {chef.specialty}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f0eee8]">
                  <span
                    className={`w-full py-2 rounded-lg text-xs font-semibold text-center block transition-colors ${
                      isSelected
                        ? 'bg-[#470013] text-white'
                        : 'bg-[#f0eee8] text-[#554243] hover:bg-[#ebe8e2]'
                    }`}
                  >
                    {isSelected ? 'Selected Master Chef' : 'Select for Residency'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Form Box */}
        <div className="max-w-2xl mx-auto bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#dbc0c2]/40 space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#470013]">
            Reserve Executive Chef Residency
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#554243] uppercase block mb-1">
                Preferred Evening Date
              </label>
              <input
                type="date"
                value={residencyDate}
                onChange={(e) => setResidencyDate(e.target.value)}
                className="w-full bg-[#f6f3ed] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#554243] uppercase block mb-1">
                Guest Count at Estate
              </label>
              <select className="w-full bg-[#f6f3ed] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]">
                <option>2–4 Guests (Private Intimate Tasting)</option>
                <option>6–10 Guests (Executive Family Dining)</option>
                <option>12–20 Guests (Salon Soirée)</option>
              </select>
            </div>
          </div>

          {requested ? (
            <div className="p-4 rounded-xl bg-[#470013] text-white text-center space-y-1">
              <Check className="w-5 h-5 text-[#ffdeae] mx-auto" />
              <span className="text-xs font-bold block">Chef Residency Inquired</span>
              <span className="text-[11px] text-[#ffdeae] block">
                The Master Chef de Cuisine will confirm availability for your date within 10 minutes.
              </span>
            </div>
          ) : (
            <button
              onClick={() => setRequested(true)}
              className="w-full py-3.5 rounded-xl bg-[#470013] hover:bg-[#661426] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Chef Residency Commission</span>
              <ArrowRight className="w-4 h-4 text-[#ffdeae]" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
