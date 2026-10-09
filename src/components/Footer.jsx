import React from 'react';
import { Flame, Wine, Phone, Clock, Camera } from 'lucide-react';

export default function Footer({ restaurant }) {
  return (
    <footer className="w-full bg-[#00473c] text-[#f4f3e7] text-sm py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#f4f3e7]/20">
        <div>
          <div className="inline-flex items-center gap-2 text-[#e6ff55] font-bold text-xs uppercase tracking-[0.05em] mb-2">
            <Flame className="w-4 h-4" />
            {restaurant.subtitle}
          </div>
          <h2 className="text-5xl font-display font-normal text-[#f4f3e7] leading-none">
            {restaurant.name}
          </h2>
          <p className="text-xs text-[#d8e5d6] font-normal mt-3 max-w-sm leading-relaxed">
            {restaurant.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#e6ff55] uppercase tracking-[0.05em] mb-3">
            EXPERIENCIA PÚA
          </h4>
          <ul className="space-y-2.5 text-xs text-[#f4f3e7]">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55]" />
              Cortes Angus a las brasas y leña de encino
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55]" />
              Mixología contemporánea y maridajes exclusivos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6ff55]" />
              Cocina de mar fresca y recetas de autor
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#e6ff55] uppercase tracking-[0.05em] mb-3">
            RESERVACIONES
          </h4>
          <div className="space-y-2.5 text-xs text-[#f4f3e7]">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#e6ff55]" />
              <span>{restaurant.instagram}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#e6ff55]" />
              <span>Reserva directa en mesa con tu mesero</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e6ff55]" />
              <span>Abierto de Martes a Domingo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d8e5d6]">
        <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Menú Gastronómico Digital.</p>
        <p className="font-bold text-[#e6ff55]">PÚA BRASA Y VINO</p>
      </div>
    </footer>
  );
}
