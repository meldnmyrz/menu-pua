import React from 'react';
import { Flame, Star, Camera, ArrowUpRight, Wine, MapPin, Clock } from 'lucide-react';

export default function Footer({ restaurant }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReviewInMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=PUA+Brasa+y+Vino', '_blank');
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#232730] text-[#d4d3c9] pt-20 pb-10 overflow-hidden relative">
      
      {/* Upper Sitemap Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#232730]">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={restaurant.logo}
                alt="PÚA Logo"
                className="h-16 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={scrollToTop}
              />
            </div>
            <p className="text-xs text-[#9e9d93] leading-relaxed font-normal">
              Cortes Angus madurados a la brasa, leña de encino, cocina de mar y una cava exclusiva de vinos y mixología de autor.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReviewInMaps}
                className="px-4 py-2 rounded-full bg-[#987232] hover:bg-[#af853c] text-white text-xs font-extrabold uppercase tracking-[0.05em] inline-flex items-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Reseñar en Google Maps</span>
              </button>
            </div>
          </div>

          {/* Col 2: Platillos Sitemap */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#c89f53] uppercase tracking-[0.1em] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#c89f53]" />
              Páginas de Platillos
            </h4>
            <ul className="space-y-2 text-xs text-[#d4d3c9]">
              <li><a href="#/section/cortes" className="hover:text-white transition-colors">Cortes de Carne Prime</a></li>
              <li><a href="#/section/maridaje" className="hover:text-white transition-colors">Maridajes & Charcutería</a></li>
              <li><a href="#/section/entradas" className="hover:text-white transition-colors">Entradas a la Brasa</a></li>
              <li><a href="#/section/sopas" className="hover:text-white transition-colors">Sopas & Cremas</a></li>
              <li><a href="#/section/ensaladas" className="hover:text-white transition-colors">Ensaladas Frescas</a></li>
              <li><a href="#/section/pastas" className="hover:text-white transition-colors">Pastas Artesanales</a></li>
              <li><a href="#/section/mar" className="hover:text-white transition-colors">Cocina de Mar</a></li>
              <li><a href="#/section/postres" className="hover:text-white transition-colors">Postres de Autor</a></li>
            </ul>
          </div>

          {/* Col 3: Cava & Mixología Sitemap */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#c89f53] uppercase tracking-[0.1em] flex items-center gap-1.5">
              <Wine className="w-4 h-4 text-[#c89f53]" />
              Cava & Mixología
            </h4>
            <ul className="space-y-2 text-xs text-[#d4d3c9]">
              <li><a href="#/section/mixologia" className="hover:text-white transition-colors">Mixología de Autor</a></li>
              <li><a href="#/section/vinos" className="hover:text-white transition-colors">Selección de Destilados</a></li>
              <li><a href="#/section/vinos" className="hover:text-white transition-colors">Tequila & Mezcal Premium</a></li>
              <li><a href="#/section/vinos" className="hover:text-white transition-colors">Vinos Tintos & Blancos</a></li>
              <li><a href="#/section/mixologia" className="hover:text-white transition-colors">Cócteles Insignia</a></li>
            </ul>
          </div>

          {/* Col 4: Horarios & Información */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#c89f53] uppercase tracking-[0.1em]">
              Información & Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-[#d4d3c9]">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#c89f53]" />
                <span>{restaurant.instagram}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c89f53]" />
                <span>Martes a Domingo: 13:00 - 00:00 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c89f53]" />
                <span>Experiencia Brasa y Vino en Mesa</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="px-3.5 py-1.5 rounded-full bg-[#12141a] border border-[#232730] text-[#d4d3c9] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>VOLVER ARRIBA</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c89f53]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer 9 Giant Wordmark Section (React Bits Pro Block) */}
      <div className="w-full my-8 py-6 border-y border-[#232730]/60 overflow-hidden flex items-center justify-center select-none">
        <h1 className="text-[12vw] sm:text-[11vw] font-display font-normal text-[#12141a] hover:text-[#181c24] transition-colors leading-none tracking-tighter text-center uppercase whitespace-nowrap">
          PÚA BRASA Y VINO
        </h1>
      </div>

      {/* Bottom Bar Credits & Copyright */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9d93]">
        <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Menú Gastronómico Oficial.</p>
        <div className="flex items-center gap-4">
          <span>React Bits Pro — Footer 9</span>
          <span className="w-1 h-1 rounded-full bg-[#c89f53]" />
          <span className="font-bold text-[#c89f53]">PÚA GASTRONOMÍA</span>
        </div>
      </div>

    </footer>
  );
}
