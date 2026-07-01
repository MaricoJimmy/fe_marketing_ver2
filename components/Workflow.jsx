"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    // Auto scroll logic for mobile slider
    let interval = setInterval(() => {
      if (scrollContainerRef.current && window.innerWidth < 768) { // md breakpoint for Workflow
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // If we reached the end (with a small 10px buffer), go back to start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by roughly one card width
          container.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
        }
      }
    }, 3500); // Auto slide every 3.5s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }
          
          const { top, height } = containerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          if (height > viewportHeight) {
            let progress = -top / (height - viewportHeight);
            progress = Math.max(0, Math.min(1, progress));
            
            const totalSteps = 4;
            const stepSize = 1 / totalSteps;
            let index = totalSteps - 1; // default to last step
            for (let i = 0; i < totalSteps; i++) {
              if (progress < (i + 1) * stepSize) {
                index = i;
                break;
              }
            }
            if (window.innerWidth >= 768 && !hasHovered) {
              setActiveIndex(index);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    {
      id: "01",
      titleKey: "workflow.step1.title",
      icon: "analytics",
      descKey: "workflow.step1.desc",
      bgImage: "/images/workflow/step1.png"
    },
    {
      id: "02",
      titleKey: "workflow.step2.title",
      icon: "architecture",
      descKey: "workflow.step2.desc",
      bgImage: "/images/workflow/step2.png"
    },
    {
      id: "03",
      titleKey: "workflow.step3.title",
      icon: "integration_instructions",
      descKey: "workflow.step3.desc",
      bgImage: "/images/workflow/step3.png"
    },
    {
      id: "04",
      titleKey: "workflow.step4.title",
      icon: "rocket_launch",
      descKey: "workflow.step4.desc",
      bgImage: "/images/workflow/step4.png"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full border-t border-surface-border md:h-[250vh] h-auto pb-10 md:pb-0">
      
      <div className="relative md:sticky md:top-0 w-full h-auto md:h-screen flex flex-col justify-start md:justify-center pt-12 md:pt-0 md:pb-0 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col pb-4 md:pb-4">
          
          {/* Header */}
          <div 
            className={`mb-4 md:mb-6 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            <div className="inline-block bg-primary/10 border border-electric-cyan/30 px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold tracking-widest uppercase text-electric-cyan">{t('workflow.badge')}</span>
            </div>
            <h2 className="font-display-lg text-3xl md:text-4xl xl:text-5xl max-w-none leading-tight text-white font-bold mb-2">
              {t('workflow.title')}
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-3xl">
              {t('workflow.subtitle')}
            </p>
          </div>

          {/* Adjacent Accordion (Desktop) / Horizontal Slider (Mobile) */}
          <div className="relative group/scroll w-full flex-1 md:min-h-[35vh] md:max-h-[50vh]">
            <div 
              ref={scrollContainerRef}
              className={`flex flex-row w-full h-full md:border border-surface-border md:rounded-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} overflow-x-auto md:overflow-hidden snap-x snap-mandatory gap-4 md:gap-0 pb-4 md:pb-0 scrollbar-hide`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {steps.map((step, index) => {
              const isDesktopActive = activeIndex === index;

              return (
                <div 
                  key={index}
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                  className={`
                    relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    md:border-r border-surface-border md:last:border-r-0 overflow-hidden
                    h-auto min-h-[220px] md:min-h-[35vh] lg:min-h-[40vh] rounded-2xl md:rounded-none border border-surface-border md:border-0
                    w-[85vw] sm:w-[60vw] shrink-0 snap-center md:snap-align-none md:bg-transparent
                    ${isDesktopActive ? 'md:w-[40%] lg:w-[46%]' : 'md:w-[20%] lg:w-[18%]'} md:shrink-0
                  `}
                >
                  {/* Dynamic Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${isDesktopActive ? 'opacity-70 scale-105' : 'opacity-30 md:opacity-10 scale-100'}`}
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                  />
                  {/* Horizontal gradient overlay */}
                  <div className={`absolute inset-0 transition-all duration-1000 ${isDesktopActive ? 'bg-gradient-to-r from-background/90 via-background/70 to-transparent opacity-100' : 'bg-background/80'}`} />

                  <div className="p-5 pr-12 md:p-6 md:pr-6 h-full flex flex-col relative z-10">
                    
                    {/* Header: ID + Title */}
                    <div className="flex items-start whitespace-normal mb-2 md:mb-4 shrink-0 transition-opacity duration-500">
                      <span className={`font-mono text-xl font-bold mr-2 transition-colors duration-500 mt-1 shrink-0 ${isDesktopActive ? 'text-electric-cyan' : 'text-on-surface-variant'}`}>
                        {step.id}.
                      </span>
                      <h3 className={`font-title-md text-xl md:text-2xl font-bold leading-tight transition-colors duration-500 ${isDesktopActive ? 'text-white' : 'text-on-surface-variant md:opacity-70'}`}>{t(step.titleKey)}</h3>
                    </div>

                    {/* Icon */}
                    <span className={`material-symbols-outlined text-3xl md:text-4xl mb-2 md:mb-4 transition-colors duration-500 shrink-0 ${isDesktopActive ? 'text-electric-cyan' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: '"FILL" 0' }}>
                      {step.icon}
                    </span>

                    {/* Description - Fades in only when active on desktop, always visible on mobile */}
                    <div className={`transition-all duration-700 ease-in-out md:overflow-hidden ${isDesktopActive ? 'opacity-100 translate-y-0 md:max-h-[500px]' : 'md:opacity-0 md:translate-y-4 md:max-h-0 opacity-100 translate-y-0'}`}>
                      <p className="font-body-md text-sm md:text-base leading-relaxed text-on-surface-variant w-full md:w-[320px] lg:w-[450px]">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Active Highlight Line */}
                  <div className="absolute top-0 left-0 transition-all duration-700 bg-electric-cyan
                    md:w-full md:h-[2px] w-[4px] h-full
                    opacity-100
                  " />
                </div>
              );
            })}

            {/* Mobile CTA (Inside the slider) */}
            <div className={`md:hidden relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden h-auto min-h-[220px] rounded-2xl w-[85vw] sm:w-[60vw] shrink-0 snap-center border border-[#22D3EE]/20 group flex flex-col justify-end`}>
              <div 
                className="absolute inset-0 bg-cover bg-[center_42%] transition-transform duration-1000 ease-in-out opacity-70 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/workflow/cta.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent" />
              <div className="relative z-10 p-5 pr-12 flex flex-col h-full justify-end">
                <h3 className="font-headline-md text-lg font-bold text-white mb-2 pr-2">{t('workflow.cta.title')}</h3>
                <p className="text-sm text-on-surface-variant mb-4">{t('workflow.cta.desc')}</p>
                <div className="flex flex-col gap-2">
                  <Link href="/dung-thu" className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-4 py-2.5 rounded-xl font-bold text-sm">
                    {t('workflow.cta.btn')}
                  </Link>
                  <Link href="/solution" className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-sm">
                    {lang === 'EN' ? 'View Solutions' : 'Xem giải pháp'}
                  </Link>
                </div>
              </div>
            </div>
            </div>

            {/* Faint arrow indicator for mobile */}
            <button 
              onClick={() => {
                if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
              }}
              className={`md:hidden absolute right-1 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-10 text-white/40 active:bg-white/10 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
          {/* CTA Section - Desktop only */}
          <div className={`hidden md:block relative mt-4 md:mt-4 w-full glass-card rounded-2xl overflow-hidden border border-[#22D3EE]/20 transition-all duration-1000 ease-out transform shrink-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} group`} style={{ transitionDelay: '300ms' }}>
            
            {/* Background Image matching the steps aesthetic */}
            <div 
              className="absolute inset-0 bg-cover bg-[center_42%] transition-transform duration-1000 ease-in-out opacity-70 group-hover:scale-105"
              style={{ backgroundImage: `url('/images/workflow/cta.png')` }}
            />
            {/* Horizontal gradient overlay: Dark on the left for text readability, clear on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-3 md:py-4 lg:py-5 px-5 md:px-6 lg:px-8 gap-4 md:gap-4">
              <div className="flex-1 space-y-1 md:space-y-1.5">
                <h3 className="font-headline-md text-lg md:text-xl lg:text-2xl font-bold text-white max-w-2xl">
                  {t('workflow.cta.title')}
                </h3>
                <p className="text-sm md:text-base text-on-surface-variant max-w-2xl">
                  {t('workflow.cta.desc')}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link href="/dung-thu" className="flex items-center justify-center gap-2 bg-gradient-to-r hover:from-[#22D3EE] hover:to-[#10F0CB] bg-white/10 hover:text-[#06101F] text-white border border-white/20 hover:border-transparent px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 group/btn">
                    <span className="material-symbols-outlined text-base">forum</span>
                    {t('workflow.cta.btn')}
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link href="/solution" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 group/btn-sec">
                    {lang === 'EN' ? 'View Solutions' : 'Xem giải pháp'}
                    <span className="material-symbols-outlined text-sm group-hover/btn-sec:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
              
              {/* Empty space on the right to let the background image shine through, maintaining the old frame balance */}
              <div className="w-full md:w-[250px] lg:w-[350px] shrink-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

