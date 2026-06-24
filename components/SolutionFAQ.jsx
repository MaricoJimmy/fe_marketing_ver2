"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionFAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      enQ: 'What types of enterprises is Udata suitable for?',
      viQ: 'Udata phù hợp với những doanh nghiệp nào?',
      enA: 'Udata is suitable for manufacturing, logistics, industrial parks, buildings, export enterprises, and corporates that need to connect operational data, optimize performance, and build a green digital transformation foundation.',
      viA: 'Udata phù hợp với doanh nghiệp sản xuất, logistics, khu công nghiệp, tòa nhà, doanh nghiệp xuất khẩu và enterprise có nhu cầu kết nối dữ liệu vận hành, tối ưu hiệu suất và xây dựng nền tảng chuyển đổi số xanh.'
    },
    {
      enQ: 'Do businesses need to replace all existing systems?',
      viQ: 'Doanh nghiệp có cần thay toàn bộ hệ thống hiện có không?',
      enA: "Not necessarily. Udata is designed to connect with existing systems such as ERP, manufacturing data, logistics, energy, IoT devices, and internal tools. The deployment roadmap will be determined based on each enterprise's data readiness.",
      viA: 'Không nhất thiết. Udata được thiết kế để kết nối với các hệ thống hiện có như ERP, dữ liệu sản xuất, kho vận, năng lượng, thiết bị IoT và các công cụ nội bộ. Lộ trình triển khai sẽ được xác định theo mức độ sẵn sàng dữ liệu của từng doanh nghiệp.'
    },
    {
      enQ: 'What factors typically affect deployment time?',
      viQ: 'Thời gian triển khai thường phụ thuộc vào yếu tố nào?',
      enA: 'Deployment time depends on the number of data sources, current system complexity, use case scope, and integration requirements. Udata usually recommends starting with a priority problem to verify efficiency before expanding.',
      viA: 'Thời gian triển khai phụ thuộc vào số lượng nguồn dữ liệu, mức độ phức tạp của hệ thống hiện tại, phạm vi use case và yêu cầu tích hợp. Udata thường đề xuất bắt đầu từ một bài toán ưu tiên để kiểm chứng hiệu quả trước khi mở rộng.'
    },
    {
      enQ: 'How does Udata help enterprises measure efficiency?',
      viQ: 'Udata hỗ trợ doanh nghiệp đo lường hiệu quả như thế nào?',
      enA: 'From the survey phase, Udata works with businesses to define tracking metrics such as operational performance, costs, energy, data flow, processing time, or emissions data. These metrics are used to evaluate post-deployment impact.',
      viA: 'Ngay từ giai đoạn khảo sát, Udata cùng doanh nghiệp xác định các chỉ số cần theo dõi như hiệu suất vận hành, chi phí, năng lượng, dòng dữ liệu, thời gian xử lý hoặc dữ liệu phát thải. Các chỉ số này được dùng để đánh giá tác động sau triển khai.'
    },
    {
      enQ: 'How does Uzero support ESG and carbon data?',
      viQ: 'Uzero hỗ trợ dữ liệu ESG và carbon như thế nào?',
      enA: 'Uzero helps businesses collect, standardize, calculate, and track emissions data. The platform supports building a database for sustainability reporting, ESG, audits, and green development roadmaps.',
      viA: 'Uzero giúp doanh nghiệp thu thập, chuẩn hóa, tính toán và theo dõi dữ liệu phát thải. Nền tảng hỗ trợ xây dựng cơ sở dữ liệu phục vụ báo cáo bền vững, ESG, audit và lộ trình phát triển xanh.'
    },
    {
      enQ: 'Can Udata be customized for different operational models?',
      viQ: 'Udata có thể tùy chỉnh theo từng mô hình vận hành không?',
      enA: 'Yes. Udata is flexibly designed to fit various models of factories, supply chains, industrial parks, or enterprises. The solution can be scaled by stage, use case, and data level.',
      viA: 'Có. Udata được thiết kế linh hoạt để phù hợp với từng mô hình nhà máy, chuỗi cung ứng, khu công nghiệp hoặc enterprise. Giải pháp có thể được mở rộng theo từng giai đoạn, từng use case và từng cấp độ dữ liệu.'
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] relative z-10">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp (FAQ)'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-b border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 px-4 text-left focus:outline-none group"
                >
                  <span className="text-base md:text-lg font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                    {lang === 'EN' ? faq.enQ : faq.viQ}
                  </span>
                  <span className={`material-symbols-outlined text-[#9CA3AF] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#22D3EE]' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                <div 
                  className={`px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-[#9CA3AF] text-sm md:text-[15px] leading-relaxed">
                    {lang === 'EN' ? faq.enA : faq.viA}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

