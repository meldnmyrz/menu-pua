import React from 'react';
import { 
  Wine, Flame, Soup, Salad, Beef, CookingPot, 
  Fish, Sparkles, UtensilsCrossed, Cake, Smile, 
  GlassWater, Beer, Coffee 
} from 'lucide-react';

export default function CategoryNav({
  categories,
  activeCategoryId,
  setActiveCategoryId,
  activeSectionId
}) {
  const scrollToCategory = (id) => {
    setActiveCategoryId(id);
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-30 w-full sweet-nav border-b border-[#00473c]/15 shadow-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 py-3.5 overflow-x-auto no-scrollbar">
          
          <button
            onClick={() => scrollToCategory("all")}
            className="flex flex-col items-center group whitespace-nowrap transition-all"
          >
            <span
              className={`text-lg sm:text-2xl font-display uppercase tracking-tight transition-colors ${
                activeCategoryId === "all"
                  ? "text-[#0e150e] font-normal"
                  : "text-[#8c8c82] hover:text-[#0e150e]"
              }`}
            >
              TODOS LOS PLATILLOS
            </span>
            {activeCategoryId === "all" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#00473c] mt-1" />
            )}
          </button>

          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className="flex flex-col items-center group whitespace-nowrap transition-all"
              >
                <span
                  className={`text-lg sm:text-2xl font-display uppercase tracking-tight transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-[#0e150e] font-normal"
                      : "text-[#8c8c82] hover:text-[#0e150e]"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.items?.length && (
                    <span className="text-xs font-sans text-[#00473c] font-bold">
                      ({cat.items.length})
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00473c] mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
