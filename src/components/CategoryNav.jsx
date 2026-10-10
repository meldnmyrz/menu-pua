import React from 'react';

export default function CategoryNav({
  categories,
  activeCategoryId,
  setActiveCategoryId,
  activeSectionId
}) {
  return (
    <div className="w-full bg-[#050505] border-b border-[#18181b] shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 py-2.5 overflow-x-auto no-scrollbar">
          
          <button
            onClick={() => setActiveCategoryId("all")}
            className="flex flex-col items-center group whitespace-nowrap transition-all"
          >
            <span
              className={`text-xs font-extrabold uppercase tracking-[0.08em] transition-colors ${
                activeCategoryId === "all"
                  ? "text-white font-bold"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              TODAS LAS CATEGORÍAS
            </span>
            {activeCategoryId === "all" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55] mt-1 shadow-[0_0_8px_#e6ff55]" />
            )}
          </button>

          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className="flex flex-col items-center group whitespace-nowrap transition-all"
              >
                <span
                  className={`text-xs font-extrabold uppercase tracking-[0.08em] transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#a1a1aa] hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.items?.length && (
                    <span className="text-[10px] text-[#e6ff55] font-extrabold">
                      ({cat.items.length})
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55] mt-1 shadow-[0_0_8px_#e6ff55]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
