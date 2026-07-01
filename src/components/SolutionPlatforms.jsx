import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function SolutionPlatforms() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const platforms = [
    {
      id: 'uboard',
      name: 'UBOARD',
      icon: 'dashboard_customize',
      color: 'text-[#22D3EE]',
      borderColor: 'border-[#22D3EE]/30',
      hoverBorderColor: 'group-hover:border-[#22D3EE]',
      bgColor: 'bg-[#22D3EE]/5',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
      enSubtitle: 'Unified Enterprise Data Foundation',
      viSubtitle: 'Nền tảng Dữ liệu Doanh nghiệp Hợp nhất',
      enFeatures: [
        'Centralized ERP/CRM integration',
        'IoT sensor data ingestion',
        'Real-time operational dashboards',
        'Predictive maintenance modeling'
      ],
      viFeatures: [
        'Tích hợp tập trung ERP/CRM',
        'Thu thập dữ liệu cảm biến IoT',
        'Bảng điều khiển vận hành thời gian thực',
        'Mô hình bảo trì dự đoán'
      ],
      link: '/product/uboard'
    },
    {
      id: 'ugate',
      name: 'UGATE',
      icon: 'memory',
      color: 'text-[#3B82F6]',
      borderColor: 'border-[#3B82F6]/30',
      hoverBorderColor: 'group-hover:border-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/5',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      enSubtitle: 'Enterprise AI Platform',
      viSubtitle: 'Nền tảng AI cho Doanh nghiệp',
      enFeatures: [
        'Private LLM deployment',
        'RAG (Retrieval-Augmented Generation)',
        'Workflow Automation Agent',
        'Secure knowledge base search'
      ],
      viFeatures: [
        'Triển khai LLM nội bộ',
        'Tạo sinh tăng cường truy xuất (RAG)',
        'Tác nhân tự động hóa quy trình',
        'Tìm kiếm cơ sở tri thức bảo mật'
      ],
      link: '/product/ugate'
    },
    {
      id: 'miniugate',
      name: 'MINIUGATE',
      icon: 'chat_bubble',
      color: 'text-[#D946EF]',
      borderColor: 'border-[#D946EF]/30',
      hoverBorderColor: 'group-hover:border-[#D946EF]',
      bgColor: 'bg-[#D946EF]/5',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]',
      enSubtitle: 'AI Customer Engagement Assistant',
      viSubtitle: 'Trợ lý AI tương tác khách hàng',
      enFeatures: [
        '24/7 technical customer support',
        'Automated lead qualification',
        'Intent-based routing to sales',
        'Multi-language conversational AI'
      ],
      viFeatures: [
        'Hỗ trợ khách hàng kỹ thuật 24/7',
        'Đánh giá khách hàng tiềm năng tự động',
        'Định tuyến đến Sales theo ý định',
        'AI giao tiếp đa ngôn ngữ'
      ],
      link: '/product/miniugate'
    },
    {
      id: 'uzero',
      name: 'UZERO',
      icon: 'energy_savings_leaf',
      color: 'text-[#10B981]',
      borderColor: 'border-[#10B981]/30',
      hoverBorderColor: 'group-hover:border-[#10B981]',
      bgColor: 'bg-[#10B981]/5',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      enSubtitle: 'Carbon Intelligence & Optimization',
      viSubtitle: 'Tối ưu & Dữ liệu thông minh Carbon',
      enFeatures: [
        'Scope 1, 2, 3 emissions tracking',
        'Audit-ready ESG reporting',
        'Energy consumption analytics',
        'AI-driven reduction recommendations'
      ],
      viFeatures: [
        'Theo dõi phát thải Phạm vi 1, 2, 3',
        'Báo cáo ESG sẵn sàng cho kiểm toán',
        'Phân tích tiêu thụ năng lượng',
        'Đề xuất giảm phát thải bằng AI'
      ],
      link: '/product/uzero'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Explore Our Platform' : 'Khám phá Nền tảng'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? 'Dive deeper into the core products that power the Udata ecosystem.'
              : 'Tìm hiểu sâu hơn về các sản phẩm cốt lõi cấu thành nên hệ sinh thái Udata.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div 
              key={platform.id} 
              className={`bg-[#0C1017] border border-white/5 rounded-2xl p-8 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-2 ${platform.hoverBorderColor} ${platform.glowColor}`}
              onClick={() => navigate(platform.link)}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${platform.borderColor} ${platform.bgColor}`}>
                <span className={`material-symbols-outlined ${platform.color}`}>{platform.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                {platform.name}
              </h3>
              <div className={`text-sm font-medium mb-6 ${platform.color}`}>
                {lang === 'EN' ? platform.enSubtitle : platform.viSubtitle}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {(lang === 'EN' ? platform.enFeatures : platform.viFeatures).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${platform.bgColor.replace('/5', '')}`} />
                    <span className="text-[#9CA3AF] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center gap-2 font-bold text-sm ${platform.color} group-hover:gap-3 transition-all mt-auto`}>
                {lang === 'EN' ? `Explore ${platform.name}` : `Khám phá ${platform.name}`}
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
