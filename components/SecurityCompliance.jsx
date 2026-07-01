"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SecurityCompliance() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const items = [
    { id: 1, image: '/image/baomatvatuanthuicon/iso27001.png', titleKey: 'compliance.item1.title', descKey: 'compliance.item1.desc' },
    { id: 2, image: '/image/baomatvatuanthuicon/iso5001.png', titleKey: 'compliance.item2.title', descKey: 'compliance.item2.desc' },
    { id: 4, image: '/image/baomatvatuanthuicon/saokhue.png', titleKey: 'compliance.item4.title', descKey: 'compliance.item4.desc' },
    { id: 5, image: '/image/baomatvatuanthuicon/COP28.png', titleKey: 'compliance.item5.title', descKey: 'compliance.item5.desc' },
    { id: 6, image: '/image/baomatvatuanthuicon/TCFD.png', titleKey: 'compliance.item6.title', descKey: 'compliance.item6.desc' },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-background">
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Header */}
        <div 
          className={`mb-10 md:mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#22D3EE]/50"></div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#22D3EE]">
              {t('compliance.badge')}
            </span>
            <div className="w-8 h-px bg-[#22D3EE]/50"></div>
          </div>
          
          <h2 className="font-display-lg text-2xl md:text-3xl lg:text-4xl xl:text-[44px] text-white font-bold mb-4 leading-tight max-w-6xl mx-auto">
            {t('compliance.title.line1')}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent ml-1 md:ml-0">
              {t('compliance.title.highlight1')}
            </span>
            {t('compliance.title.mid')}
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent whitespace-nowrap">
              {t('compliance.title.highlight2')}
            </span>
          </h2>

          <p className="text-on-surface-variant font-body-md text-sm md:text-base max-w-[800px] mx-auto leading-relaxed">
            {t('compliance.subtitle')}
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className={`glass-card rounded-2xl overflow-hidden border border-surface-border transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* We use two sets of items, one scrolling fully off screen and one following it immediately */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            
            {/* First Set */}
            <div className="flex">
              {items.map((item) => (
                <div 
                  key={`set1-${item.id}`} 
                  className="w-[130px] md:w-[220px] shrink-0 flex flex-col items-center justify-start md:justify-center p-3 py-4 md:p-6 border-r border-surface-border bg-surface-container-lowest/30 hover:bg-white/5 transition-colors duration-300 group"
                >
                  <div className="h-10 md:h-14 flex items-center justify-center mb-3 md:mb-4">
                    <img 
                      src={item.image} 
                      alt={t(item.titleKey)} 
                      className="max-h-full max-w-[40px] md:max-w-[60px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                  <h4 className="font-bold text-on-surface text-[13px] md:text-base mb-1.5 md:mb-2 text-center leading-tight">{t(item.titleKey)}</h4>
                  <p className="text-on-surface-variant text-[10px] md:text-xs text-center leading-snug">{t(item.descKey)}</p>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate) */}
            <div className="flex">
              {items.map((item) => (
                <div 
                  key={`set2-${item.id}`} 
                  className="w-[130px] md:w-[220px] shrink-0 flex flex-col items-center justify-start md:justify-center p-3 py-4 md:p-6 border-r border-surface-border bg-surface-container-lowest/30 hover:bg-white/5 transition-colors duration-300 group"
                >
                  <div className="h-10 md:h-14 flex items-center justify-center mb-3 md:mb-4">
                    <img 
                      src={item.image} 
                      alt={t(item.titleKey)} 
                      className="max-h-full max-w-[40px] md:max-w-[60px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                  <h4 className="font-bold text-on-surface text-[13px] md:text-base mb-1.5 md:mb-2 text-center leading-tight">{t(item.titleKey)}</h4>
                  <p className="text-on-surface-variant text-[10px] md:text-xs text-center leading-snug">{t(item.descKey)}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

