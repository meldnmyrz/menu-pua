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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#14110f] rounded-3xl border border-amber-900/40 shadow-2xl overflow-hidden text-stone-100 flex flex-col max-h-[90vh]">
        {/* Modal Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700/60 transition-all hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Image Banner */}
        {item.image && (
          <div className="relative w-full h-64 sm:h-72 bg-stone-950 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-transparent to-black/30" />
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/30 text-amber-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-500" />
                PÚA Gastronomía
              </span>
              {isWaitTime && (
                <span className="px-2.5 py-0.5 rounded-md bg-amber-950/90 text-amber-300 text-xs font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Tiempo de espera
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mt-2">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-pua text-stone-100">
                {item.name}
              </h2>
              <span className="text-2xl font-extrabold text-amber-400 whitespace-nowrap">
                {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
              </span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 text-stone-300 text-sm leading-relaxed font-light">
              {item.description}
            </div>
          )}

          {/* Sommelier Pairing Banner */}
          {item.pairing && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-stone-900 to-rose-950/40 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
                <Wine className="w-4 h-4 text-amber-400" />
                Sugerencia Sommelier PÚA
              </div>
              <p className="text-xs sm:text-sm text-stone-200">
                Acompaña este platillo idealmente con: <span className="font-semibold text-amber-300">{item.pairing}</span>
              </p>
            </div>
          )}

          {/* Custom Preparation Note */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Instrucciones para la cocina / mesero (opcional):
            </label>
            <input
              type="text"
              value={itemNote}
              onChange={(e) => setItemNote(e.target.value)}
              placeholder="Ej. Término medio, sin hielo, salsa aparte..."
              className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-6 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-4">
          <button
            onClick={shareItem}
            className="p-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 flex items-center gap-2 text-xs font-medium transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedNote ? "¡Copiado!" : "Compartir"}</span>
          </button>

          <button
            onClick={handleAddWithNote}
            className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
              isAdded
                ? "bg-emerald-800 text-emerald-100 border border-emerald-500/40"
                : "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 shadow-amber-950/80"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5" />
                <span>En tu mesa ({item.price ? `$${typeof item.price === 'number' ? item.price : ''}` : ''})</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                <span>Agregar a Mi Orden</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
