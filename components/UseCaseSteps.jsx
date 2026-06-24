"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UseCaseSteps() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: 'cloud_sync',
      titleKey: 'usecases.steps.1.title',
      descKey: 'usecases.steps.1.desc'
    },
    {
      icon: 'data_check',
      titleKey: 'usecases.steps.2.title',
      descKey: 'usecases.steps.2.desc'
    },
    {
      icon: 'analytics',
      titleKey: 'usecases.steps.3.title',
      descKey: 'usecases.steps.3.desc'
    },
    {
      icon: 'pie_chart',
      titleKey: 'usecases.steps.4.title',
      descKey: 'usecases.steps.4.desc'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#0A0E14] overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative text-center">
        
        <div className="mb-20 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 px-4 md:px-0 leading-tight">
            {t('usecases.steps.title')}
          </h2>
          <p className="text-base md:text-lg text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            {t('usecases.steps.desc')}
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row items-start justify-between relative w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex-1 flex flex-col items-center group">
              
              {/* Arrow to next step */}
              {idx < steps.length - 1 && (
                <div className="absolute top-[48px] left-[50%] w-full z-0 px-8 transition-opacity duration-500 opacity-60 group-hover:opacity-100">
                  <div className="w-full h-[2px] bg-gradient-to-r from-[#22D3EE]/20 via-[#22D3EE]/50 to-[#22D3EE] relative rounded-full">
                    <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#22D3EE]"></div>
                  </div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 bg-[#22D3EE]/10 border border-[#22D3EE]/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:bg-[#22D3EE]/20 group-hover:border-[#22D3EE]/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  <span className="material-symbols-outlined text-4xl text-[#22D3EE]">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                  {t(step.descKey)}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col items-center relative w-full mt-4">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-10 w-full max-w-[280px] mx-auto">
            {steps.map((_, idx) => (
              <React.Fragment key={idx}>
                <div 
                  onClick={() => setActiveStep(idx)}
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 z-10 ${
                    activeStep === idx 
                      ? 'bg-[#22D3EE] text-[#06101F] shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                      : (activeStep > idx ? 'bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/50' : 'bg-white/5 text-white/40 border border-white/10')
                  }`}
                >
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
                     <div className={`absolute top-0 left-0 h-full bg-[#22D3EE] transition-all duration-500 ${activeStep > idx ? 'w-full' : 'w-0'}`} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Steps Container */}
          <div className="w-full relative min-h-[300px]">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${
                  activeStep === idx 
                    ? 'opacity-100 z-10 translate-x-0' 
                    : (activeStep > idx ? 'opacity-0 -translate-x-10 pointer-events-none' : 'opacity-0 translate-x-10 pointer-events-none')
                }`}
              >
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 bg-[#22D3EE]/20 border border-[#22D3EE]/50 shadow-[0_0_40px_rgba(34,211,238,0.3)]`}>
                  <span className="material-symbols-outlined text-4xl text-[#22D3EE]">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 px-4">
                  {t(step.titleKey)}
                </h3>
                <p className="text-white/60 text-[13px] whitespace-pre-line px-6 leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

