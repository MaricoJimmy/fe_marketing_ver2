"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionUseCases() {
  const { lang } = useLanguage();

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
      enTitle: 'Internal Knowledge and Customer Care Automation',
      viTitle: 'Tự động hóa tri thức nội bộ và chăm sóc khách hàng',
      enChallenge: 'Operational knowledge, technical documents, troubleshooting procedures, and customer data are often scattered. Staff spend too much time searching for information or handling repetitive questions.',
      viChallenge: 'Tri thức vận hành, tài liệu kỹ thuật, quy trình xử lý sự cố và dữ liệu khách hàng thường phân tán ở nhiều nơi. Nhân sự mất nhiều thời gian để tra cứu thông tin hoặc xử lý các câu hỏi lặp lại.',
      enSolution: 'MINIUGATE supports knowledge querying and automates responses using AI. UGATE connects internal data sources to help organize, retrieve, and utilize information more effectively.',
      viSolution: 'MINIUGATE hỗ trợ truy vấn tri thức và tự động hóa phản hồi bằng AI. UGATE kết nối các nguồn dữ liệu nội bộ để giúp thông tin được tổ chức, truy xuất và sử dụng hiệu quả hơn.',
      enImpact: 'Businesses can shorten information search times, improve internal collaboration, and enhance customer experience.',
      viImpact: 'Doanh nghiệp có thể rút ngắn thời gian tìm kiếm thông tin, cải thiện khả năng phối hợp nội bộ và nâng cao trải nghiệm khách hàng.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-[#0C1017] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] flex flex-col h-full"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {useCase.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 rounded-md bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#22D3EE] mb-8">
                {lang === 'EN' ? useCase.enTitle : useCase.viTitle}
              </h3>

              <div className="mb-6">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'CHALLENGE' : 'THÁCH THỨC'}
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {lang === 'EN' ? useCase.enChallenge : useCase.viChallenge}
                </p>
              </div>

              <div className="mb-8 flex-1">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'SOLUTION' : 'GIẢI PHÁP'}
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {lang === 'EN' ? useCase.enSolution : useCase.viSolution}
                </p>
              </div>

              <div className="bg-[#22D3EE]/5 border border-[#22D3EE]/10 rounded-xl p-5 mt-auto">
                <div className="text-[10px] text-[#22D3EE] font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'BUSINESS IMPACT' : 'TÁC ĐỘNG KINH DOANH'}
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {lang === 'EN' ? useCase.enImpact : useCase.viImpact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

