import React, { useState, useRef } from 'react';
import { Flame, Wine, Sun, Moon, Sparkles, Command, ArrowRight } from 'lucide-react';

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
        color: "#f59e0b",
        glowClass: "from-[#f59e0b]/20 via-[#050505] to-[#050505]",
        badge: "ENCENDIDO DE PARRILLA"
      };
    } else if (val < 70) {
      return {
        timeLabel: "19:00 HRS — ATARDECER & MARIDAJES DE CAVA",
        title: "La Hora Dorada de la Cava",
        subtitle: "Maridajes refinados, charcutería de autor y copas servidas bajo la cálida luz del atardecer.",
        color: "#e6ff55",
        glowClass: "from-[#e6ff55]/20 via-[#050505] to-[#050505]",
        badge: "HORA DEL VINO"
      };
    } else {
      return {
        timeLabel: "22:00 HRS — NOCHE DE MIXOLOGÍA & COCTELERÍA",
        title: "Sabores Enigmáticos en la Noche",
        subtitle: "Tragos de autor, aromas cítricos, infusiones artesanales y una atmósfera lounge sofisticada.",
        color: "#be123c",
        glowClass: "from-[#be123c]/30 via-[#050505] to-[#050505]",
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
    <div className="relative w-full rounded-[28px] overflow-hidden border border-[#27272a] bg-[#050505] shadow-2xl transition-colors duration-700">
      
      {/* Dynamic Time-lapse Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${atmosphere.glowClass} opacity-80 pointer-events-none transition-all duration-700`}
      />

      {/* Hero Content Layer */}
      <div className="relative z-10 p-8 sm:p-14 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Atmosphere Time-lapse Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#27272a] shadow-lg">
          <Sparkles className="w-3.5 h-3.5" style={{ color: atmosphere.color }} />
          <span className="text-xs font-extrabold tracking-[0.1em] text-white">
            {atmosphere.timeLabel}
          </span>
        </div>

        {/* Main Hero Headline */}
        <div>
          <h1 className="text-5xl sm:text-7xl font-display font-normal text-white leading-[0.85] tracking-tight">
            {atmosphere.title}
          </h1>
          <p className="text-sm sm:text-base text-[#a1a1aa] font-normal mt-4 max-w-2xl mx-auto leading-relaxed">
            {atmosphere.subtitle}
          </p>
        </div>

        {/* Interactive Eclipse / Ember Time-lapse Arc Scrubber (Hero 31 Block) */}
        <div className="py-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-[#71717a] uppercase tracking-wider px-2">
            <span className="flex items-center gap-1.5 text-[#f59e0b]">
              <Sun className="w-4 h-4" /> 14:00h Brasas
            </span>
            <span className="text-[#e6ff55] font-extrabold flex items-center gap-1">
              Desliza la trayectoria solar / brasa
            </span>
            <span className="flex items-center gap-1.5 text-[#be123c]">
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
                stroke="#27272a"
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
                boxShadow: `0 0 25px ${atmosphere.color}`
              }}
            >
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>
          </div>
        </div>

        {/* Hero CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExplorePlatillos}
            className="pill-btn-lime flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em] shadow-xl"
          >
            <Flame className="w-4 h-4 text-black" />
            <span>EXPLORAR PLATILLOS A LA BRASA</span>
          </button>

          <button
            onClick={onExploreBebidas}
            className="pill-btn-outline-white flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.05em]"
          >
            <Wine className="w-4 h-4 text-[#e6ff55]" />
            <span>VER CAVA & MIXOLOGÍA</span>
          </button>
        </div>

      </div>
    </div>
  );
}
