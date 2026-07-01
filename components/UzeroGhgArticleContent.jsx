"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UzeroGhgArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Greenhouse Gas (GHG) Emissions Management' 
             : 'Quản lý phát thải khí nhà kính GHG'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Uzero helps businesses collect, calculate, and visualize greenhouse gas emissions data across Scope 1, Scope 2, and Scope 3. The platform supports centralized carbon data management, tracking key emission sources, and preparing data for ESG, audits, and sustainability reporting.'
             : 'Uzero giúp doanh nghiệp thu thập, tính toán và trực quan hóa dữ liệu phát thải khí nhà kính theo Scope 1, Scope 2 và Scope 3. Nền tảng hỗ trợ quản lý dữ liệu carbon tập trung, theo dõi nguồn phát thải chính và chuẩn bị dữ liệu cho ESG, kiểm toán và báo cáo bền vững.'}
         </p>
      </div>

      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/uzero/auto-calculate.webp" alt="GHG Emissions Management" className="w-full h-full object-cover" />
      </div>

      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Uzero support?' : 'Uzero hỗ trợ gì?'}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Measure Scope 1, 2, and 3 emissions" : "Đo lường phát thải theo Scope 1, 2 và 3",
            lang === 'EN' ? "Input data by month, activity, branch, or location" : "Nhập dữ liệu theo tháng, hoạt động, chi nhánh hoặc địa điểm",
            lang === 'EN' ? "Automatically calculate emissions from activity data" : "Tự động tính toán phát thải từ dữ liệu hoạt động",
            lang === 'EN' ? "Visualize emissions via an overview dashboard" : "Trực quan hóa phát thải bằng dashboard tổng quan",
            lang === 'EN' ? "Analyze emission hotspots by Scope and category" : "Phân tích điểm nóng phát thải theo Scope và danh mục",
            lang === 'EN' ? "Manage records, evidence documents, and reporting data" : "Quản lý hồ sơ, tài liệu chứng minh và dữ liệu báo cáo"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">co2</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      <div id="section-2" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">2.</span> {lang === 'EN' ? 'Data that can be input' : 'Dữ liệu có thể đưa vào'}
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: 'bolt', text: lang === 'EN' ? 'Electricity consumption' : 'Điện năng tiêu thụ' },
            { icon: 'local_gas_station', text: lang === 'EN' ? 'Fuels like gasoline, oil, LPG, or diesel' : 'Nhiên liệu như xăng, dầu, LPG hoặc diesel' },
            { icon: 'local_shipping', text: lang === 'EN' ? 'Transportation data and travel distances' : 'Dữ liệu vận chuyển và quãng đường di chuyển' },
            { icon: 'factory', text: lang === 'EN' ? 'Production, factory, or branch data' : 'Dữ liệu sản xuất, nhà máy hoặc chi nhánh' },
            { icon: 'inventory_2', text: lang === 'EN' ? 'Raw materials, purchasing, or supplier data' : 'Dữ liệu nguyên vật liệu, mua hàng hoặc nhà cung cấp' },
            { icon: 'description', text: lang === 'EN' ? 'Excel files, internal forms, or data from other systems' : 'File Excel, biểu mẫu nội bộ hoặc dữ liệu từ hệ thống khác' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Dashboard Display' : 'Dashboard hiển thị'}
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: 'calendar_month', text: lang === 'EN' ? 'Total emissions by period' : 'Tổng phát thải theo giai đoạn' },
            { icon: 'pie_chart', text: lang === 'EN' ? 'Emissions by Scope 1, 2, and 3' : 'Phát thải theo Scope 1, 2 và 3' },
            { icon: 'location_on', text: lang === 'EN' ? 'Emissions by branch, region, or location' : 'Phát thải theo chi nhánh, khu vực hoặc địa điểm' },
            { icon: 'category', text: lang === 'EN' ? 'Emissions by activity category' : 'Phát thải theo danh mục hoạt động' },
            { icon: 'trending_up', text: lang === 'EN' ? 'Emission trends by month or year' : 'Xu hướng phát thải theo tháng hoặc năm' },
            { icon: 'warning', text: lang === 'EN' ? 'High-emission sources to prioritize' : 'Các nguồn phát thải cao cần ưu tiên theo dõi' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Output Reports' : 'Báo cáo đầu ra'}
        </h2>
        <ul className="space-y-3 mb-6 pl-2 bg-[#111827] border border-white/10 rounded-2xl p-6">
          {[
            lang === 'EN' ? "Emission reports by Scope" : "Báo cáo phát thải theo Scope",
            lang === 'EN' ? "Emission reports by branch or location" : "Báo cáo phát thải theo chi nhánh hoặc địa điểm",
            lang === 'EN' ? "Emission reports by activity" : "Báo cáo phát thải theo hoạt động",
            lang === 'EN' ? "Environmental metrics reports" : "Báo cáo chỉ số môi trường",
            lang === 'EN' ? "Data for ESG, audits, and sustainability reporting" : "Dữ liệu phục vụ ESG, kiểm toán và báo cáo bền vững"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-0.5 shrink-0">analytics</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Operational Value' : 'Giá trị mang lại'}
        </h2>
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">eco</span>
          <p className="text-lg md:text-xl text-white font-medium relative z-10 leading-relaxed px-4 text-center">
             {lang === 'EN'
               ? "Uzero helps businesses reduce reliance on fragmented spreadsheets, standardize emission data, and clearly identify key emission sources. From there, businesses have a better foundation to manage carbon, prepare ESG reports, and build a phased emission reduction roadmap."
               : "Uzero giúp doanh nghiệp giảm phụ thuộc vào bảng tính rời rạc, chuẩn hóa dữ liệu phát thải và nhìn rõ nguồn phát thải chính. Từ đó, doanh nghiệp có cơ sở tốt hơn để quản trị carbon, chuẩn bị báo cáo ESG và xây dựng lộ trình giảm phát thải theo từng giai đoạn."}
          </p>
        </div>
      </div>

      <div id="section-6" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">6.</span> {lang === 'EN' ? 'Suitable For' : 'Phù hợp với'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'factory', text: lang === 'EN' ? 'Manufacturing enterprises' : 'Doanh nghiệp sản xuất' },
            { icon: 'flight_takeoff', text: lang === 'EN' ? 'Exporting enterprises' : 'Doanh nghiệp xuất khẩu' },
            { icon: 'corporate_fare', text: lang === 'EN' ? 'Corporations with multiple branches or factories' : 'Tập đoàn có nhiều chi nhánh hoặc nhà máy' },
            { icon: 'groups', text: lang === 'EN' ? 'ESG, operations, finance, and sustainability teams' : 'Đội ESG, vận hành, tài chính và phát triển bền vững' },
            { icon: 'calculate', text: lang === 'EN' ? 'Businesses needing to calculate Scope 1, 2, 3' : 'Doanh nghiệp cần tính toán Scope 1, 2, 3' }
          ].map((item, i) => (
            <div key={i} className="bg-[#0A0E14] border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-[#22D3EE]/50 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#22D3EE] text-[24px]">{item.icon}</span>
               </div>
               <span className="text-white/90 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
