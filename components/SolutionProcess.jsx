"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionProcess() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: t('workflow.step1.title'),
      desc: t('workflow.step1.desc')
    },
    {
      num: '02',
      title: t('workflow.step2.title'),
      desc: t('workflow.step2.desc')
    },
    {
      num: '03',
      title: t('workflow.step3.title'),
      desc: t('workflow.step3.desc')
    },
    {
      num: '04',
      title: t('workflow.step4.title'),
      desc: t('workflow.step4.desc')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('workflow.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {t('workflow.subtitle')}
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row items-start justify-between relative w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex-1 flex flex-col items-center">
              
              {/* Arrow to next step */}
              {idx < steps.length - 1 && (
                <div className={`absolute top-[48px] left-[50%] w-full z-0 px-8 transition-opacity duration-500 ${activeStep === idx ? 'opacity-100' : 'opacity-20'}`}>
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-[#22D3EE] relative rounded-full">
                    <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#22D3EE]"></div>
                  </div>
                </div>
              )}
              
              {/* Step Card */}
              <div 
                className={`relative z-10 flex flex-col items-center text-center px-4 transition-all duration-500 cursor-pointer ${activeStep === idx ? 'opacity-100 scale-105' : 'opacity-40 scale-100 hover:opacity-70'}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${activeStep === idx ? 'bg-[#22D3EE]/20 border border-[#22D3EE]/50 shadow-[0_0_40px_rgba(34,211,238,0.3)]' : 'bg-white/5 border border-white/10'}`}>
                  <span className={`text-4xl font-bold transition-colors duration-500 ${activeStep === idx ? 'text-[#22D3EE]' : 'text-white/50'}`}>{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                  {step.desc}
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
                  <span className="text-4xl font-bold text-[#22D3EE]">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 px-4">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm whitespace-pre-line px-4 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

