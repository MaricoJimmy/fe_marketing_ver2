"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionChallenges() {
  const { lang } = useLanguage();

  const challenges = [
    {
      icon: 'hub',
      enTitle: 'Fragmented Operational Data',
      viTitle: 'Dữ liệu vận hành phân mảnh',
      enDesc: 'Data is scattered across ERP, manufacturing, logistics, finance, energy, and internal tools. This makes it difficult for businesses to have a unified view of overall operations.',
      viDesc: 'Dữ liệu nằm rải rác giữa ERP, sản xuất, kho vận, tài chính, năng lượng và các công cụ nội bộ. Điều này khiến doanh nghiệp khó có một góc nhìn thống nhất về toàn bộ hoạt động vận hành.'
    },
    {
      icon: 'monitoring',
      enTitle: 'Lack of Real-time Visibility',
      viTitle: 'Thiếu khả năng quan sát realtime',
      enDesc: 'Management and operations teams struggle to simultaneously track performance, costs, inventory, energy, and bottlenecks as soon as issues arise.',
      viDesc: 'Ban lãnh đạo và đội ngũ vận hành khó theo dõi đồng thời hiệu suất, chi phí, tồn kho, năng lượng và các điểm nghẽn ngay khi vấn đề phát sinh.'
    },
    {
      icon: 'description',
      enTitle: 'Decision-making Dependent on Manual Reports',
      viTitle: 'Ra quyết định phụ thuộc vào báo cáo thủ công',
      enDesc: 'When data must be aggregated from multiple sources and updated slowly, businesses easily miss critical optimization timings in manufacturing, logistics, finance, and operations.',
      viDesc: 'Khi dữ liệu phải tổng hợp từ nhiều nguồn và cập nhật chậm, doanh nghiệp dễ bỏ lỡ thời điểm tối ưu quan trọng trong sản xuất, kho vận, tài chính và vận hành.'
    },
    {
      icon: 'eco',
      enTitle: 'ESG and Sustainability Pressures',
      viTitle: 'Áp lực ESG và phát triển bền vững',
      enDesc: 'Enterprises need more transparent data to manage energy, emissions, carbon, and meet reporting requirements from customers, partners, investors, or audit agencies.',
      viDesc: 'Doanh nghiệp cần dữ liệu minh bạch hơn để quản trị năng lượng, phát thải, carbon và đáp ứng các yêu cầu báo cáo từ khách hàng, đối tác, nhà đầu tư hoặc đơn vị audit.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Business Challenges We Solve' : 'Các bài toán doanh nghiệp chúng tôi giải quyết'}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {lang === 'EN' 
              ? 'Modern enterprises do not lack data. The challenge lies in data being fragmented, delayed, and not yet transformed into actionable insights.'
              : 'Doanh nghiệp hiện đại không thiếu dữ liệu. Thách thức nằm ở việc dữ liệu đang phân tán, đến chậm và chưa được chuyển hóa thành thông tin đủ rõ để hành động.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#0C1017] border border-white/5 rounded-2xl p-8 hover:border-[#22D3EE]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#161B22] border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#22D3EE]/10 group-hover:border-[#22D3EE]/30 transition-all duration-300">
                <span className="material-symbols-outlined text-[#22D3EE]">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {lang === 'EN' ? card.enTitle : card.viTitle}
              </h3>
              <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                {lang === 'EN' ? card.enDesc : card.viDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

