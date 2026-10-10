import React, { useState } from 'react';
import { Wine, Star } from 'lucide-react';

export default function DestiladosTable({ groups }) {
  const [selectedTab, setSelectedTab] = useState("Tequila");

  const activeGroup = groups.find(g => g.categoryName === selectedTab) || groups[0];

  const handleReviewInMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=PUA+Brasa+y+Vino', '_blank');
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
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-[0.05em] whitespace-nowrap transition-all cursor-pointer ${
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
              <th className="py-3.5 px-4 text-right">Reseña</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#232730]/60 text-sm">
            {activeGroup.items.map((item, idx) => {
              return (
                <tr key={idx} className="hover:bg-[#12141a] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#f5f7f5]">
                    {item.name}
                  </td>
                  
                  {/* Copa Cell */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    {item.copa ? (
                      <span className="font-extrabold text-[#c89f53]">${item.copa.toLocaleString('es-MX')}</span>
                    ) : (
                      <span className="text-[#64635a] text-xs">—</span>
                    )}
                  </td>

                  {/* Botella Cell */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    {item.botella ? (
                      <span className="font-extrabold text-[#c89f53]">${item.botella.toLocaleString('es-MX')}</span>
                    ) : (
                      <span className="text-[#64635a] text-xs">—</span>
                    )}
                  </td>

                  {/* Reseñar button */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={handleReviewInMaps}
                      className="px-3 py-1 rounded-full bg-[#987232] hover:bg-[#af853c] text-white text-[10px] font-extrabold uppercase tracking-[0.05em] inline-flex items-center gap-1 transition-all cursor-pointer"
                      title="Reseñar en Google Maps"
                    >
                      <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                      <span>Reseñar</span>
                    </button>
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
