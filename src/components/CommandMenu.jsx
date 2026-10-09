import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Command, Flame, Wine, Soup, Salad, Beef, CookingPot, 
  Fish, Sparkles, UtensilsCrossed, Cake, Smile, GlassWater, Beer, 
  Coffee, ShoppingBag, ArrowRight, CornerDownLeft, X, Clock 
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

export default function CommandMenu({
  isOpen,
  setIsOpen,
  sections,
  activeSectionId,
  setActiveSectionId,
  setActiveCategoryId,
  onSelectItem,
  setIsOrderOpen
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Keyboard shortcut listener (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Flatten all classifications and popular items
  const allCategories = [];
  sections.forEach((sec) => {
    sec.categories.forEach((cat) => {
      allCategories.push({
        id: cat.id,
        name: cat.name,
        sectionId: sec.id,
        icon: cat.icon,
        type: 'category',
        count: cat.isTableLayout ? cat.groups?.length : cat.items?.length
      });
    });
  });

  const popularItems = [
    { id: "cor-3", name: "Tomahawk (Angus 1500g)", sectionId: "platillos", categoryId: "cortes", type: "item" },
    { id: "pas-3", name: "Fettuccini Púa", sectionId: "platillos", categoryId: "pastas", type: "item" },
    { id: "mar-15", name: "Pulpo Brasa", sectionId: "platillos", categoryId: "mar", type: "item" },
    { id: "esp-7", name: "Rib Eye en Vino Tinto", sectionId: "platillos", categoryId: "especiales", type: "item" },
    { id: "mix-27", name: "Maracuya 23 (Cóctel)", sectionId: "bebidas", categoryId: "mixologia", type: "item" },
    { id: "mar-2", name: "Jamón Ibérico (100g)", sectionId: "platillos", categoryId: "maridaje", type: "item" }
  ];

  // Filter commands
  const filteredCategories = allCategories.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredItems = popularItems.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  const combinedResults = [
    ...filteredCategories,
    ...filteredItems,
    { id: "action-order", name: "Abrir Mi Mesa / Ver Selección", type: "action", icon: "ShoppingBag" },
    { id: "action-platillos", name: "Ver Menú de Platillos a la Brasa", type: "action", sectionId: "platillos" },
    { id: "action-bebidas", name: "Ver Cava de Vinos & Mixología", type: "action", sectionId: "bebidas" }
  ];

  const handleSelectCommand = (cmd) => {
    if (cmd.type === "category") {
      setActiveSectionId(cmd.sectionId);
      setActiveCategoryId(cmd.id);
      setIsOpen(false);
      setTimeout(() => {
        const elem = document.getElementById(`category-${cmd.id}`);
        if (elem) {
          const y = elem.getBoundingClientRect().top + window.pageYOffset - 110;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else if (cmd.type === "item") {
      setActiveSectionId(cmd.sectionId);
      setActiveCategoryId(cmd.categoryId);
      setIsOpen(false);
      setTimeout(() => {
        const elem = document.getElementById(`category-${cmd.categoryId}`);
        if (elem) {
          const y = elem.getBoundingClientRect().top + window.pageYOffset - 110;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else if (cmd.type === "action") {
      setIsOpen(false);
      if (cmd.id === "action-order") {
        setIsOrderOpen(true);
      } else if (cmd.sectionId) {
        setActiveSectionId(cmd.sectionId);
        setActiveCategoryId("all");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleKeyDownList = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, combinedResults.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + combinedResults.length) % Math.max(1, combinedResults.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (combinedResults[selectedIndex]) {
        handleSelectCommand(combinedResults[selectedIndex]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Command Menu Popover Box */}
      <div className="relative w-full max-w-xl bg-[#09090b] rounded-[24px] border border-[#27272a] shadow-2xl overflow-hidden text-white flex flex-col z-10">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#27272a] bg-[#121214]">
          <Search className="w-5 h-5 text-[#e6ff55] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownList}
            placeholder="Ir a clasificación o platillo... (ej. Cortes, Mixología, Pasta)"
            className="w-full bg-transparent text-white text-base placeholder-[#71717a] focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-black text-[#a1a1aa] rounded-md border border-[#27272a]">
              ESC
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#71717a] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4">
          
          {/* Classification Categories */}
          {filteredCategories.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#e6ff55] flex items-center justify-between">
                <span>Clasificaciones del Menú ({filteredCategories.length})</span>
                <span className="text-[10px] text-[#71717a]">Sección Independiente</span>
              </div>
              <div className="space-y-1 mt-1">
                {filteredCategories.map((cat, idx) => {
                  const IconComp = ICON_MAP[cat.icon] || Flame;
                  const isSelected = combinedResults.indexOf(cat) === selectedIndex;

                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectCommand(cat)}
                      onMouseEnter={() => setSelectedIndex(combinedResults.indexOf(cat))}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-[14px] cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#e6ff55] text-black font-bold shadow-md"
                          : "text-[#f4f4f5] hover:bg-[#18181b]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? "bg-black text-[#e6ff55]" : "bg-[#18181b] text-[#e6ff55]"}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">{cat.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {cat.count && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? "bg-black text-[#e6ff55]" : "bg-[#18181b] text-[#a1a1aa]"}`}>
                            {cat.count} opciones
                          </span>
                        )}
                        <ArrowRight className={`w-4 h-4 ${isSelected ? "text-black" : "text-[#71717a]"}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Popular Dishes */}
          {filteredItems.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#a1a1aa]">
                Platillos & Cócteles Destacados
              </div>
              <div className="space-y-1 mt-1">
                {filteredItems.map((item) => {
                  const isSelected = combinedResults.indexOf(item) === selectedIndex;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectCommand(item)}
                      onMouseEnter={() => setSelectedIndex(combinedResults.indexOf(item))}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-[14px] cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#e6ff55] text-black font-bold shadow-md"
                          : "text-[#f4f4f5] hover:bg-[#18181b]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Flame className={`w-4 h-4 ${isSelected ? "text-black" : "text-[#e6ff55]"}`} />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className={`text-xs ${isSelected ? "text-black" : "text-[#71717a]"}`}>
                        Ir a platillo →
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#a1a1aa]">
              Acciones Rápidas
            </div>
            <div className="space-y-1 mt-1">
              <div
                onClick={() => handleSelectCommand({ id: "action-order", type: "action" })}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-[14px] cursor-pointer hover:bg-[#18181b] text-white"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4 text-[#e6ff55]" />
                  <span className="text-sm font-bold">Ver Mi Mesa / Orden Resumen</span>
                </div>
                <CornerDownLeft className="w-4 h-4 text-[#71717a]" />
              </div>
            </div>
          </div>

        </div>

        {/* Command Footer Controls */}
        <div className="px-4 py-2.5 bg-[#121214] border-t border-[#27272a] flex items-center justify-between text-[11px] text-[#71717a]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black text-white text-[10px]">↑↓</kbd> Navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black text-white text-[10px]">↵</kbd> Seleccionar
            </span>
          </div>
          <span className="text-[#e6ff55] font-bold">PÚA Command Menu 6</span>
        </div>
      </div>
    </div>
  );
}
