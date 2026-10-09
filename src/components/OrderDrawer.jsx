import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, Check } from 'lucide-react';

export default function OrderDrawer({ isOpen, onClose, orderItems, setOrderItems }) {
  const [tableNumber, setTableNumber] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const updateQuantity = (id, delta) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalAmount = orderItems.reduce((sum, item) => {
    const p = typeof item.price === 'number' ? item.price : 0;
    return sum + p * (item.quantity || 1);
  }, 0);

  const generateWhatsAppOrder = () => {
    const textLines = [
      `*MESA PÚA Brasa y Vino* ${tableNumber ? `(Mesa #${tableNumber})` : ''}`,
      `----------------------------------`,
      ...orderItems.map(
        (i) =>
          `• ${i.quantity || 1}x ${i.name} — $${(
            (typeof i.price === 'number' ? i.price : 0) * (i.quantity || 1)
          ).toLocaleString('es-MX')}${i.customerNote ? `\n  ↳ Nota: ${i.customerNote}` : ''}`
      ),
      `----------------------------------`,
      `*TOTAL ESTIMADO:* $${totalAmount.toLocaleString('es-MX')} MXN`
    ];

    const message = encodeURIComponent(textLines.join('\n'));
    window.open(`https://wa.me/?text=${message}`, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f4f3e7] border-l border-[#00473c]/20 text-[#0e150e] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#00473c]/15 flex items-center justify-between bg-[#00473c] text-[#f4f3e7]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-[#e6ff55] text-[#0e150e]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans text-white tracking-wide">
                  Mi Mesa / Selección
                </h3>
                <p className="text-xs text-[#d8e5d6] font-normal">
                  Resumen de pedido para el mesero
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#f4f3e7] hover:text-[#e6ff55] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Table Number Bar */}
          <div className="p-4 bg-[#d8e5d6] border-b border-[#00473c]/15 flex items-center justify-between gap-3">
            <label className="text-xs font-bold uppercase tracking-[0.05em] text-[#00473c]">
              Número de Mesa:
            </label>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="Ej. 12"
              className="w-24 px-3 py-1.5 rounded-[8px] bg-white border border-[#00473c]/30 text-[#0e150e] text-xs font-bold text-center focus:border-[#00473c] focus:outline-none"
            />
          </div>

          {/* Drawer Content */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {orderItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#8c8c82]">
                <ShoppingBag className="w-12 h-12 stroke-1 mb-3 text-[#00473c]/40" />
                <p className="text-sm font-bold text-[#00473c]">
                  No has seleccionado platillos aún
                </p>
                <p className="text-xs text-[#0e150e]/70 mt-1 max-w-xs">
                  Explora nuestro menú y presiona "AGREGAR" en los platillos o bebidas de tu preferencia.
                </p>
              </div>
            ) : (
              orderItems.map((item) => {
                const qty = item.quantity || 1;
                const unitPrice = typeof item.price === 'number' ? item.price : 0;
                const itemTotal = unitPrice * qty;

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-[16px] bg-white border border-[#00473c]/15 flex items-start justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-[#0e150e] text-base">
                        {item.name}
                      </h4>
                      <div className="text-xs text-[#00473c] font-extrabold mt-0.5">
                        ${unitPrice.toLocaleString('es-MX')} MXN c/u
                      </div>
                      {item.customerNote && (
                        <p className="text-[11px] text-[#0e150e]/80 italic mt-1 bg-[#f4f3e7] p-1.5 rounded border border-[#00473c]/10">
                          " {item.customerNote} "
                        </p>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-extrabold text-[#00473c] text-sm">
                        ${itemTotal.toLocaleString('es-MX')}
                      </span>
                      <div className="flex items-center gap-1.5 bg-[#f4f3e7] p-1 rounded-full border border-[#00473c]/20">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-full text-[#00473c] hover:bg-[#d8e5d6]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#0e150e]">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-full text-[#00473c] hover:bg-[#d8e5d6]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer */}
          {orderItems.length > 0 && (
            <div className="p-6 bg-[#d8e5d6]/60 border-t border-[#00473c]/15 space-y-4">
              <div className="flex items-center justify-between text-[#00473c]">
                <span className="text-sm font-bold uppercase tracking-[0.05em]">Total Estimado:</span>
                <span className="text-2xl font-extrabold text-[#00473c]">
                  ${totalAmount.toLocaleString('es-MX')} MXN
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setOrderItems([])}
                  className="p-3 rounded-full bg-white text-rose-700 border border-rose-200 hover:bg-rose-50 transition-colors"
                  title="Vaciar orden"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={generateWhatsAppOrder}
                  className="flex-1 pill-btn-lime flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.05em] shadow-md"
                >
                  {sentSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡ENVIADO A WHATSAPP!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ENVIAR ORDEN A MESERO</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#0e150e]/60 font-normal">
                * Muestra este resumen a tu mesero en PÚA para confirmar tu consumo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
