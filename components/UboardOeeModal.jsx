import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UboardOeeModal({ isOpen, onClose }) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[1200px] max-h-[95vh] bg-[#0A0D14] border border-[#1E293B] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/10"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col pr-0 lg:pr-4">
              
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4AA0F0]/10 border border-[#4AA0F0]/30 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  <span className="text-xs font-bold tracking-wide">ỨNG DỤNG UBOARD</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Quản lý hiệu suất và bảo dưỡng máy (OEE)
                </h2>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Uboard giúp nhà máy theo dõi hiệu suất thiết bị, thời gian dừng máy và tình trạng bảo trì trên một nền tảng dữ liệu vận hành tập trung. Từ dữ liệu thu thập theo thời gian thực, doanh nghiệp có thể phát hiện sớm bất thường và tối ưu kế hoạch vận hành.
                </p>
              </div>

              {/* Bài toán thực tế */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[18px]">help_outline</span>
                  <h3 className="text-lg font-bold text-white">Bài toán thực tế</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed pl-7">
                  Nhiều nhà máy vẫn theo dõi hiệu suất thiết bị bằng báo cáo rời rạc, khó nhìn thấy nguyên nhân dừng máy, chậm phát hiện suy giảm hiệu suất và thiếu dữ liệu để phối hợp giữa sản xuất với bảo trì.
                </p>
              </div>

              <div className="w-full h-px bg-white/10 mb-6"></div>

              {/* Uboard hỗ trợ như thế nào? */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[18px]">bar_chart</span>
                  <h3 className="text-lg font-bold text-white">Uboard hỗ trợ như thế nào?</h3>
                </div>
                <ul className="space-y-2.5 pl-7">
                  {[
                    "Kết nối dữ liệu từ máy móc, cảm biến và hệ thống hiện có",
                    "Theo dõi OEE theo máy, ca và dây chuyền",
                    "Ghi nhận thời gian dừng máy và nguyên nhân phát sinh",
                    "Quản lý lịch sử bảo trì và cảnh báo bảo dưỡng sắp đến hạn"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                      <span className="material-symbols-outlined text-[#4AA0F0] text-[16px] mt-0.5 shrink-0">check_circle</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dữ liệu có thể kết nối */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[18px]">link</span>
                  <h3 className="text-lg font-bold text-white">Dữ liệu có thể kết nối</h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-7">
                  {[
                    { icon: 'memory', text: 'PLC/SCADA' },
                    { icon: 'sensors', text: 'Cảm biến máy' },
                    { icon: 'dataset', text: 'MES/ERP' },
                    { icon: 'description', text: 'Biểu mẫu vận hành' },
                    { icon: 'bolt', text: 'Điện năng thiết bị' }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs">
                      <span className="material-symbols-outlined text-[14px] text-[#4AA0F0]">{badge.icon}</span>
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Giá trị mang lại */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[18px]">target</span>
                  <h3 className="text-lg font-bold text-white">Giá trị mang lại</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed pl-7">
                  Uboard giúp đội vận hành nhìn rõ hiệu suất thực tế, giảm phụ thuộc vào báo cáo thủ công và tạo cơ sở dữ liệu thống nhất để cải thiện năng suất, giảm thời gian dừng máy và phối hợp hiệu quả hơn giữa các bộ phận.
                </p>
              </div>

              {/* Phù hợp với */}
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-[#4AA0F0]">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  <h3 className="text-lg font-bold text-white">Phù hợp với</h3>
                </div>
                <ul className="space-y-2.5 pl-7">
                  {[
                    "Nhà máy có nhiều dây chuyền hoặc nhiều tổ sản xuất",
                    "Đội vận hành và bảo trì cần theo dõi thiết bị tập trung",
                    "Doanh nghiệp muốn chuẩn hóa dữ liệu vận hành để tối ưu hiệu suất"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                      <span className="material-symbols-outlined text-[#4AA0F0] text-[16px] mt-0.5 shrink-0">check_circle</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                  Tải tài liệu ứng dụng
                </button>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col h-full">
              
              {/* Images Grid */}
              <div className="space-y-4 mb-8">
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Factory floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                    <img src="/image/Ugate/fixing.webp" alt="Engineer checking device" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                    <img src="/image/Ugate/resources-management.webp" alt="Robotic arm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Trọng tâm theo dõi */}
              <div className="bg-[#4AA0F0]/5 border border-[#4AA0F0]/20 rounded-2xl p-6 mb-8">
                <h3 className="text-[#4AA0F0] font-bold text-lg mb-5">Trọng tâm theo dõi</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#4AA0F0]/10 flex items-center justify-center shrink-0">
                       <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">monitoring</span>
                    </div>
                    <span>OEE theo thời gian thực</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#4AA0F0]/10 flex items-center justify-center shrink-0">
                       <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">precision_manufacturing</span>
                    </div>
                    <span>Trạng thái máy đang chạy hoặc dừng</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#4AA0F0]/10 flex items-center justify-center shrink-0">
                       <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">notifications_active</span>
                    </div>
                    <span>Cảnh báo bất thường</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#4AA0F0]/10 flex items-center justify-center shrink-0">
                       <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">history</span>
                    </div>
                    <span>Lịch sử bảo trì thiết bị</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                 <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4AA0F0] text-[#06101F] font-bold hover:bg-[#3d8ad1] transition-colors shadow-[0_0_20px_rgba(74,160,240,0.3)]">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    Trao đổi với chuyên gia
                 </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
