import React from 'react';

export default function HeroEclipse() {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-start border-b border-[#232730] overflow-hidden bg-black text-[#f5f7f5] -mt-[64px] pt-[90px] sm:pt-[110px]">
      
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/65 to-transparent pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70 pointer-events-none z-1" />

      {/* Hero Content Layer - Left Aligned Text Only */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-16 text-left">
        <div className="max-w-2xl sm:max-w-3xl">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-display font-normal text-[#f5f7f5] leading-[1.15] tracking-tight drop-shadow-2xl">
            Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales
          </p>
        </div>
      </div>
    </section>
  );
}
