"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const STRATEGIC_LINES = [
  {
    id: 's1',
    title: { VI: 'Dữ liệu vận hành và lớp trí tuệ doanh nghiệp', EN: 'Operational Data & Enterprise Intelligence Layer' },
    desc: { VI: 'Xây dựng nền tảng dữ liệu vận hành tin cậy, kết nối IoT, chuẩn hóa dữ liệu và hình thành lớp trí tuệ doanh nghiệp để ra quyết định dựa trên dữ liệu.', EN: 'Build a reliable operational data foundation, connect IoT, standardize data, and form an enterprise intelligence layer for data-driven decision making.' },
    icon: 'account_tree'
  },
  {
    id: 's2',
    title: { VI: 'AIoT trong sản xuất và hạ tầng', EN: 'AIoT in Manufacturing & Infrastructure' },
    desc: { VI: 'Ứng dụng AIoT để giám sát, tối ưu và tự động hóa quy trình trong nhà máy, tòa nhà, năng lượng và hạ tầng kỹ thuật.', EN: 'Apply AIoT to monitor, optimize, and automate processes in factories, buildings, energy, and technical infrastructure.' },
    icon: 'factory'
  },
  {
    id: 's3',
    title: { VI: 'Carbon, ESG và dữ liệu bền vững', EN: 'Carbon, ESG & Sustainability Data' },
    desc: { VI: 'Đo lường phát thải, quản trị năng lượng và báo cáo ESG minh bạch, chuẩn quốc tế, hướng tới mục tiêu Net Zero.', EN: 'Measure emissions, manage energy, and report ESG transparently to international standards, towards Net Zero goals.' },
    icon: 'energy_savings_leaf'
  },
  {
    id: 's4',
    title: { VI: 'Tự động hóa tri thức bằng AI', EN: 'Knowledge Automation with AI' },
    desc: { VI: 'Khai thác sức mạnh AI để tìm kiếm, tóm tắt, phân tích tài liệu và hỗ trợ ra quyết định nhanh, chính xác.', EN: 'Harness the power of AI to search, summarize, analyze documents, and support fast, accurate decision making.' },
    icon: 'psychology_alt'
  },
  {
    id: 's5',
    title: { VI: 'Góc nhìn dành cho lãnh đạo', EN: 'Insights for Leadership' },
    desc: { VI: 'Chuỗi bài viết và case study giúp lãnh đạo cập nhật xu hướng, chiến lược và kinh nghiệm triển khai từ thực tiễn.', EN: 'A series of articles and case studies helping leaders update trends, strategies, and practical deployment experiences.' },
    icon: 'person'
  }
];

export default function BlogStrategic() {
  const { lang } = useLanguage();

  const handleScrollToGrid = (e) => {
    e.preventDefault();
    const gridSection = document.getElementById('blog-grid');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#06101F] z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {lang === 'VI' ? 'Tuyến nội dung chiến lược' : 'Strategic Content Lines'}
          </h2>
          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed max-w-3xl">
            {lang === 'VI' 
              ? 'Khám phá hệ thống chủ đề chiến lược được Udata xây dựng, giúp doanh nghiệp định hướng, triển khai và đo lường hiệu quả chuyển đổi số với AIoT và dữ liệu vận hành.'
              : 'Explore the strategic topic system built by Udata, helping businesses orient, deploy, and measure the effectiveness of digital transformation with AIoT and operational data.'}
          </p>
        </div>

        {/* List Layout */}
        <div className="flex flex-col border-t border-white/10">
          {STRATEGIC_LINES.map((item) => (
            <a 
              key={item.id}
              href="#blog-grid"
              onClick={handleScrollToGrid}
              className="group flex flex-col md:flex-row items-start md:items-center p-6 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 gap-6 md:gap-10"
            >
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#22D3EE] transition-colors">
                <span className="material-symbols-outlined text-[32px] md:text-[40px] font-light">{item.icon}</span>
              </div>
              
              {/* Title */}
              <div className="w-full md:w-1/3 shrink-0">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#22D3EE] transition-colors leading-snug">
                  {item.title[lang]}
                </h3>
              </div>
              
              {/* Description */}
              <div className="w-full md:flex-1">
                <p className="text-sm text-[#9CA3AF] leading-relaxed group-hover:text-[#D1D5DB] transition-colors">
                  {item.desc[lang]}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex shrink-0 items-center justify-center text-[#9CA3AF] group-hover:text-[#22D3EE] transition-colors">
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

