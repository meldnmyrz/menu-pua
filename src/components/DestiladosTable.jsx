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
    <div className="w-full bg-[#0b0e14] rounded-[24px] p-6 sm:p-8 border border-[#232730] shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#232730]">
        <div>
          <div className="flex items-center gap-2 text-[#c89f53] text-xs font-extrabold uppercase tracking-[0.05em] mb-1">
            <Wine className="w-4 h-4" />
            SELECCIÓN DE LA CAVA
          </div>
          <h3 className="text-3xl sm:text-5xl font-display font-normal text-[#f5f7f5] tracking-tight">
            Destilados Premium
          </h3>
          <p className="text-sm text-[#d4d3c9] font-normal mt-1">
            Formatos por copa de degustación o botella completa para mesa.
          </p>
        </div>

        {/* Spirit Group Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {groups.map((group) => (
            <button
              key={group.categoryName}
              onClick={() => setSelectedTab(group.categoryName)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-[0.05em] whitespace-nowrap transition-all ${
                selectedTab === group.categoryName
                  ? "bg-[#987232] text-white shadow-md"
                  : "bg-[#12141a] text-[#d4d3c9] hover:text-white border border-[#232730]"
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
            <tr className="border-b border-[#232730] text-xs text-[#d4d3c9] uppercase tracking-wider font-bold">
              <th className="py-3.5 px-4">Destilado / Vino</th>
              <th className="py-3.5 px-4 text-center">Copa</th>
              <th className="py-3.5 px-4 text-center">Botella</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#232730]/60 text-sm">
            {activeGroup.items.map((item, idx) => {
              const isAddedCopa = checkIsAdded(item.name, 'copa');
              const isAddedBotella = checkIsAdded(item.name, 'botella');

              return (
                <tr key={idx} className="hover:bg-[#12141a] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#f5f7f5]">
                    {item.name}
                  </td>
                  
                  {/* Copa Cell */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    {item.copa ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-extrabold text-[#c89f53]">${item.copa.toLocaleString('es-MX')}</span>
                        <button
                          onClick={() => onAddToOrder({
                            id: `destilado-${item.name}-copa`,
                            name: `${item.name} (Copa)`,
                            price: item.copa
                          })}
                          className={`p-1.5 rounded-full text-xs font-bold transition-all ${
                            isAddedCopa 
                              ? "bg-[#f5f7f5] text-[#0b0e14]" 
                              : "bg-[#987232] text-white hover:bg-[#af853c]"
                          }`}
                          title="Agregar Copa"
                        >
                          {isAddedCopa ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <span className="text-[#64635a] text-xs">—</span>
                    )}
                  </td>

                  {/* Botella Cell */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    {item.botella ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-extrabold text-[#c89f53]">${item.botella.toLocaleString('es-MX')}</span>
                        <button
                          onClick={() => onAddToOrder({
                            id: `destilado-${item.name}-botella`,
                            name: `${item.name} (Botella)`,
                            price: item.botella
                          })}
                          className={`p-1.5 rounded-full text-xs font-bold transition-all ${
                            isAddedBotella 
                              ? "bg-[#f5f7f5] text-[#0b0e14]" 
                              : "bg-[#987232] text-white hover:bg-[#af853c]"
                          }`}
                          title="Agregar Botella"
                        >
                          {isAddedBotella ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ) : (
                      <span className="text-[#64635a] text-xs">—</span>
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
