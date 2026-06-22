"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TOPICS = [
  {
    id: 'aiot',
    title: { VI: 'AIoT và dữ liệu vận hành', EN: 'AIoT & Operational Data' },
    desc: { VI: 'Khai thác dữ liệu từ thiết bị và hệ thống để tối ưu hiệu suất và ra quyết định.', EN: 'Leverage data from equipment and systems to optimize performance and make decisions.' },
    icon: 'bar_chart',
    catVI: 'AIoT và dữ liệu vận hành',
    catEN: 'AIoT & Operational Data'
  },
  {
    id: 'smart-factory',
    title: { VI: 'Nhà máy thông minh', EN: 'Smart Factory' },
    desc: { VI: 'Giải pháp và mô hình giúp nhà máy tự động hóa, linh hoạt và hiệu quả.', EN: 'Solutions and models to help factories become automated, flexible, and efficient.' },
    icon: 'precision_manufacturing',
    catVI: 'Nhà máy thông minh',
    catEN: 'Smart Factory'
  },
  {
    id: 'esg',
    title: { VI: 'ESG, carbon và phát triển bền vững', EN: 'ESG, Carbon & Sustainability' },
    desc: { VI: 'Dữ liệu, công cụ và chiến lược để đo lường, giảm phát thải và phát triển bền vững.', EN: 'Data, tools, and strategies to measure, reduce emissions, and achieve sustainability.' },
    icon: 'eco',
    catVI: 'ESG và carbon',
    catEN: 'ESG & Carbon'
  },
  {
    id: 'logistics',
    title: { VI: 'Logistics và chuỗi vận hành', EN: 'Logistics & Supply Chain' },
    desc: { VI: 'Tối ưu chuỗi cung ứng, vận chuyển và kho bãi bằng dữ liệu và AIoT.', EN: 'Optimize supply chain, transportation, and warehousing using data and AIoT.' },
    icon: 'local_shipping',
    catVI: 'Logistics và chuỗi vận hành',
    catEN: 'Logistics & Supply Chain'
  },
  {
    id: 'ai-knowledge',
    title: { VI: 'AI trong tri thức nội bộ và chăm sóc khách hàng', EN: 'AI in Internal Knowledge & Customer Care' },
    desc: { VI: 'Ứng dụng AI để quản trị tri thức, tự động hóa và nâng cao trải nghiệm khách hàng.', EN: 'Apply AI for knowledge management, automation, and enhancing customer experience.' },
    icon: 'chat',
    catVI: 'Tri thức AI',
    catEN: 'AI Knowledge'
  },
  {
    id: 'strategy',
    title: { VI: 'Góc nhìn chiến lược', EN: 'Strategic Insights' },
    desc: { VI: 'Xu hướng, phân tích và kinh nghiệm giúp doanh nghiệp dẫn đầu trong kỷ nguyên mới.', EN: 'Trends, analysis, and experience to help businesses lead in the new era.' },
    icon: 'my_location',
    catVI: 'Góc nhìn chiến lược',
    catEN: 'Strategic Insights'
  }
];

export default function BlogTopics() {
  const { lang } = useLanguage();

  const handleScrollToGrid = (e, topic) => {
    e.preventDefault();
    const gridSection = document.getElementById('blog-grid');
    
    const event = new CustomEvent('blogCategorySelect', { 
      detail: { VI: topic.catVI, EN: topic.catEN } 
    });
    window.dispatchEvent(event);

    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog-topics" className="relative py-20 px-6 md:px-12 bg-[#06101F] z-10 w-full">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-10 md:mb-16">
          <div className="flex items-center shrink-0">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#22D3EE]/50"></div>
            <div className="w-6 sm:w-16 md:w-32 h-[1px] bg-gradient-to-l from-[#22D3EE]/50 to-transparent"></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center px-2 md:px-4 text-balance leading-snug">
            {lang === 'VI' ? 'Các chủ đề Udata đang tập trung' : 'Topics Udata is Focusing On'}
          </h2>
          
          <div className="flex items-center shrink-0">
            <div className="w-6 sm:w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#22D3EE]/50 to-transparent"></div>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#22D3EE]/50"></div>
          </div>
        </div>

        {/* Topics Grid - Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <div 
              key={topic.id}
              onClick={(e) => handleScrollToGrid(e, topic)}
              className="group cursor-pointer flex flex-row items-start bg-[#0A0E14] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative h-full min-h-[140px]"
            >
              {/* Icon Container (Left) */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mr-5 group-hover:bg-[#22D3EE]/10 group-hover:border-[#22D3EE]/30 transition-colors">
                <span className="material-symbols-outlined text-[24px] text-[#22D3EE]/70 group-hover:text-[#22D3EE]">
                  {topic.icon}
                </span>
              </div>
              
              {/* Content (Right) */}
              <div className="flex flex-col flex-1 pb-4">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors leading-tight">
                  {topic.title[lang]}
                </h3>
                <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                  {topic.desc[lang]}
                </p>
              </div>

              {/* Arrow in bottom right */}
              <div className="absolute bottom-6 right-6">
                <span className="material-symbols-outlined text-[#22D3EE] text-lg transition-all group-hover:translate-x-1 duration-300">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

