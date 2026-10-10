import React from 'react';
import { Flame, Wine, ArrowRight, Sparkles, Command, ShieldCheck } from 'lucide-react';

export default function HomePage({
  sections,
  onSelectCategory,
  setIsCommandMenuOpen
}) {
  const platillosSection = sections.find((s) => s.id === "platillos") || sections[0];
  const bebidasSection = sections.find((s) => s.id === "bebidas") || sections[1];

  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-fade-in">
      
      {/* Hero Welcome Banner */}
      <div className="relative rounded-[24px] p-8 sm:p-14 overflow-hidden bg-[#121214] border border-[#27272a] shadow-2xl">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#e6ff55] mb-3">
            <Flame className="w-4 h-4 text-[#e6ff55]" />
            MENÚ GASTRONÓMICO OFICIAL
          </div>

          <h1 className="text-4xl sm:text-7xl font-display font-normal text-white leading-[0.85] tracking-tight">
            PÚA BRASA Y VINO
          </h1>

          <p className="text-sm sm:text-base text-[#a1a1aa] font-normal mt-4 leading-relaxed">
            Explora las páginas independientes de nuestro menú. Cada sección ofrece una selección curada de cortes Angus a las brasas, maridajes de la cava y mixología de autor.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="pill-btn-lime flex items-center gap-2.5 text-xs font-extrabold shadow-xl"
            >
              <Command className="w-4 h-4 text-black" />
              <span>ABRIR NAVEGADOR DE PÁGINAS (⌘K)</span>
            </button>
          </div>
        </div>

        {/* Decorative Image Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-25 pointer-events-none">
          <img src="/assets/images/pua_ambiance.png" alt="PÚA Ambiance" className="w-full h-full object-cover filter blur-xs" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/80 to-transparent" />
        </div>
      </div>

      {/* Section I: Independent Food Pages */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272a] pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-[#e6ff55]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#e6ff55]">
                SECCIÓN I
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-white">
              Páginas Independientes de Platillos
            </h2>
          </div>
          <span className="text-xs text-[#a1a1aa] font-bold uppercase tracking-[0.05em]">
            {platillosSection.categories.length} Secciones Independientes
          </span>
        </div>

        {/* Grid of Independent Category Page Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platillosSection.categories.map((cat) => {
            const firstItemImage = cat.items?.find((i) => i.image)?.image || "/assets/images/steak_vino_tinto.jpg";

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id, "platillos")}
                className="group relative flex flex-col justify-between cursor-pointer bg-[#121214] p-4 rounded-[24px] border border-[#27272a] hover:border-[#e6ff55] hover:bg-[#18181b] transition-all duration-300 shadow-xl"
              >
                {/* Photo Header */}
                <div className="relative w-full h-48 bg-black rounded-[20px] overflow-hidden mb-4 border border-[#27272a]">
                  <img
                    src={firstItemImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 badge-lime shadow-md">
                    {cat.items?.length || 0} OPCIONES
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#e6ff55] transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed font-normal mb-4">
                    Explora nuestra selección exclusiva en la página de {cat.name.toLowerCase()}.
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-[#27272a] flex items-center justify-between">
                  <span className="ghost-text-link-white text-xs">
                    ENTRAR A ESTA SECCIÓN
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e6ff55] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section II: Independent Drinks & Wine Cava Pages */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272a] pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Wine className="w-4 h-4 text-[#e6ff55]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#e6ff55]">
                SECCIÓN II
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-normal text-white">
              Páginas de Cava & Mixología
            </h2>
          </div>
          <span className="text-xs text-[#a1a1aa] font-bold uppercase tracking-[0.05em]">
            {bebidasSection.categories.length} Secciones Independientes
          </span>
        </div>

        {/* Grid of Drink Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bebidasSection.categories.map((cat) => {
            const firstItemImage = cat.items?.find((i) => i.image)?.image || "/assets/images/drinks_pua_hero.jpg";

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id, "bebidas")}
                className="group relative flex flex-col justify-between cursor-pointer bg-[#121214] p-4 rounded-[24px] border border-[#27272a] hover:border-[#e6ff55] hover:bg-[#18181b] transition-all duration-300 shadow-xl"
              >
                <div className="relative w-full h-48 bg-black rounded-[20px] overflow-hidden mb-4 border border-[#27272a]">
                  <img
                    src={firstItemImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 badge-lime shadow-md">
                    {cat.isTableLayout ? `${cat.groups?.length} FAMILIAS` : `${cat.items?.length || 0} OPCIONES`}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#e6ff55] transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed font-normal mb-4">
                    Consulta la carta completa en la página de {cat.name.toLowerCase()}.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#27272a] flex items-center justify-between">
                  <span className="ghost-text-link-white text-xs">
                    ENTRAR A ESTA SECCIÓN
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e6ff55] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
