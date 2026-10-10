import React from 'react';
import { Flame, Wine, Sparkles } from 'lucide-react';

export default function HeroEclipse({ onExplorePlatillos, onExploreBebidas }) {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-start border-b border-[#232730] overflow-hidden bg-black text-[#f5f7f5] -mt-[64px] pt-[100px] sm:pt-[120px]">
      
      {/* Background Video (PUA HEAD OF.mp4) Edge-to-Edge */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none z-0 filter brightness-[0.65] contrast-[1.1]"
        src="/assets/videos/pua_head_of.mp4"
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-transparent pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70 pointer-events-none z-1" />

      {/* Hero Content Layer - Left Aligned */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-12 text-left space-y-8">
        
        {/* Atmosphere Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b0e14]/90 backdrop-blur-md border border-[#232730] shadow-2xl">
          <Sparkles className="w-3.5 h-3.5 text-[#c89f53]" />
          <span className="text-xs font-extrabold tracking-[0.1em] text-[#f5f7f5]">
            PÚA BRASA Y VINO — GASTRONOMÍA DE AUTOR
          </span>
        </div>

        {/* Main Hero Headline & Custom Subtitle */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-normal text-[#f5f7f5] leading-[0.88] tracking-tight drop-shadow-2xl">
            El Fuego Encendido de la Brasa
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-[#d4d3c9] font-normal leading-relaxed drop-shadow-md">
            Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales
          </p>
        </div>

        {/* Hero CTA Action Buttons - Left Aligned */}
        <div className="flex flex-wrap items-center justify-start gap-4 pt-4">
          <button
            onClick={onExplorePlatillos}
            className="pill-btn-caramel flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] shadow-xl cursor-pointer"
          >
            <Flame className="w-4 h-4 text-white" />
            <span>EXPLORAR PLATILLOS A LA BRASA</span>
          </button>

          <button
            onClick={onExploreBebidas}
            className="pill-btn-outline-mushroom flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] bg-black/40 backdrop-blur-md cursor-pointer"
          >
            <Wine className="w-4 h-4 text-[#c89f53]" />
            <span>VER CAVA & MIXOLOGÍA</span>
          </button>
        </div>

      </div>
    </section>
  );
}
