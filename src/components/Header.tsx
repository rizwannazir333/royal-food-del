import React, { useState } from 'react';
import { ViewTab, LondonDistrict } from '../types';
import { LOGO_URL, LONDON_DISTRICTS } from '../data/dishes';
import { MapPin, ChevronDown, BellRing, UtensilsCrossed, User, PhoneCall, Check } from 'lucide-react';

interface HeaderProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  cartCount: number;
  openCart: () => void;
  openConcierge: () => void;
  openProfile: () => void;
  selectedDistrict: LondonDistrict;
  setSelectedDistrict: (district: LondonDistrict) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openConcierge,
  openProfile,
  selectedDistrict,
  setSelectedDistrict
}) => {
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fcf9f3]/90 backdrop-blur-xl shadow-[0_10px_30px_-4px_rgba(102,20,38,0.06)] border-b border-[#dbc0c2]/30 transition-all">
      <div className="h-20 w-full px-5 md:px-8 lg:px-9 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Location */}
        <div className="flex items-center gap-6 shrink-0">
          <button
            onClick={() => setActiveTab('the-royal-menu')}
            className="flex items-center gap-2 group text-left cursor-pointer"
            id="brand-home-link"
          >
            <img
              src={LOGO_URL}
              alt="Royal Kitchen Haute Cuisine Privée Emblem"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight text-[#470013] font-bold group-hover:text-[#7f5700] transition-colors leading-none">
                ROYAL KITCHEN
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#7f5700] font-semibold mt-0.5">
                Haute Cuisine Privée
              </span>
            </div>
          </button>

          {/* District Selector Pill with Dropdown */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#f0eee8] hover:bg-[#ebe8e2] rounded-full text-[#554243] hover:text-[#1c1c18] transition-colors cursor-pointer border border-[#dbc0c2]/30"
              id="district-selector-btn"
            >
              <MapPin className="w-3.5 h-3.5 text-[#7f5700]" />
              <span className="text-xs font-semibold tracking-wide">{selectedDistrict.name}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${districtDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {districtDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-72 bg-[#ffffff] rounded-xl shadow-2xl border border-[#dbc0c2]/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                id="district-dropdown-menu"
              >
                <div className="px-3 py-2 border-b border-[#f0eee8]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7f5700]">Chauffeured Corridor</span>
                  <p className="text-xs text-[#554243]">Select your private estate district</p>
                </div>
                <div className="py-1 max-h-60 overflow-y-auto">
                  {LONDON_DISTRICTS.map((district) => (
                    <button
                      key={district.id}
                      onClick={() => {
                        setSelectedDistrict(district);
                        setDistrictDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                        selectedDistrict.id === district.id
                          ? 'bg-[#661426] text-white font-semibold'
                          : 'hover:bg-[#f6f3ed] text-[#1c1c18]'
                      }`}
                    >
                      <div>
                        <div className="font-medium">{district.name}</div>
                        <div className={`text-[10px] ${selectedDistrict.id === district.id ? 'text-white/80' : 'text-[#887273]'}`}>
                          {district.postcode} • ~{district.transitTimeMin} min thermal gate
                        </div>
                      </div>
                      {selectedDistrict.id === district.id && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#f6f3ed] border border-[#dbc0c2]/30" id="main-nav-tabs">
          <button
            onClick={() => setActiveTab('the-royal-menu')}
            className={`px-4 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
              activeTab === 'the-royal-menu'
                ? 'bg-[#661426] text-white shadow-sm'
                : 'text-[#554243] hover:bg-[#f0eee8] hover:text-[#1c1c18]'
            }`}
            id="nav-tab-menu"
          >
            The Royal Menu
          </button>
          <button
            onClick={() => setActiveTab('private-banquets')}
            className={`px-4 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
              activeTab === 'private-banquets'
                ? 'bg-[#661426] text-white shadow-sm'
                : 'text-[#554243] hover:bg-[#f0eee8] hover:text-[#1c1c18]'
            }`}
            id="nav-tab-banquets"
          >
            Private Banquets
          </button>
          <button
            onClick={() => setActiveTab('chefs-table')}
            className={`px-4 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
              activeTab === 'chefs-table'
                ? 'bg-[#661426] text-white shadow-sm'
                : 'text-[#554243] hover:bg-[#f0eee8] hover:text-[#1c1c18]'
            }`}
            id="nav-tab-chefs"
          >
            Chef's Table
          </button>
          <button
            onClick={() => setActiveTab('sommelier-and-cellar')}
            className={`px-4 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
              activeTab === 'sommelier-and-cellar'
                ? 'bg-[#661426] text-white shadow-sm'
                : 'text-[#554243] hover:bg-[#f0eee8] hover:text-[#1c1c18]'
            }`}
            id="nav-tab-cellar"
          >
            Sommelier &amp; Cellar
          </button>
          <button
            onClick={() => setActiveTab('our-heritage')}
            className={`px-4 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer ${
              activeTab === 'our-heritage'
                ? 'bg-[#661426] text-white shadow-sm'
                : 'text-[#554243] hover:bg-[#f0eee8] hover:text-[#1c1c18]'
            }`}
            id="nav-tab-heritage"
          >
            Our Heritage
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Concierge Action */}
          <button
            onClick={openConcierge}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#470013] text-white hover:bg-[#661426] transition-all shadow-sm cursor-pointer"
            type="button"
            id="concierge-header-btn"
          >
            <BellRing className="w-4 h-4 text-[#ffdeae]" />
            <span className="text-xs font-semibold tracking-wide">Concierge</span>
          </button>

          {/* Cart with Cloche Count */}
          <button
            onClick={openCart}
            className="relative p-2.5 rounded-full bg-[#f0eee8] hover:bg-[#ebe8e2] transition-colors text-[#470013] flex items-center justify-center cursor-pointer border border-[#dbc0c2]/40"
            type="button"
            id="cart-drawer-trigger"
            aria-label="View Heated Cloche Cart"
          >
            <UtensilsCrossed className="w-5 h-5 text-[#470013]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#7f5700] text-white text-[10px] flex items-center justify-center font-bold shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Button */}
          <button
            onClick={openProfile}
            className="w-9 h-9 rounded-full bg-[#470013] hover:bg-[#661426] flex items-center justify-center shadow-sm cursor-pointer transition-colors text-white"
            type="button"
            id="user-profile-btn"
            aria-label="Member Crest Account"
          >
            <User className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};
