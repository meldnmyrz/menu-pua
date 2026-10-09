import React from 'react';
import { Search, ShoppingBag, Flame, Wine, X, Sparkles, Command } from 'lucide-react';

export default function Header({
  restaurant,
  searchQuery,
  setSearchQuery,
  orderCount,
  setIsOrderOpen,
  activeSectionId,
  setActiveSectionId,
  filteredCount,
  setIsCommandMenuOpen
}) {
  return (
    <header className="relative w-full bg-[#050505] border-b border-[#27272a] pt-8 pb-6">
      
      {/* Background Hero Accent */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/pua_ambiance.png"
          alt="PÚA Atmosphere"
          className="w-full h-full object-cover filter blur-md scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/85 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#27272a]">
          
          {/* Official Logo Branding */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#27272a] shadow-2xl bg-black flex-shrink-0">
              <img
                src={restaurant.logo}
                alt="PÚA Brasa y Vino Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#e6ff55] uppercase tracking-[0.1em] mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#e6ff55] animate-pulse" />
                {restaurant.subtitle} — {restaurant.tagline}
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-normal text-white tracking-tight leading-none">
                {restaurant.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-normal mt-1 max-w-lg leading-relaxed">
                {restaurant.description}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Command Menu 6 Trigger Button */}
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="pill-btn-outline-white flex items-center gap-2 text-xs font-extrabold shadow-sm hover:border-[#e6ff55]"
              title="Abrir Command Menu (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#e6ff55]" />
              <span className="hidden sm:inline">Navegador</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-[#18181b] text-[#e6ff55] rounded border border-[#27272a]">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setIsOrderOpen(true)}
              className="pill-btn-lime flex items-center gap-2.5 text-sm shadow-xl"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>MI MESA</span>
              {orderCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-black text-[#e6ff55] rounded-full font-extrabold">
                  {orderCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Section Navigation & Search Input Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Section Switcher (Platillos vs Bebidas) */}
          <div className="flex items-center gap-2 bg-[#121214] p-1.5 rounded-full border border-[#27272a] w-full md:w-auto">
            <button
              onClick={() => setActiveSectionId("platillos")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.05em] transition-all duration-200 ${
                activeSectionId === "platillos"
                  ? "bg-[#e6ff55] text-black font-extrabold shadow-md"
                  : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>PLATILLOS</span>
            </button>

            <button
              onClick={() => setActiveSectionId("bebidas")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.05em] transition-all duration-200 ${
                activeSectionId === "bebidas"
                  ? "bg-[#e6ff55] text-black font-extrabold shadow-md"
                  : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>BEBIDAS & CAVA</span>
            </button>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e6ff55]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar platillo o ingrediente..."
              className="w-full pl-10 pr-9 py-2.5 rounded-[12px] bg-[#121214] border border-[#27272a] text-white text-sm placeholder-[#71717a] focus:outline-none focus:border-[#e6ff55] focus:ring-1 focus:ring-[#e6ff55] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#71717a] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="mt-3 text-xs text-[#e6ff55] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mostrando {filteredCount} resultados para "{searchQuery}"</span>
          </div>
        )}
      </div>
    </header>
  );
}
