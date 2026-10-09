import React from 'react';
import { Clock, Wine, Plus, Check, Sparkles, Flame } from 'lucide-react';

export default function MenuItemCard({ item, onSelect, onAddToOrder, isAdded }) {
  const isWaitTime = item.waitTime || (typeof item.description === 'string' && item.description.includes('Tiempo de espera'));

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative glass-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer overflow-hidden border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300"
    >
      {/* Optional Top Dish Image Accent */}
      {item.image && (
        <div className="relative w-full h-44 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl bg-stone-950">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-transparent to-transparent opacity-90" />
          {isWaitTime && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-950/90 border border-amber-500/40 text-amber-400 text-[10px] font-semibold flex items-center gap-1 backdrop-blur-md">
              <Clock className="w-3 h-3 text-amber-400" />
              Tiempo de espera
            </span>
          )}
        </div>
      )}

      <div>
        {/* Header & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold font-serif-pua text-stone-100 group-hover:text-amber-300 transition-colors">
            {item.name}
          </h3>
          <div className="text-right whitespace-nowrap">
            <span className="text-lg font-extrabold text-amber-400">
              {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
            </span>
          </div>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed line-clamp-3 mb-3 font-light">
            {item.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {isWaitTime && !item.image && (
            <span className="px-2 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/30 text-amber-400 text-[10px] font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Tiempo de espera
            </span>
          )}
          {item.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                tag === 'Insignia' || tag === 'Trago Insignia'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : tag === 'Premium' || tag === 'Chef Pick'
                  ? 'bg-rose-950/60 text-rose-300 border-rose-800/40'
                  : 'bg-stone-900/90 text-stone-300 border-stone-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Sommelier / Pairing Suggestion */}
        {item.pairing && (
          <div className="mt-2 p-2 rounded-lg bg-amber-950/30 border border-amber-900/40 text-[11px] text-amber-300/90 flex items-center gap-2">
            <Wine className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="truncate">
              <strong>Maridaje:</strong> {item.pairing}
            </span>
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
        <span className="text-[11px] text-stone-500 hover:text-stone-300 transition-colors">
          Ver detalles & maridaje →
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToOrder(item);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 ${
            isAdded
              ? "bg-emerald-900/80 text-emerald-300 border border-emerald-500/40"
              : "bg-stone-800/90 hover:bg-amber-600 text-stone-300 hover:text-stone-950 border border-stone-700/60 hover:border-amber-500"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Agregado</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Agregar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
