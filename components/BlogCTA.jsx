"use client";
import React from 'react';
import HoverFillButton from './ui/HoverFillButton';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogCTA() {
  const { lang } = useLanguage();

  const t = {
    title: {
      VI: 'Bạn đang tìm lời giải cho bài toán dữ liệu vận hành?',
      EN: 'Looking for a solution to your operational data challenges?'
    },
    desc: {
      VI: 'Hãy cùng Udata trao đổi về hiện trạng dữ liệu, mục tiêu vận hành và lộ trình ứng dụng AIoT phù hợp với doanh nghiệp của bạn.',
      EN: 'Let\'s discuss your current data status, operational goals, and a suitable AIoT application roadmap for your business with Udata.'
    },
    btnConsult: {
      VI: 'Đặt lịch tư vấn',
      EN: 'Book a Consultation'
    },
    btnExplore: {
      VI: 'Khám phá giải pháp Udata',
      EN: 'Explore Udata Solutions'
    }
  };

  return (
    <section className="relative pt-12 pb-24 px-6 md:px-12 bg-[#06101F] z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Banner Container */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#0C2442] to-[#0A1629] border border-white/10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 w-[600px] h-64 bg-gradient-to-l from-[#22D3EE]/10 to-transparent"></div>
          
          {/* Light flare graphic */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-50 hidden lg:block">
            <div className="absolute inset-0 bg-[#10F0CB] blur-[120px] rounded-full"></div>
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-full transform rotate-45 scale-150"></div>
            <div className="absolute inset-0 border-[1px] border-[#22D3EE]/30 rounded-full transform -rotate-12 scale-110"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {t.title[lang]}
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              {t.desc[lang]}
            </p>
          </div>

          {/* Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <HoverFillButton 
              onClick={() => window.location.href = '/demo'}
              className="w-full sm:w-auto bg-[#22D3EE] text-[#06101F] px-8 py-3.5 rounded-full font-bold text-base shadow-[0_0_20px_rgba(34,211,238,0.2)] flex justify-center items-center gap-2 transition-all hover:scale-105 whitespace-nowrap"
            >
              {t.btnConsult[lang]}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </HoverFillButton>
            
            <button 
              onClick={() => window.location.href = '/solution'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex justify-center items-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              {t.btnExplore[lang]}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

