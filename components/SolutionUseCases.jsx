"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionUseCases() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200", // Factory
    "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=1200", // Logistics
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", // ESG
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"  // Knowledge
  ];

  const useCases = [
    {
      tags: ['UGATE', 'UBOARD'],
      enTitle: 'Real-time Factory Operations',
      viTitle: 'Vận hành nhà máy theo thời gian thực',
      enChallenge: 'Factories struggle to simultaneously track equipment, production line, energy, and performance data. Many reports are still compiled manually, preventing management from having a timely view when issues arise.',
      viChallenge: 'Nhà máy khó theo dõi đồng thời dữ liệu thiết bị, dây chuyền, năng lượng và hiệu suất sản xuất. Nhiều báo cáo vẫn được tổng hợp thủ công nên ban quản lý không có góc nhìn kịp thời khi vấn đề phát sinh.',
      enSolution: 'UBOARD connects field data and displays it on real-time dashboards. UGATE unifies operational data with internal systems to create a comprehensive view for factory management and leadership.',
      viSolution: 'UBOARD kết nối dữ liệu hiện trường và hiển thị trên dashboard realtime. UGATE hợp nhất dữ liệu vận hành với các hệ thống nội bộ để tạo góc nhìn tổng thể cho quản lý nhà máy và ban lãnh đạo.',
      enImpact: 'Factories can detect anomalies earlier, track performance more clearly, and make operational decisions based on data rather than disjointed reports.',
      viImpact: 'Nhà máy có khả năng phát hiện bất thường sớm hơn, theo dõi hiệu suất rõ hơn và đưa ra quyết định vận hành dựa trên dữ liệu thay vì báo cáo rời rạc.'
    },
    {
      tags: ['UGATE', 'UBOARD'],
      enTitle: 'Smart Warehouse and Logistics Management',
      viTitle: 'Quản lý kho vận và luồng hàng thông minh',
      enChallenge: 'Inventory, import/export, cargo flow, and operational status data often reside in multiple different tools. This makes it difficult for businesses to accurately assess inventory readiness and warehouse efficiency.',
      viChallenge: 'Dữ liệu tồn kho, nhập xuất, luồng hàng và trạng thái vận hành thường nằm ở nhiều công cụ khác nhau. Điều này khiến doanh nghiệp khó đánh giá chính xác mức độ sẵn sàng của hàng hóa và hiệu quả kho vận.',
      enSolution: 'UGATE connects warehouse, inventory, operations, and financial data to create a unified picture. UBOARD supports tracking critical operational points in warehouse areas or logistics centers.',
      viSolution: 'UGATE kết nối dữ liệu từ kho, tồn kho, vận hành và tài chính để tạo bức tranh thống nhất. UBOARD hỗ trợ theo dõi các điểm vận hành quan trọng trong khu vực kho hoặc trung tâm logistics.',
      enImpact: 'Businesses can improve workflow visibility, reduce reliance on manual reporting, and detect bottlenecks early in warehouse operations.',
      viImpact: 'Doanh nghiệp có thể cải thiện khả năng quan sát luồng hàng, giảm phụ thuộc vào báo cáo thủ công và phát hiện sớm các điểm nghẽn trong vận hành kho vận.'
    },
    {
      tags: ['UZERO', 'UGATE'],
      enTitle: 'Carbon Management and ESG Data',
      viTitle: 'Quản trị carbon và dữ liệu ESG',
      enChallenge: 'Emissions data is often scattered across energy bills, production reports, transport, branch data, and internal files. Without a unified data platform, businesses struggle to prepare ESG and audit reports efficiently.',
      viChallenge: 'Dữ liệu phát thải thường nằm rải rác trong hóa đơn năng lượng, báo cáo sản xuất, vận tải, dữ liệu chi nhánh và file nội bộ. Nếu thiếu một nền tảng dữ liệu thống nhất, doanh nghiệp khó chuẩn bị báo cáo ESG và audit một cách hiệu quả.',
      enSolution: 'UZERO helps collect, standardize, calculate, and track emissions data. UGATE connects relevant operational data to help businesses better understand the relationship between performance, energy, costs, and emissions.',
      viSolution: 'UZERO hỗ trợ thu thập, chuẩn hóa, tính toán và theo dõi dữ liệu phát thải. UGATE kết nối dữ liệu vận hành liên quan để giúp doanh nghiệp hiểu rõ hơn mối liên hệ giữa hiệu suất, năng lượng, chi phí và phát thải.',
      enImpact: 'Enterprises gain a clearer data foundation for ESG, carbon, sustainability reporting, and transparency requirements from international customers or partners.',
      viImpact: 'Doanh nghiệp có nền tảng dữ liệu rõ ràng hơn cho ESG, carbon, báo cáo bền vững và các yêu cầu minh bạch từ khách hàng hoặc đối tác quốc tế.'
    },
    {
      tags: ['MINIUGATE', 'UGATE'],
      enTitle: 'Internal Knowledge and Customer Care',
      viTitle: 'Tri thức nội bộ và chăm sóc khách hàng',
      enChallenge: 'Operational knowledge, technical documents, troubleshooting procedures, and customer data are often scattered. Staff spend too much time searching for information or handling repetitive questions.',
      viChallenge: 'Tri thức vận hành, tài liệu kỹ thuật, quy trình xử lý sự cố và dữ liệu khách hàng thường phân tán ở nhiều nơi. Nhân sự mất nhiều thời gian để tra cứu thông tin hoặc xử lý các câu hỏi lặp lại.',
      enSolution: 'MINIUGATE supports knowledge querying and automates responses using AI. UGATE connects internal data sources to help organize, retrieve, and utilize information more effectively.',
      viSolution: 'MINIUGATE hỗ trợ truy vấn tri thức và tự động hóa phản hồi bằng AI. UGATE kết nối các nguồn dữ liệu nội bộ để giúp thông tin được tổ chức, truy xuất và sử dụng hiệu quả hơn.',
      enImpact: 'Businesses can shorten information search times, improve internal collaboration, and enhance customer experience.',
      viImpact: 'Doanh nghiệp có thể rút ngắn thời gian tìm kiếm thông tin, cải thiện khả năng phối hợp nội bộ và nâng cao trải nghiệm khách hàng.'
    }
  ];

  const activeCase = useCases[activeTab];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Practical Use Cases' : 'Ứng dụng thực tế'}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-4xl mx-auto">
            {lang === 'EN' 
              ? 'The practical use cases below demonstrate how Udata helps enterprises connect data, optimize operations, and build a sustainable development foundation using AIoT.'
              : 'Các tình huống ứng dụng dưới đây cho thấy cách Udata giúp doanh nghiệp kết nối dữ liệu, tối ưu vận hành và xây dựng nền tảng phát triển bền vững bằng AIoT.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            {useCases.map((useCase, index) => {
              const isActive = activeTab === index;
              return (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 flex flex-col justify-center text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#22D3EE]/10 border-[#22D3EE]/50 shadow-[0_0_30px_rgba(34,211,238,0.1)]' 
                      : 'bg-[#0C1017] border-white/5 hover:bg-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {useCase.tags.map(tag => {
                      let tagColor = "";
                      switch (tag.toLowerCase()) {
                        case 'uboard': 
                          tagColor = isActive ? 'bg-[#22D3EE]/20 text-[#22D3EE]' : 'bg-[#22D3EE]/10 text-[#22D3EE]/60'; 
                          break;
                        case 'ugate':
                        case 'miniugate': 
                          tagColor = isActive ? 'bg-[#3B82F6]/20 text-[#3B82F6]' : 'bg-[#3B82F6]/10 text-[#3B82F6]/60'; 
                          break;
                        case 'uzero': 
                          tagColor = isActive ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#10B981]/10 text-[#10B981]/60'; 
                          break;
                        default: 
                          tagColor = isActive ? 'bg-[#22D3EE]/20 text-[#22D3EE]' : 'bg-white/10 text-white/60';
                      }
                      return (
                        <span 
                          key={tag} 
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${tagColor}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold ${isActive ? 'text-[#22D3EE]' : 'text-white'}`}>
                    {lang === 'EN' ? useCase.enTitle : useCase.viTitle}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 bg-[#0C1017] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="h-64 md:h-80 w-full relative">
              <img 
                src={images[activeTab]} 
                alt={lang === 'EN' ? activeCase.enTitle : activeCase.viTitle} 
                className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017] to-transparent"></div>
            </div>

            <div className="p-8 md:p-12 relative z-10 -mt-16 bg-[#0C1017]">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 drop-shadow-md">
                {lang === 'EN' ? activeCase.enTitle : activeCase.viTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                  <div className="absolute -top-4 left-6 bg-[#0C1017] px-2 text-[11px] text-white/50 font-bold uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">report_problem</span>
                    {lang === 'EN' ? 'Challenge' : 'Thách thức'}
                  </div>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mt-2">
                    {lang === 'EN' ? activeCase.enChallenge : activeCase.viChallenge}
                  </p>
                </div>

                <div className="bg-[#22D3EE]/5 border border-[#22D3EE]/20 rounded-2xl p-6 relative">
                  <div className="absolute -top-4 left-6 bg-[#0C1017] px-2 text-[11px] text-[#22D3EE] font-bold uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                    {lang === 'EN' ? 'Solution' : 'Giải pháp'}
                  </div>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed mt-2">
                    {lang === 'EN' ? activeCase.enSolution : activeCase.viSolution}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#22D3EE]/10 to-transparent border-l-4 border-[#22D3EE] rounded-r-2xl p-6">
                <div className="text-[11px] text-[#22D3EE] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {lang === 'EN' ? 'Business Impact' : 'Tác động kinh doanh'}
                </div>
                <p className="text-white text-base font-medium leading-relaxed">
                  {lang === 'EN' ? activeCase.enImpact : activeCase.viImpact}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

