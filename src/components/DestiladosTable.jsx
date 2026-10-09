import React, { useState } from 'react';
import { Wine, Plus, Check } from 'lucide-react';

export default function DestiladosTable({ groups, onAddToOrder, orderItems }) {
  const [selectedTab, setSelectedTab] = useState("Tequila");

  const activeGroup = groups.find(g => g.categoryName === selectedTab) || groups[0];

  const checkIsAdded = (name, type) => {
    const itemId = `destilado-${name}-${type}`;
    return orderItems.some(i => i.id === itemId);
  };

  return (
    <div className="w-full glass-card rounded-2xl p-6 border border-stone-800/80 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-1">
            <Wine className="w-4 h-4" />
            Destilados Seleccionados
          </div>
          <h3 className="text-2xl font-bold font-serif-pua text-stone-100">
            Cava de Destilados Premium
          </h3>
          <p className="text-xs text-stone-400 font-light mt-0.5">
            Precios por copa de degustación o botella completa para mesa.
          </p>
        </div>

        {/* Spirit Group Switcher Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {groups.map((group) => (
            <button
              key={group.categoryName}
              onClick={() => setSelectedTab(group.categoryName)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedTab === group.categoryName
                  ? "bg-rose-900/90 text-rose-100 border border-rose-500/50 shadow-md"
                  : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
              }`}
            >
              {group.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-stone-800 text-xs text-stone-400 uppercase tracking-wider font-mono">
              <th className="py-3 px-4 font-semibold">Destilado / Vino</th>
              <th className="py-3 px-4 text-center font-semibold">Copa</th>
              <th className="py-3 px-4 text-center font-semibold">Botella</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {activeGroup.items.map((item, idx) => {
              const isAddedCopa = checkIsAdded(item.name, 'copa');
              const isAddedBotella = checkIsAdded(item.name, 'botella');

              return (
                <tr key={idx} className="hover:bg-stone-900/40 transition-colors group">
                  <td className="py-3.5 px-4 font-medium text-stone-200 group-hover:text-amber-300">
                    {item.name}
                  </td>
                  
                  {/* Copa Cell */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {item.copa ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-stone-300">${item.copa.toLocaleString('es-MX')}</span>
                        <button
                          onClick={() => onAddToOrder({
                            id: `destilado-${item.name}-copa`,
                            name: `${item.name} (Copa)`,
                            price: item.copa
                          })}
                          className={`p-1.5 rounded-lg text-xs transition-all ${
                            isAddedCopa 
                              ? "bg-emerald-900 text-emerald-300" 
                              : "bg-stone-800 hover:bg-amber-600 text-stone-400 hover:text-stone-950"
                          }`}
                          title="Agregar Copa"
                        >
                          {isAddedCopa ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <span className="text-stone-600 text-xs">—</span>
                    )}
                  </td>

                  {/* Botella Cell */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {item.botella ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-extrabold text-amber-400">${item.botella.toLocaleString('es-MX')}</span>
                        <button
                          onClick={() => onAddToOrder({
                            id: `destilado-${item.name}-botella`,
                            name: `${item.name} (Botella)`,
                            price: item.botella
                          })}
                          className={`p-1.5 rounded-lg text-xs transition-all ${
                            isAddedBotella 
                              ? "bg-emerald-900 text-emerald-300" 
                              : "bg-stone-800 hover:bg-amber-600 text-stone-400 hover:text-stone-950"
                          }`}
                          title="Agregar Botella"
                        >
                          {isAddedBotella ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <span className="text-stone-600 text-xs">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
