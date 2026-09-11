import React, { useState, useMemo } from 'react';
import { ViewTab, Category, ArtisanalNote, Dish, CartItem, LondonDistrict } from './types';
import { DISHES, LONDON_DISTRICTS, INITIAL_CART_ITEMS } from './data/dishes';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuRepertoire } from './components/MenuRepertoire';
import { DishCard } from './components/DishCard';
import { ClocheProtocol } from './components/ClocheProtocol';
import { RoyalDiningClub } from './components/RoyalDiningClub';
import { StickyCartBar } from './components/StickyCartBar';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { ClocheCartDrawer } from './components/ClocheCartDrawer';
import { DispatchModal } from './components/DispatchModal';
import { ConciergeModal } from './components/ConciergeModal';
import { MembershipModal } from './components/MembershipModal';
import { PrivateBanquetsView } from './components/views/PrivateBanquetsView';
import { ChefsTableView } from './components/views/ChefsTableView';
import { SommelierView } from './components/views/SommelierView';
import { HeritageView } from './components/views/HeritageView';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('the-royal-menu');
  const [selectedDistrict, setSelectedDistrict] = useState<LondonDistrict>(LONDON_DISTRICTS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

  // Menu Filters
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtisanalNote, setSelectedArtisanalNote] = useState<ArtisanalNote | null>(null);

  // Modals
  const [selectedDishForDetail, setSelectedDishForDetail] = useState<Dish | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDispatchOpen, setIsDispatchOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  // Cart total items
  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return DISHES.filter((dish) => {
      // Category match
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Artisanal Note match
      if (selectedArtisanalNote && !dish.artisanalNotes.includes(selectedArtisanalNote)) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesSubtitle = dish.subtitle.toLowerCase().includes(query);
        const matchesPairing = dish.sommelierPairing.toLowerCase().includes(query);
        const matchesNotes = dish.artisanalNotes.some((n) => n.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesSubtitle || matchesPairing || matchesNotes;
      }
      return true;
    });
  }, [selectedCategory, selectedArtisanalNote, searchQuery]);

  // Cart Handlers
  const handleAddToCart = (
    dish: Dish,
    options?: {
      addGoldLeaf?: boolean;
      addTruffleShavings?: boolean;
      quantity?: number;
      specialInstructions?: string;
    }
  ) => {
    const qty = options?.quantity || 1;
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.dish.id === dish.id &&
          Boolean(item.addGoldLeaf) === Boolean(options?.addGoldLeaf) &&
          Boolean(item.addTruffleShavings) === Boolean(options?.addTruffleShavings)
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        return [
          ...prev,
          {
            dish,
            quantity: qty,
            addGoldLeaf: options?.addGoldLeaf,
            addTruffleShavings: options?.addTruffleShavings,
            specialInstructions: options?.specialInstructions,
          },
        ];
      }
    });
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOrderCompleted = () => {
    // Keep cart for simulation viewing or clear if desired
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-sans">
      {/* Fixed Luxury Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        openConcierge={() => setIsConciergeOpen(true)}
        openProfile={() => setIsMembershipOpen(true)}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {activeTab === 'the-royal-menu' && (
          <>
            {/* SECTION 1: HERO SHOWCASE */}
            <HeroSection
              onCommissionClick={() => {
                const section = document.getElementById('signature-commissions-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreCellarClick={() => setActiveTab('sommelier-and-cellar')}
              featuredDish={DISHES[0]}
              onSelectDish={(dish) => setSelectedDishForDetail(dish)}
              onAddToCart={(dish) => handleAddToCart(dish)}
            />

            {/* SECTION 2: INTERACTIVE MENU CURATION & CATEGORY FILTER */}
            <MenuRepertoire
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedArtisanalNote={selectedArtisanalNote}
              setSelectedArtisanalNote={setSelectedArtisanalNote}
            />

            {/* SECTION 3: MASTER CHEF'S RESERVE (SIGNATURE DISHES GRID) */}
            <section
              id="signature-commissions-section"
              className="w-full pb-14 md:pb-16 bg-[#fcf9f3]"
            >
              <div className="w-full px-5 md:px-8 lg:px-9 mx-auto">
                <div className="flex items-baseline justify-between mb-8">
                  <div>
                    <span className="text-[10px] uppercase text-[#7f5700] font-bold tracking-widest block">
                      Executive Directorship Selection
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#470013] font-bold">
                      Master Chef's Signature Commissions
                    </h3>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-[#554243]">
                    <ShieldCheck className="w-4 h-4 text-[#7f5700]" />
                    <span className="text-xs">
                      Guaranteed dispatch in heated culinary lockboxes
                    </span>
                  </div>
                </div>

                {filteredDishes.length === 0 ? (
                  <div className="py-16 text-center bg-white rounded-2xl border border-[#dbc0c2]/30 p-8">
                    <h4 className="font-serif text-lg font-bold text-[#470013]">
                      No Delicacies Match Your Refined Search
                    </h4>
                    <p className="text-xs text-[#554243] mt-1 max-w-sm mx-auto">
                      Please adjust your artisanal notes or search term, or speak with our Sommelier Concierge.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchQuery('');
                        setSelectedArtisanalNote(null);
                      }}
                      className="mt-4 px-4 py-2 rounded-lg bg-[#470013] text-white text-xs font-semibold cursor-pointer"
                    >
                      Restore Grand Curation
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredDishes.map((dish) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        onSelect={(d) => setSelectedDishForDetail(d)}
                        onAddToCart={(d) => handleAddToCart(d)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 4: THE CLOCHE PROTOCOL & BUTLER FLEET */}
            <ClocheProtocol />

            {/* SECTION 5: PRIVILEGED TIER ACCESS & PRIVATE DINING CLUB */}
            <RoyalDiningClub
              onInquireMembership={() => setIsMembershipOpen(true)}
              onSommelierConsult={() => setActiveTab('sommelier-and-cellar')}
            />
          </>
        )}

        {/* Private Banquets View */}
        {activeTab === 'private-banquets' && (
          <PrivateBanquetsView onOpenConcierge={() => setIsConciergeOpen(true)} />
        )}

        {/* Chef's Table View */}
        {activeTab === 'chefs-table' && (
          <ChefsTableView onOpenConcierge={() => setIsConciergeOpen(true)} />
        )}

        {/* Sommelier & Cellar View */}
        {activeTab === 'sommelier-and-cellar' && (
          <SommelierView
            onOpenConcierge={() => setIsConciergeOpen(true)}
            onAddToCart={(dish) => handleAddToCart(dish)}
          />
        )}

        {/* Our Heritage View */}
        {activeTab === 'our-heritage' && <HeritageView />}
      </main>

      {/* Sticky Bottom Cloche Cart Bar */}
      <StickyCartBar
        cartItems={cartItems}
        onProceedToDispatch={() => setIsDispatchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenMembership={() => setIsMembershipOpen(true)}
      />

      {/* Modals and Drawers */}
      <DishDetailModal
        dish={selectedDishForDetail}
        onClose={() => setSelectedDishForDetail(null)}
        onAddToCart={handleAddToCart}
      />

      <ClocheCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToDispatch={() => {
          setIsCartOpen(false);
          setIsDispatchOpen(true);
        }}
        selectedDistrict={selectedDistrict}
      />

      <DispatchModal
        isOpen={isDispatchOpen}
        onClose={() => setIsDispatchOpen(false)}
        selectedDistrict={selectedDistrict}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      />
    </div>
  );
}
