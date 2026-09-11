import React from 'react';
import { ArrowRight, Wine, Award } from 'lucide-react';
import { Dish } from '../types';

interface HeroSectionProps {
  onCommissionClick: () => void;
  onExploreCellarClick: () => void;
  featuredDish: Dish;
  onSelectDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCommissionClick,
  onExploreCellarClick,
  featuredDish,
  onSelectDish,
  onAddToCart,
}) => {
  return (
    <section className="relative w-full bg-[#f6f3ed] overflow-hidden pb-10 md:pb-12 border-b border-[#dbc0c2]/30">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto pt-6 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-5 z-10">
            
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#f0eee8] shadow-sm border border-[#dbc0c2]/40">
              <span className="w-2 h-2 rounded-full bg-[#7f5700] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest text-[#7f5700] font-bold">
                Bespoke Gastronomy In Heated Cloches
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#470013] tracking-tight leading-[1.08] font-bold">
              Imperial Feasts, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1c1c18]">Delivered in Heated Cloches</span>{' '}
              <br className="hidden sm:inline" />
              to Your Table.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#554243] max-w-xl leading-relaxed">
              Michelin-pedigree culinary masters, rare vintage pairings, and white-glove butler presentation delivered within 40 minutes across Mayfair, Knightsbridge, &amp; Kensington.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onCommissionClick}
                className="group relative px-6 py-3 rounded-lg bg-[#470013] hover:bg-[#661426] text-white transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2.5 cursor-pointer"
                type="button"
                id="hero-commission-cta"
              >
                <span className="text-sm font-semibold tracking-wide">Commission an Imperial Feast</span>
                <ArrowRight className="w-4 h-4 text-[#ffdeae] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCellarClick}
                className="px-6 py-3 rounded-lg bg-transparent hover:bg-[#f0eee8] transition-colors duration-200 flex items-center gap-2 border border-[#7f5700]/30 shadow-sm cursor-pointer"
                type="button"
                id="hero-cellar-cta"
              >
                <Wine className="w-4 h-4 text-[#7f5700]" />
                <span className="text-sm text-[#7f5700] font-semibold">Explore Cellar &amp; Rare Vintages</span>
              </button>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-xl">
              <div className="flex flex-col bg-[#fcf9f3] p-3.5 rounded-xl shadow-sm border border-[#dbc0c2]/30">
                <span className="font-serif text-xl sm:text-2xl text-[#470013] font-bold">12 Hrs</span>
                <span className="text-[10px] text-[#554243] uppercase tracking-wider font-semibold">Slow Dum Seal</span>
              </div>
              <div className="flex flex-col bg-[#fcf9f3] p-3.5 rounded-xl shadow-sm border border-[#dbc0c2]/30">
                <span className="font-serif text-xl sm:text-2xl text-[#7f5700] font-bold">68°C</span>
                <span className="text-[10px] text-[#554243] uppercase tracking-wider font-semibold">Thermal Cloche</span>
              </div>
              <div className="flex flex-col bg-[#fcf9f3] p-3.5 rounded-xl shadow-sm border border-[#dbc0c2]/30">
                <span className="font-serif text-xl sm:text-2xl text-[#470013] font-bold">40 Min</span>
                <span className="text-[10px] text-[#554243] uppercase tracking-wider font-semibold">Chauffeured Gate</span>
              </div>
            </div>

          </div>

          {/* Right Visual Showcase: Awadhi Dum Biryani Degh */}
          <div className="lg:col-span-6 relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#fcf9f3] border border-[#dbc0c2]/40 group cursor-pointer"
              onClick={() => onSelectDish(featuredDish)}
              id="hero-featured-dish-card"
            >
              <img
                src={featuredDish.image}
                alt="Imperial Awadhi Dum Biryani in heavy brass degh garnished with 24K gold leaf"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Atmospheric Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#470013]/85 via-transparent to-black/10 pointer-events-none"></div>

              {/* Floating Top Wax-Seal Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#661426]/95 backdrop-blur-md shadow-lg border border-[#ffdeae]/40">
                <Award className="w-4 h-4 text-[#ffdeae]" />
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">
                  Awadhi Royal Handcraft
                </span>
              </div>

              {/* Bottom Floating Plate Ledger */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#fcf9f3]/95 backdrop-blur-xl shadow-xl border border-[#dbc0c2]/40 flex items-center justify-between">
                <div className="flex flex-col pr-2">
                  <span className="text-[10px] text-[#7f5700] uppercase font-bold tracking-widest">
                    Featured Tasting Commission
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#470013] font-bold">
                    {featuredDish.name}
                  </span>
                  <span className="text-xs text-[#554243]">
                    24K Florentine Gold Leaf • Kashmiri Mogra Saffron
                  </span>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <span className="font-serif text-2xl text-[#470013] font-bold">
                    £{featuredDish.price}
                  </span>
                  <span className="text-[10px] text-[#7f5700] font-semibold">
                    Includes Brass Cloche
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(featuredDish);
                    }}
                    className="mt-1 px-3 py-1 rounded-md bg-[#470013] hover:bg-[#661426] text-white text-[11px] font-semibold transition-colors cursor-pointer shadow-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
