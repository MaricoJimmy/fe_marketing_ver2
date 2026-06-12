"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UseCaseSteps() {
  const { t, lang } = useLanguage();

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

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#0A0E14]">
      <div className="max-w-[1200px] mx-auto text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('usecases.steps.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            {t('usecases.steps.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line for large screens */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center p-6 group">
              <div className="w-24 h-24 rounded-full bg-[#0C1017] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#22D3EE]/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-[#22D3EE]">
                  {step.icon}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">
                {t(step.titleKey)}
              </h3>
              
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

