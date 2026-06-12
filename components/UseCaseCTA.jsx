"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UseCaseCTA() {
  const { t, lang } = useLanguage();
  const router = useRouter();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10 flex justify-center">
      <div className="w-full max-w-[1200px] bg-[#0C1017] border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.03)]">
        
        {/* Subtle background glow inside the card */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none"></div>

        <div className="relative z-10 md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {t('usecases.cta.title')}
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg">
            {t('usecases.cta.desc')}
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={() => router.push('/demo')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#22D3EE] text-[#06101F] font-bold hover:scale-105 hover:bg-[#10F0CB] transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] whitespace-nowrap flex items-center justify-center gap-2"
          >
            {t('usecases.cta.btn1')}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button 
            onClick={() => window.open('https://udata.vn', '_blank')} // Placeholder action
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            {t('usecases.cta.btn2')}
          </button>
        </div>
      </div>
    </section>
  );
}

