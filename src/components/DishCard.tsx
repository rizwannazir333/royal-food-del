import React from 'react';
import { Dish } from '../types';
import { Wine, Plus, Sparkles, Flame, Fish, Crown } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelect, onAddToCart }) => {
  // Render badge styles based on tagType
  const getBadgeClass = (tagType: Dish['tagType']) => {
    switch (tagType) {
      case 'gold':
        return 'bg-[#470013] text-white';
      case 'truffle':
        return 'bg-[#4a2c33] text-[#e9bbc4]';
      case 'french':
        return 'bg-[#7f5700] text-white';
      case 'braise':
        return 'bg-[#661426] text-white';
      case 'caviar':
        return 'bg-[#2b1118] text-[#fcbf55]';
      case 'vintage':
        return 'bg-[#724d00] text-[#ffdeae]';
      default:
        return 'bg-[#470013] text-white';
    }
  };

  const getSubtitleIcon = (category: Dish['category']) => {
    switch (category) {
      case 'awadhi':
        return <Sparkles className="w-3.5 h-3.5 text-[#7f5700]" />;
      case 'french':
        return <Crown className="w-3.5 h-3.5 text-[#7f5700]" />;
      case 'persian':
        return <Flame className="w-3.5 h-3.5 text-[#7f5700]" />;
      case 'seafood':
        return <Fish className="w-3.5 h-3.5 text-[#7f5700]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#7f5700]" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(dish)}
      className="dish-card group flex flex-col bg-[#ffffff] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#dbc0c2]/30 cursor-pointer"
      id={`dish-card-${dish.id}`}
    >
      {/* Visual Asset Container */}
      <div className="relative h-64 overflow-hidden bg-[#f0eee8]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top-left tag badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-md ${getBadgeClass(
            dish.tagType
          )}`}
        >
          {dish.tag}
        </div>

        {/* Bottom-right price tag */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#fcf9f3]/90 backdrop-blur-sm text-[#470013] font-serif text-lg font-bold shadow-md border border-[#dbc0c2]/40">
          £{dish.price}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-4">
        <div>
          {/* Subtitle with emblem */}
          <div className="flex items-center gap-1 text-[#7f5700] mb-1">
            {getSubtitleIcon(dish.category)}
            <span className="text-[10px] uppercase font-bold tracking-wider">{dish.subtitle}</span>
          </div>

          {/* Dish Title */}
          <h4 className="font-serif text-lg text-[#470013] font-bold mb-1 leading-snug group-hover:text-[#7f5700] transition-colors">
            {dish.name}
          </h4>

          {/* Description */}
          <p className="text-xs text-[#554243] line-clamp-3 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Sommelier & Action Area */}
        <div className="space-y-3 pt-1">
          {/* Sommelier Pairing */}
          <div className="p-2 rounded-lg bg-[#f0eee8] flex items-center gap-2 text-[#554243] border border-[#dbc0c2]/20">
            <Wine className="w-4 h-4 text-[#7f5700] shrink-0" />
            <span className="text-[11px] italic truncate">
              Sommelier: {dish.sommelierPairing}
            </span>
          </div>

          {/* Bottom Row: Portion & Add Button */}
          <div className="flex items-center justify-between pt-1 border-t border-[#f0eee8]">
            <span className="text-[11px] text-[#887273] font-medium">
              Portion: {dish.portion}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(dish);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#470013] hover:bg-[#661426] text-white text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer hover:shadow"
              id={`add-cloche-btn-${dish.id}`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Cloche</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
