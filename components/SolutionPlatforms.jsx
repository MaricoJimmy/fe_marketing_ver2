"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function SolutionPlatforms() {
  const { lang } = useLanguage();
  const router = useRouter();

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
      enSubtitle: 'AIoT-powered factory monitoring and optimization',
      viSubtitle: 'Giám sát và tối ưu vận hành nhà máy bằng AIoT',
      enFeatures: [
        'Connect devices, production lines, and sensors',
        'Monitor operational performance in real-time',
        'Detect anomalies and optimize maintenance',
        'Manage energy and factory data'
      ],
      viFeatures: [
        'Kết nối thiết bị, dây chuyền và cảm biến',
        'Theo dõi hiệu suất vận hành theo thời gian thực',
        'Phát hiện bất thường và tối ưu bảo trì',
        'Quản trị năng lượng và dữ liệu nhà máy'
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
      enSubtitle: 'Central AI layer for enterprise operational data',
      viSubtitle: 'Lớp AI trung tâm cho dữ liệu vận hành doanh nghiệp',
      enFeatures: [
        'Unify data from multiple internal systems',
        'Operational analysis using AI and big data',
        'Decision support for management',
        'Standardize knowledge, assets, and processes'
      ],
      viFeatures: [
        'Hợp nhất dữ liệu từ nhiều hệ thống nội bộ',
        'Phân tích vận hành bằng AI và big data',
        'Hỗ trợ quyết định cho ban lãnh đạo',
        'Chuẩn hóa tri thức, tài sản và quy trình'
      ],
      link: '/product/ugate'
    },
    {
      id: 'miniugate',
      name: 'MINIUGATE',
      icon: 'chat_bubble',
      color: 'text-[#3B82F6]',
      borderColor: 'border-[#3B82F6]/30',
      hoverBorderColor: 'group-hover:border-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/5',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      enSubtitle: 'AI assistant for internal knowledge and customer care',
      viSubtitle: 'Trợ lý AI cho tri thức nội bộ và chăm sóc khách hàng',
      enFeatures: [
        'Automate customer responses',
        'AI-powered internal knowledge queries',
        'Support sales, customer service, and knowledge operations',
        'Reduce repetitive tasks in corporate communication'
      ],
      viFeatures: [
        'Tự động hóa phản hồi khách hàng',
        'Truy vấn tri thức nội bộ bằng AI',
        'Hỗ trợ sales, CSKH và vận hành tri thức',
        'Giảm tác vụ lặp lại trong giao tiếp doanh nghiệp'
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
      enSubtitle: 'Carbon management and emissions data platform',
      viSubtitle: 'Nền tảng quản trị carbon và dữ liệu phát thải',
      enFeatures: [
        'Collect and standardize emissions data',
        'Track carbon by unit and activity',
        'Support ESG, audit, and sustainability reporting',
        'Build a data foundation for green growth'
      ],
      viFeatures: [
        'Thu thập và chuẩn hóa dữ liệu phát thải',
        'Theo dõi carbon theo đơn vị và hoạt động',
        'Hỗ trợ ESG, audit và báo cáo bền vững',
        'Xây dựng nền tảng dữ liệu cho tăng trưởng xanh'
      ],
      link: '/product/uzero'
    }
  ];

  return (
    <section id="solution-platforms" className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Explore the Udata Ecosystem' : 'Khám phá hệ sinh thái Udata'}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {lang === 'EN' 
              ? "Udata's core products are designed to connect operational data, generate real-time insights, and systematically support enterprise green digital transformation."
              : 'Các sản phẩm cốt lõi của Udata được thiết kế để kết nối dữ liệu vận hành, tạo insight realtime và hỗ trợ doanh nghiệp chuyển đổi số xanh một cách có hệ thống.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div 
              key={platform.id} 
              className={`bg-[#0C1017] border border-white/5 rounded-2xl p-8 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-2 ${platform.hoverBorderColor} ${platform.glowColor}`}
              onClick={() => router.push(platform.link)}
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

