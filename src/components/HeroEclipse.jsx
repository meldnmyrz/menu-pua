import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroEclipse() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Robust video autoplay handling for iOS / Safari / Android
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
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

  // Track scroll position through the hero section to control the reveal & pin
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(0);
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

  // Compute text reveal, hold/pin on screen, and subsequent exit
  let textOpacity = 0;
  let translateY = 24;

  if (scrollProgress < 0.12) {
    // Before scroll: text is not visible, pure video plays
    textOpacity = 0;
    translateY = 24;
  } else if (scrollProgress >= 0.12 && scrollProgress < 0.32) {
    // Scroll initiated: text smoothly fades in and rises into place
    const p = (scrollProgress - 0.12) / 0.20;
    textOpacity = p;
    translateY = (1 - p) * 24;
  } else if (scrollProgress >= 0.32 && scrollProgress <= 0.72) {
    // PINNED STATE: Hold the text centered on screen while scrolling continues
    textOpacity = 1;
    translateY = 0;
  } else if (scrollProgress > 0.72 && scrollProgress < 0.92) {
    // Text smoothly dissolves as user scrolls down toward menu content
    const p = (scrollProgress - 0.72) / 0.20;
    textOpacity = 1 - p;
    translateY = -p * 20;
  } else {
    // Flow down into the next section
    textOpacity = 0;
    translateY = -20;
  }

  const scrollToReveal = () => {
    if (!sectionRef.current) return;
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const target = sectionRef.current.offsetTop + scrollableDistance * 0.48;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[210vh] sm:h-[230vh]"
    >
      {/* Sticky Fullscreen Container that locks in place while scrolling */}
      <div className="sticky top-0 h-[100dvh] sm:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-[#f5f7f5] border-b border-[#232730]">
        
        {/* Background Video (PUA BRAND OF.mp4) Edge-to-Edge */}
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

        {/* Dynamic readability scrim that only appears smoothly when the text reveals */}
        <div
          style={{ opacity: textOpacity * 0.45 }}
          className="absolute inset-0 bg-black/60 pointer-events-none z-1 transition-opacity duration-150"
        />

        {/* Bottom edge gradient to blend seamlessly into menu sections */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-1 h-36" />

        {/* Hero Content Layer - Centered and revealed ONLY upon scrolling, pinned on screen */}
        <div
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${translateY}px, 0)`,
            pointerEvents: textOpacity > 0.5 ? 'auto' : 'none',
            transition: 'opacity 0.12s ease-out, transform 0.12s ease-out'
          }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-16 text-center flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl sm:max-w-4xl mx-auto">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-normal text-[#f5f7f5] leading-[1.25] sm:leading-[1.18] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales
            </p>
          </div>
        </div>

        {/* Elegant Scroll Indicator - Visible initially, disappears once scroll begins */}
        <div
          onClick={scrollToReveal}
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 5),
            pointerEvents: scrollProgress > 0.12 ? 'none' : 'auto'
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group transition-opacity duration-200"
          title="Desliza para explorar"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#d4d3c9]/90 group-hover:text-white transition-colors drop-shadow-md">
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
