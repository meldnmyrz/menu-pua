import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroEclipse() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Guarantee muted attributes and autoplay compliance on mobile iOS / Android
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If iOS low power mode or battery saver blocked autoplay, play on first touch or scroll
          const onUserGesture = () => {
            video.play().catch(() => {});
            ['touchstart', 'touchend', 'scroll', 'click'].forEach((evt) => {
              window.removeEventListener(evt, onUserGesture);
            });
          };
          ['touchstart', 'touchend', 'scroll', 'click'].forEach((evt) => {
            window.addEventListener(evt, onUserGesture, { passive: true, once: true });
          });
        });
      }
    };

    playVideo();
  }, []);

  const scrollToMenu = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black text-[#f5f7f5] border-b border-[#232730]">
      
      {/* Background Video (PUA BRAND OF.mp4) Fitted Edge-to-Edge */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-100"
        src="/assets/videos/pua_brand_of.mp4"
      />

      {/* Subtle vignette for contrast & bottom blend into menu content */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none z-1" />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-1 h-36" />

      {/* Centered Hero Content - Responsive for Mobile & Desktop */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-16 text-center flex flex-col items-center justify-center">
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-normal text-[#f5f7f5] leading-[1.25] sm:leading-[1.18] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
            Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales
          </p>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        title="Desliza para explorar"
      >
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#d4d3c9]/90 group-hover:text-white transition-colors drop-shadow-md">
          Desliza para explorar
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center animate-bounce shadow-xl group-hover:border-white/50 transition-colors">
          <ChevronDown className="w-4 h-4 text-[#f5f7f5]" />
        </div>
      </div>

    </section>
  );
}
