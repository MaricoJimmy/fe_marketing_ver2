"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function SolutionCTA() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#080B10] relative z-10 flex justify-center overflow-hidden border-t border-white/5">
      {/* Background decorations for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#22D3EE]/10 blur-[150px] rounded-[100%] pointer-events-none"></div>

      <div className="w-full max-w-[1200px] relative">
        {/* Main CTA Card */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-[#22D3EE]/20 glass-card bg-[#0A0E14]/60 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.05)] py-16 px-6 sm:px-12 md:py-24 md:px-20 text-center group">
          
          {/* Animated Conic Gradient Background */}
          <div className="absolute inset-0 opacity-30 transition-opacity duration-1000 group-hover:opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] md:w-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#22D3EE_360deg)] md:animate-[spin_8s_linear_infinite] opacity-20"></div>
          </div>
          
          {/* Aesthetic Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/80 to-transparent"></div>

          {/* Decorative icons / elements */}
          <div className="absolute top-12 left-12 hidden md:block animate-[bounce_4s_infinite]">
             <span className="material-symbols-outlined text-[#22D3EE]/20 text-6xl rotate-12">data_exploration</span>
          </div>
          <div className="absolute bottom-12 right-12 hidden md:block animate-[bounce_5s_infinite_reverse]">
             <span className="material-symbols-outlined text-[#10F0CB]/20 text-6xl -rotate-12">monitoring</span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_10px_#22D3EE]"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#22D3EE]">
                {lang === 'EN' ? 'Start Your Journey' : 'Bắt đầu hành trình'}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl drop-shadow-lg text-center mx-auto text-balance">
              {lang === 'EN' ? 'Ready to turn operational data into a' : 'Sẵn sàng biến dữ liệu vận hành thành'}
              {' '}
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent whitespace-nowrap">
                {lang === 'EN' ? 'growth advantage?' : 'lợi thế tăng trưởng?'}
              </span>
            </h2>
            
            <p className="text-[#9CA3AF] text-sm md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              {lang === 'EN' 
                ? "Join Udata to assess current data status, identify priority problems, and build an AIoT deployment roadmap aligned with your business's operational, ROI, and sustainability goals." 
                : 'Hãy cùng Udata đánh giá hiện trạng dữ liệu, xác định bài toán ưu tiên và xây dựng lộ trình triển khai AIoT phù hợp với mục tiêu vận hành, ROI và phát triển bền vững của doanh nghiệp.'}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <HoverFillButton 
                onClick={() => router.push('/dung-thu')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-4 rounded-2xl font-bold text-sm md:text-base lg:text-lg transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:scale-105 flex items-center justify-center gap-2 group/btn"
              >
                <span>{lang === 'EN' ? 'Explore Solutions' : 'Xem tình huống ứng dụng'}</span>
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </HoverFillButton>
              
              <HoverFillButton 
                onClick={() => router.push('/demo')}
                className="w-full sm:w-auto border border-white/20 bg-white/5 text-white px-8 py-4 rounded-2xl font-bold text-sm md:text-base lg:text-lg hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">calendar_month</span>
                <span>{lang === 'EN' ? 'Book a Consultation' : 'Đặt lịch Demo'}</span>
              </HoverFillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

