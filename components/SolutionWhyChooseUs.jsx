"use client";
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionWhyChooseUs() {
  const { lang } = useLanguage();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollInterval;
    const checkAndScroll = () => {
      if (window.innerWidth < 768) { // md breakpoint
        scrollInterval = setInterval(() => {
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
          }
        }, 3500);
      }
    };

    checkAndScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  const reasons = [
    {
      icon: 'hub',
      color: 'text-[#22D3EE]',
      bgColor: 'bg-[#22D3EE]/10',
      enTitle: 'Integration of AI, IoT, and Operational Data',
      viTitle: 'Tích hợp AI, IoT và dữ liệu vận hành',
      enDesc: 'Udata combines equipment data, operational systems, and AI into a synchronized platform, helping businesses control data flows and generate actionable insights with direct impact.',
      viDesc: 'Udata kết hợp dữ liệu thiết bị, hệ thống vận hành và AI trong một nền tảng đồng bộ, giúp doanh nghiệp kiểm soát dòng dữ liệu và tạo ra insight có tác động trực tiếp.'
    },
    {
      icon: 'tune',
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      enTitle: 'Customized for Every Business Model',
      viTitle: 'Tùy chỉnh theo từng mô hình doanh nghiệp',
      enDesc: 'Every enterprise has a different operational structure. Udata is flexibly designed to fit individual factories, supply chains, industrial parks, or enterprise models.',
      viDesc: 'Mỗi doanh nghiệp có cấu trúc vận hành khác nhau. Udata được thiết kế linh hoạt để phù hợp với từng nhà máy, chuỗi cung ứng, khu công nghiệp hoặc mô hình enterprise.'
    },
    {
      icon: 'visibility',
      color: 'text-[#D946EF]',
      bgColor: 'bg-[#D946EF]/10',
      enTitle: 'Real-time Data Observability',
      viTitle: 'Quan sát dữ liệu theo thời gian thực',
      enDesc: 'The platform helps enterprises track operational, energy, financial, logistics, and emissions data in real-time, enabling faster reactions to fluctuations.',
      viDesc: 'Nền tảng giúp doanh nghiệp theo dõi dữ liệu vận hành, năng lượng, tài chính, kho vận và phát thải theo thời gian thực, từ đó phản ứng nhanh hơn trước biến động.'
    },
    {
      icon: 'eco',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      enTitle: 'Linking Digital Transformation with Sustainability',
      viTitle: 'Gắn chuyển đổi số với phát triển bền vững',
      enDesc: "Udata doesn't just digitize operations. We connect operational data with ESG goals, carbon reduction, energy savings, and green growth.",
      viDesc: 'Udata không chỉ giúp doanh nghiệp số hóa vận hành. Chúng tôi giúp kết nối dữ liệu vận hành với mục tiêu ESG, carbon, tiết kiệm năng lượng và tăng trưởng xanh.'
    },
    {
      icon: 'engineering',
      color: 'text-[#F59E0B]',
      bgColor: 'bg-[#F59E0B]/10',
      enTitle: 'Highly Experienced Technical Team',
      viTitle: 'Đội ngũ kỹ thuật giàu kinh nghiệm',
      enDesc: 'The Udata team possesses strong capabilities in AI, IoT, and data infrastructure, focusing on solving real-world operational problems rather than just deploying standalone technologies.',
      viDesc: 'Đội ngũ Udata có năng lực trong AI, IoT và hạ tầng dữ liệu, tập trung giải quyết các bài toán vận hành thực tế thay vì chỉ triển khai công nghệ đơn lẻ.'
    },
    {
      icon: 'trending_up',
      color: 'text-[#EF4444]',
      bgColor: 'bg-[#EF4444]/10',
      enTitle: 'Partnering Through Measurable Results',
      viTitle: 'Đồng hành bằng hiệu quả đo lường được',
      enDesc: 'Udata focuses on tangible results such as operational performance, costs, energy efficiency, ROI, transparent data, and long-term sustainable impact.',
      viDesc: 'Udata hướng đến các kết quả thực tế như hiệu suất vận hành, chi phí, năng lượng, ROI, dữ liệu minh bạch và tác động bền vững dài hạn.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Why Enterprises Choose Udata' : 'Lý do doanh nghiệp lựa chọn Udata'}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-4xl mx-auto">
            {lang === 'EN' 
              ? 'Udata is built for real-world enterprise problems, where data is complex, systems are fragmented, security requirements are high, and efficiency must be measured by concrete results.'
              : 'Udata được xây dựng cho các bài toán enterprise thực tế, nơi dữ liệu phức tạp, hệ thống phân mảnh, yêu cầu bảo mật cao và hiệu quả cần được đo lường bằng kết quả cụ thể.'}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#0C1017] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${reason.bgColor}`}>
                <span className={`material-symbols-outlined ${reason.color}`}>{reason.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {lang === 'EN' ? reason.enTitle : reason.viTitle}
              </h3>
              
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {lang === 'EN' ? reason.enDesc : reason.viDesc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="md:hidden relative group/scroll w-full">
          <div 
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="w-[85vw] sm:w-[60vw] shrink-0 snap-center bg-[#0C1017] border border-white/5 rounded-2xl p-6"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${reason.bgColor}`}>
                  <span className={`material-symbols-outlined ${reason.color}`}>{reason.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {lang === 'EN' ? reason.enTitle : reason.viTitle}
                </h3>
                
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {lang === 'EN' ? reason.enDesc : reason.viDesc}
                </p>
              </div>
            ))}
          </div>

          {/* Faint arrow indicator for mobile */}
          <button 
            onClick={scrollRight}
            className="absolute right-1 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-10 text-white/40 active:bg-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}

