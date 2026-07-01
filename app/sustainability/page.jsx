"use client";
import React, { useEffect, useState } from 'react';
import DataFlowLinesBG from '@/components/backgrounds/DataFlowLinesBG';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SustainabilityPage() {
  const { t, lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Sustainability | Udata" : "Bền vững | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-8 bg-midnight-core overflow-hidden flex flex-col items-center justify-center text-center">
      <DataFlowLinesBG />
      <div className="relative z-10 space-y-8 max-w-4xl flex flex-col items-center">
        <div 
          className="inline-flex items-center justify-center bg-sustain-teal/10 border border-sustain-teal/20 text-sustain-teal px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(16,240,203,0.2)]"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}
        >
          {lang === 'VI' ? 'Phát triển bền vững' : 'Sustainability'}
        </div>
        
        <h1 
          className="text-6xl md:text-8xl font-bold text-white tracking-tight transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '100ms' }}
        >
          Coming <span className="text-sustain-teal">Soon</span>
        </h1>
        
        <p 
          className="text-xl text-[#9CA3AF] max-w-2xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '200ms' }}
        >
          {lang === 'VI' ? 'Trang nội dung đang được chúng tôi hoàn thiện. Vui lòng quay lại sau.' : 'This page is currently under construction. Please check back later.'}
        </p>

        <div 
          className="mt-8 transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '300ms' }}
        >
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-8 py-3 bg-[#111827] hover:bg-[#1f2937] border border-white/10 rounded-full text-white transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            {lang === 'VI' ? 'Về trang chủ' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
}
