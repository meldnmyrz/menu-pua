import React, { useState } from 'react';
import { X, Wine, Clock, Plus, Check, Flame, Share2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#f4f3e7] rounded-[24px] border border-[#00473c]/20 shadow-2xl overflow-hidden text-[#0e150e] flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#f4f3e7] text-[#00473c] hover:bg-[#00473c] hover:text-[#e6ff55] border border-[#00473c]/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Image Banner */}
        {item.image && (
          <div className="relative w-full h-64 sm:h-72 bg-[#e8dcc6] flex-shrink-0">
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
              <span className="badge-forest">
                PÚA GASTRONOMÍA
              </span>
              {isWaitTime && (
                <span className="badge-lime flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  TIEMPO DE ESPERA
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mt-2">
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#00473c] leading-tight">
                {item.name}
              </h2>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#00473c] whitespace-nowrap">
                {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
              </span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="p-5 rounded-[16px] bg-white border border-[#00473c]/15 text-[#0e150e] text-sm leading-relaxed font-normal">
              {item.description}
            </div>
          )}

          {/* Sommelier Pairing Banner */}
          {item.pairing && (
            <div className="p-5 rounded-[16px] bg-[#d8e5d6] border border-[#00473c]/20 text-[#00473c]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] mb-1">
                <Wine className="w-4 h-4 text-[#00473c]" />
                MARIDAJE SUGERIDO POR EL SOMMELIER
              </div>
              <p className="text-sm font-medium">
                Recomendamos acompañar este platillo con: <span className="font-bold text-[#00473c] underline">{item.pairing}</span>
              </p>
            </div>
          )}

          {/* Custom Note Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-[0.05em] text-[#00473c] mb-2">
              Instrucciones para la cocina / mesero (opcional):
            </label>
            <input
              type="text"
              value={itemNote}
              onChange={(e) => setItemNote(e.target.value)}
              placeholder="Ej. Término medio, sin sal, salsa aparte..."
              className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#00473c]/30 text-[#0e150e] text-sm placeholder-[#8c8c82] focus:outline-none focus:border-[#00473c]"
            />
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-6 bg-[#d8e5d6]/50 border-t border-[#00473c]/15 flex items-center justify-between gap-4">
          <button
            onClick={shareItem}
            className="p-3 rounded-full bg-white text-[#00473c] border border-[#00473c]/20 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em]"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedNote ? "¡COPIADO!" : "COMPARTIR"}</span>
          </button>

          <button
            onClick={handleAddWithNote}
            className={`flex-1 pill-btn-lime flex items-center justify-center gap-2 text-sm shadow-md ${
              isAdded ? "bg-[#00473c] text-[#e6ff55]" : ""
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5 text-[#e6ff55]" />
                <span>AGREGADO A TU MESA</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 text-[#0e150e]" />
                <span>AGREGAR A MI SELECCIÓN ({item.price ? `$${typeof item.price === 'number' ? item.price : ''}` : ''})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
