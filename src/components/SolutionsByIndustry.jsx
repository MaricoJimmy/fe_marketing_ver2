import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverFillButton from '../components/ui/HoverFillButton';
import { useNavigate } from 'react-router-dom';

export default function SolutionsByIndustry() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const industries = [
    {
      id: 'financial',
      icon: 'account_balance',
      enLabel: 'Financial Services',
      viLabel: 'Dịch vụ Tài chính',
      enTitle: 'Financial Services Solutions',
      viTitle: 'Giải pháp cho Dịch vụ Tài chính',
      enDesc: 'Unify financial data streams and apply predictive AI models for risk assessment, fraud detection, and automated compliance reporting.',
      viDesc: 'Hợp nhất các luồng dữ liệu tài chính và áp dụng mô hình AI dự đoán để đánh giá rủi ro, phát hiện gian lận và tự động hóa báo cáo tuân thủ.',
      enChallenge: 'Siloed financial data across disparate legacy systems delaying critical reporting.',
      viChallenge: 'Dữ liệu tài chính bị phân tán trên các hệ thống cũ kỹ làm chậm trễ các báo cáo quan trọng.',
      poweredBy: ['UBOARD', 'UGATE'],
      link: '/giai-phap/tai-chinh'
    },
    {
      id: 'warehousing',
      icon: 'inventory_2',
      enLabel: 'Warehousing & Logistics',
      viLabel: 'Kho bãi & Logistics',
      enTitle: 'Warehousing & Logistics Solutions',
      viTitle: 'Giải pháp cho Kho bãi & Logistics',
      enDesc: 'Optimize supply chain visibility, automate inventory tracking, and predict delivery bottlenecks using AI-driven logistics intelligence.',
      viDesc: 'Tối ưu hóa khả năng hiển thị chuỗi cung ứng, tự động theo dõi hàng tồn kho và dự đoán tắc nghẽn giao hàng bằng trí tuệ nhân tạo.',
      enChallenge: 'Inability to track inventory in real-time leading to stockouts and inefficient routing.',
      viChallenge: 'Không thể theo dõi hàng tồn kho theo thời gian thực dẫn đến tình trạng hết hàng và định tuyến kém hiệu quả.',
      poweredBy: ['UBOARD', 'UGATE', 'UZERO'],
      link: '/giai-phap/kho-bai'
    },
    {
      id: 'manufacturing',
      icon: 'factory',
      enLabel: 'Manufacturing',
      viLabel: 'Sản xuất',
      enTitle: 'Manufacturing Solutions',
      viTitle: 'Giải pháp cho Sản xuất',
      enDesc: 'Implement AIoT to monitor machine health, optimize OEE, and enable predictive maintenance across the factory floor.',
      viDesc: 'Triển khai AIoT để giám sát tình trạng máy móc, tối ưu hóa OEE và hiện thực hóa bảo trì dự đoán trên toàn nhà máy.',
      enChallenge: 'Unplanned downtime and lack of visibility into machine performance impacting overall efficiency.',
      viChallenge: 'Thời gian ngừng máy ngoài kế hoạch và thiếu thông tin về hiệu suất thiết bị làm giảm hiệu quả tổng thể.',
      poweredBy: ['UBOARD', 'UZERO'],
      link: '/giai-phap/nha-may'
    },
    {
      id: 'retail',
      icon: 'shopping_cart',
      enLabel: 'Retail & Commerce',
      viLabel: 'Bán lẻ & Thương mại',
      enTitle: 'Retail & Commerce Solutions',
      viTitle: 'Giải pháp cho Bán lẻ & Thương mại',
      enDesc: 'Leverage customer data platforms and conversational AI to deliver personalized shopping experiences and automate support.',
      viDesc: 'Tận dụng nền tảng dữ liệu khách hàng và AI giao tiếp để mang lại trải nghiệm mua sắm cá nhân hóa và hỗ trợ tự động.',
      enChallenge: 'Fragmented customer profiles preventing personalized engagement and resulting in high support costs.',
      viChallenge: 'Hồ sơ khách hàng phân mảnh cản trở việc tương tác cá nhân hóa và dẫn đến chi phí hỗ trợ cao.',
      poweredBy: ['MINIUGATE', 'UBOARD'],
      link: '/giai-phap/ban-le'
    },
    {
      id: 'corporate',
      icon: 'domain',
      enLabel: 'Corporate Enterprise',
      viLabel: 'Doanh nghiệp tập đoàn',
      enTitle: 'Corporate Enterprise Solutions',
      viTitle: 'Giải pháp cho Doanh nghiệp tập đoàn',
      enDesc: 'Centralize enterprise knowledge, automate internal workflows, and manage corporate ESG goals seamlessly.',
      viDesc: 'Tập trung tri thức doanh nghiệp, tự động hóa quy trình làm việc nội bộ và quản lý mục tiêu ESG của tập đoàn một cách liền mạch.',
      enChallenge: 'Information silos and manual reporting processes hindering agility and sustainability tracking.',
      viChallenge: 'Ốc đảo thông tin và quy trình báo cáo thủ công cản trở sự linh hoạt và khả năng theo dõi phát triển bền vững.',
      poweredBy: ['UGATE', 'UZERO', 'MINIUGATE'],
      link: '/giai-phap/doanh-nghiep'
    }
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  
  const activeIndustry = industries.find(ind => ind.id === activeTab);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Solutions by Industry' : 'Giải pháp theo Ngành nghề'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? "Purpose-built configurations for your sector's unique challenges."
              : 'Các cấu hình được thiết kế chuyên biệt để giải quyết thách thức đặc thù của từng ngành.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {industries.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE]' 
                      : 'bg-transparent border border-transparent text-[#9CA3AF] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'text-[#22D3EE]' : 'text-white/40'}`}>
                    {ind.icon}
                  </span>
                  <span className="font-medium text-base">
                    {lang === 'EN' ? ind.enLabel : ind.viLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#0C1017] border border-white/5 rounded-2xl p-8 md:p-12 h-full flex flex-col relative overflow-hidden transition-all duration-500">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3EE]/5 blur-[80px] pointer-events-none rounded-full"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                {lang === 'EN' ? activeIndustry.enTitle : activeIndustry.viTitle}
              </h3>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 relative z-10">
                {lang === 'EN' ? activeIndustry.enDesc : activeIndustry.viDesc}
              </p>

              <div className="bg-[#121822] border border-white/5 rounded-xl p-6 mb-10 relative z-10">
                <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3">
                  {lang === 'EN' ? 'THE CHALLENGE' : 'THÁCH THỨC'}
                </div>
                <p className="text-white/80 font-medium">
                  {lang === 'EN' ? activeIndustry.enChallenge : activeIndustry.viChallenge}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">
                  {lang === 'EN' ? 'POWERED BY' : 'ĐƯỢC VẬN HÀNH BỞI'}
                </div>
                <div className="flex flex-wrap gap-3 mb-10">
                  {activeIndustry.poweredBy.map(product => (
                    <span 
                      key={product} 
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-wider"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                <HoverFillButton 
                  onClick={() => navigate(activeIndustry.link)}
                  className="bg-[#22D3EE] text-[#06101F] px-6 py-3 rounded-xl font-bold text-sm w-max hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  {lang === 'EN' 
                    ? `Explore ${activeIndustry.enLabel} Solutions` 
                    : `Khám phá Giải pháp ${activeIndustry.viLabel}`}
                </HoverFillButton>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
