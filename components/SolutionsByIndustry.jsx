"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from '@/components/ui/HoverFillButton';
import { useRouter } from 'next/navigation';

export default function SolutionsByIndustry() {
  const { lang } = useLanguage();
  const router = useRouter();

  const industries = [
    {
      id: 'manufacturing',
      icon: 'factory',
      enLabel: 'Manufacturing & Factory',
      viLabel: 'Sản xuất và nhà máy',
      enTitle: 'Solutions for Manufacturing & Factory Operations',
      viTitle: 'Giải pháp cho sản xuất và vận hành nhà máy',
      enDesc: 'Udata helps factories connect data from devices, production lines, energy, maintenance, and management systems into a unified platform. Enterprises can track performance, detect bottlenecks, optimize operations, and build a data foundation for long-term improvement.',
      viDesc: 'Udata giúp nhà máy kết nối dữ liệu từ thiết bị, dây chuyền, năng lượng, bảo trì và hệ thống quản trị vào một nền tảng thống nhất. Doanh nghiệp có thể theo dõi hiệu suất, phát hiện điểm nghẽn, tối ưu vận hành và xây dựng nền tảng dữ liệu cho cải tiến dài hạn.',
      enChallenge: 'Production, equipment, energy, and maintenance data are often in disparate systems, making it difficult for factories to track performance and detect issues in real-time.',
      viChallenge: 'Dữ liệu sản xuất, thiết bị, năng lượng và bảo trì thường nằm ở nhiều hệ thống khác nhau, khiến nhà máy khó theo dõi hiệu suất và phát hiện vấn đề theo thời gian thực.',
      poweredBy: ['UBOARD', 'UGATE', 'UZERO'],
      viCTA: 'Khám phá giải pháp cho sản xuất',
      enCTA: 'Explore Manufacturing Solutions',
      link: '/giai-phap/san-xuat'
    },
    {
      id: 'logistics',
      icon: 'local_shipping',
      enLabel: 'Logistics & Industrial Parks',
      viLabel: 'Logistics và khu công nghiệp',
      enTitle: 'Solutions for Logistics & Industrial Parks',
      viTitle: 'Giải pháp cho logistics và khu công nghiệp',
      enDesc: 'Udata helps businesses track warehousing, asset, energy, workflow, and operational performance data in real-time. The platform supports connecting data across multiple areas, systems, and operational units to create a unified view.',
      viDesc: 'Udata giúp doanh nghiệp theo dõi dữ liệu kho vận, tài sản, năng lượng, luồng hàng và hiệu suất vận hành theo thời gian thực. Nền tảng hỗ trợ kết nối dữ liệu giữa nhiều khu vực, nhiều hệ thống và nhiều đơn vị vận hành để tạo ra một góc nhìn thống nhất.',
      enChallenge: 'Inventory, transport workflows, energy, and asset performance data are often fragmented, making operational control and cost optimization difficult.',
      viChallenge: 'Dữ liệu tồn kho, luồng vận chuyển, năng lượng và hiệu suất tài sản thường bị phân tán, khiến việc kiểm soát vận hành và tối ưu chi phí trở nên khó khăn.',
      poweredBy: ['UBOARD', 'UGATE', 'UZERO'],
      viCTA: 'Khám phá giải pháp cho logistics',
      enCTA: 'Explore Logistics Solutions',
      link: '/giai-phap/logistics'
    },
    {
      id: 'export',
      icon: 'public',
      enLabel: 'Export Enterprises',
      viLabel: 'Doanh nghiệp xuất khẩu',
      enTitle: 'Solutions for Export Enterprises',
      viTitle: 'Giải pháp cho doanh nghiệp xuất khẩu',
      enDesc: 'Udata helps export enterprises build a data foundation for ESG, carbon, audit, and supply chain transparency requirements. When operational, energy, and emissions data are standardized, businesses can better meet demands from international customers and strategic partners.',
      viDesc: 'Udata hỗ trợ doanh nghiệp xuất khẩu xây dựng nền tảng dữ liệu phục vụ ESG, carbon, audit và các yêu cầu minh bạch trong chuỗi cung ứng. Khi dữ liệu vận hành, năng lượng và phát thải được chuẩn hóa, doanh nghiệp có thể đáp ứng tốt hơn các yêu cầu từ khách hàng quốc tế và đối tác chiến lược.',
      enChallenge: 'Export enterprises face increasing pressure regarding emissions data, energy, operational origins, and supply chain transparency.',
      viChallenge: 'Doanh nghiệp xuất khẩu ngày càng chịu áp lực lớn hơn về dữ liệu phát thải, năng lượng, nguồn gốc vận hành và minh bạch trong chuỗi cung ứng.',
      poweredBy: ['UZERO', 'UGATE', 'UBOARD'],
      viCTA: 'Khám phá giải pháp cho doanh nghiệp xuất khẩu',
      enCTA: 'Explore Export Solutions',
      link: '/giai-phap/xuat-khau'
    },
    {
      id: 'buildings',
      icon: 'location_city',
      enLabel: 'Industrial Parks & Smart Buildings',
      viLabel: 'Khu công nghiệp và tòa nhà',
      enTitle: 'Solutions for Industrial Parks & Smart Buildings',
      viTitle: 'Giải pháp cho khu công nghiệp và tòa nhà thông minh',
      enDesc: 'Udata connects energy, equipment, infrastructure, operations, and emissions data in industrial parks or buildings. The platform supports tracking resource consumption, detecting anomalies, and optimizing energy efficiency.',
      viDesc: 'Udata giúp kết nối dữ liệu năng lượng, thiết bị, hạ tầng, vận hành và phát thải trong khu công nghiệp hoặc tòa nhà. Nền tảng hỗ trợ theo dõi tiêu thụ tài nguyên, phát hiện bất thường và tối ưu hiệu suất sử dụng năng lượng.',
      enChallenge: 'Energy, equipment, and infrastructure operations data are often not connected into a unified measurement system, limiting cost optimization and emissions management.',
      viChallenge: 'Dữ liệu năng lượng, thiết bị và vận hành hạ tầng thường chưa được kết nối thành một hệ thống đo lường thống nhất, khiến việc tối ưu chi phí và quản trị phát thải gặp nhiều hạn chế.',
      poweredBy: ['UBOARD', 'UZERO', 'UGATE'],
      viCTA: 'Khám phá giải pháp cho khu công nghiệp và tòa nhà',
      enCTA: 'Explore Smart Building Solutions',
      link: '/giai-phap/khu-cong-nghiep'
    },
    {
      id: 'enterprise',
      icon: 'domain',
      enLabel: 'Enterprise Operations',
      viLabel: 'Enterprise Operations',
      enTitle: 'Corporate Enterprise Operations Solutions',
      viTitle: 'Giải pháp cho vận hành doanh nghiệp cấp tập đoàn',
      enDesc: 'Udata helps enterprises unify data from multiple departments, branches, and operational systems. The platform creates a central intelligence layer for management to track performance, costs, data flows, internal knowledge, and sustainability goals.',
      viDesc: 'Udata giúp enterprise hợp nhất dữ liệu từ nhiều phòng ban, nhiều chi nhánh và nhiều hệ thống vận hành. Nền tảng tạo ra một lớp trí tuệ trung tâm để ban lãnh đạo theo dõi hiệu suất, chi phí, dòng dữ liệu, tri thức nội bộ và các mục tiêu phát triển bền vững.',
      enChallenge: 'Departments and member units often operate on different systems, leading to un-synchronized data and slowing down management decision-making.',
      viChallenge: 'Các phòng ban và đơn vị thành viên thường vận hành trên nhiều hệ thống khác nhau, khiến dữ liệu thiếu đồng bộ và làm chậm quá trình ra quyết định ở cấp quản trị.',
      poweredBy: ['UGATE', 'MINIUGATE', 'UZERO'],
      viCTA: 'Khám phá giải pháp cho enterprise',
      enCTA: 'Explore Enterprise Solutions',
      link: '/giai-phap/doanh-nghiep'
    }
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  
  const activeIndustry = industries.find(ind => ind.id === activeTab);

  const renderContent = (industry) => (
    <div className="bg-[#0C1017] border border-white/5 rounded-2xl p-6 md:p-12 h-full flex flex-col relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3EE]/5 blur-[80px] pointer-events-none rounded-full"></div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
        {lang === 'EN' ? industry.enTitle : industry.viTitle}
      </h3>

      <div className="bg-[#121822] border border-white/5 rounded-xl p-6 mb-8 relative z-10">
        <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3">
          {lang === 'EN' ? 'THE CHALLENGE' : 'THÁCH THỨC'}
        </div>
        <p className="text-white/80 font-medium leading-relaxed">
          {lang === 'EN' ? industry.enChallenge : industry.viChallenge}
        </p>
      </div>

      <div className="mb-10 relative z-10">
        <div className="text-[10px] font-bold tracking-widest text-[#22D3EE] uppercase mb-3">
          {lang === 'EN' ? 'THE SOLUTION' : 'GIẢI PHÁP TỪ UDATA'}
        </div>
        <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
          {lang === 'EN' ? industry.enDesc : industry.viDesc}
        </p>
      </div>

      <div className="mt-auto relative z-10">
        <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">
          {lang === 'EN' ? 'POWERED BY' : 'ĐƯỢC VẬN HÀNH BỞI'}
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {industry.poweredBy.map(product => {
            let colorClass = "";
            let shimmerClass = "";
            switch (product.toLowerCase()) {
              case 'uboard': 
                colorClass = 'border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]';
                shimmerClass = 'via-[#22D3EE]/20';
                break;
              case 'ugate': 
              case 'miniugate':
                colorClass = 'border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)]';
                shimmerClass = 'via-[#3B82F6]/20';
                break;
              case 'uzero': 
                colorClass = 'border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.15)]';
                shimmerClass = 'via-[#10B981]/20';
                break;
              default:
                colorClass = 'border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]';
                shimmerClass = 'via-[#22D3EE]/20';
            }
            return (
              <span 
                key={product} 
                className={`px-4 py-1.5 rounded-full border text-xs font-bold tracking-wider relative overflow-hidden ${colorClass}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full animate-[shimmer_2s_infinite] ${shimmerClass}`}></div>
                <span className="relative z-10">{product}</span>
              </span>
            );
          })}
        </div>

        <HoverFillButton 
          onClick={() => router.push(industry.link)}
          className="bg-[#22D3EE] text-[#06101F] px-6 py-3 rounded-xl font-bold text-sm w-max hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          {lang === 'EN' ? industry.enCTA : industry.viCTA}
        </HoverFillButton>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Solutions by Industry and Operational Model' : 'Giải pháp theo ngành và mô hình vận hành'}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-4xl mx-auto">
            {lang === 'EN' 
              ? 'Udata is flexibly designed to adapt to each business model. Each solution starts with a real-world problem, then connects data, analyzes operational flows, and generates valuable insights for every management level.'
              : 'Udata được thiết kế linh hoạt để thích ứng với từng mô hình doanh nghiệp. Mỗi giải pháp bắt đầu từ bài toán thực tế, sau đó kết nối dữ liệu, phân tích dòng chảy vận hành và tạo ra insight có giá trị cho từng cấp quản trị.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Menu & Mobile Layout */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {industries.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <div key={ind.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveTab(ind.id)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE]' 
                        : 'bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE] lg:bg-transparent lg:border-transparent lg:text-[#9CA3AF] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className={`material-symbols-outlined ${isActive ? 'text-[#22D3EE]' : 'text-[#22D3EE] lg:text-white/40'}`}>
                      {ind.icon}
                    </span>
                    <span className="font-medium text-base">
                      {lang === 'EN' ? ind.enLabel : ind.viLabel}
                    </span>
                  </button>

                  {/* Mobile Content (always show) */}
                  <div className="lg:hidden mt-4 mb-6">
                    {renderContent(ind)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Right Content */}
          <div className="hidden lg:block w-full lg:w-2/3" key={activeTab}>
            {renderContent(activeIndustry)}
          </div>

        </div>
      </div>
    </section>
  );
}

