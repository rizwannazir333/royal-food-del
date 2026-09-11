import React from 'react';
import { Category, ArtisanalNote } from '../types';
import { Search, SlidersHorizontal, Utensils, Infinity as InfinityIcon } from 'lucide-react';

interface MenuRepertoireProps {
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedArtisanalNote: ArtisanalNote | null;
  setSelectedArtisanalNote: (note: ArtisanalNote | null) => void;
}

const CATEGORIES: { id: Category; label: string; hasIcon?: boolean }[] = [
  { id: 'all', label: 'Grand Curation', hasIcon: true },
  { id: 'awadhi', label: 'Mughlai & Awadhi Grandeur' },
  { id: 'french', label: 'Haute French Classical' },
  { id: 'persian', label: 'Royal Persian Grills' },
  { id: 'seafood', label: 'Imperial Caviar & Seafood' },
  { id: 'cellar', label: 'Rare Cellar Vintages' },
];

const ARTISANAL_NOTES: ArtisanalNote[] = [
  '24K Edible Gold',
  'Périgord Winter Truffle',
  'A5 Kagoshima Wagyu',
  'Royal Beluga Caviar',
  'Martell Cognac XO',
];

export const MenuRepertoire: React.FC<MenuRepertoireProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  selectedArtisanalNote,
  setSelectedArtisanalNote,
}) => {
  return (
    <section className="w-full py-8 md:py-10 bg-[#fcf9f3]">
      <div className="w-full px-5 md:px-8 lg:px-9 mx-auto space-y-6">
        
        {/* Header & Predictive Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[#7f5700] mb-1">
              <Utensils className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Curated Banqueting Portfolio
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#470013] font-bold">
              The Haute Cuisine Repertoire
            </h2>
          </div>

          {/* Luxury Search Bar */}
          <div className="relative w-full lg:w-96">
            <div className="flex items-center bg-[#f0eee8] rounded-full px-4 py-2 shadow-inner border border-[#dbc0c2]/40">
              <Search className="w-4 h-4 text-[#887273] shrink-0" />
              <input
                id="dish-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search delicacies, e.g. Périgord, Gold Leaf, Wagyu..."
                className="bg-transparent px-2.5 text-xs text-[#1c1c18] placeholder:text-[#887273] focus:outline-none w-full"
              />
              <button
                type="button"
                onClick={() => {
                  if (searchQuery) setSearchQuery('');
                }}
                className="text-[#887273] hover:text-[#470013] transition-colors"
                title="Search Filter"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="category-tabs-nav">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#470013] text-white shadow-sm'
                    : 'bg-[#f0eee8] text-[#554243] hover:text-[#470013] hover:bg-[#ebe8e2] border border-[#dbc0c2]/30'
                }`}
                id={`cat-tab-${cat.id}`}
              >
                {cat.hasIcon && <InfinityIcon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Ingredient Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider text-[#887273] font-semibold">
            Artisanal Notes:
          </span>
          {ARTISANAL_NOTES.map((note) => {
            const isSelected = selectedArtisanalNote === note;
            return (
              <button
                key={note}
                type="button"
                onClick={() =>
                  setSelectedArtisanalNote(isSelected ? null : note)
                }
                className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-[#7f5700] text-white border-[#7f5700] font-semibold shadow-sm'
                    : 'bg-[#f6f3ed] text-[#554243] hover:bg-[#ffdeae]/40 border-[#dbc0c2]/30'
                }`}
              >
                {note}
              </button>
            );
          })}

          {selectedArtisanalNote && (
            <button
              onClick={() => setSelectedArtisanalNote(null)}
              className="text-[11px] text-[#470013] underline font-semibold ml-1 cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
