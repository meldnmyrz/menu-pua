import React from 'react';
import { 
  Wine, Flame, Soup, Salad, Beef, CookingPot, 
  Fish, Sparkles, UtensilsCrossed, Cake, Smile, 
  GlassWater, Beer, Coffee 
} from 'lucide-react';

const ICON_MAP = {
  Wine: Wine,
  Flame: Flame,
  Soup: Soup,
  Salad: Salad,
  Beef: Beef,
  CookingPot: CookingPot,
  Fish: Fish,
  Sparkles: Sparkles,
  UtensilsCrossed: UtensilsCrossed,
  Cake: Cake,
  Smile: Smile,
  GlassWater: GlassWater,
  Beer: Beer,
  Coffee: Coffee
};

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
      const yOffset = -120; // sticky header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-30 w-full glass-nav shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => scrollToCategory("all")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
              activeCategoryId === "all"
                ? activeSectionId === "bebidas"
                  ? "bg-rose-900/80 text-rose-200 border border-rose-500/50 shadow-md"
                  : "bg-amber-600 text-stone-950 shadow-md"
                : "bg-stone-900/60 text-stone-400 border border-stone-800/60 hover:text-stone-200 hover:bg-stone-800/60"
            }`}
          >
            <span>Ver Todo</span>
          </button>

          {categories.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Flame;
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? activeSectionId === "bebidas"
                      ? "bg-gradient-to-r from-rose-800 to-rose-950 text-rose-100 border border-rose-500/50 shadow-lg shadow-rose-950/50"
                      : "bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-bold shadow-lg shadow-amber-950/50"
                    : "bg-stone-900/80 text-stone-300 border border-stone-800/80 hover:text-stone-100 hover:border-stone-700"
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? (activeSectionId === "bebidas" ? "text-rose-300" : "text-stone-950") : "text-amber-500/80"}`} />
                <span>{cat.name}</span>
                {cat.items?.length && (
                  <span className={`px-1.5 py-0.2 text-[10px] rounded-md ${isActive ? "bg-stone-950/30 text-stone-950" : "bg-stone-800 text-stone-400"}`}>
                    {cat.items.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
