import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroEclipse() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(1);
        return;
      }

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate text appearance smoothly based on scroll progress
  // Between progress 0.05 and 0.45, text transitions from 0 to 1 opacity
  const textOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.05) / 0.4));
  const translateY = (1 - textOpacity) * 28;
  const scale = 0.95 + textOpacity * 0.05;
  const blurValue = (1 - textOpacity) * 4;

  const scrollToReveal = () => {
    if (!sectionRef.current) return;
    const target = sectionRef.current.offsetTop + window.innerHeight * 0.38;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[145vh] sm:h-[155vh]"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-[#f5f7f5] border-b border-[#232730]">
        
        {/* Background Video (PUA BRAND OF.mp4) Edge-to-Edge at 100% Opacity */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-100"
          src="/assets/videos/pua_brand_of.mp4"
        />

        {/* Bottom edge blend for seamless transition to page content */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-1 h-36" />

        {/* Dynamic readability scrim that only activates smoothly when the text reveals */}
        <div
          style={{ opacity: textOpacity * 0.55 }}
          className="absolute inset-0 bg-black/60 pointer-events-none z-1 transition-opacity duration-200"
        />

        {/* Hero Content Layer - Centered with Scroll-Reveal Effect */}
        <div
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
            filter: `blur(${blurValue}px)`,
            transition: 'opacity 0.15s ease-out, transform 0.15s ease-out, filter 0.15s ease-out'
          }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-12 text-center flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl sm:max-w-4xl mx-auto">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-normal text-[#f5f7f5] leading-[1.25] sm:leading-[1.18] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales
            </p>
          </div>
        </div>

        {/* Elegant Animated Scroll Prompt at Initial View */}
        <div
          onClick={scrollToReveal}
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 3.8),
            pointerEvents: scrollProgress > 0.2 ? 'none' : 'auto'
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 z-20 group"
          title="Desliza para explorar"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#d4d3c9]/85 group-hover:text-white transition-colors drop-shadow-md">
            Desliza para explorar
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center animate-bounce shadow-xl group-hover:border-white/50 transition-colors">
            <ChevronDown className="w-4 h-4 text-[#f5f7f5]" />
          </div>
        </div>

      </div>
    </section>
  );
}
