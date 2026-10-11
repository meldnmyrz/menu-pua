import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

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
          
          {/* Left: Official PÚA Transparent Logo */}
          <div
            onClick={onBackToHome}
            className="flex items-center cursor-pointer group flex-shrink-0 py-0.5"
          >
            <img
              src={restaurant.logo}
              alt="PÚA Logo"
              className={`object-contain transition-all duration-300 group-hover:opacity-90 ${
                isScrolled ? "h-9 sm:h-10" : "h-11 sm:h-13"
              }`}
            />
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
                  activeCategoryId ? "text-[#c89f53] font-extrabold" : "text-[#a1a1aa] hover:text-[#f5f7f5]"
                }`}
              >
                <span>MENÚ</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180 text-[#c89f53]" : "text-[#a1a1aa]"}`} />
              </button>

              {/* Command Menu 6 Compact Popover Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-80 bg-[#0b0e14]/98 backdrop-blur-2xl border border-[#232730] rounded-[22px] p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.98)] z-50 animate-fade-in text-[#f5f7f5]">
                  
                  {/* Command Popover Header */}
                  <div className="flex items-center justify-between px-2.5 pb-2.5 mb-2 border-b border-[#232730] text-[10px] font-extrabold uppercase tracking-widest text-[#c89f53]">
                    <span>Clasificaciones del Menú</span>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsCommandMenuOpen(true);
                      }}
                      className="px-2 py-0.5 rounded bg-[#12141a] border border-[#232730] text-[#d4d3c9] hover:text-white transition-colors font-mono cursor-pointer flex items-center gap-1"
                    >
                      <span>Buscar ⌘K</span>
                    </button>
                  </div>

                  {/* Section Groups */}
                  <div className="max-h-[380px] overflow-y-auto space-y-3 no-scrollbar pr-1">
                    {sections.map((sec) => (
                      <div key={sec.id} className="space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#9e9d93] px-2.5">
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
                              className={`w-full text-left px-3 py-2 rounded-[12px] text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                activeCategoryId === cat.id
                                  ? "bg-[#987232] text-white font-extrabold shadow-md"
                                  : "text-[#d4d3c9] hover:text-white hover:bg-[#12141a]"
                              }`}
                            >
                              <span className="truncate">{cat.name}</span>
                              {cat.items?.length > 0 && (
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                                  activeCategoryId === cat.id ? "bg-black text-[#c89f53]" : "bg-[#12141a] text-[#c89f53] border border-[#232730]"
                                }`}>
                                  {cat.items.length}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Command Popover Footer */}
                  <div className="mt-2.5 pt-2 border-t border-[#232730] flex items-center justify-between text-[10px] text-[#9e9d93] px-2.5">
                    <span>React Bits Pro Block</span>
                    <span className="text-[#c89f53] font-extrabold">Command Menu 6</span>
                  </div>

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
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#cbd5e1] transition-all text-xs cursor-pointer"
              title="Buscar en el menú (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#cbd5e1]" />
              <span className="font-medium hidden sm:inline">Buscar...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#18181b] text-[#cbd5e1] rounded border border-[#27272a] font-mono">⌘K</kbd>
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
