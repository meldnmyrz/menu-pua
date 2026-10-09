import React, { useState, useMemo } from 'react';
import { MENU_DATA } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemCard from './components/MenuItemCard';
import DestiladosTable from './components/DestiladosTable';
import ItemModal from './components/ItemModal';
import OrderDrawer from './components/OrderDrawer';
import Footer from './components/Footer';
import { Flame, Wine, Sparkles, Filter, ChevronRight } from 'lucide-react';

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

  // Filtered categories and items based on search query & active category
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return currentSection.categories.map((cat) => {
      // Table layout categories (Destilados)
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

      // Standard item list categories
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

  // Total matching count for search indicator
  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => {
      if (cat.isTableLayout) {
        return acc + cat.groups.reduce((gAcc, g) => gAcc + g.items.length, 0);
      }
      return acc + (cat.items ? cat.items.length : 0);
    }, 0);
  }, [filteredCategories]);

  // Handle adding an item to the order drawer
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
    <div className="min-h-screen flex flex-col bg-[#0b0908] text-stone-100 font-sans selection:bg-amber-600 selection:text-white">
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

      {/* Sticky Category Tabs Bar */}
      <CategoryNav
        categories={currentSection.categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        activeSectionId={activeSectionId}
      />

      {/* Main Section Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Section Header Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-r from-stone-900 via-[#181310] to-stone-900 border border-stone-800 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              {activeSectionId === "platillos" ? <Flame className="w-3.5 h-3.5" /> : <Wine className="w-3.5 h-3.5" />}
              {currentSection.name}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-pua text-stone-100 tracking-tight">
              {currentSection.shortName === "Platillos" ? "Nuestra Cocina a la Brasa" : "Cava & Mixología Contemporánea"}
            </h2>
            <p className="text-sm sm:text-base text-stone-400 font-light mt-2">
              {currentSection.description}
            </p>
          </div>

          {/* Optional Banner Image Backdrop */}
          {currentSection.heroBanner && (
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-30 pointer-events-none">
              <img src={currentSection.heroBanner} alt="Drinks" className="w-full h-full object-cover filter blur-xs" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#181310] via-[#181310]/80 to-transparent" />
            </div>
          )}
        </div>

        {/* Section Content: Loop through categories */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/40 rounded-3xl border border-stone-800">
            <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-bold text-stone-200 font-serif-pua">
              No se encontraron platillos o bebidas
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Intenta buscar con otra palabra clave como "Rib Eye", "Martini", "Salmón" o "Pasta".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-amber-600 text-stone-950 text-xs font-bold rounded-xl hover:bg-amber-500 transition-colors"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          filteredCategories
            .filter((cat) => activeCategoryId === "all" || activeCategoryId === cat.id)
            .map((category) => (
              <section key={category.id} id={`category-${category.id}`} className="space-y-6 scroll-mt-36">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-pua text-stone-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <p className="text-xs text-amber-400/80 font-light mt-1">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-stone-500 font-mono">
                    {category.isTableLayout
                      ? `${category.groups?.length || 0} Familias`
                      : `${category.items?.length || 0} opciones`}
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
                  /* Grid Layout for standard items */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
