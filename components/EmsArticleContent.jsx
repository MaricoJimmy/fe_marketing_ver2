"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EmsArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Intelligent Energy Management (EMS)' 
             : 'Quản lý năng lượng thông minh EMS'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Uboard helps businesses track consumption data of electricity, water, compressed air, heat, fuel and other critical resources. The EMS module detects abnormal consumption points, controls energy costs, and manages resources proactively.'
             : 'Uboard giúp doanh nghiệp theo dõi dữ liệu tiêu thụ điện, nước, khí nén, nhiệt, nhiên liệu và các nguồn tài nguyên quan trọng trong vận hành. Module EMS hỗ trợ phát hiện điểm tiêu thụ bất thường, kiểm soát chi phí năng lượng và quản lý tài nguyên chủ động hơn.'}
         </p>
      </div>



      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/uboard/Uboard-4.webp" alt="Energy Management" className="w-full h-full object-cover" />
      </div>

      {/* Uboard giám sát những gì? */}
      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Uboard monitor?' : 'Uboard giám sát những gì?'}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Total energy consumption" : "Tổng tiêu thụ năng lượng",
            lang === 'EN' ? "Consumption by area, line or device" : "Tiêu thụ theo khu vực, dây chuyền hoặc thiết bị",
            lang === 'EN' ? "Peak power and high consumption periods" : "Công suất đỉnh và khung giờ tiêu thụ cao",
            lang === 'EN' ? "Electricity, water, compressed air, heat, fuel data" : "Dữ liệu điện, nước, khí nén, nhiệt hoặc nhiên liệu",
            lang === 'EN' ? "Consumption per unit of production" : "Mức tiêu thụ theo sản lượng",
            lang === 'EN' ? "Threshold or anomaly alerts" : "Cảnh báo vượt ngưỡng hoặc bất thường"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">bolt</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      {/* Dashboard hiển thị */}
      <div id="section-2" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">2.</span> {lang === 'EN' ? 'Dashboard Display' : 'Dashboard hiển thị'}
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: 'timeline', text: lang === 'EN' ? 'Time-based consumption chart' : 'Biểu đồ tiêu thụ theo thời gian' },
            { icon: 'compare_arrows', text: lang === 'EN' ? 'Area consumption comparison' : 'So sánh tiêu thụ giữa các khu vực' },
            { icon: 'ssid_chart', text: lang === 'EN' ? 'Peak power' : 'Công suất đỉnh' },
            { icon: 'payments', text: lang === 'EN' ? 'Period-based energy cost' : 'Chi phí năng lượng theo giai đoạn' },
            { icon: 'query_stats', text: lang === 'EN' ? 'Energy per production unit' : 'Năng lượng tiêu thụ trên một đơn vị sản lượng' },
            { icon: 'warning', text: lang === 'EN' ? 'Energy alert list' : 'Danh sách cảnh báo năng lượng' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cảnh báo và báo cáo */}
      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Alerts and Reports' : 'Cảnh báo và báo cáo'}
        </h2>
        <p className="mb-6">
          {lang === 'EN' 
            ? 'Uboard can alert when consumption exceeds thresholds, power spikes, abnormal device consumption, or interrupted measurement data.'
            : 'Uboard có thể cảnh báo khi mức tiêu thụ vượt ngưỡng, công suất tăng đột biến, thiết bị tiêu thụ bất thường hoặc dữ liệu đo đếm bị gián đoạn.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Reports can include:' : 'Báo cáo có thể gồm:'}</h3>
        <ul className="space-y-3 mb-6 pl-2">
          {[
            lang === 'EN' ? "Energy consumption report" : "Báo cáo tiêu thụ năng lượng",
            lang === 'EN' ? "Peak power report" : "Báo cáo công suất đỉnh",
            lang === 'EN' ? "Energy cost report" : "Báo cáo chi phí năng lượng",
            lang === 'EN' ? "Consumption by area report" : "Báo cáo tiêu thụ theo khu vực",
            lang === 'EN' ? "Anomaly alert report" : "Báo cáo cảnh báo bất thường"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">summarize</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
         <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img src="/image/uzero/param-display.webp" alt="Energy Dashboard" className="w-full h-full object-cover" />
         </div>
         <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img src="/image/uzero/auto-calculate.webp" alt="Data Analytics" className="w-full h-full object-cover" />
         </div>
      </div>

      {/* Giá trị vận hành */}
      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Operational Value' : 'Giá trị vận hành'}
        </h2>
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">lightbulb</span>
          <p className="text-lg md:text-xl text-white font-medium relative z-10 leading-relaxed px-4 text-center">
             {lang === 'EN'
               ? "The EMS module helps businesses clearly see how energy is being used in daily operations. From there, the operation team has the basis to detect waste, control costs, and optimize resource utilization efficiency."
               : "Module EMS giúp doanh nghiệp nhìn rõ cách năng lượng đang được sử dụng trong vận hành hằng ngày. Từ đó, đội vận hành có cơ sở để phát hiện lãng phí, kiểm soát chi phí và tối ưu hiệu quả sử dụng tài nguyên."}
          </p>
        </div>
      </div>

      {/* Phù hợp với */}
      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Suitable For' : 'Phù hợp với'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'factory', text: lang === 'EN' ? 'Manufacturing factories' : 'Nhà máy sản xuất' },
            { icon: 'domain', text: lang === 'EN' ? 'Buildings & industrial zones' : 'Tòa nhà và khu công nghiệp' },
            { icon: 'engineering', text: lang === 'EN' ? 'Tech, energy & ops teams' : 'Đội kỹ thuật, năng lượng và vận hành' },
            { icon: 'savings', text: lang === 'EN' ? 'Cost-conscious enterprises' : 'Doanh nghiệp cần quản lý chi phí năng lượng bằng dữ liệu' }
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
