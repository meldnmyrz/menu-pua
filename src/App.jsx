import React, { useState, useMemo } from 'react';
import { MENU_DATA } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import DestiladosTable from './components/DestiladosTable';
import ItemModal from './components/ItemModal';
import OrderDrawer from './components/OrderDrawer';
import Footer from './components/Footer';
import { Flame, Wine, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState("platillos");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-[#f4f3e7] text-[#0e150e] font-sans selection:bg-[#e6ff55] selection:text-[#00473c]">
      
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
      />

      {/* Sweetgreen-style Category Nav Tabs */}
      <CategoryNav
        categories={currentSection.categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        activeSectionId={activeSectionId}
      />

      {/* Main Section Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* Sweetgreen Hero / Band Banner */}
        <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden bg-[#d8e5d6] border border-[#00473c]/15 shadow-xs">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#00473c] mb-3">
              {activeSectionId === "platillos" ? <Flame className="w-4 h-4" /> : <Wine className="w-4 h-4" />}
              {currentSection.name}
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-normal text-[#00473c] leading-[0.85] tracking-tight">
              {currentSection.shortName === "Platillos" ? "GASTRONOMÍA A LAS BRASAS" : "MIXOLOGÍA & CAVA DE VINOS"}
            </h2>
            <p className="text-sm sm:text-base text-[#0e150e]/80 font-normal mt-4 leading-relaxed">
              {currentSection.description}
            </p>
          </div>
        </div>

        {/* Section Content: Categories */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-[#d8e5d6]/50 rounded-[24px] border border-[#00473c]/15">
            <Sparkles className="w-10 h-10 text-[#00473c] mx-auto mb-3 opacity-60" />
            <h3 className="text-2xl font-display text-[#00473c]">
              No se encontraron opciones
            </h3>
            <p className="text-xs text-[#0e150e]/70 mt-1 max-w-sm mx-auto">
              Intenta buscar con otra palabra clave como "Rib Eye", "Martini", "Salmón" o "Pasta".
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
              <section key={category.id} id={`category-${category.id}`} className="space-y-6 scroll-mt-32">
                
                {/* Category Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#00473c]/20 pb-4 gap-2">
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-display font-normal text-[#0e150e]">
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <p className="text-xs text-[#00473c] font-bold uppercase tracking-[0.05em] mt-1">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-[#00473c] font-bold uppercase tracking-[0.05em]">
                    {category.isTableLayout
                      ? `${category.groups?.length || 0} Familias`
                      : `${category.items?.length || 0} Opciones`}
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
                  /* 3-Column Sweetgreen Product Card Grid */
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
