import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, ChevronDown } from 'lucide-react';

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
  setIsCommandMenuOpen,
  sections = []
}) {
  const [lang, setLang] = useState("ES");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      
      {/* Floating Navbar Container */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out mx-auto ${
          isScrolled
            ? "max-w-[1200px] mt-3 px-4 sm:px-6 rounded-full bg-[#050505]/95 backdrop-blur-2xl border border-[#cbd5e1]/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] py-2 sm:py-2.5 scale-[0.99]"
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] shadow-[0_0_8px_#cbd5e1] ml-0.5 mb-1.5" />
              </div>
              {!isScrolled && (
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#cbd5e1] leading-none mt-0.5">
                  BRASA Y VINO
                </span>
              )}
            </div>
          </div>

          {/* Center: Navigation Links with Mega Dropdown */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold uppercase tracking-[0.08em] relative">
            <button
              onClick={onBackToHome}
              className={`flex flex-col items-center gap-1 transition-colors ${
                !activeCategoryId ? "text-white" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              <span>INICIO</span>
              {!activeCategoryId && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] shadow-[0_0_8px_#cbd5e1]" />
              )}
            </button>

            {/* Menu Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 py-1 transition-colors ${
                  activeCategoryId ? "text-white font-extrabold" : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <span>MENÚ</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180 text-[#e6ff55]" : "text-[#a1a1aa]"}`} />
              </button>

              {/* Glassmorphism Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#121214]/95 backdrop-blur-2xl border border-[#27272a] rounded-[20px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 animate-fade-in">
                  {sections.map((sec) => (
                    <div key={sec.id} className="mb-3 last:mb-0">
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#cbd5e1] px-3 py-1 border-b border-[#27272a]/60 mb-1">
                        {sec.title}
                      </div>
                      <div className="space-y-0.5">
                        {sec.categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onNavigateCategory(cat.id, sec.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                              activeCategoryId === cat.id
                                ? "bg-[#e6ff55] text-black font-extrabold"
                                : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
                            }`}
                          >
                            <span>{cat.name}</span>
                            {cat.items?.length > 0 && (
                              <span className={`text-[10px] font-mono ${activeCategoryId === cat.id ? "text-black" : "text-[#cbd5e1]"}`}>
                                {cat.items.length}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigateCategory("maridaje", "platillos")}
              className={`transition-colors ${activeCategoryId === "maridaje" ? "text-white font-bold" : "text-[#a1a1aa] hover:text-white"}`}
            >
              MARIDAJES
            </button>

            <button
              onClick={() => onNavigateCategory("mixologia", "bebidas")}
              className={`transition-colors ${activeCategoryId === "mixologia" ? "text-white font-bold" : "text-[#a1a1aa] hover:text-white"}`}
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

            {/* Search Launcher / Command Menu Trigger ⌘K */}
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121214] border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#cbd5e1] transition-all text-xs"
              title="Buscar en el menú (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#cbd5e1]" />
              <span className="font-medium">Buscar...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-[#18181b] text-[#cbd5e1] rounded border border-[#27272a] font-mono">⌘K</kbd>
            </button>

            {/* Mobile Search Icon Button */}
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="sm:hidden p-2 rounded-full text-[#a1a1aa] hover:text-[#cbd5e1] hover:bg-[#18181b] transition-colors"
              title="Buscar en el menú"
            >
              <Search className="w-4 h-4 text-[#cbd5e1]" />
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

      {/* Ambient Silver Glow Line Divider */}
      {!isScrolled && (
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#cbd5e1]/40 to-transparent" />
      )}
    </header>
  );
}
