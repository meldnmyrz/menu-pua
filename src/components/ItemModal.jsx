import React, { useState, useEffect } from 'react';
import { X, Wine, Clock, Share2, Check } from 'lucide-react';

export default function ItemModal({ item, onClose }) {
  const [copiedNote, setCopiedNote] = useState(false);

  useEffect(() => {
    if (item) {
      // Set address bar hash to direct dish link e.g. #/item/cor-3
      window.location.hash = `#/item/${item.id}`;
    }
  }, [item]);

  if (!item) return null;

  const isWaitTime = item.waitTime || (typeof item.description === 'string' && item.description.includes('Tiempo de espera'));

  const handleCloseModal = () => {
    onClose();
  };

  const shareItem = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#/item/${item.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: `PÚA Brasa y Vino — ${item.name}`,
        text: `¡Mira este platillo en PÚA!: ${item.name} - ${typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')} MXN` : item.price}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0b0e14] rounded-[24px] border border-[#232730] shadow-2xl overflow-hidden text-[#f5f7f5] flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-[#f5f7f5] hover:text-[#c89f53] border border-[#232730] transition-all cursor-pointer"
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
              <span className="badge-mushroom">
                PÚA GASTRONOMÍA
              </span>
              {isWaitTime && (
                <span className="badge-caramel flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-white" />
                  TIEMPO DE ESPERA
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 mt-2">
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#f5f7f5] leading-tight">
                {item.name}
              </h2>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#c89f53] whitespace-nowrap">
                {typeof item.price === 'number' ? `$${item.price.toLocaleString('es-MX')}` : item.price}
              </span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="p-5 rounded-[16px] bg-[#12141a] border border-[#232730] text-[#d4d3c9] text-sm leading-relaxed font-normal">
              {item.description}
            </div>
          )}

          {/* Sommelier Pairing Banner */}
          {item.pairing && (
            <div className="p-5 rounded-[16px] bg-[#1e3524]/60 border border-[#2d4e36] text-[#c89f53]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] mb-1 text-[#f5f7f5]">
                <Wine className="w-4 h-4 text-[#c89f53]" />
                MARIDAJE SUGERIDO POR EL SOMMELIER
              </div>
              <p className="text-sm font-medium">
                Recomendamos acompañar este platillo con: <span className="font-bold text-[#c89f53] underline">{item.pairing}</span>
              </p>
            </div>
          )}
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-6 bg-[#050505] border-t border-[#232730] flex items-center justify-end">
          <button
            onClick={shareItem}
            className="pill-btn-caramel flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] shadow-xl cursor-pointer"
            title="Copiar enlace directo al platillo"
          >
            {copiedNote ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>¡ENLACE COPIADO AL PORTAPAPELES!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-white" />
                <span>COMPARTIR PLATILLO</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
