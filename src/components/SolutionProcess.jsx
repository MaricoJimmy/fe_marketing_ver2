import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SolutionProcess() {
  const { lang } = useLanguage();

  const steps = [
    {
      num: '01',
      enTitle: 'Assessment',
      viTitle: 'Đánh giá',
      enDesc: 'Data readiness and infrastructure audit.',
      viDesc: 'Đánh giá mức độ sẵn sàng của dữ liệu và kiểm tra hạ tầng.'
    },
    {
      num: '02',
      enTitle: 'Solution Design',
      viTitle: 'Thiết kế Giải pháp',
      enDesc: 'Architecture mapping and use case definition.',
      viDesc: 'Xây dựng kiến trúc hệ thống và xác định bài toán ứng dụng.'
    },
    {
      num: '03',
      enTitle: 'Integration',
      viTitle: 'Tích hợp',
      enDesc: 'Connecting data sources and tuning models.',
      viDesc: 'Kết nối các nguồn dữ liệu và tinh chỉnh mô hình AI.'
    },
    {
      num: '04',
      enTitle: 'Deployment',
      viTitle: 'Triển khai',
      enDesc: 'Phased rollout with user training.',
      viDesc: 'Triển khai theo từng giai đoạn kết hợp đào tạo người dùng.'
    },
    {
      num: '05',
      enTitle: 'Optimization',
      viTitle: 'Tối ưu hóa',
      enDesc: 'Continuous improvement and ROI tracking.',
      viDesc: 'Cải tiến liên tục và theo dõi tỷ suất hoàn vốn (ROI).'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'From Discovery to Deployment' : 'Từ Khám phá đến Triển khai'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? 'A structured, risk-mitigated approach to enterprise AI implementation.'
              : 'Cách tiếp cận bài bản, giảm thiểu rủi ro khi triển khai AI cho doanh nghiệp.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line Background */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent"></div>
          
          {/* Active Line Progress (Mock) */}
          <div className="hidden md:block absolute top-10 left-0 w-4/5 h-0.5 bg-gradient-to-r from-[#22D3EE] to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left group relative">
                
                {/* Mobile vertical line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-[#22D3EE]/20"></div>
                )}

                {/* Circle Number */}
                <div className="w-20 h-20 rounded-full bg-[#080B10] border-2 border-[#22D3EE] flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl font-bold text-white">{step.num}</span>
                  {/* Outer subtle glow */}
                  <div className="absolute inset-0 rounded-full border border-[#22D3EE]/30 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {lang === 'EN' ? step.enTitle : step.viTitle}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[200px]">
                  {lang === 'EN' ? step.enDesc : step.viDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
