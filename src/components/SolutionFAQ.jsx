import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SolutionFAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      enQ: 'Can UGATE integrate with SAP?',
      viQ: 'UGATE có thể tích hợp với hệ thống SAP không?',
      enA: 'Yes, UGATE offers native connectors and API-first architecture designed for seamless integration with major ERP systems including SAP, Oracle, and Microsoft Dynamics.',
      viA: 'Có, UGATE cung cấp các trình kết nối gốc và kiến trúc ưu tiên API được thiết kế để tích hợp liền mạch với các hệ thống ERP lớn bao gồm SAP, Oracle và Microsoft Dynamics.'
    },
    {
      enQ: 'Is deployment on-premise available?',
      viQ: 'Có hỗ trợ triển khai On-premise (tại chỗ) không?',
      enA: 'Absolutely. We support public cloud, private cloud, and fully on-premise deployments to meet strict security and data residency requirements, especially for air-gapped environments.',
      viA: 'Chắc chắn rồi. Chúng tôi hỗ trợ triển khai trên public cloud, private cloud và triển khai hoàn toàn on-premise để đáp ứng các yêu cầu khắt khe về bảo mật và lưu trữ dữ liệu.'
    },
    {
      enQ: 'How long does implementation take?',
      viQ: 'Thời gian triển khai mất bao lâu?',
      enA: 'Implementation timelines vary by scope. A pilot or MVP can typically be deployed in 2-4 weeks, while full enterprise rollouts average 2-4 months from discovery to optimization.',
      viA: 'Tiến độ triển khai thay đổi tùy theo phạm vi. Một dự án thí điểm (MVP) thường mất từ 2-4 tuần, trong khi việc triển khai toàn diện quy mô doanh nghiệp trung bình mất từ 2-4 tháng.'
    },
    {
      enQ: 'How does UZERO calculate carbon emissions?',
      viQ: 'UZERO tính toán lượng khí thải carbon như thế nào?',
      enA: 'UZERO aggregates real-time data from IoT meters and utility bills, applying GHG Protocol standards and local emission factors to calculate Scope 1, 2, and 3 emissions accurately.',
      viA: 'UZERO tổng hợp dữ liệu thời gian thực từ đồng hồ IoT và hóa đơn năng lượng, áp dụng tiêu chuẩn GHG Protocol và các hệ số phát thải địa phương để tính toán chính xác Phạm vi 1, 2 và 3.'
    },
    {
      enQ: 'What industries do you serve?',
      viQ: 'Các giải pháp của Udata phục vụ những ngành nào?',
      enA: 'Our solutions are highly adaptable, but we have specialized expertise and pre-built templates for Financial Services, Manufacturing, Warehousing & Logistics, and Retail.',
      viA: 'Các giải pháp của chúng tôi có khả năng thích ứng cao, nhưng chúng tôi có chuyên môn sâu và biểu mẫu thiết kế sẵn cho ngành Dịch vụ Tài chính, Sản xuất, Kho bãi & Logistics, và Bán lẻ.'
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
                  <span className="text-lg font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                    {lang === 'EN' ? faq.enQ : faq.viQ}
                  </span>
                  <span className={`material-symbols-outlined text-[#9CA3AF] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#22D3EE]' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                <div 
                  className={`px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-[#9CA3AF] leading-relaxed">
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
