"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function UseCaseHero() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 bg-transparent z-10 flex flex-col items-center text-center">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        <div className="inline-block bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-4 py-1.5 rounded-full mb-6">
          <span className="text-xs md:text-sm uppercase tracking-widest text-[#22D3EE] font-bold">
            {t('usecases.badge')}
          </span>
        </div>

        <h1 
          className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight md:whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: t('usecases.title') }}
        />

        <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mb-10 leading-relaxed">
          {t('usecases.desc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
          <HoverFillButton 
            onClick={() => {
              const gridSection = document.getElementById('usecase-grid');
              if (gridSection) {
                gridSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto bg-[#22D3EE] text-[#06101F] px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            {t('usecases.hero.btn1')}
          </HoverFillButton>
          <button 
            onClick={() => router.push('/demo')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all"
          >
            {t('usecases.hero.btn2')}
          </button>
        </div>

      </div>
    </section>
  );
}

