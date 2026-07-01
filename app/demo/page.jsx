"use client";
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function DemoPage() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title = lang === 'EN' ? "Book a Demo | Udata" : "Đặt lịch Demo | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: lang === 'EN' ? "Optimize costs & efficiency" : "Tối ưu chi phí và hiệu suất",
      desc: lang === 'EN' ? "See live how Udata system saves power, reduces operational costs and boosts equipment efficiency." : "Xem trực tiếp cách hệ thống Udata giúp tiết kiệm điện năng, giảm chi phí vận hành và nâng cao hiệu suất thiết bị."
    },
    {
      title: lang === 'EN' ? "Interactive demo experience" : "Trải nghiệm demo tương tác",
      desc: lang === 'EN' ? "Try real dashboard - monitor power data, warnings and automatic reports." : "Dùng thử dashboard thực tế - theo dõi dữ liệu năng lượng, cảnh báo và báo cáo tự động."
    },
    {
      title: lang === 'EN' ? "1:1 Expert Consultation" : "Tư vấn 1:1 cùng chuyên gia",
      desc: lang === 'EN' ? "Discuss specific business needs to propose the most suitable solution." : "Trao đổi về nhu cầu cụ thể của doanh nghiệp bạn, đề xuất giải pháp phù hợp cho từng mô hình vận hành."
    },
    {
      title: lang === 'EN' ? "Free trial & manuals" : "Tài liệu hướng dẫn & bản dùng thử",
      desc: lang === 'EN' ? "Get deployment guidelines and 30-day completely free platform access." : "Nhận hướng dẫn triển khai chi tiết và quyền truy cập nền tảng Udata trong 30 ngày hoàn toàn miễn phí."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#4AA0F0] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#10F0CB] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Left Column: Information */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {lang === 'EN' ? "Experience Udata platform in a " : "Trải nghiệm nền tảng Udata trong "}
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">
                {lang === 'EN' ? "30-minute live demo." : "30 phút demo trực tiếp."}
              </span>
            </h1>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-medium">
              {lang === 'EN' ? "Always active. Always accurate." : "Luôn hoạt động. Luôn chính xác."} <br/>
              {lang === 'EN' ? "Udata - Accompanying businesses in the technological and sustainable era." : "Udata - Đồng hành cùng doanh nghiệp trong kỷ nguyên công nghệ và bền vững."}
            </p>

            <h3 className="text-xl font-bold text-white mb-6">
              {lang === 'EN' ? "In the 30-minute demo, we will explore:" : "Trong buổi demo 30 phút, chúng tôi sẽ cùng bạn khám phá:"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-[#111114] border border-white/10 rounded-2xl p-5 hover:border-[#22D3EE]/30 hover:bg-white/5 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#22D3EE]/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#22D3EE] text-lg">check</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="relative">
            <div className="bg-[#111114]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl font-bold text-white mb-8">
                {lang === 'EN' ? "Register for consultation & 30-day free trial" : "Đăng ký tư vấn và dùng thử miễn phí 30 ngày cùng Udata"}
              </h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">{lang === 'EN' ? "Full Name" : "Họ và tên"}</label>
                  <input 
                    type="text" 
                    placeholder={lang === 'EN' ? "Enter your full name" : "Nhập họ và tên"}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">{lang === 'EN' ? "Company Name" : "Tên công ty"}</label>
                    <input 
                      type="text" 
                      placeholder={lang === 'EN' ? "Enter company name" : "Nhập tên công ty"}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">{lang === 'EN' ? "Phone Number" : "Số điện thoại"}</label>
                    <input 
                      type="tel" 
                      placeholder={lang === 'EN' ? "Enter phone number" : "Nhập số điện thoại"}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <input 
                    type="email" 
                    placeholder={lang === 'EN' ? "Enter your email" : "Nhập email"}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">{lang === 'EN' ? "Industry" : "Ngành nghề"}</label>
                  <select className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>{lang === 'EN' ? "Select industry" : "Chọn ngành nghề"}</option>
                    <option value="manufacturing">{lang === 'EN' ? "Manufacturing" : "Sản xuất"}</option>
                    <option value="retail">{lang === 'EN' ? "Retail" : "Bán lẻ"}</option>
                    <option value="logistics">Logistics</option>
                    <option value="other">{lang === 'EN' ? "Other" : "Khác"}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">{lang === 'EN' ? "Requirements" : "Nội dung yêu cầu thông tin"}</label>
                  <textarea 
                    rows="3"
                    placeholder={lang === 'EN' ? "How can we help you?" : "Bạn cần hỗ trợ gì?"}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all resize-none"
                  ></textarea>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-white/20 rounded bg-transparent checked:bg-[#22D3EE] checked:border-[#22D3EE] transition-all cursor-pointer" />
                    <span className="material-symbols-outlined text-white text-[16px] absolute opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                    {lang === 'EN' ? "Yes, I would like Udata to share latest news and promotions via email or phone." : "Có, tôi muốn Udata chia sẻ cho tôi các tin tức mới nhất về dịch vụ và các chương trình khuyến mãi qua email hoặc điện thoại."}
                  </span>
                </label>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all">
                    {lang === 'EN' ? "Submit" : "Gửi thông tin"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
