"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogNewsletter() {
  const { lang } = useLanguage();

  const t = {
    title: {
      VI: 'Nhận góc nhìn mới từ Udata',
      EN: 'Get new insights from Udata'
    },
    desc: {
      VI: 'Đăng ký nhận bản tin để cập nhật các phân tích mới nhất về AIoT, dữ liệu vận hành, ESG, carbon và chuyển đổi số xanh dành cho doanh nghiệp.',
      EN: 'Subscribe to our newsletter for the latest analysis on AIoT, operational data, ESG, carbon, and green digital transformation for businesses.'
    },
    placeholder: {
      VI: 'Email doanh nghiệp',
      EN: 'Business email'
    },
    button: {
      VI: 'Đăng ký nhận bản tin',
      EN: 'Subscribe to newsletter'
    },
    note: {
      VI: 'Chúng tôi chỉ gửi những nội dung hữu ích về dữ liệu, vận hành và phát triển bền vững.',
      EN: 'We only send useful content about data, operations, and sustainability.'
    }
  };

  return (
    <section className="relative py-12 px-6 md:px-12 bg-[#06101F] z-10 w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="bg-[#0A0E14] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 min-w-0 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 shrink-0 bg-gradient-to-br from-[#22D3EE]/20 to-[#10F0CB]/10 rounded-2xl border border-[#22D3EE]/30 flex items-center justify-center relative overflow-hidden">
              <span className="material-symbols-outlined text-[40px] text-[#22D3EE] relative z-10">mark_email_unread</span>
              {/* Decorative lines inside icon box */}
              <div className="absolute inset-0 flex flex-col justify-center gap-2 opacity-20 px-4">
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-2/3 h-[1px] bg-white"></div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-2 whitespace-nowrap md:whitespace-normal">{t.title[lang]}</h2>
              <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-full">
                {t.desc[lang]}
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end">
            <form className="flex flex-col sm:flex-row items-center gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t.placeholder[lang]}
                className="w-full sm:w-[300px] bg-[#111827] border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#22D3EE]/50 transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#22D3EE] text-[#06101F] font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.2)] whitespace-nowrap"
              >
                {t.button[lang]}
              </button>
            </form>
            
            <div className="flex items-center gap-2 mt-4 text-[#6B7280] text-xs px-2 justify-center lg:justify-start">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <p>{t.note[lang]}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

