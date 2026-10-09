import React, { useState, useMemo } from 'react';
import { MENU_DATA } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import DestiladosTable from './components/DestiladosTable';
import ItemModal from './components/ItemModal';
import OrderDrawer from './components/OrderDrawer';
import CommandMenu from './components/CommandMenu';
import Footer from './components/Footer';
import { Flame, Wine, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState("platillos");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  // Active section data
  const currentSection = useMemo(() => {
    return MENU_DATA.sections.find((s) => s.id === activeSectionId) || MENU_DATA.sections[0];
  }, [activeSectionId]);

  // Filtered categories and items based on search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return currentSection.categories.map((cat) => {
      if (cat.isTableLayout) {
        if (!query) return cat;
        const matchingGroups = cat.groups.map((g) => ({
          ...g,
          items: g.items.filter((item) =>
            item.name.toLowerCase().includes(query) ||
            g.categoryName.toLowerCase().includes(query)
          )
        })).filter((g) => g.items.length > 0);

        return { ...cat, groups: matchingGroups };
      }

      const filteredItems = (cat.items || []).filter((item) => {
        if (!query) return true;
        const nameMatch = item.name?.toLowerCase().includes(query);
        const descMatch = item.description?.toLowerCase().includes(query);
        const tagMatch = item.tags?.some((t) => t.toLowerCase().includes(query));
        const pairingMatch = item.pairing?.toLowerCase().includes(query);
        return nameMatch || descMatch || tagMatch || pairingMatch;
      });

      return { ...cat, items: filteredItems };
    }).filter((cat) => {
      if (cat.isTableLayout) {
        return cat.groups && cat.groups.length > 0;
      }
      return cat.items && cat.items.length > 0;
    });
  }, [currentSection, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => {
      if (cat.isTableLayout) {
        return acc + cat.groups.reduce((gAcc, g) => gAcc + g.items.length, 0);
      }
      return acc + (cat.items ? cat.items.length : 0);
    }, 0);
  }, [filteredCategories]);

  const handleAddToOrder = (itemToAdd) => {
    setOrderItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemToAdd.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        if (itemToAdd.customerNote) {
          updated[existingIndex].customerNote = itemToAdd.customerNote;
        }
        return updated;
      }
      return [...prev, { ...itemToAdd, quantity: 1 }];
    });
  };

  const isItemInOrder = (id) => {
    return orderItems.some((i) => i.id === id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f4f4f5] font-sans selection:bg-[#e6ff55] selection:text-black">
      
      {/* Header Bar */}
      <Header
        restaurant={MENU_DATA.restaurant}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        orderCount={orderItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        setIsOrderOpen={setIsOrderOpen}
        activeSectionId={activeSectionId}
        setActiveSectionId={(id) => {
          setActiveSectionId(id);
          setActiveCategoryId("all");
        }}
        filteredCount={totalFilteredCount}
        setIsCommandMenuOpen={setIsCommandMenuOpen}
      />

      {/* Category Nav Tabs */}
      <CategoryNav
        categories={currentSection.categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        activeSectionId={activeSectionId}
      />

      {/* Main Section Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        
        {/* Section Header Banner */}
        <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden bg-[#121214] border border-[#27272a] shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] text-[#e6ff55] mb-3">
              {activeSectionId === "platillos" ? <Flame className="w-4 h-4 text-[#e6ff55]" /> : <Wine className="w-4 h-4 text-[#e6ff55]" />}
              {currentSection.name}
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-normal text-white leading-[0.85] tracking-tight">
              {currentSection.shortName === "Platillos" ? "GASTRONOMÍA A LAS BRASAS" : "MIXOLOGÍA & CAVA DE VINOS"}
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] font-normal mt-4 leading-relaxed">
              {currentSection.description}
            </p>
          </div>

          {currentSection.heroBanner && (
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-25 pointer-events-none">
              <img src={currentSection.heroBanner} alt="Drinks" className="w-full h-full object-cover filter blur-xs" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/80 to-transparent" />
            </div>
          )}
        </div>

        {/* Section Content: Independent Category Sections */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-[#121214] rounded-[24px] border border-[#27272a]">
            <Sparkles className="w-10 h-10 text-[#e6ff55] mx-auto mb-3 opacity-80" />
            <h3 className="text-2xl font-display text-white">
              No se encontraron opciones
            </h3>
            <p className="text-xs text-[#a1a1aa] mt-1 max-w-sm mx-auto">
              Intenta buscar con otra palabra clave o utiliza el navegador ⌘K arriba.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 pill-btn-lime text-xs uppercase"
            >
              LIMPIAR BÚSQUEDA
            </button>
          </div>
        ) : (
          filteredCategories
            .filter((cat) => activeCategoryId === "all" || activeCategoryId === cat.id)
            .map((category) => (
              <section 
                key={category.id} 
                id={`category-${category.id}`} 
                className="space-y-6 scroll-mt-32 p-6 sm:p-8 bg-[#0c0c0e] rounded-[24px] border border-[#27272a]/60 shadow-xl"
              >
                
                {/* Independent Category Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272a] pb-4 gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e6ff55]" />
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#e6ff55]">
                        Clasificación Independiente
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-display font-normal text-white">
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <p className="text-xs text-[#e6ff55] font-extrabold uppercase tracking-[0.05em] mt-1">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-[#a1a1aa] font-bold uppercase tracking-[0.05em]">
                    {category.isTableLayout
                      ? `${category.groups?.length || 0} Familias`
                      : `${category.items?.length || 0} Opciones disponibles`}
                  </span>
                </div>

                {/* Table Layout for Destilados */}
                {category.isTableLayout ? (
                  <DestiladosTable
                    groups={category.groups}
                    onAddToOrder={handleAddToOrder}
                    orderItems={orderItems}
                  />
                ) : (
                  /* 3-Column Product Card Grid for Each Classification */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onSelect={setSelectedItem}
                        onAddToOrder={handleAddToOrder}
                        isAdded={isItemInOrder(item.id)}
                      />
                    ))}
                  </div>
                )}
              </section>
            ))
        )}
      </main>

      {/* React Bits Pro Command Menu 6 Popover */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setIsCommandMenuOpen}
        sections={MENU_DATA.sections}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        setActiveCategoryId={setActiveCategoryId}
        onSelectItem={setSelectedItem}
        setIsOrderOpen={setIsOrderOpen}
      />

      {/* Item Detail Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToOrder={(item) => {
          handleAddToOrder(item);
          setSelectedItem(null);
        }}
        isAdded={selectedItem ? isItemInOrder(selectedItem.id) : false}
      />

      {/* Table Order Drawer */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />

      {/* Footer */}
      <Footer restaurant={MENU_DATA.restaurant} />
    </div>
  );
}
