"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CoreInsight() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        } else {
          if (videoRef.current) videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Auto scroll logic for mobile slider
    let interval = setInterval(() => {
      if (scrollContainerRef.current && window.innerWidth < 640) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // If we reached the end (with a small 10px buffer), go back to start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by roughly one card width
          container.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 3500); // Auto slide every 3.5s

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: 'scatter_plot',     color: 'text-error',            border: '', titleKey: 'core.feature1.title', descKey: 'core.feature1.desc' },
    { icon: 'visibility_off',   color: 'text-soft-emerald',      border: 'border-sustainability-green/30', titleKey: 'core.feature2.title', descKey: 'core.feature2.desc' },
    { icon: 'hourglass_bottom', color: 'text-electric-cyan',     border: 'border-electric-cyan/20', titleKey: 'core.feature3.title', descKey: 'core.feature3.desc' },
    { icon: 'eco',              color: 'text-primary',           border: 'border-primary/20', titleKey: 'core.feature4.title', descKey: 'core.feature4.desc' },
  ];

  return (
    <section ref={sectionRef} className="py-10 md:py-14 px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left col */}
          <div
            className="min-w-0 transition-all duration-[900ms] ease-out flex flex-col justify-center"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {/* Badge */}
            <div className="inline-block border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-[#22D3EE] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm self-start">
              {t('core.badge')}
            </div>

            <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 break-words">
              {t('core.title.part1')}
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">
                {t('core.title.highlight')}
              </span>
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant mb-6">
              {t('core.subtitle')}
            </p>

            <div className="relative group/scroll">
              <div 
                ref={scrollContainerRef}
                className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-3 sm:gap-2 pb-4 sm:pb-0 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {features.map((f) => (
                  <div 
                    key={f.titleKey} 
                    className={`flex items-start gap-3 p-4 pr-12 sm:p-3 glass-card rounded-lg w-[85vw] max-w-[85vw] sm:w-auto sm:max-w-none shrink-0 snap-center sm:snap-align-none ${f.border}`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl sm:text-2xl shrink-0 mt-0.5 ${f.color}`}
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      {f.icon}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-on-surface">{t(f.titleKey)}</h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-1 sm:mt-0.5 leading-relaxed pr-2">{t(f.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Faint arrow indicator for mobile */}
              <button 
                onClick={() => {
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
                }}
                className={`sm:hidden absolute right-1 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-10 text-white/40 active:bg-white/10 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Right col - Video */}
          <div
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-surface-border transition-all duration-[900ms] ease-out flex items-center justify-center"
            style={{
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.95)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '150ms',
            }}
          >
            <video 
              ref={videoRef}
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/vandedoanhnghiep.mp4" type="video/mp4" />
            </video>
            {/* Subtle gradient overlay for visual blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

