import React from 'react';
import { Search, ShoppingBag, Flame, Wine, X, Sparkles } from 'lucide-react';

export default function Header({
  restaurant,
  searchQuery,
  setSearchQuery,
  orderCount,
  setIsOrderOpen,
  activeSectionId,
  setActiveSectionId,
  filteredCount
}) {
  return (
    <header className="relative w-full bg-[#f4f3e7] border-b border-[#00473c]/15 pt-8 pb-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#00473c]/15">
          
          {/* Brand Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#00473c] uppercase tracking-[0.05em] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00473c]" />
              {restaurant.subtitle} — {restaurant.tagline}
            </div>
            <h1 className="text-5xl sm:text-7xl font-display font-normal text-[#00473c] tracking-tight leading-none">
              {restaurant.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#0e150e]/70 font-normal mt-2 max-w-lg leading-relaxed">
              {restaurant.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOrderOpen(true)}
              className="pill-btn-lime flex items-center gap-2.5 text-sm shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-[#0e150e]" />
              <span>MI MESA / SELECCIÓN</span>
              {orderCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-[#00473c] text-[#e6ff55] rounded-full font-bold">
                  {orderCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Section Navigation & Search Input Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Section Switcher (Platillos vs Bebidas) */}
          <div className="flex items-center gap-2 bg-[#d8e5d6] p-1.5 rounded-full w-full md:w-auto">
            <button
              onClick={() => setActiveSectionId("platillos")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.05em] transition-all duration-200 ${
                activeSectionId === "platillos"
                  ? "bg-[#00473c] text-[#e6ff55] shadow-sm"
                  : "text-[#00473c] hover:bg-[#f4f3e7]/60"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>PLATILLOS</span>
            </button>

            <button
              onClick={() => setActiveSectionId("bebidas")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.05em] transition-all duration-200 ${
                activeSectionId === "bebidas"
                  ? "bg-[#00473c] text-[#e6ff55] shadow-sm"
                  : "text-[#00473c] hover:bg-[#f4f3e7]/60"
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>BEBIDAS & CAVA</span>
            </button>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00473c]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar platillo o ingrediente..."
              className="w-full pl-10 pr-9 py-2.5 rounded-[#8px] bg-white border border-[#00473c]/30 text-[#0e150e] text-sm placeholder-[#8c8c82] focus:outline-none focus:border-[#00473c] focus:ring-1 focus:ring-[#00473c] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8c8c82] hover:text-[#0e150e]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="mt-3 text-xs text-[#00473c] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mostrando {filteredCount} resultados para "{searchQuery}"</span>
          </div>
        )}
      </div>
    </header>
  );
}
