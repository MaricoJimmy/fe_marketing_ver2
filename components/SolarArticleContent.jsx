"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolarArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Solar Rooftop Operation Monitoring' 
             : 'Giám sát vận hành điện mặt trời mái nhà'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Uboard supports monitoring and controlling rooftop solar systems through Udata Gateway and Udata Cloud. This module tracks power output, energy production, inverter status, meter data, device alerts, and solar operation reports.'
             : 'Uboard hỗ trợ giám sát và điều khiển hệ điện mặt trời mái nhà thông qua Udata Gateway và Udata Cloud. Module này giúp theo dõi công suất phát, sản lượng điện, trạng thái inverter, dữ liệu công tơ, cảnh báo thiết bị và báo cáo vận hành hệ solar.'}
         </p>
      </div>



      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/uboard/Uboard-1.webp" alt="Solar Rooftop" className="w-full h-full object-cover" />
      </div>

      {/* Uboard giám sát những gì? */}
      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Uboard monitor?' : 'Uboard giám sát những gì?'}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Real-time power output" : "Công suất phát realtime",
            lang === 'EN' ? "Energy production by day, month, or period" : "Sản lượng điện theo ngày, tháng hoặc giai đoạn",
            lang === 'EN' ? "Inverter status" : "Trạng thái inverter",
            lang === 'EN' ? "POI Meter and EVN Meter data (if any)" : "Dữ liệu POI Meter và EVN Meter nếu có",
            lang === 'EN' ? "Load consumption" : "Phụ tải tiêu thụ",
            lang === 'EN' ? "Gateway connection status" : "Trạng thái kết nối gateway",
            lang === 'EN' ? "Device error alerts" : "Cảnh báo lỗi thiết bị",
            lang === 'EN' ? "Revenue and loss data (if any)" : "Dữ liệu doanh thu và tổn thất nếu có"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">solar_power</span>
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
            { icon: 'speed', text: lang === 'EN' ? 'Current total power output' : 'Tổng công suất phát hiện tại' },
            { icon: 'timeline', text: lang === 'EN' ? 'Energy production over time' : 'Sản lượng điện theo thời gian' },
            { icon: 'bolt', text: lang === 'EN' ? 'Status of each inverter' : 'Trạng thái từng inverter' },
            { icon: 'electric_meter', text: lang === 'EN' ? 'Meter and load data' : 'Dữ liệu công tơ và phụ tải' },
            { icon: 'warning', text: lang === 'EN' ? 'Error or disconnection alerts' : 'Cảnh báo lỗi hoặc mất kết nối' },
            { icon: 'trending_up', text: lang === 'EN' ? 'Consumption and production trends' : 'Xu hướng tiêu thụ và sản lượng điện' },
            { icon: 'assessment', text: lang === 'EN' ? 'KPI reports by plant, area, or device' : 'Báo cáo KPI theo nhà máy, khu vực hoặc thiết bị' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Kết nối và điều khiển */}
      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Connection and Control' : 'Kết nối và điều khiển'}
        </h2>
        <p className="mb-4">
          {lang === 'EN'
            ? 'Udata Gateway collects data from inverters, meters, dataloggers, and devices at the rooftop solar system. Data can be transmitted to Udata Cloud or project-specific supervisory control systems.'
            : 'Udata Gateway thu thập dữ liệu từ inverter, meter, datalogger và các thiết bị tại hệ điện mặt trời mái nhà. Dữ liệu có thể được truyền về Udata Cloud hoặc hệ thống giám sát điều khiển theo mô hình dự án.'}
        </p>
        <p className="mb-6">
          {lang === 'EN'
            ? 'For projects requiring connection per power industry standards, the solution supports secure data transmission via VPN and industrial protocols such as IEC 60870-5-104, Modbus TCP, MQTT, OPC UA, and related protocols.'
            : 'Với các dự án cần kết nối theo yêu cầu ngành điện, giải pháp hỗ trợ mô hình truyền dữ liệu bảo mật qua VPN và các giao thức công nghiệp như IEC 60870-5-104, Modbus TCP, MQTT, OPC UA và các giao thức liên quan.'}
        </p>
      </div>

      {/* Cảnh báo và báo cáo */}
      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Alerts and Reports' : 'Cảnh báo và báo cáo'}
        </h2>
        <p className="mb-6">
          {lang === 'EN' 
            ? 'Uboard can alert when an inverter fails, gateway connection is lost, production drops abnormally, or data transmission is unstable.'
            : 'Uboard có thể cảnh báo khi inverter lỗi, mất kết nối gateway, sản lượng giảm bất thường hoặc dữ liệu truyền nhận không ổn định.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Reports can include:' : 'Báo cáo có thể gồm:'}</h3>
        <ul className="space-y-3 mb-6 pl-2">
          {[
            lang === 'EN' ? "Energy production report" : "Báo cáo sản lượng điện",
            lang === 'EN' ? "Power output report" : "Báo cáo công suất phát",
            lang === 'EN' ? "Inverter status report" : "Báo cáo trạng thái inverter",
            lang === 'EN' ? "Error alert report" : "Báo cáo cảnh báo lỗi",
            lang === 'EN' ? "Revenue and loss report (if any)" : "Báo cáo doanh thu và tổn thất nếu có",
            lang === 'EN' ? "Solar operation KPI report" : "Báo cáo KPI vận hành hệ solar"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">summarize</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      {/* Năng lực triển khai thực tế */}
      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Actual Implementation Capacity' : 'Năng lực triển khai thực tế'}
        </h2>
        <p className="mb-6">
          {lang === 'EN'
            ? 'Udata has documented testing for device connection with EVNICT and protocol compatibility verification according to Decision 378/QD-EVN. Some typical recorded rooftop solar projects:'
            : 'Udata đã có tài liệu thử nghiệm kết nối thiết bị với EVNICT và kiểm tra tương thích giao thức theo Quyết định 378/QĐ-EVN. Một số dự án điện mặt trời mái nhà tiêu biểu được ghi nhận:'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            lang === 'EN' ? "Quanta Ninh Binh Factory, 6,600 kWp" : "Nhà máy Quanta Ninh Bình, 6.600 kWp",
            lang === 'EN' ? "VNA Factory, 1,196 kWp" : "Nhà máy VNA, 1.196 kWp",
            lang === 'EN' ? "Vietory Factory, 1,403 kWp" : "Nhà máy Vietory, 1.403 kWp",
            lang === 'EN' ? "Van Duc Tien Giang Factory, 3,000 kWp" : "Nhà máy Vạn Đức Tiền Giang, 3.000 kWp",
            "Sametel, 667.46 kWp",
            lang === 'EN' ? "Coopmart Tieu Can, 200 kWp" : "Coopmart Tiểu Cần, 200 kWp",
            lang === 'EN' ? "Tien Giang Solar, 900 kWp" : "ĐMT Tiền Giang, 900 kWp",
            lang === 'EN' ? "Cholimex Factory, 952 kWp" : "Nhà máy Cholimex, 952 kWp"
          ].map((item, index) => (
             <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0A0E14] border border-white/5">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] shrink-0">check_circle</span>
                <span className="text-white/90 text-sm font-medium">{item}</span>
             </div>
          ))}
        </div>
      </div>

      {/* Giá trị vận hành */}
      <div id="section-6" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">6.</span> {lang === 'EN' ? 'Operational Value' : 'Giá trị vận hành'}
        </h2>
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">lightbulb</span>
          <p className="text-lg md:text-xl text-white font-medium relative z-10 leading-relaxed px-4 text-center">
             {lang === 'EN'
               ? "The rooftop solar module helps investors and operators monitor solar systems more centrally, detect anomalies earlier, and manage energy data more transparently."
               : "Module điện mặt trời mái nhà giúp chủ đầu tư và đơn vị vận hành theo dõi hệ solar tập trung hơn, phát hiện bất thường sớm hơn và quản lý dữ liệu năng lượng minh bạch hơn."}
          </p>
        </div>
      </div>

      {/* Phù hợp với */}
      <div id="section-7" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">7.</span> {lang === 'EN' ? 'Suitable For' : 'Phù hợp với'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'factory', text: lang === 'EN' ? 'Factories with rooftop solar systems' : 'Nhà máy có hệ điện mặt trời mái nhà' },
            { icon: 'account_balance', text: lang === 'EN' ? 'Rooftop solar investors' : 'Chủ đầu tư hệ solar rooftop' },
            { icon: 'engineering', text: lang === 'EN' ? 'EPC, O&M, or general contractors' : 'Đơn vị EPC, O&M hoặc tổng thầu' },
            { icon: 'domain', text: lang === 'EN' ? 'Industrial parks, buildings, logistics, and commercial centers' : 'Khu công nghiệp, tòa nhà, kho vận và trung tâm thương mại' }
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
