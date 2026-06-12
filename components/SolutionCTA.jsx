"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function SolutionCTA() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10 flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1000px] bg-[#0A0E14] border border-[#22D3EE]/20 rounded-3xl py-10 px-6 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.03)] mx-4 md:mx-0">
        
        {/* Subtle background glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {lang === 'EN' ? 'Ready to turn operational data into a growth advantage?' : 'Sẵn sàng biến dữ liệu vận hành thành lợi thế tăng trưởng?'}
          </h2>
          
          <p className="text-[#9CA3AF] text-lg mb-10 max-w-2xl mx-auto">
            {lang === 'EN' 
              ? "Join Udata to assess current data status, identify priority problems, and build an AIoT deployment roadmap aligned with your business's operational, ROI, and sustainability goals." 
              : 'Hãy cùng Udata đánh giá hiện trạng dữ liệu, xác định bài toán ưu tiên và xây dựng lộ trình triển khai AIoT phù hợp với mục tiêu vận hành, ROI và phát triển bền vững của doanh nghiệp.'}
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => router.push('/demo')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#22D3EE] text-[#06101F] font-bold hover:scale-105 hover:bg-[#10F0CB] transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              {lang === 'EN' ? 'Book a Demo' : 'Đặt lịch Demo'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

