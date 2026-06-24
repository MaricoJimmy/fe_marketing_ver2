"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const items = [
  {
    id: 'uboard',
    labelKey: 'bento.uboard.label',
    nameKey: 'bento.uboard.name',
    titleKey: 'bento.uboard.title',
    descKey: 'bento.uboard.desc',
    ctaKey: 'bento.uboard.cta',
    visualTextKey: 'bento.uboard.visualText',
    video: '/videos/uboard.mp4',
    hasVideo: true,
  },
  {
    id: 'ugate',
    labelKey: 'bento.ugate.label',
    nameKey: 'bento.ugate.name',
    titleKey: 'bento.ugate.title',
    descKey: 'bento.ugate.desc',
    ctaKey: 'bento.ugate.cta',
    visualTextKey: 'bento.ugate.visualText',
    video: '/videos/ugate.mp4',
    hasVideo: true,
  },
  {
    id: 'uzero',
    labelKey: 'bento.uzero.label',
    nameKey: 'bento.uzero.name',
    titleKey: 'bento.uzero.title',
    descKey: 'bento.uzero.desc',
    ctaKey: 'bento.uzero.cta',
    visualTextKey: 'bento.uzero.visualText',
    video: '/videos/uzero.mp4',
    hasVideo: true,
  },
  {
    id: 'miniugate',
    labelKey: 'bento.mini.label',
    nameKey: 'bento.mini.name',
    titleKey: 'bento.mini.title',
    descKey: 'bento.mini.desc',
    ctaKey: 'bento.mini.cta',
    visualTextKey: 'bento.mini.visualText',
    video: '/videos/miniugate.mp4',
    hasVideo: true,
  },
];

const VideoPlayer = ({ src, isActive }) => {
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Only load the video if it becomes active at least once to save bandwidth/RAM
    if (isActive && !hasLoaded) {
      setHasLoaded(true);
    }
    
    if (isActive) {
      if (videoRef.current) videoRef.current.play().catch(e => console.log("Video play interrupted", e));
      if (bgVideoRef.current) bgVideoRef.current.play().catch(e => console.log("Bg video play interrupted", e));
    } else {
      if (videoRef.current) videoRef.current.pause();
      if (bgVideoRef.current) bgVideoRef.current.pause();
    }
  }, [isActive, hasLoaded]);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black/30">
      {/* Blurred background video - hidden on mobile to save GPU */}
      {hasLoaded && (
        <>
          <video
            ref={bgVideoRef}
            src={src}
            loop
            muted
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover blur-[40px] opacity-60 scale-110"
          />
          {/* Main video */}
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            className="relative z-10 w-full h-full object-contain"
          />
        </>
      )}
    </div>
  );
};

export default function BentoGrid() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) setIsVisible(true); 
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="enterprise" ref={sectionRef} className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-xl">
        <div
          className="text-center space-y-sm max-w-3xl mx-auto mb-xl transition-all duration-700 ease-out flex flex-col items-center"
          style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-30px)', opacity: isVisible ? 1 : 0 }}
        >
          <div className="inline-block border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-[#22D3EE] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            {t('bento.badge')}
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight lg:whitespace-nowrap">{t('bento.title')}</h2>
          <p 
            className="font-body-md text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mt-4"
            dangerouslySetInnerHTML={{ __html: t('bento.subtitle') }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-stretch">
          <div
            className="lg:col-span-5 xl:col-span-4 space-y-0 border-t border-white/10 transition-all duration-[900ms] ease-out flex flex-col justify-center"
            style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-80px)', opacity: isVisible ? 1 : 0, transitionDelay: '150ms' }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`border-b border-white/10 py-5 cursor-pointer transition-colors px-2 ${
                  activeIndex === index ? '' : 'hover:bg-white/5'
                }`}
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-electric-cyan font-semibold mb-1">{t(item.labelKey)}</p>
                    <h3
                      className={`font-title-md text-2xl md:text-3xl font-bold transition-colors ${
                        activeIndex === index ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {t(item.nameKey)}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 text-2xl"
                    style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    keyboard_arrow_down
                  </span>
                </div>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out flex flex-col"
                  style={{
                    maxHeight: activeIndex === index ? '1200px' : '0px',
                    opacity: activeIndex === index ? 1 : 0,
                    marginTop: activeIndex === index ? '16px' : '0px',
                  }}
                >
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">{t(item.titleKey)}</h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant opacity-70 leading-relaxed mb-4">{t(item.descKey)}</p>
                  
                  {/* MOBILE VIDEO - ONLY VISIBLE ON SMALL SCREENS */}
                  <div className="block lg:hidden w-full aspect-video relative rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5 shadow-lg">
                    {item.hasVideo ? (
                      <>
                        <VideoPlayer src={item.video} isActive={activeIndex === index && isSectionInView} />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
                          <p className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md border-l-2 border-[#22D3EE] pl-2">{t(item.visualTextKey)}</p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-[#06101F] to-[#10243E]">
                        <span className="material-symbols-outlined text-4xl text-electric-cyan/50">devices</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/product/${item.id}`);
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r hover:from-[#22D3EE] hover:to-[#10F0CB] bg-white/5 hover:text-[#06101F] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all w-max"
                  >
                    {t(item.ctaKey)}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* DESKTOP VIDEO - HIDDEN ON MOBILE */}
          <div
            className="hidden lg:block lg:col-span-7 xl:col-span-8 relative rounded-xl overflow-hidden shadow-2xl min-h-[500px] h-full bg-black/40 transition-all duration-[900ms] ease-out border border-white/5"
            style={{ transform: isVisible ? 'translateX(0)' : 'translateX(80px)', opacity: isVisible ? 1 : 0, transitionDelay: '250ms' }}
          >
            {items.map((item, index) => {
              const isActiveDesktop = activeIndex === index || (activeIndex === -1 && index === 0);
              return (
              <div
                key={item.id}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: isActiveDesktop ? 1 : 0, pointerEvents: isActiveDesktop ? 'auto' : 'none' }}
              >
                {item.hasVideo ? (
                  <div className="w-full h-full relative">
                    <VideoPlayer src={item.video} isActive={isActiveDesktop && isSectionInView} />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
                      <p className="text-white text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md border-l-4 border-[#22D3EE] pl-4">{t(item.visualTextKey)}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#06101F] to-[#10243E]">
                    <div className="text-center space-y-4">
                      <span className="material-symbols-outlined text-6xl text-electric-cyan/50">devices</span>
                      <p className="text-on-surface-variant text-lg font-medium">{t(item.nameKey)}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none">
                      <p className="text-white text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md border-l-4 border-[#22D3EE] pl-4">{t(item.visualTextKey)}</p>
                    </div>
                  </div>
                )}
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

