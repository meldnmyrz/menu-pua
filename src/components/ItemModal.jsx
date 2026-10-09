import React, { useState } from 'react';
import { X, Wine, Clock, Plus, Check, Share2 } from 'lucide-react';

export default function ItemModal({ item, onClose, onAddToOrder, isAdded }) {
  const [itemNote, setItemNote] = useState("");
  const [copiedNote, setCopiedNote] = useState(false);

  if (!item) return null;

  const isWaitTime = item.waitTime || (typeof item.description === 'string' && item.description.includes('Tiempo de espera'));

  const handleAddWithNote = () => {
    onAddToOrder({
      ...item,
      customerNote: itemNote
    });
  };

  const shareItem = () => {
    if (navigator.share) {
      navigator.share({
        title: `PÚA Brasa y Vino — ${item.name}`,
        text: `¡Mira este platillo en PÚA!: ${item.name} - ${typeof item.price === 'number' ? `$${item.price}` : item.price}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${item.name} — ${item.description || ''}`);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#121214] rounded-[24px] border border-[#27272a] shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:text-[#e6ff55] border border-[#27272a] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Image Banner */}
        {item.image && (
          <div className="relative w-full h-64 sm:h-72 bg-black flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-dark">
                PÚA GASTRONOMÍA
              </span>
              {isWaitTime && (
                <span className="badge-lime flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  TIEMPO DE ESPERA
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mt-2">
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-white leading-tight">
                {item.name}
              </h2>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#e6ff55] whitespace-nowrap">
                {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
              </span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="p-5 rounded-[16px] bg-[#18181b] border border-[#27272a] text-[#a1a1aa] text-sm leading-relaxed font-normal">
              {item.description}
            </div>
          )}

          {/* Sommelier Pairing Banner */}
          {item.pairing && (
            <div className="p-5 rounded-[16px] bg-[#18181b] border border-[#e6ff55]/30 text-[#e6ff55]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] mb-1 text-white">
                <Wine className="w-4 h-4 text-[#e6ff55]" />
                MARIDAJE SUGERIDO POR EL SOMMELIER
              </div>
              <p className="text-sm font-medium">
                Recomendamos acompañar este platillo con: <span className="font-bold text-[#e6ff55] underline">{item.pairing}</span>
              </p>
            </div>
          )}

          {/* Custom Note Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.05em] text-[#a1a1aa] mb-2">
              Instrucciones para la cocina / mesero (opcional):
            </label>
            <input
              type="text"
              value={itemNote}
              onChange={(e) => setItemNote(e.target.value)}
              placeholder="Ej. Término medio, sin sal, salsa aparte..."
              className="w-full px-4 py-3 rounded-[12px] bg-[#18181b] border border-[#27272a] text-white text-sm placeholder-[#71717a] focus:outline-none focus:border-[#e6ff55]"
            />
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-6 bg-[#09090b] border-t border-[#27272a] flex items-center justify-between gap-4">
          <button
            onClick={shareItem}
            className="p-3 rounded-full bg-[#18181b] text-white border border-[#27272a] flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em]"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedNote ? "¡COPIADO!" : "COMPARTIR"}</span>
          </button>

          <button
            onClick={handleAddWithNote}
            className={`flex-1 pill-btn-lime flex items-center justify-center gap-2 text-sm shadow-xl ${
              isAdded ? "bg-white text-black" : ""
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5 text-black" />
                <span>AGREGADO A TU MESA</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 text-black" />
                <span>AGREGAR A MI SELECCIÓN ({item.price ? `$${typeof item.price === 'number' ? item.price : ''}` : ''})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
