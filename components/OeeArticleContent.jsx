"use client";
import React from 'react';
import HoverFillButton from './ui/HoverFillButton';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OeeArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Overall Equipment Effectiveness (OEE)' 
             : 'Quản lý hiệu suất và bảo dưỡng máy (OEE)'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Uboard helps factories track equipment performance, downtime, and maintenance status on a centralized operational data platform. From real-time collected data, businesses can detect anomalies early and optimize operational plans.'
             : 'Uboard giúp nhà máy theo dõi hiệu suất thiết bị, thời gian dừng máy và tình trạng bảo trì trên một nền tảng dữ liệu vận hành tập trung. Từ dữ liệu thu thập theo thời gian thực, doanh nghiệp có thể phát hiện sớm bất thường và tối ưu kế hoạch vận hành.'}
         </p>
      </div>



      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Factory" className="w-full h-full object-cover" />
      </div>

      {/* Bài toán thực tế */}
      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'Real-world Challenges' : 'Bài toán thực tế'}
        </h2>
        <p className="mb-4">
          {lang === 'EN' 
            ? 'Many factories still monitor equipment performance using fragmented reports, making it difficult to see the root cause of downtime, slow to detect performance degradation, and lacking data to coordinate between production and maintenance.'
            : 'Nhiều nhà máy vẫn theo dõi hiệu suất thiết bị bằng báo cáo rời rạc, khó nhìn thấy nguyên nhân dừng máy, chậm phát hiện suy giảm hiệu suất và thiếu dữ liệu để phối hợp giữa sản xuất với bảo trì.'}
        </p>
      </div>

      {/* Uboard hỗ trợ như thế nào? */}
      <div id="section-2" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">2.</span> {lang === 'EN' ? 'How does Uboard help?' : 'Uboard hỗ trợ như thế nào?'}
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            lang === 'EN' ? "Connect data from existing machinery, sensors, and systems" : "Kết nối dữ liệu từ máy móc, cảm biến và hệ thống hiện có",
            lang === 'EN' ? "Track OEE by machine, shift, and production line" : "Theo dõi OEE theo máy, ca và dây chuyền",
            lang === 'EN' ? "Record downtime and its root causes" : "Ghi nhận thời gian dừng máy và nguyên nhân phát sinh",
            lang === 'EN' ? "Manage maintenance history and upcoming maintenance alerts" : "Quản lý lịch sử bảo trì và cảnh báo bảo dưỡng sắp đến hạn"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">check_circle</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
           <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img src="/image/Ugate/fixing.webp" alt="Fixing" className="w-full h-full object-cover" />
           </div>
           <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img src="/image/Ugate/resources-management.webp" alt="Resources" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Dữ liệu có thể kết nối */}
      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Connectable Data' : 'Dữ liệu có thể kết nối'}
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: 'memory', text: 'PLC/SCADA' },
            { icon: 'sensors', text: lang === 'EN' ? 'Machine Sensors' : 'Cảm biến máy' },
            { icon: 'dataset', text: 'MES/ERP' },
            { icon: 'description', text: lang === 'EN' ? 'Operating Forms' : 'Biểu mẫu vận hành' },
            { icon: 'bolt', text: lang === 'EN' ? 'Device Power' : 'Điện năng thiết bị' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Giá trị & Phù hợp với */}
      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Value & Suitability' : 'Giá trị mang lại & Phù hợp với ai'}
        </h2>
        <p className="mb-6">
           {lang === 'EN'
             ? 'Uboard helps operation teams clearly see actual performance, reduce reliance on manual reports, and create a unified database to improve productivity, reduce downtime, and coordinate more effectively across departments.'
             : 'Uboard giúp đội vận hành nhìn rõ hiệu suất thực tế, giảm phụ thuộc vào báo cáo thủ công và tạo cơ sở dữ liệu thống nhất để cải thiện năng suất, giảm thời gian dừng máy và phối hợp hiệu quả hơn giữa các bộ phận.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Suitable for:' : 'Phù hợp với:'}</h3>
        <ul className="space-y-3 mb-6">
          {[
            lang === 'EN' ? "Factories with multiple production lines or teams" : "Nhà máy có nhiều dây chuyền hoặc nhiều tổ sản xuất",
            lang === 'EN' ? "Operation and maintenance teams needing centralized equipment monitoring" : "Đội vận hành và bảo trì cần theo dõi thiết bị tập trung",
            lang === 'EN' ? "Enterprises aiming to standardize operational data to optimize efficiency" : "Doanh nghiệp muốn chuẩn hóa dữ liệu vận hành để tối ưu hiệu suất"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">check_circle</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      {/* Trọng tâm theo dõi */}
      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Tracking Focus' : 'Trọng tâm theo dõi'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'monitoring', text: lang === 'EN' ? 'Real-time OEE' : 'OEE theo thời gian thực' },
            { icon: 'precision_manufacturing', text: lang === 'EN' ? 'Machine running/stopped status' : 'Trạng thái máy đang chạy hoặc dừng' },
            { icon: 'notifications_active', text: lang === 'EN' ? 'Anomaly alerts' : 'Cảnh báo bất thường' },
            { icon: 'history', text: lang === 'EN' ? 'Equipment maintenance history' : 'Lịch sử bảo trì thiết bị' }
          ].map((item, i) => (
            <div key={i} className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:border-[#22D3EE]/50 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#22D3EE] text-[24px]">{item.icon}</span>
               </div>
               <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
