"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, lang } = useLanguage();

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
          setActiveIndex(index);
          
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
    <section ref={containerRef} className="relative w-full border-t border-surface-border md:h-[400vh] h-auto pb-10 md:pb-0">
      
      <div className="md:sticky relative top-0 w-full md:h-[100dvh] h-auto flex flex-col justify-start pt-12 md:pt-16 lg:pt-20 md:pb-8 md:overflow-hidden px-margin-mobile md:px-margin-desktop md:bg-background/90 md:backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col h-full pb-4 md:pb-8">
          
          {/* Header */}
          <div 
            className={`mb-2 md:mb-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            <div className="inline-block bg-primary/10 border border-electric-cyan/30 px-3 py-1.5 rounded-sm mb-2">
              <span className="font-label-sm text-xs uppercase tracking-wider text-electric-cyan">{t('workflow.badge')}</span>
            </div>
            <h2 className="font-display-lg text-3xl md:text-4xl xl:text-5xl max-w-none leading-tight text-white font-bold mb-2 lg:whitespace-nowrap">
              {t('workflow.title')}
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-3xl">
              {t('workflow.subtitle')}
            </p>
          </div>

          {/* Adjacent Accordion (Desktop) / Stacked Cards (Mobile) */}
          <div 
            className={`flex flex-col md:flex-row w-full flex-1 min-h-[auto] md:min-h-[200px] md:max-h-[600px] md:border border-surface-border md:rounded-2xl md:overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} space-y-4 md:space-y-0`}
          >
            {steps.map((step, index) => {
              const isDesktopActive = activeIndex === index;

              return (
                <div 
                  key={index}
                  className={`
                    relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    md:border-r border-surface-border md:last:border-r-0 overflow-hidden
                    h-auto min-h-[220px] md:h-full rounded-2xl md:rounded-none border border-surface-border md:border-0
                    ${isDesktopActive ? 'md:flex-1 md:bg-transparent' : 'md:basis-[90px] md:shrink-0 md:grow-0 md:bg-surface-container-lowest/30'}
                  `}
                >
                  {/* Dynamic Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-70 md:opacity-0 md:scale-105 ${isDesktopActive ? 'md:opacity-70 md:scale-100' : ''}`}
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                  />
                  {/* Horizontal gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent transition-opacity duration-1000 opacity-100 md:opacity-0 ${isDesktopActive ? 'md:opacity-100' : ''}`} />

                  <div className="p-5 md:p-6 h-full flex flex-col relative z-10">
                    
                    {/* Header: ID + Title */}
                    <div className="flex items-center whitespace-normal md:whitespace-nowrap mb-2 md:mb-4 opacity-100 md:opacity-80 shrink-0">
                      <span className={`font-mono text-xl font-bold mr-2 transition-colors duration-500 text-electric-cyan md:text-on-surface-variant ${isDesktopActive ? 'md:text-electric-cyan' : ''}`}>
                        {step.id}.
                      </span>
                      <h3 className="font-title-md text-xl md:text-2xl font-bold">{t(step.titleKey)}</h3>
                    </div>

                    {/* Icon */}
                    <span className={`material-symbols-outlined text-3xl md:text-4xl mb-2 md:mb-4 transition-colors duration-500 shrink-0 text-electric-cyan md:text-on-surface-variant md:opacity-60 ${isDesktopActive ? 'md:text-electric-cyan md:opacity-100' : ''}`} style={{ fontVariationSettings: '"FILL" 0' }}>
                      {step.icon}
                    </span>

                    {/* Description - Fades in only when active on desktop, always visible on mobile */}
                    <div 
                      className={`transition-all duration-700 ease-in-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:hidden ${isDesktopActive ? 'md:!block md:!opacity-100 md:!translate-y-0' : ''}`}
                    >
                      <p className="font-body-md text-sm md:text-base leading-relaxed text-on-surface-variant max-w-[450px]">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Active Highlight Line */}
                  <div className={`absolute top-0 left-0 transition-all duration-700 bg-electric-cyan
                    md:w-full md:h-[2px] w-[4px] h-full
                    opacity-100 md:opacity-0 ${isDesktopActive ? 'md:opacity-100' : ''}
                  `} />
                </div>
              );
            })}
          </div>

          {/* CTA Section - Old layout with step-like background image */}
          <div className={`relative mt-2 md:mt-3 w-full glass-card rounded-2xl overflow-hidden border border-[#22D3EE]/20 transition-all duration-1000 ease-out transform shrink-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} group`} style={{ transitionDelay: '300ms' }}>
            
            {/* Background Image matching the steps aesthetic */}
            <div 
              className="absolute inset-0 bg-cover bg-[center_42%] transition-transform duration-1000 ease-in-out opacity-70 group-hover:scale-105"
              style={{ backgroundImage: `url('/images/workflow/cta.png')` }}
            />
            {/* Horizontal gradient overlay: Dark on the left for text readability, clear on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-4 md:py-6 lg:py-8 px-5 md:px-6 lg:px-8 gap-4 md:gap-6">
              <div className="flex-1 space-y-2 md:space-y-3">
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

