import React from 'react';
import { Search, ShoppingBag, Wine, Flame, Sparkles, X } from 'lucide-react';

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
    <header className="relative w-full border-b border-amber-900/30 bg-[#0e0b09] overflow-hidden">
      {/* Background Hero Banner Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/assets/images/pua_ambiance.png"
          alt="PÚA Atmosphere"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0908]/90 via-[#0b0908]/80 to-[#0b0908]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Top Branding Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-800/80">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-600/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2 shadow-inner">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              {restaurant.subtitle}
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 font-serif-pua">
              {restaurant.name}
            </h1>
            <p className="text-sm sm:text-base text-amber-200/70 font-light mt-1 max-w-xl">
              {restaurant.description}
            </p>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <button
              onClick={() => setIsOrderOpen(true)}
              className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-stone-900 font-bold text-sm shadow-lg shadow-amber-950/50 hover:shadow-amber-600/30 transition-all duration-300 transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-stone-950" />
              <span>Mi Mesa / Orden</span>
              {orderCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-stone-950 text-amber-400 rounded-full font-extrabold shadow">
                  {orderCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Master Section Navigation Tabs & Search */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main Section Switcher (Platillos vs Bebidas) */}
          <div className="flex items-center gap-2 bg-stone-900/90 p-1.5 rounded-2xl border border-stone-800 shadow-inner w-full md:w-auto">
            <button
              onClick={() => setActiveSectionId("platillos")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeSectionId === "platillos"
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-bold shadow-md shadow-amber-900/40"
                  : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/50"
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Platillos</span>
            </button>

            <button
              onClick={() => setActiveSectionId("bebidas")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeSectionId === "bebidas"
                  ? "bg-gradient-to-r from-rose-700 to-rose-900 text-rose-100 font-bold shadow-md shadow-rose-950/60"
                  : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/50"
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>Bebidas & Cava</span>
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar platillo, ingrediente o cóctel..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-stone-100 text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="mt-3 text-xs text-amber-400/90 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mostrando {filteredCount} resultados para "{searchQuery}"</span>
          </div>
        )}
      </div>
    </header>
  );
}
