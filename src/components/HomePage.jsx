import React from 'react';
import HeroEclipse from './HeroEclipse';
import { Flame, Wine, ArrowRight } from 'lucide-react';

export default function HomePage({
  sections,
  onSelectCategory,
  setIsCommandMenuOpen
}) {
  const platillosSection = sections.find((s) => s.id === "platillos") || sections[0];
  const bebidasSection = sections.find((s) => s.id === "bebidas") || sections[1];

  return (
    <div className="w-full space-y-16 animate-fade-in">
      
      {/* Full-Screen Edge-to-Edge Hero Section with PUA HEAD OF.mp4 Video Background */}
      <HeroEclipse
        onExplorePlatillos={() => onSelectCategory("cortes", "platillos")}
        onExploreBebidas={() => onSelectCategory("mixologia", "bebidas")}
        setIsCommandMenuOpen={setIsCommandMenuOpen}
      />

      {/* Main Container for Section Content */}
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-6">
        
        {/* Section I: Independent Food Pages */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#232730] pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-4 h-4 text-[#c89f53]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#c89f53]">
                  SECCIÓN I
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#f5f7f5]">
                Páginas Independientes de Platillos
              </h2>
            </div>
            <span className="text-xs text-[#d4d3c9] font-bold uppercase tracking-[0.05em]">
              {platillosSection.categories.length} Secciones Independientes
            </span>
          </div>

          {/* Grid of Independent Category Page Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platillosSection.categories.map((cat) => {
              const firstItemImage = cat.items?.find((i) => i.image)?.image || "/assets/images/material_pua/dish_1.jpg";

              return (
                <div
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id, "platillos")}
                  className="group relative flex flex-col justify-between cursor-pointer bg-[#0b0e14] p-4 rounded-[24px] border border-[#232730] hover:border-[#c89f53] hover:bg-[#12141a] transition-all duration-300 shadow-xl"
                >
                  {/* Photo Header */}
                  <div className="relative w-full h-48 bg-black rounded-[20px] overflow-hidden mb-4 border border-[#232730]">
                    <img
                      src={firstItemImage}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 badge-caramel shadow-md">
                      {cat.items?.length || 0} OPCIONES
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#f5f7f5] group-hover:text-[#c89f53] transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#d4d3c9] line-clamp-2 leading-relaxed font-normal mb-4">
                      Explora nuestra selección exclusiva en la página de {cat.name.toLowerCase()}.
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-[#232730] flex items-center justify-between">
                    <span className="ghost-text-link-white text-xs text-[#f5f7f5] group-hover:text-[#c89f53]">
                      ENTRAR A ESTA SECCIÓN
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c89f53] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section II: Independent Drinks & Wine Cava Pages */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#232730] pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Wine className="w-4 h-4 text-[#c89f53]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#c89f53]">
                  SECCIÓN II
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#f5f7f5]">
                Páginas de Cava & Mixología
              </h2>
            </div>
            <span className="text-xs text-[#d4d3c9] font-bold uppercase tracking-[0.05em]">
              {bebidasSection.categories.length} Secciones Independientes
            </span>
          </div>

          {/* Grid of Drink Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bebidasSection.categories.map((cat) => {
              const firstItemImage = cat.items?.find((i) => i.image)?.image || "/assets/images/material_pua/dish_15.jpg";

              return (
                <div
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id, "bebidas")}
                  className="group relative flex flex-col justify-between cursor-pointer bg-[#0b0e14] p-4 rounded-[24px] border border-[#232730] hover:border-[#c89f53] hover:bg-[#12141a] transition-all duration-300 shadow-xl"
                >
                  <div className="relative w-full h-48 bg-black rounded-[20px] overflow-hidden mb-4 border border-[#232730]">
                    <img
                      src={firstItemImage}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 badge-caramel shadow-md">
                      {cat.isTableLayout ? `${cat.groups?.length} FAMILIAS` : `${cat.items?.length || 0} OPCIONES`}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#f5f7f5] group-hover:text-[#c89f53] transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#d4d3c9] line-clamp-2 leading-relaxed font-normal mb-4">
                      Consulta la carta completa en la página de {cat.name.toLowerCase()}.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#232730] flex items-center justify-between">
                    <span className="ghost-text-link-white text-xs text-[#f5f7f5] group-hover:text-[#c89f53]">
                      ENTRAR A ESTA SECCIÓN
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c89f53] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
