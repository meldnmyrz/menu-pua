import React, { useState, useEffect, useMemo } from 'react';
import { MENU_DATA } from './data/menuData';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ItemModal from './components/ItemModal';
import OrderDrawer from './components/OrderDrawer';
import CommandMenu from './components/CommandMenu';
import Footer from './components/Footer';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState("platillos");
  const [activeCategoryId, setActiveCategoryId] = useState(null); // null = Home page
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  // Synchronize hash routing (e.g. #/section/cortes)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/section/')) {
        const catId = hash.replace('#/section/', '');
        if (catId) {
          // Find which section this category belongs to
          for (const sec of MENU_DATA.sections) {
            const found = sec.categories.find((c) => c.id === catId);
            if (found) {
              setActiveSectionId(sec.id);
              setActiveCategoryId(catId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              return;
            }
          }
        }
      } else {
        setActiveCategoryId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToCategory = (catId, secId) => {
    if (secId) setActiveSectionId(secId);
    if (!catId || catId === 'home' || catId === 'all') {
      setActiveCategoryId(null);
      window.location.hash = '';
    } else {
      setActiveCategoryId(catId);
      window.location.hash = `#/section/${catId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Active section data
  const currentSection = useMemo(() => {
    return MENU_DATA.sections.find((s) => s.id === activeSectionId) || MENU_DATA.sections[0];
  }, [activeSectionId]);

  // Active category object if on an independent category page
  const currentCategory = useMemo(() => {
    if (!activeCategoryId) return null;
    return currentSection.categories.find((c) => c.id === activeCategoryId) || null;
  }, [currentSection, activeCategoryId]);

  // All categories list for next/prev navigation
  const allCategories = useMemo(() => {
    return currentSection.categories;
  }, [currentSection]);

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
          setActiveCategoryId(null);
          window.location.hash = '';
        }}
        filteredCount={0}
        setIsCommandMenuOpen={setIsCommandMenuOpen}
      />

      {/* Category Navigation Bar */}
      <CategoryNav
        categories={currentSection.categories}
        activeCategoryId={activeCategoryId || 'all'}
        setActiveCategoryId={(id) => navigateToCategory(id)}
        activeSectionId={activeSectionId}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {!activeCategoryId ? (
          /* Home Navigation Hub Page */
          <HomePage
            sections={MENU_DATA.sections}
            onSelectCategory={(catId, secId) => navigateToCategory(catId, secId)}
            setIsCommandMenuOpen={setIsCommandMenuOpen}
          />
        ) : (
          /* Independent Standalone Category Page */
          <CategoryPage
            category={currentCategory}
            section={currentSection}
            allCategories={allCategories}
            onNavigateCategory={(catId) => navigateToCategory(catId)}
            onBackToHome={() => navigateToCategory(null)}
            onSelectItem={setSelectedItem}
            onAddToOrder={handleAddToOrder}
            orderItems={orderItems}
          />
        )}
      </main>

      {/* Command Menu 6 Popover */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setIsCommandMenuOpen}
        sections={MENU_DATA.sections}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        setActiveCategoryId={(id) => navigateToCategory(id)}
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
        isAdded={selectedItem ? orderItems.some((i) => i.id === selectedItem.id) : false}
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
