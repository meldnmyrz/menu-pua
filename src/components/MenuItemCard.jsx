import React from 'react';
import { Clock, Wine, ArrowRight, Check, Plus } from 'lucide-react';

export default function MenuItemCard({ item, onSelect, onAddToOrder, isAdded }) {
  const isWaitTime = item.waitTime || (typeof item.description === 'string' && item.description.includes('Tiempo de espera'));

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between cursor-pointer transition-all duration-300 bg-[#f4f3e7] p-2 rounded-[24px] hover:bg-[#d8e5d6]/30"
    >
      {/* Top Image & Badge Container */}
      <div className="relative w-full aspect-square bg-[#e8dcc6] rounded-[20px] overflow-hidden mb-4 shadow-sm">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* High quality fallback pattern if item doesn't have an uploaded image */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#d8e5d6] to-[#e8dcc6]">
            <span className="text-4xl font-display font-normal text-[#00473c]/30 mb-2">
              PÚA
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00473c]">
              {item.name}
            </span>
          </div>
        )}

        {/* Sweetgreen-style Badge Top-Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {isWaitTime && (
            <span className="badge-lime flex items-center gap-1 shadow-sm">
              <Clock className="w-3 h-3 text-[#0e150e]" />
              TIEMPO DE ESPERA
            </span>
          )}
          {item.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[11px] font-bold uppercase tracking-[0.05em] px-3 py-1 rounded-[20px] shadow-xs ${
                tag === 'Insignia' || tag === 'Trago Insignia'
                  ? 'bg-[#e6ff55] text-[#0e150e]'
                  : 'bg-[#00473c] text-[#f4f3e7]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Info Content */}
      <div className="px-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-[#0e150e] group-hover:text-[#00473c] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="text-lg font-extrabold text-[#00473c] whitespace-nowrap">
              {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
            </span>
          </div>

          {item.description && (
            <p className="text-sm text-[#0e150e]/80 leading-[1.25] font-normal line-clamp-3 mb-3">
              {item.description}
            </p>
          )}

          {item.pairing && (
            <div className="mb-3 p-2.5 rounded-[12px] bg-[#d8e5d6]/60 text-xs text-[#00473c] flex items-center gap-2 border border-[#00473c]/10">
              <Wine className="w-4 h-4 text-[#00473c] flex-shrink-0" />
              <span className="truncate">
                <strong>Maridaje:</strong> {item.pairing}
              </span>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-[#00473c]/10 flex items-center justify-between">
          <span className="ghost-text-link text-sm">
            Ver detalles <ArrowRight className="w-4 h-4" />
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToOrder(item);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.05em] flex items-center gap-1.5 transition-all ${
              isAdded
                ? "bg-[#00473c] text-[#e6ff55]"
                : "bg-[#e6ff55] text-[#0e150e] hover:bg-[#d8f533] shadow-xs"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>AGREGADO</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>AGREGAR</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
