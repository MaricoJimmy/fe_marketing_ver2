import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SolutionUseCases() {
  const { lang } = useLanguage();

  const useCases = [
    {
      tags: ['UGATE', 'UBOARD'],
      enTitle: 'AI-Powered Financial Operations',
      viTitle: 'Vận hành Tài chính được hỗ trợ bởi AI',
      enChallenge: 'Manual reconciliation and delayed financial reporting due to disconnected global ERPs.',
      viChallenge: 'Đối soát thủ công và báo cáo tài chính chậm trễ do các hệ thống ERP toàn cầu bị rời rạc.',
      enSolution: 'Deployed a private LLM agent to automatically query, cross-reference, and summarize financial data across 5 regional systems.',
      viSolution: 'Triển khai một tác nhân LLM nội bộ để tự động truy vấn, đối chiếu và tóm tắt dữ liệu tài chính trên 5 hệ thống khu vực.',
      enImpact: 'Reduced monthly close from 8 days to 2 days, saving $1.2M annually in operational costs.',
      viImpact: 'Giảm thời gian chốt sổ hàng tháng từ 8 ngày xuống còn 2 ngày, tiết kiệm 1,2 triệu đô la chi phí vận hành hàng năm.'
    },
    {
      tags: ['UGATE', 'UBOARD'],
      enTitle: 'Smart Warehouse Management',
      viTitle: 'Quản lý Kho bãi Thông minh',
      enChallenge: 'High inventory holding costs and inefficient picking routes in a 500k sq ft facility.',
      viChallenge: 'Chi phí lưu kho cao và lộ trình lấy hàng kém hiệu quả trong một cơ sở rộng 50.000 mét vuông.',
      enSolution: 'IoT sensors feed real-time location data to UBOARD, while UGATE predicts optimal inventory placement and routing.',
      viSolution: 'Cảm biến IoT truyền dữ liệu vị trí theo thời gian thực tới UBOARD, trong khi UGATE dự đoán cách sắp xếp hàng tồn kho và định tuyến tối ưu.',
      enImpact: 'Increased picking efficiency by 28% and reduced holding costs by 15%.',
      viImpact: 'Tăng hiệu quả lấy hàng lên 28% và giảm 15% chi phí lưu kho.'
    },
    {
      tags: ['MINIUGATE'],
      enTitle: 'Automated Lead Qualification',
      viTitle: 'Đánh giá Khách hàng Tiềm năng Tự động',
      enChallenge: 'Sales team wasting 40% of time on unqualified leads from web channels.',
      viChallenge: 'Đội ngũ Sales lãng phí 40% thời gian cho những khách hàng tiềm năng không đủ tiêu chuẩn từ các kênh website.',
      enSolution: 'MINIUGATE deployed as a 24/7 technical assistant, scoring leads based on conversation depth and intent before routing to sales.',
      viSolution: 'MINIUGATE được triển khai như một trợ lý kỹ thuật 24/7, chấm điểm khách hàng tiềm năng dựa trên chiều sâu cuộc trò chuyện và ý định trước khi chuyển cho Sales.',
      enImpact: 'Increased conversion rate by 3X and generated 200+ sales-qualified opportunities in Q1.',
      viImpact: 'Tăng tỷ lệ chuyển đổi gấp 3 lần và tạo ra hơn 200 cơ hội bán hàng chất lượng trong Quý 1.'
    },
    {
      tags: ['UZERO', 'UBOARD'],
      enTitle: 'Carbon Monitoring & Optimization',
      viTitle: 'Giám sát & Tối ưu hóa Carbon',
      enChallenge: 'Inability to accurately report Scope 1 and 2 emissions for incoming ESG mandates.',
      viChallenge: 'Không có khả năng báo cáo chính xác lượng phát thải Phạm vi 1 và 2 cho các yêu cầu ESG sắp tới.',
      enSolution: 'UBOARD connects to factory energy meters; UZERO calculates real-time emissions and identifies high-consumption anomalies.',
      viSolution: 'UBOARD kết nối với đồng hồ năng lượng nhà máy; UZERO tính toán phát thải theo thời gian thực và xác định các bất thường tiêu thụ cao.',
      enImpact: 'Achieved audit-ready ESG compliance and reduced overall energy consumption by 12%.',
      viImpact: 'Đạt được sự tuân thủ ESG sẵn sàng cho kiểm toán và giảm 12% tổng mức tiêu thụ năng lượng.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#080B10] border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'EN' ? 'Real-World Use Cases' : 'Ứng dụng Thực tế'}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {lang === 'EN' 
              ? 'How leading enterprises are transforming their operations with Udata.'
              : 'Cách các doanh nghiệp hàng đầu đang chuyển đổi hoạt động vận hành cùng Udata.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-[#0C1017] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] flex flex-col h-full"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {useCase.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 rounded-md bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#22D3EE] mb-8">
                {lang === 'EN' ? useCase.enTitle : useCase.viTitle}
              </h3>

              <div className="mb-6">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'CHALLENGE' : 'THÁCH THỨC'}
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {lang === 'EN' ? useCase.enChallenge : useCase.viChallenge}
                </p>
              </div>

              <div className="mb-8 flex-1">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'SOLUTION' : 'GIẢI PHÁP'}
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {lang === 'EN' ? useCase.enSolution : useCase.viSolution}
                </p>
              </div>

              <div className="bg-[#22D3EE]/5 border border-[#22D3EE]/10 rounded-xl p-5 mt-auto">
                <div className="text-[10px] text-[#22D3EE] font-bold uppercase tracking-widest mb-2">
                  {lang === 'EN' ? 'BUSINESS IMPACT' : 'TÁC ĐỘNG KINH DOANH'}
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {lang === 'EN' ? useCase.enImpact : useCase.viImpact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
