import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function SolutionCTA() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10 flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1000px] bg-[#0A0E14] border border-[#22D3EE]/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.03)]">
        
        {/* Subtle background glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {lang === 'EN' ? 'Ready to Build Your AI-Powered' : 'Sẵn sàng Xây dựng Doanh nghiệp'}
            <br />
            {lang === 'EN' ? 'Enterprise?' : 'Tiên phong AI?'}
          </h2>
          
          <p className="text-[#9CA3AF] text-lg mb-10 max-w-2xl mx-auto">
            {lang === 'EN' 
              ? 'Join hundreds of leading organizations optimizing their operations with Udata.' 
              : 'Gia nhập cùng hàng trăm tổ chức hàng đầu đang tối ưu hóa vận hành với Udata.'}
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/dung-thu')}
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
