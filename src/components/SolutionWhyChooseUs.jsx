import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SolutionWhyChooseUs() {
  const { lang } = useLanguage();

  const reasons = [
    {
      icon: 'security',
      color: 'text-[#22D3EE]',
      bgColor: 'bg-[#22D3EE]/10',
      enTitle: 'Enterprise-Grade Security',
      viTitle: 'Bảo mật Cấp độ Doanh nghiệp',
      enDesc: 'Bank-level encryption, SSO, role-based access control, and complete data privacy for your proprietary information.',
      viDesc: 'Mã hóa cấp ngân hàng, đăng nhập một lần (SSO), kiểm soát truy cập theo vai trò và bảo mật toàn diện thông tin độc quyền của bạn.'
    },
    {
      icon: 'extension',
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      enTitle: 'Flexible Deployment',
      viTitle: 'Triển khai Linh hoạt',
      enDesc: 'Deploy on public cloud (AWS, Azure, GCP), private cloud, or fully on-premise for air-gapped environments.',
      viDesc: 'Triển khai trên public cloud (AWS, Azure, GCP), private cloud, hoặc hoàn toàn on-premise cho các môi trường yêu cầu cô lập mạng.'
    },
    {
      icon: 'tune',
      color: 'text-[#D946EF]',
      bgColor: 'bg-[#D946EF]/10',
      enTitle: 'Industry-Specific Customization',
      viTitle: 'Tùy biến Theo Ngành nghề',
      enDesc: 'Pre-trained models and templates tailored to manufacturing, finance, logistics, and retail semantics.',
      viDesc: 'Các mô hình AI được huấn luyện sẵn và biểu mẫu được thiết kế riêng cho đặc thù ngành sản xuất, tài chính, logistics và bán lẻ.'
    },
    {
      icon: 'lan',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      enTitle: 'Open Integration Architecture',
      viTitle: 'Kiến trúc Tích hợp Mở',
      enDesc: 'API-first design with 150+ pre-built connectors to SAP, Oracle, Salesforce, and major industrial IoT protocols.',
      viDesc: 'Thiết kế ưu tiên API với hơn 150 kết nối có sẵn tới SAP, Oracle, Salesforce và các giao thức IoT công nghiệp lớn.'
    },
    {
      icon: 'trending_up',
      color: 'text-[#F59E0B]',
      bgColor: 'bg-[#F59E0B]/10',
      enTitle: 'Proven ROI',
      viTitle: 'Tỷ suất Hoàn vốn (ROI) Rõ ràng',
      enDesc: 'Average payback period of under 9 months through direct operational savings and efficiency gains.',
      viDesc: 'Thời gian hoàn vốn trung bình dưới 9 tháng thông qua việc tiết kiệm trực tiếp chi phí vận hành và tăng hiệu suất.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Why Organizations Choose Us' : 'Lý do các Tổ chức Lựa chọn Chúng tôi'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? 'Built from the ground up for the rigorous demands of enterprise IT.'
              : 'Được thiết kế từ nền tảng để đáp ứng những yêu cầu khắt khe nhất của hệ thống CNTT Doanh nghiệp.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#0C1017] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${reason.bgColor}`}>
                <span className={`material-symbols-outlined ${reason.color}`}>{reason.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {lang === 'EN' ? reason.enTitle : reason.viTitle}
              </h3>
              
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {lang === 'EN' ? reason.enDesc : reason.viDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
