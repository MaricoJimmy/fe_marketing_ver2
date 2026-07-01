import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SolutionChallenges() {
  const { lang } = useLanguage();

  const challenges = [
    {
      icon: 'database',
      titleKey: 'challenges.card1.title',
      descKey: 'challenges.card1.desc',
      enTitle: 'Fragmented Data',
      viTitle: 'Dữ liệu phân mảnh',
      enDesc: 'Data scattered across ERP, CRM, warehouse, and finance systems makes unified reporting and real-time visibility impossible.',
      viDesc: 'Dữ liệu bị phân tán trên các hệ thống ERP, CRM, kho bãi và tài chính khiến việc báo cáo tập trung và giám sát theo thời gian thực trở nên bất khả thi.'
    },
    {
      icon: 'psychology',
      titleKey: 'challenges.card2.title',
      descKey: 'challenges.card2.desc',
      enTitle: 'Limited AI Adoption',
      viTitle: 'Ứng dụng AI hạn chế',
      enDesc: 'AI initiatives fail due to poor integration, lack of clean data, and missing governance frameworks within the enterprise.',
      viDesc: 'Các sáng kiến AI thất bại do tích hợp kém, thiếu dữ liệu sạch và không có khuôn khổ quản trị rõ ràng trong doanh nghiệp.'
    },
    {
      icon: 'groups',
      titleKey: 'challenges.card3.title',
      descKey: 'challenges.card3.desc',
      enTitle: 'Customer Acquisition Inefficiency',
      viTitle: 'Thu hút khách hàng kém hiệu quả',
      enDesc: 'Marketing and sales teams struggle to engage prospects effectively, leading to lower conversion rates and wasted budget.',
      viDesc: 'Đội ngũ Marketing và Sales gặp khó khăn trong việc tiếp cận khách hàng tiềm năng, dẫn đến tỷ lệ chuyển đổi thấp và lãng phí ngân sách.'
    },
    {
      icon: 'eco',
      titleKey: 'challenges.card4.title',
      descKey: 'challenges.card4.desc',
      enTitle: 'Sustainability Pressure',
      viTitle: 'Áp lực phát triển bền vững',
      enDesc: 'Organizations face increasing regulatory pressure for carbon reporting without the tools to accurately track emissions.',
      viDesc: 'Các tổ chức đối mặt với áp lực từ các quy định pháp lý về báo cáo carbon mà thiếu đi công cụ để theo dõi lượng phát thải chính xác.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Enterprise Challenges We Solve' : 'Các bài toán doanh nghiệp chúng tôi giải quyết'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? 'Modern organizations are drowning in data but starving for actionable intelligence.'
              : 'Các tổ chức hiện đại đang chìm ngập trong dữ liệu nhưng lại thiếu hụt những thông tin giá trị để hành động.'}
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
