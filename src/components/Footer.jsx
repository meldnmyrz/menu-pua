import React from 'react';
import { Flame, Phone, Clock, Camera } from 'lucide-react';

export default function Footer({ restaurant }) {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#232730] text-[#d4d3c9] text-sm py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#232730]">
        
        <div className="flex flex-col items-start gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#232730] shadow-xl bg-black">
            <img
              src={restaurant.logo}
              alt="PÚA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[#c89f53] font-bold text-xs uppercase tracking-[0.05em] mb-1">
              <Flame className="w-4 h-4 text-[#c89f53]" />
              {restaurant.subtitle}
            </div>
            <h2 className="text-4xl font-display font-normal text-[#f5f7f5] leading-none">
              {restaurant.name}
            </h2>
            <p className="text-xs text-[#d4d3c9] font-normal mt-2 max-w-sm leading-relaxed">
              {restaurant.description}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-extrabold text-[#c89f53] uppercase tracking-[0.05em] mb-3">
            EXPERIENCIA PÚA
          </h4>
          <ul className="space-y-2.5 text-xs text-[#f5f7f5]">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f53]" />
              Cortes Angus a las brasas y leña de encino
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f53]" />
              Mixología contemporánea y maridajes exclusivos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f53]" />
              Cocina de mar fresca y recetas de autor
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-extrabold text-[#c89f53] uppercase tracking-[0.05em] mb-3">
            RESERVACIONES
          </h4>
          <div className="space-y-2.5 text-xs text-[#f5f7f5]">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#c89f53]" />
              <span>{restaurant.instagram}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#c89f53]" />
              <span>Reserva directa en mesa con tu mesero</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c89f53]" />
              <span>Abierto de Martes a Domingo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9d93]">
        <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Menú Gastronómico Oficial.</p>
        <p className="font-bold text-[#c89f53]">PÚA BRASA Y VINO</p>
      </div>
    </footer>
  );
}
