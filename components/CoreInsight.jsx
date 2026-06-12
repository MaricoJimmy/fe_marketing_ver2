"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CoreInsight() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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

            <div className="space-y-2">
              {features.map((f) => (
                <div key={f.titleKey} className={`flex items-start gap-3 p-3 glass-card rounded-lg ${f.border}`}>
                  <span
                    className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${f.color}`}
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{t(f.titleKey)}</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col - Video */}
          <div
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-surface-border transition-all duration-[900ms] ease-out flex items-center justify-center"
            style={{
              transform: isVisible ? 'translateX(0) scale(0.85)' : 'translateX(80px) scale(0.85)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '150ms',
            }}
          >
            <video 
              autoPlay 
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

