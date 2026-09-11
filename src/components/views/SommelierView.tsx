import React, { useState } from 'react';
import { Wine, Award, Check, Sparkles, Phone, ArrowRight, Shield } from 'lucide-react';

interface SommelierViewProps {
  onOpenConcierge: () => void;
  onAddToCart: (dish: any) => void;
}

export const SommelierView: React.FC<SommelierViewProps> = ({ onOpenConcierge, onAddToCart }) => {
  const [selectedVintage, setSelectedVintage] = useState<string | null>(null);
  const [consultBooked, setConsultBooked] = useState(false);

  const VINTAGES = [
    {
      id: 'drc-romanee',
      name: 'Domaine de la Romanée-Conti',
      appellation: 'Romanée-Saint-Vivant Grand Cru 2012',
      region: 'Côte de Nuits, Burgundy, France',
      price: 2450,
      notes: 'Silky wild strawberries, crushed rose petals, sweet forest floor, and noble oriental spices.',
      idealWith: 'Imperial Awadhi Dum Biryani or Smoked Galouti Kebabs',
      temp: '16°C Cellar Lock'
    },
    {
      id: 'krug-ambonnay',
      name: 'Krug Clos d’Ambonnay Champagne',
      appellation: 'Rare Millésime Single Vineyard 2002',
      region: 'Ambonnay, Champagne, France',
      price: 380,
      notes: 'Candied lemon peel, toasted brioche, almond paste, candied ginger with infinite tension.',
      idealWith: 'Royal Beluga Caviar or Lobster Thermidor Imperial',
      temp: '9°C Chilled Lock'
    },
    {
      id: 'chateau-palmer',
      name: 'Château Palmer Margaux',
      appellation: 'Troisième Grand Cru Classé 2016',
      region: 'Margaux, Bordeaux, France',
      price: 395,
      notes: 'Cassis, black truffles, crushed violets, cigar wrapper, and seamless velvet tannins.',
      idealWith: 'Peshawari Raan Musallam or Tournedos Rossini',
      temp: '17°C Cellar Lock'
    },
    {
      id: 'meursault-charmes',
      name: 'Meursault 1er Cru Les Charmes',
      appellation: 'Domaine des Comtes Lafon 2017',
      region: 'Côte de Beaune, Burgundy, France',
      price: 260,
      notes: 'Hazelnuts, crushed limestone, poached white peach, buttered brioche with electric acidity.',
      idealWith: 'Lobster Thermidor Imperial & Wild Turbot',
      temp: '11°C Cellar Lock'
    },
    {
      id: 'sassicaia-bolgheri',
      name: 'Tenuta San Guido Sassicaia',
      appellation: 'Bolgheri Sassicaia DOC 2015 (100 Pts)',
      region: 'Tuscany, Italy',
      price: 420,
      notes: 'Black cherries, cedarwood, lavender, balsamic rosemary, and opulent aristocratic structure.',
      idealWith: 'Peshawari Raan Musallam or A5 Wagyu Koobideh',
      temp: '16°C Cellar Lock'
    },
    {
      id: 'chateau-dyquem',
      name: 'Château d’Yquem Sauternes',
      appellation: 'Premier Cru Supérieur 2009',
      region: 'Sauternes, Bordeaux, France',
      price: 520,
      notes: 'Saffron blossom honey, dried apricot, candied ginger, roasted pineapple, and heavenly botrytis balance.',
      idealWith: 'Foie Gras and Royal Saffron Pâtisserie',
      temp: '10°C Cellar Lock'
    }
  ];

  return (
    <div className="w-full bg-[#fcf9f3] py-10 sm:py-14 animate-in fade-in duration-300">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0eee8] text-[#7f5700] text-[10px] font-bold uppercase tracking-widest border border-[#dbc0c2]/40">
            <Wine className="w-3.5 h-3.5" />
            <span>Grand Cru Cellar &amp; En Primeur Allocation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#470013]">
            The Master Sommelier's Reserve
          </h1>
          <p className="text-xs sm:text-sm text-[#554243] leading-relaxed">
            Every bottle is sourced directly from châteaux cellars in France and Italy, temperature-regulated during chauffeured transit in velvet-lined mahogany lockboxes.
          </p>
        </div>

        {/* Live Consult Banner */}
        <div className="bg-[#470013] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#7f5700]/40">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#7f5700] flex items-center justify-center text-white shrink-0 shadow-lg">
              <Wine className="w-7 h-7 text-[#ffdeae]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#ffdeae] font-bold block">
                Direct Diplomatic Service
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                15-Minute Head Sommelier Pairing Consult
              </h3>
              <p className="text-xs text-[#ebe8e2] mt-0.5">
                Our Master of Wine evaluates your menu and pulls custom cellar bottles from our St. James vault.
              </p>
            </div>
          </div>

          <button
            onClick={() => setConsultBooked(true)}
            className="px-6 py-3 rounded-xl bg-[#ffdeae] text-[#470013] hover:bg-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer shrink-0"
          >
            {consultBooked ? 'Consult Transmitted ✓' : 'Request Sommelier Call'}
          </button>
        </div>

        {/* Vintages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VINTAGES.map((v) => (
            <div
              key={v.id}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-[#dbc0c2]/40 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold">
                    {v.region}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f0eee8] text-[#470013] text-xs font-bold font-serif">
                    £{v.price}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#470013] leading-snug">
                    {v.name}
                  </h4>
                  <span className="text-xs text-[#887273] font-semibold block mt-0.5">
                    {v.appellation}
                  </span>
                </div>

                <p className="text-xs text-[#554243] leading-relaxed">
                  {v.notes}
                </p>

                <div className="p-3 rounded-xl bg-[#f6f3ed] space-y-1 text-xs">
                  <div className="text-[10px] uppercase tracking-wider text-[#7f5700] font-bold">
                    Ideal Pairing:
                  </div>
                  <div className="text-[#470013] font-medium">{v.idealWith}</div>
                  <div className="text-[10px] text-[#887273] pt-1">
                    Transit Temp: {v.temp}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#f0eee8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenConcierge()}
                  className="text-xs text-[#7f5700] font-semibold hover:underline cursor-pointer"
                >
                  Cellar Allocation Inquiry
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onAddToCart({
                      id: v.id,
                      name: `${v.name} (${v.appellation})`,
                      subtitle: v.region,
                      category: 'cellar',
                      tag: 'Rare Cellar Vintage',
                      tagType: 'vintage',
                      price: v.price,
                      portion: '750ml Hand-Cradled Bottle',
                      serves: '4-6 Flutes',
                      prepTime: 'Cellar Temp Lock',
                      temperatureTarget: v.temp,
                      description: v.notes,
                      sommelierPairing: v.idealWith,
                      image:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM42ZQyEtyXCJ53N7cLXSFQw0xk_GALjWBuUjuEfLSXaAO9ygSFDkCSnaEU0VWLr04et3vraVAEZrI5FKsCGPIsSidC0ZV5bEJ3daAQp5dQqp_GjeBwUNXaMdJC1kvDhPBnKMGWsYwgvcch3pkP_6cXp8ZXUBV5UDDSgwA9y_HO-DsAIx9Ob6LwZIKWb55XreWT5PZJzapXkkuohjxrtEDLdfhv-VCEmEeDFeqze5xr3e3ws5WO3A',
                      artisanalNotes: ['Martell Cognac XO'],
                    })
                  }
                  className="px-3.5 py-1.5 rounded-lg bg-[#470013] hover:bg-[#661426] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Add to Cloche
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
