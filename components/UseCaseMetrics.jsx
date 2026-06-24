"use client";
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UseCaseMetrics() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef(null);

  const metricsCols = [
    {
      icon: 'monitoring',
      titleKey: 'usecases.metrics.1.title',
      itemsKey: 'usecases.metrics.1.items'
    },
    {
      icon: 'inventory_2',
      titleKey: 'usecases.metrics.2.title',
      itemsKey: 'usecases.metrics.2.items'
    },
    {
      icon: 'bolt',
      titleKey: 'usecases.metrics.3.title',
      itemsKey: 'usecases.metrics.3.items'
    },
    {
      icon: 'eco',
      titleKey: 'usecases.metrics.4.title',
      itemsKey: 'usecases.metrics.4.items'
    },
    {
      icon: 'attach_money',
      titleKey: 'usecases.metrics.5.title',
      itemsKey: 'usecases.metrics.5.items'
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      // Clear existing interval to avoid duplicates
      if (scrollInterval) clearInterval(scrollInterval);
      
      // Only auto-scroll on screens smaller than lg (1024px) where horizontal scroll is active
      if (window.innerWidth < 1024) {
        scrollInterval = setInterval(() => {
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
          }
        }, 3500);
      }
    };

    checkAndScroll();
    window.addEventListener('resize', checkAndScroll);
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      window.removeEventListener('resize', checkAndScroll);
    };
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#0A0E14]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('usecases.metrics.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {t('usecases.metrics.desc')}
          </p>
        </div>

        <div className="relative group/scroll">
          <div 
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-4 md:gap-6 pb-6 lg:pb-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {metricsCols.map((col, idx) => {
              // Split string into array based on delimiter |
              const items = t(col.itemsKey).split('|');
              return (
                <div key={idx} className="w-[85vw] sm:w-[45vw] md:w-[40vw] lg:w-auto shrink-0 snap-center flex flex-col items-center md:items-start text-center md:text-left bg-[#0C1017] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[#22D3EE]/20 transition-all">
                  <span className="material-symbols-outlined text-3xl text-[#22D3EE] mb-4">{col.icon}</span>
                  <h3 className="font-bold text-white mb-4 text-base">{t(col.titleKey)}</h3>
                  <ul className="space-y-2 text-sm text-[#9CA3AF] w-full">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        {item.startsWith('•') ? (
                          <>
                            <span className="text-[#22D3EE] mr-2">•</span>
                            <span>{item.substring(1).trim()}</span>
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Faint arrow indicator for mobile/tablet */}
          <button 
            onClick={scrollRight}
            className="lg:hidden absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-10 text-white/40 active:bg-white/10 transition-colors shadow-lg"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>

      </div>
    </section>
  );
}

