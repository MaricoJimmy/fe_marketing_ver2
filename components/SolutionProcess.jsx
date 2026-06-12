"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionProcess() {
  const { t } = useLanguage();

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

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('workflow.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {t('workflow.subtitle')}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center group relative gap-6 md:gap-0">
                
                {/* Mobile vertical line to next step */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[64px] left-[32px] -translate-x-1/2 w-0.5 bg-[#22D3EE]/30" style={{ height: 'calc(100% - 32px)' }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  </div>
                )}

                {/* Desktop horizontal line to next step */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[50%] w-full h-0.5 bg-[#22D3EE]/30">
                    {/* Active line glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  </div>
                )}

                {/* Circle Number */}
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-[#080B10] border-2 border-[#22D3EE] flex items-center justify-center md:mb-6 relative z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-all duration-300">
                  <span className="text-lg md:text-xl font-bold text-white">{step.num}</span>
                  {/* Outer subtle glow */}
                  <div className="absolute inset-0 rounded-full border border-[#22D3EE]/30 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-0">
                  <h3 className="text-lg font-bold text-white mb-2 md:mb-3 md:px-4">
                    {step.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-none md:max-w-[220px] md:mx-auto md:px-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

