import React from 'react';

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
    <div className="sticky top-0 z-30 w-full sweet-nav-dark shadow-xl">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 py-4 overflow-x-auto no-scrollbar">
          
          <button
            onClick={() => scrollToCategory("all")}
            className="flex flex-col items-center group whitespace-nowrap transition-all"
          >
            <span
              className={`text-lg sm:text-2xl font-display uppercase tracking-tight transition-colors ${
                activeCategoryId === "all"
                  ? "text-white font-normal"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              TODOS LOS PLATILLOS
            </span>
            {activeCategoryId === "all" && (
              <span className="w-2 h-2 rounded-full bg-[#e6ff55] mt-1 shadow-xs" />
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
                      ? "text-white font-normal"
                      : "text-[#a1a1aa] hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.items?.length && (
                    <span className="text-xs font-sans text-[#e6ff55] font-extrabold">
                      ({cat.items.length})
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#e6ff55] mt-1 shadow-xs" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
