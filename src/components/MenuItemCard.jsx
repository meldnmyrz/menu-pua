import React from 'react';
import { Clock, Wine, ArrowRight, Check, Plus } from 'lucide-react';

export default function MenuItemCard({ item, onSelect, onAddToOrder, isAdded }) {
  const isWaitTime = item.waitTime || (typeof item.description === 'string' && item.description.includes('Tiempo de espera'));

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between cursor-pointer transition-all duration-300 bg-[#0b0e14] p-3 rounded-[24px] border border-[#232730] hover:border-[#c89f53]/60 hover:bg-[#12141a] shadow-lg"
    >
      {/* Top Image & Badge Container */}
      <div className="relative w-full aspect-square bg-[#050505] rounded-[20px] overflow-hidden mb-4 border border-[#232730]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12141a] to-[#050505]">
            <span className="text-4xl font-display font-normal text-[#232730] mb-2">
              PÚA
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4d3c9]">
              {item.name}
            </span>
          </div>
        )}

        {/* Badge Top-Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {isWaitTime && (
            <span className="badge-caramel flex items-center gap-1 shadow-md">
              <Clock className="w-3 h-3 text-white" />
              TIEMPO DE ESPERA
            </span>
          )}
          {item.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[11px] font-extrabold uppercase tracking-[0.05em] px-3 py-1 rounded-[20px] shadow-xs ${
                tag === 'Insignia' || tag === 'Trago Insignia'
                  ? 'bg-[#987232] text-white'
                  : 'bg-[#0b0e14]/90 text-[#d4d3c9] border border-[#232730] backdrop-blur-md'
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
            <h3 className="text-xl font-bold text-[#f5f7f5] group-hover:text-[#c89f53] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="text-lg font-extrabold text-[#c89f53] whitespace-nowrap">
              {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
            </span>
          </div>

          {item.description && (
            <p className="text-sm text-[#d4d3c9] leading-[1.3] font-normal line-clamp-3 mb-3">
              {item.description}
            </p>
          )}

          {item.pairing && (
            <div className="mb-3 p-2.5 rounded-[12px] bg-[#1e3524]/60 text-xs text-[#c89f53] flex items-center gap-2 border border-[#2d4e36]">
              <Wine className="w-4 h-4 text-[#c89f53] flex-shrink-0" />
              <span className="truncate">
                <strong className="text-[#f5f7f5]">Maridaje:</strong> {item.pairing}
              </span>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-[#232730] flex items-center justify-between">
          <span className="ghost-text-link-white text-xs text-[#f5f7f5] group-hover:text-[#c89f53]">
            Ver detalles <ArrowRight className="w-3.5 h-3.5" />
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToOrder(item);
            }}
            className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-[0.05em] flex items-center gap-1.5 transition-all ${
              isAdded
                ? "bg-[#f5f7f5] text-[#0b0e14]"
                : "bg-[#987232] text-white hover:bg-[#af853c] shadow-md"
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
