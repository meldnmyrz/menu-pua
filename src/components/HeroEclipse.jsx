import React, { useState, useRef } from 'react';
import { Flame, Wine, Sun, Moon, Sparkles } from 'lucide-react';

export default function HeroEclipse({ onExplorePlatillos, onExploreBebidas, setIsCommandMenuOpen }) {
  // Scrub value from 0 to 100 (representing time of day / atmosphere)
  const [scrubValue, setScrubValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Calculate atmosphere state based on scrub value
  const getAtmosphereState = (val) => {
    if (val < 35) {
      return {
        timeLabel: "14:00 HRS — FUEGO DE BRASAS & CORTES PRIME",
        title: "El Fuego Encendido de la Brasa",
        subtitle: "Cortes Angus madurados, aromática leña de encino y el aroma inconfundible de la parrilla encendida.",
        color: "#c89f53",
        glowClass: "from-[#987232]/30 via-[#050505]/50 to-[#050505]",
        badge: "ENCENDIDO DE PARRILLA"
      };
    } else if (val < 70) {
      return {
        timeLabel: "19:00 HRS — ATARDECER & MARIDAJES DE CAVA",
        title: "La Hora Dorada de la Cava",
        subtitle: "Maridajes refinados, charcutería de autor y copas servidas bajo la cálida luz del atardecer.",
        color: "#d4d3c9",
        glowClass: "from-[#d4d3c9]/25 via-[#050505]/50 to-[#050505]",
        badge: "HORA DEL VINO"
      };
    } else {
      return {
        timeLabel: "22:00 HRS — NOCHE DE MIXOLOGÍA & COCTELERÍA",
        title: "Sabores Enigmáticos en la Noche",
        subtitle: "Tragos de autor, aromas cítricos, infusiones artesanales y una atmósfera lounge sofisticada.",
        color: "#2d4e36",
        glowClass: "from-[#1e3524]/50 via-[#050505]/50 to-[#050505]",
        badge: "MIXOLOGÍA NOCTURNA"
      };
    }
  };

  const atmosphere = getAtmosphereState(scrubValue);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setScrubValue(percentage);
  };

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center border-b border-[#232730] overflow-hidden bg-black text-[#f5f7f5] -mt-[64px] pt-[80px] sm:pt-[90px]">
      
      {/* Background Video (PUA HEAD OF.mp4) Edge-to-Edge */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none z-0 filter brightness-[0.7] contrast-[1.1]"
        src="/assets/videos/pua_head_of.mp4"
      />

      {/* Dynamic Time-lapse Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${atmosphere.glowClass} pointer-events-none z-1 transition-all duration-700`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/70 pointer-events-none z-1" />

      {/* Hero Content Layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-8">
        
        {/* Atmosphere Time-lapse Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b0e14]/90 backdrop-blur-md border border-[#232730] shadow-2xl">
          <Sparkles className="w-3.5 h-3.5" style={{ color: atmosphere.color }} />
          <span className="text-xs font-extrabold tracking-[0.1em] text-[#f5f7f5]">
            {atmosphere.timeLabel}
          </span>
        </div>

        {/* Main Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-normal text-[#f5f7f5] leading-[0.85] tracking-tight drop-shadow-2xl">
            {atmosphere.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#d4d3c9] font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
            {atmosphere.subtitle}
          </p>
        </div>

        {/* Interactive Eclipse / Ember Time-lapse Arc Scrubber (Hero 31 Block) */}
        <div className="py-4 max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-[#d4d3c9] uppercase tracking-wider px-2 drop-shadow">
            <span className="flex items-center gap-1.5 text-[#c89f53]">
              <Sun className="w-4 h-4" /> 14:00h Brasas
            </span>
            <span className="text-[#c89f53] font-extrabold flex items-center gap-1">
              Desliza la trayectoria solar / brasa
            </span>
            <span className="flex items-center gap-1.5 text-[#d4d3c9]">
              <Moon className="w-4 h-4" /> 22:00h Coctelería
            </span>
          </div>

          {/* Scrub Track Area */}
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              setIsDragging(true);
              handlePointerMove(e);
            }}
            onPointerMove={(e) => {
              if (isDragging) handlePointerMove(e);
            }}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
            className="relative w-full h-24 sm:h-28 cursor-pointer select-none group flex items-center justify-center"
          >
            {/* SVG Arc Path */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 80" preserveAspectRatio="none">
              {/* Background Arc Stroke */}
              <path
                d="M 10,75 Q 200,-15 390,75"
                fill="none"
                stroke="rgba(212, 211, 201, 0.3)"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              {/* Active Scrubbed Arc Segment */}
              <path
                d="M 10,75 Q 200,-15 390,75"
                fill="none"
                stroke={atmosphere.color}
                strokeWidth="5"
                strokeDasharray="400"
                strokeDashoffset={400 - (400 * scrubValue) / 100}
                className="transition-all duration-150"
              />
            </svg>

            {/* Draggable Celestial Sun/Ember Handle */}
            <div
              className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center shadow-2xl transition-all duration-75 cursor-grab active:cursor-grabbing border-2 border-white"
              style={{
                left: `${scrubValue}%`,
                top: `${75 - Math.sin((scrubValue / 100) * Math.PI) * 65}%`,
                backgroundColor: atmosphere.color,
                boxShadow: `0 0 30px ${atmosphere.color}`
              }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#0b0e14]" />
            </div>
          </div>
        </div>

        {/* Hero CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExplorePlatillos}
            className="pill-btn-caramel flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em]"
          >
            <Flame className="w-4 h-4 text-white" />
            <span>EXPLORAR PLATILLOS A LA BRASA</span>
          </button>

          <button
            onClick={onExploreBebidas}
            className="pill-btn-outline-mushroom flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] bg-black/40 backdrop-blur-md"
          >
            <Wine className="w-4 h-4 text-[#c89f53]" />
            <span>VER CAVA & MIXOLOGÍA</span>
          </button>
        </div>

      </div>
    </section>
  );
}
