"use client";
import React from 'react';
import HoverFillButton from './ui/HoverFillButton';
import { useLanguage } from '@/contexts/LanguageContext';
import NetworkCanvasBG from './backgrounds/NetworkCanvasBG';

export default function BlogHero() {
  const { lang } = useLanguage();
  const scrollToFeatured = (e) => {
    e.preventDefault();
    const section = document.getElementById('blog-featured');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTopics = (e) => {
    e.preventDefault();
    const section = document.getElementById('blog-topics');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-40 pb-32 px-6 md:px-12 z-10 w-full overflow-hidden min-h-[600px] flex items-center">
      
      {/* Network Constellation Background (CSS representation) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#06101F]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#10F0CB]/10 rounded-full blur-[150px]"></div>
        
        {/* Animated Network Canvas Background */}
        <NetworkCanvasBG />
        
        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start text-left">
        
        <div className="inline-flex items-center justify-center border border-[#22D3EE]/30 px-5 py-2 rounded-full mb-8 backdrop-blur-sm bg-[#22D3EE]/10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#22D3EE] font-bold">
            {lang === 'VI' ? 'GÓC NHÌN UDATA' : 'UDATA INSIGHTS'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[1.1] mb-4 md:mb-6 max-w-4xl tracking-tight text-balance">
          {lang === 'VI' 
            ? <>Tri thức vận hành cho doanh nghiệp trong kỷ nguyên <span className="text-[#22D3EE]">dữ liệu và AIoT</span></>
            : <>Operational knowledge for businesses in the <span className="text-[#22D3EE]">data and AIoT</span> era</>}
        </h1>
        
        <p className="text-[#9CA3AF] text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10 text-balance">
          {lang === 'VI' 
            ? 'Cập nhật những xu hướng công nghệ mới nhất, case study thực tế và chiến lược triển khai chuyển đổi số xanh dành cho doanh nghiệp sản xuất và hạ tầng.'
            : 'Update on the latest technology trends, real-world case studies, and green digital transformation deployment strategies for manufacturing and infrastructure businesses.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => {
              document.getElementById('blog-topics').scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2"
          >
            {lang === 'VI' ? 'Khám phá ngay' : 'Explore Now'}
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
          </button>
          

        </div>
      </div>
    </section>
  );
}

