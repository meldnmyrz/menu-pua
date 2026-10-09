import React from 'react';
import { Flame, Wine, MapPin, Phone, Clock, Camera } from 'lucide-react';

export default function Footer({ restaurant }) {
  return (
    <footer className="w-full bg-[#070504] border-t border-amber-950/40 text-stone-400 text-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800/80">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">
            <Flame className="w-4 h-4" />
            {restaurant.subtitle}
          </div>
          <h2 className="text-3xl font-bold font-serif-pua text-stone-100">
            {restaurant.name}
          </h2>
          <p className="text-xs text-stone-400 font-light mt-2 max-w-sm leading-relaxed">
            {restaurant.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            Experiencia Gastronómica
          </h4>
          <ul className="space-y-2 text-xs text-stone-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Cortes de Carne Angus a las brasas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Mixología de autor & Cava de vinos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Cocina de mar y especialidades gourmet
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Servicio refinado y ambiente exclusivo
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            Reservaciones & Contacto
          </h4>
          <div className="space-y-2 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{restaurant.instagram}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Reserva directa con tu mesero</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Abierto de Martes a Domingo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
        <p className="font-serif-pua text-amber-400/80">Menú Gastronómico Digital</p>
      </div>
    </footer>
  );
}
