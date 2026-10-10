import React from 'react';
import MenuItemCard from './MenuItemCard';
import DestiladosTable from './DestiladosTable';
import { ArrowLeft, Flame, Wine, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

export default function CategoryPage({
  category,
  section,
  allCategories,
  onNavigateCategory,
  onBackToHome,
  onSelectItem,
  onAddToOrder,
  orderItems
}) {
  if (!category) return null;

  // Find index of current category to provide Next/Previous independent page links
  const currentIndex = allCategories.findIndex((c) => c.id === category.id);
  const prevCategory = currentIndex > 0 ? allCategories[currentIndex - 1] : null;
  const nextCategory = currentIndex < allCategories.length - 1 ? allCategories[currentIndex + 1] : null;

  const isItemInOrder = (id) => orderItems.some((i) => i.id === id);

  return (
    <div className="min-h-screen max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Top Breadcrumbs & Back Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#27272a]">
        <button
          onClick={onBackToHome}
          className="pill-btn-outline-white flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em]"
        >
          <ArrowLeft className="w-4 h-4 text-[#e6ff55]" />
          <span>VOLVER AL MENÚ PRINCIPAL</span>
        </button>

        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#a1a1aa]">
          <span onClick={onBackToHome} className="cursor-pointer hover:text-white transition-colors">
            INICIO
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#71717a]" />
          <span className="text-[#e6ff55]">{section?.shortName || "Sección"}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#71717a]" />
          <span className="text-white">{category.name}</span>
        </div>
      </div>

      {/* Standalone Independent Page Header Banner */}
      <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden bg-[#121214] border border-[#27272a] shadow-2xl">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#e6ff55] mb-3">
            {section?.id === "platillos" ? <Flame className="w-4 h-4 text-[#e6ff55]" /> : <Wine className="w-4 h-4 text-[#e6ff55]" />}
            PÁGINA INDEPENDIENTE DE {category.name.toUpperCase()}
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-normal text-white leading-[0.85] tracking-tight">
            {category.name}
          </h1>

          {category.subtitle && (
            <p className="text-xs text-[#e6ff55] font-extrabold uppercase tracking-[0.05em] mt-2">
              {category.subtitle}
            </p>
          )}

          <p className="text-sm sm:text-base text-[#a1a1aa] font-normal mt-4 leading-relaxed">
            {section?.description}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs text-white font-extrabold uppercase tracking-[0.05em]">
            <span className="px-3 py-1 rounded-full bg-[#18181b] border border-[#27272a] text-[#e6ff55]">
              {category.isTableLayout
                ? `${category.groups?.length || 0} Familias en Carta`
                : `${category.items?.length || 0} Opciones Disponibles`}
            </span>
          </div>
        </div>

        {/* Decorative background overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-20 pointer-events-none">
          <img src="/assets/images/pua_ambiance.png" alt="PÚA" className="w-full h-full object-cover filter blur-xs" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/80 to-transparent" />
        </div>
      </div>

      {/* Standalone Classification Content */}
      <div className="space-y-8">
        {category.isTableLayout ? (
          <DestiladosTable
            groups={category.groups}
            onAddToOrder={onAddToOrder}
            orderItems={orderItems}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items?.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onAddToOrder={onAddToOrder}
                isAdded={isItemInOrder(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Independent Page Footer Navigation Links (Prev / Next Section) */}
      <div className="pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevCategory ? (
          <button
            onClick={() => onNavigateCategory(prevCategory.id)}
            className="w-full sm:w-auto p-4 rounded-[16px] bg-[#121214] border border-[#27272a] hover:border-[#e6ff55] flex items-center gap-3 transition-all text-left"
          >
            <ChevronLeft className="w-5 h-5 text-[#e6ff55]" />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a1a1aa] block">
                PÁGINA ANTERIOR
              </span>
              <span className="text-sm font-bold text-white">
                {prevCategory.name}
              </span>
            </div>
          </button>
        ) : <div />}

        {nextCategory && (
          <button
            onClick={() => onNavigateCategory(nextCategory.id)}
            className="w-full sm:w-auto p-4 rounded-[16px] bg-[#121214] border border-[#27272a] hover:border-[#e6ff55] flex items-center gap-3 transition-all text-right justify-end"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a1a1aa] block">
                SIGUIENTE PÁGINA
              </span>
              <span className="text-sm font-bold text-white">
                {nextCategory.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#e6ff55]" />
          </button>
        )}
      </div>
    </div>
  );
}
