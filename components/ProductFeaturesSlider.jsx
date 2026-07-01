"use client";
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductFeaturesSlider({ features }) {
  const { lang } = useLanguage();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      // Auto scroll for both desktop and mobile if needed, or just mobile. Let's do both.
      scrollInterval = setInterval(() => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by a card width roughly
          const scrollAmount = window.innerWidth < 768 ? container.clientWidth * 0.8 : 400;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    };

    checkAndScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  if (!features || features.length === 0) return null;

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 pt-16 pb-4 md:pt-32 md:pb-8">
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-[#22D3EE] font-display-md text-sm uppercase tracking-widest block mb-4">
          {lang === 'EN' ? 'Capabilities' : 'Khả năng cốt lõi'}
        </span>
        <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-white">
          {lang === 'EN' ? 'Highlight Features' : 'Tính năng nổi bật'}
        </h2>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory gap-6 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="group relative flex-none w-[85vw] sm:w-[340px] md:w-[400px] snap-center rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-500 hover:-translate-y-2 bg-[#0A0E14] flex flex-col"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              {/* Gradient Overlay for seamless blend to bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative p-6 pt-0 bg-[#0A0E14] flex flex-col flex-grow">
              <h3 className="text-white font-headline-md text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-[#22D3EE] transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 font-body-md text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE]/20 hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE]/20 hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
