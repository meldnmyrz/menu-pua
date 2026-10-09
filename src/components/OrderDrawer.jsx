import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, Check, Sparkles } from 'lucide-react';

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

  const removeItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#14110f] border-l border-amber-900/40 text-stone-100 shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-600/30 text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif-pua text-stone-100">
                  Mi Mesa / Selección
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Prepara tus platillos para el mesero
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Table Number Input */}
          <div className="p-4 bg-stone-900/60 border-b border-stone-800/80 flex items-center gap-3">
            <label className="text-xs font-medium text-stone-400 whitespace-nowrap">
              Número de Mesa:
            </label>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="Ej. 12"
              className="w-24 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-xs text-center font-bold focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Drawer Content */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {orderItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-stone-500">
                <ShoppingBag className="w-12 h-12 stroke-1 mb-3 text-stone-700" />
                <p className="text-sm font-medium text-stone-400">
                  No has agregado nada a tu mesa
                </p>
                <p className="text-xs text-stone-600 mt-1 max-w-xs">
                  Explora nuestro menú navegable y presiona "+ Agregar" en tus platillos o bebidas preferidos.
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
                    className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/80 flex items-start justify-between gap-3 shadow-md"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-200 text-sm font-serif-pua">
                        {item.name}
                      </h4>
                      <div className="text-xs text-amber-400 font-semibold mt-0.5">
                        ${unitPrice.toLocaleString('es-MX')} MXN c/u
                      </div>
                      {item.customerNote && (
                        <p className="text-[11px] text-stone-400 italic mt-1 bg-stone-950/60 p-1.5 rounded border border-stone-800">
                          " {item.customerNote} "
                        </p>
                      )}
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-extrabold text-stone-100 text-sm">
                        ${itemTotal.toLocaleString('es-MX')}
                      </span>
                      <div className="flex items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-amber-400">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800"
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
            <div className="p-6 bg-stone-950 border-t border-stone-800 space-y-4">
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-sm font-medium">Total Estimado:</span>
                <span className="text-2xl font-extrabold text-amber-400">
                  ${totalAmount.toLocaleString('es-MX')} MXN
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setOrderItems([])}
                  className="p-3 rounded-2xl bg-stone-900 hover:bg-rose-950 text-stone-400 hover:text-rose-300 border border-stone-800 transition-colors"
                  title="Vaciar orden"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={generateWhatsAppOrder}
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60"
                >
                  {sentSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Enviado a WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar a WhatsApp / Mesero</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-stone-500 font-light">
                * Muestra esta pantalla a tu mesero en PÚA para confirmar tu pedido.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
