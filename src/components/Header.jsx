import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Flame, Wine, Bell, User, ChevronDown, Command, Sparkles } from 'lucide-react';

export default function Header({
  restaurant,
  searchQuery,
  setSearchQuery,
  orderCount,
  setIsOrderOpen,
  activeSectionId,
  setActiveSectionId,
  activeCategoryId,
  onNavigateCategory,
  onBackToHome,
  setIsCommandMenuOpen
}) {
  const [lang, setLang] = useState("ES");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar 12: Scroll Listener for Floating Lift Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 pointer-events-none">
      
      {/* Navbar 12 Floating Capsule Container */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out mx-auto ${
          isScrolled
            ? "max-w-[1200px] mt-3 px-4 sm:px-6 rounded-full bg-[#050505]/90 backdrop-blur-2xl border border-[#e6ff55]/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] py-2 sm:py-2.5 scale-[0.99]"
            : "max-w-full bg-[#050505] px-4 sm:px-8 border-b border-[#27272a] py-3.5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Official PÚA Logo */}
          <div
            onClick={onBackToHome}
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
          >
            <div className={`rounded-xl overflow-hidden border border-[#27272a] bg-black flex-shrink-0 transition-all ${
              isScrolled ? "w-8 h-8 sm:w-9 sm:h-9" : "w-10 h-10 sm:w-11 sm:h-11"
            }`}>
              <img
                src={restaurant.logo}
                alt="PÚA Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5">
                <span className={`font-bold font-sans tracking-tight text-white leading-none ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}>
                  púa
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55] animate-pulse ml-0.5 mb-1.5" />
              </div>
              {!isScrolled && (
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#d97706] leading-none mt-0.5">
                  BRASA Y VINO
                </span>
              )}
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold uppercase tracking-[0.08em]">
            <button
              onClick={onBackToHome}
              className={`flex flex-col items-center gap-1 transition-colors ${
                !activeCategoryId ? "text-white" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              <span>INICIO</span>
              {!activeCategoryId && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55] shadow-[0_0_8px_#e6ff55]" />
              )}
            </button>

            <button
              onClick={() => onNavigateCategory("cortes", "platillos")}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeCategoryId ? "text-white" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1">
                MENÚ <ChevronDown className="w-3 h-3 text-[#a1a1aa]" />
              </span>
              {activeCategoryId && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55] shadow-[0_0_8px_#e6ff55]" />
              )}
            </button>

            <button
              onClick={() => onNavigateCategory("maridaje", "platillos")}
              className="text-[#a1a1aa] hover:text-white transition-colors"
            >
              MARIDAJES
            </button>

            <button
              onClick={() => onNavigateCategory("mixologia", "bebidas")}
              className="text-[#a1a1aa] hover:text-white transition-colors"
            >
              BEBIDAS & CAVA
            </button>

            <button
              onClick={() => setIsOrderOpen(true)}
              className="text-[#a1a1aa] hover:text-white transition-colors"
            >
              RESERVAS
            </button>
          </nav>

          {/* Right: Controls & Floating "MI MESA" Button */}
          <div className="flex items-center gap-3">
            
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
              className="text-xs font-bold tracking-wider text-[#a1a1aa] hover:text-white transition-colors hidden sm:block"
            >
              <span className={lang === "ES" ? "text-white font-bold" : ""}>ES</span>
              <span className="mx-1 text-[#3f3f46]">|</span>
              <span className={lang === "EN" ? "text-white font-bold" : ""}>EN</span>
            </button>

            {/* Bell Notification / Command Menu Launcher ⌘K */}
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="p-2 rounded-full text-[#a1a1aa] hover:text-[#e6ff55] hover:bg-[#18181b] transition-colors"
              title="Buscar / Command Menu (⌘K)"
            >
              <Bell className="w-4 h-4" />
            </button>

            {/* Lime Glow "MI MESA" Pill Button */}
            <button
              onClick={() => setIsOrderOpen(true)}
              className={`rounded-full bg-[#e6ff55] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(230,255,85,0.4)] hover:shadow-[0_0_30px_rgba(230,255,85,0.6)] hover:bg-[#d8f533] transition-all transform active:scale-95 ${
                isScrolled ? "px-4 py-1.5" : "px-5 py-2"
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>MI MESA</span>
              {orderCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] bg-black text-[#e6ff55] rounded-full font-bold">
                  {orderCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Header Control Bar (Only shown when not deeply scrolled) */}
      {!isScrolled && (
        <div className="pointer-events-auto bg-[#09090b] border-t border-[#18181b] py-2 px-4 sm:px-6 transition-all duration-300">
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Section Toggle Pill */}
            <div className="flex items-center bg-[#121214] p-1 rounded-full border border-[#27272a] w-full sm:w-auto">
              <button
                onClick={() => {
                  setActiveSectionId("platillos");
                  onNavigateCategory("cortes", "platillos");
                }}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all ${
                  activeSectionId === "platillos"
                    ? "bg-[#e6ff55] text-black shadow-md"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>PLATILLOS</span>
              </button>

              <button
                onClick={() => {
                  setActiveSectionId("bebidas");
                  onNavigateCategory("mixologia", "bebidas");
                }}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all ${
                  activeSectionId === "bebidas"
                    ? "bg-[#e6ff55] text-black shadow-md"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <Wine className="w-3.5 h-3.5" />
                <span>BEBIDAS & CAVA</span>
              </button>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#a1a1aa]">
                <Search className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en el menú..."
                className="w-full pl-9 pr-8 py-1.5 rounded-full bg-[#121214] border border-[#27272a] text-white text-xs placeholder-[#71717a] focus:outline-none focus:border-[#e6ff55] transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* Ambient Lime Glow Line Divider */}
      {!isScrolled && (
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#e6ff55]/60 to-transparent shadow-[0_2px_15px_rgba(230,255,85,0.4)]" />
      )}
    </header>
  );
}
