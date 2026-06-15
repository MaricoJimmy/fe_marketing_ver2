"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ElevatorArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Elevator and Machine Operation Monitoring' 
             : 'Giám sát thang máy và vận hành máy móc'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Uboard helps track operating status, error alerts, downtime, maintenance history, and connection status of elevators, machinery, or infrastructure equipment on a centralized dashboard.'
             : 'Uboard giúp theo dõi trạng thái hoạt động, cảnh báo lỗi, thời gian dừng, lịch sử bảo trì và tình trạng kết nối của thang máy, máy móc hoặc thiết bị hạ tầng trên một dashboard tập trung.'}
         </p>
      </div>



      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/uboard/Uboard-2.webp" alt="Elevator and Machinery" className="w-full h-full object-cover" />
      </div>

      {/* Uboard giám sát những gì? */}
      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Uboard monitor?' : 'Uboard giám sát những gì?'}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Device operating status" : "Trạng thái hoạt động của thiết bị",
            lang === 'EN' ? "Devices running, stopped, or errored" : "Thiết bị đang chạy, dừng hoặc lỗi",
            lang === 'EN' ? "Anomaly alerts" : "Cảnh báo bất thường",
            lang === 'EN' ? "Operating time and downtime" : "Thời gian vận hành và thời gian dừng",
            lang === 'EN' ? "Error frequency by device" : "Tần suất lỗi theo thiết bị",
            lang === 'EN' ? "Device location, code, or serial number" : "Vị trí thiết bị, mã thiết bị hoặc mã serial",
            lang === 'EN' ? "Maintenance and inspection history" : "Lịch sử bảo trì và kiểm tra định kỳ",
            lang === 'EN' ? "Data connection status" : "Trạng thái kết nối dữ liệu"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">elevator</span>
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
            { icon: 'list_alt', text: lang === 'EN' ? 'Device list by area' : 'Danh sách thiết bị theo khu vực' },
            { icon: 'build', text: lang === 'EN' ? 'Devices with errors or needing inspection' : 'Thiết bị đang lỗi hoặc cần kiểm tra' },
            { icon: 'notification_important', text: lang === 'EN' ? 'Number of open alerts' : 'Số cảnh báo đang mở' },
            { icon: 'warning', text: lang === 'EN' ? 'Devices with high error frequency' : 'Thiết bị có tần suất lỗi cao' },
            { icon: 'event', text: lang === 'EN' ? 'Upcoming maintenance schedule' : 'Lịch bảo trì sắp đến hạn' },
            { icon: 'history', text: lang === 'EN' ? 'Troubleshooting history' : 'Lịch sử xử lý sự cố' },
            { icon: 'map', text: lang === 'EN' ? 'Device status map by floor/area' : 'Bản đồ trạng thái thiết bị theo tầng, khu vực hoặc nhà máy' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
         <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img src="/image/Ugate/fixing.webp" alt="Maintenance" className="w-full h-full object-cover" />
         </div>
         <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img src="/image/Ugate/resources-management.webp" alt="Management" className="w-full h-full object-cover" />
         </div>
      </div>

      {/* Cảnh báo và báo cáo */}
      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Alerts and Reports' : 'Cảnh báo và báo cáo'}
        </h2>
        <p className="mb-6">
          {lang === 'EN' 
            ? 'Uboard can alert when a device stops abnormally, repeated errors occur, operating thresholds are exceeded, data connection is lost, or inspection is due.'
            : 'Uboard có thể cảnh báo khi thiết bị dừng bất thường, phát sinh lỗi lặp lại, vượt ngưỡng vận hành, mất kết nối dữ liệu hoặc đến hạn kiểm tra.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Reports can include:' : 'Báo cáo có thể gồm:'}</h3>
        <ul className="space-y-3 mb-6 pl-2">
          {[
            lang === 'EN' ? "Device status report" : "Báo cáo trạng thái thiết bị",
            lang === 'EN' ? "Error report by area" : "Báo cáo lỗi theo khu vực",
            lang === 'EN' ? "Device downtime report" : "Báo cáo thời gian dừng thiết bị",
            lang === 'EN' ? "Maintenance history report" : "Báo cáo lịch sử bảo trì",
            lang === 'EN' ? "High-risk device report" : "Báo cáo thiết bị có rủi ro cao",
            lang === 'EN' ? "Alert handling efficiency report" : "Báo cáo hiệu quả xử lý cảnh báo"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">summarize</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
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
               ? "This module helps the technical team shift from passive inspection to more proactive monitoring. When device data is centralized, businesses can detect anomalies earlier, retrieve history faster, and manage maintenance more consistently."
               : "Module này giúp đội kỹ thuật chuyển từ kiểm tra bị động sang giám sát chủ động hơn. Khi dữ liệu thiết bị được tập trung, doanh nghiệp có thể phát hiện bất thường sớm hơn, truy xuất lịch sử nhanh hơn và quản lý bảo trì nhất quán hơn."}
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
            { icon: 'domain', text: lang === 'EN' ? 'Buildings with multiple elevators' : 'Tòa nhà có nhiều thang máy' },
            { icon: 'precision_manufacturing', text: lang === 'EN' ? 'Factories with numerous operating machines' : 'Nhà máy có nhiều máy móc vận hành' },
            { icon: 'corporate_fare', text: lang === 'EN' ? 'Industrial parks, commercial centers, or large infrastructure' : 'Khu công nghiệp, trung tâm thương mại hoặc cơ sở hạ tầng lớn' },
            { icon: 'engineering', text: lang === 'EN' ? 'Technical, maintenance, and asset management teams' : 'Đội kỹ thuật, bảo trì và quản lý tài sản' }
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
