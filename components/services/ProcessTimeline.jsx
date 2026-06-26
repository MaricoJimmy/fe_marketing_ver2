"use client";
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ProcessTimeline = ({ tPrefix = 'dt', stepCount = 4 }) => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      scrollInterval = setInterval(() => {
        if (window.innerWidth >= 768) return; // Only auto-scroll on mobile where it is a slider
        
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
        }
      }, 3500);
    };

    checkAndScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  const iconMap = ['search', 'design_services', 'code', 'account_tree', 'verified', 'rocket_launch'];
  const steps = Array.from({ length: stepCount }, (_, i) => ({
    id: `0${i + 1}`,
    icon: iconMap[i % iconMap.length],
    title: t(`${tPrefix}.process.s${i + 1}.title`),
    desc: t(`${tPrefix}.process.s${i + 1}.desc`),
    deliverable: t(`${tPrefix}.process.s${i + 1}.deliverable`)
  }));

  return (
    <div className="relative py-4 md:py-12">
      {/* Background Line - Desktop Only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2" />
      
      <div ref={scrollContainerRef} className="flex md:block overflow-x-auto overflow-y-hidden md:overflow-y-visible snap-x snap-mandatory scrollbar-hide md:space-y-12 pb-8 pt-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:pt-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-none w-[85vw] sm:w-[340px] md:w-full snap-center relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} mr-6 md:mr-0`}
            >
              {/* Center Node - Responsive positioning */}
              <div className="md:absolute md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center mb-6 md:mb-0 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#06101F] border-2 border-[#22D3EE] flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <span className="material-symbols-outlined text-[#22D3EE] text-[20px]">{step.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12 lg:pl-16 text-left' : 'md:pr-12 lg:pr-16 text-left md:text-right'}`}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:hover:bg-white/10 transition-colors h-full min-h-[200px] md:min-h-0">
                  <div className="text-[#22D3EE] font-display-md text-[16px] mb-2">{step.id}</div>
                  <h3 className="text-white font-title-lg text-[20px] font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 font-body-md text-[15px] leading-relaxed">{step.desc}</p>
                  {step.deliverable && !step.deliverable.includes('.deliverable') && (
                    <div className="mt-5 pt-4 border-t border-white/10 text-left">
                      <span className="text-[#22D3EE] text-sm font-bold block mb-1 uppercase tracking-wider">Deliverable</span>
                      <p className="text-white font-body-sm text-[14px] leading-relaxed">{step.deliverable}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
