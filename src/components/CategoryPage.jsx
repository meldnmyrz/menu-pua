import React from 'react';
import MenuItemCard from './MenuItemCard';
import DestiladosTable from './DestiladosTable';
import { ArrowLeft, Flame, Wine, ChevronRight, ChevronLeft } from 'lucide-react';

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
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#232730]">
        <button
          onClick={onBackToHome}
          className="pill-btn-outline-mushroom flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em]"
        >
          <ArrowLeft className="w-4 h-4 text-[#c89f53]" />
          <span>VOLVER AL MENÚ PRINCIPAL</span>
        </button>

        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#d4d3c9]">
          <span onClick={onBackToHome} className="cursor-pointer hover:text-white transition-colors">
            INICIO
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#9e9d93]" />
          <span className="text-[#c89f53]">{section?.shortName || "Sección"}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#9e9d93]" />
          <span className="text-[#f5f7f5]">{category.name}</span>
        </div>
      </div>

      {/* Standalone Independent Page Header Banner */}
      <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden bg-[#0b0e14] border border-[#232730] shadow-2xl">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#c89f53] mb-3">
            {section?.id === "platillos" ? <Flame className="w-4 h-4 text-[#c89f53]" /> : <Wine className="w-4 h-4 text-[#c89f53]" />}
            PÁGINA INDEPENDIENTE DE {category.name.toUpperCase()}
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-normal text-[#f5f7f5] leading-[0.85] tracking-tight">
            {category.name}
          </h1>

          {category.subtitle && (
            <p className="text-xs text-[#c89f53] font-extrabold uppercase tracking-[0.05em] mt-2">
              {category.subtitle}
            </p>
          )}

          <p className="text-sm sm:text-base text-[#d4d3c9] font-normal mt-4 leading-relaxed">
            {section?.description}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs text-white font-extrabold uppercase tracking-[0.05em]">
            <span className="px-3 py-1 rounded-full bg-[#12141a] border border-[#232730] text-[#c89f53]">
              {category.isTableLayout
                ? `${category.groups?.length || 0} Familias en Carta`
                : `${category.items?.length || 0} Opciones Disponibles`}
            </span>
          </div>
        </div>

        {/* Decorative background overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-20 pointer-events-none">
          <img src="/assets/images/material_pua/dish_2.jpg" alt="PÚA" className="w-full h-full object-cover filter blur-xs" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/80 to-transparent" />
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
      <div className="pt-8 border-t border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevCategory ? (
          <button
            onClick={() => onNavigateCategory(prevCategory.id)}
            className="w-full sm:w-auto p-4 rounded-[16px] bg-[#0b0e14] border border-[#232730] hover:border-[#c89f53] flex items-center gap-3 transition-all text-left"
          >
            <ChevronLeft className="w-5 h-5 text-[#c89f53]" />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4d3c9] block">
                PÁGINA ANTERIOR
              </span>
              <span className="text-sm font-bold text-[#f5f7f5]">
                {prevCategory.name}
              </span>
            </div>
          </button>
        ) : <div />}

        {nextCategory && (
          <button
            onClick={() => onNavigateCategory(nextCategory.id)}
            className="w-full sm:w-auto p-4 rounded-[16px] bg-[#0b0e14] border border-[#232730] hover:border-[#c89f53] flex items-center gap-3 transition-all text-right justify-end"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4d3c9] block">
                SIGUIENTE PÁGINA
              </span>
              <span className="text-sm font-bold text-[#f5f7f5]">
                {nextCategory.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#c89f53]" />
          </button>
        )}
      </div>
    </div>
  );
}
