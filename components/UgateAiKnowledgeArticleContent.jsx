"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UgateAiKnowledgeArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'AI Assistant for Operation and Technical Knowledge Management' 
             : 'Trợ lý AI cho vận hành và quản lý tri thức kỹ thuật'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Ugate helps businesses centralize technical documents, maintenance experience, troubleshooting processes, and operational data into a unified knowledge repository. Engineers and operations teams can query information using natural language, receive faster troubleshooting guidance, and reduce reliance on fragmented documents.'
             : 'Ugate giúp doanh nghiệp tập trung tài liệu kỹ thuật, kinh nghiệm bảo trì, quy trình xử lý sự cố và dữ liệu vận hành vào một kho tri thức thống nhất. Từ đó, kỹ sư và đội vận hành có thể truy vấn thông tin bằng ngôn ngữ tự nhiên, nhận hướng dẫn xử lý nhanh hơn và giảm phụ thuộc vào tài liệu rời rạc.'}
         </p>
      </div>

      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/Ugate/Ugate-1.webp" alt="Knowledge Management" className="w-full h-full object-cover" />
      </div>

      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Ugate support?' : 'Ugate hỗ trợ những gì?'}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Query technical documents with AI" : "Truy vấn tài liệu kỹ thuật bằng AI",
            lang === 'EN' ? "Q&A by error code, error symptom, or equipment image" : "Hỏi đáp theo mã lỗi, hiện tượng lỗi hoặc hình ảnh thiết bị",
            lang === 'EN' ? "Suggest troubleshooting processes based on operational context" : "Gợi ý quy trình xử lý sự cố theo ngữ cảnh vận hành",
            lang === 'EN' ? "Store maintenance experience and past resolutions" : "Lưu trữ kinh nghiệm bảo trì và các lần xử lý trước",
            lang === 'EN' ? "Organize technical knowledge into a shared repository" : "Tổ chức tri thức kỹ thuật thành kho dùng chung",
            lang === 'EN' ? "Access control by role, department, or user group" : "Phân quyền truy cập theo vai trò, phòng ban hoặc nhóm người dùng"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">smart_toy</span>
                <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>

      <div id="section-2" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">2.</span> {lang === 'EN' ? 'Data sources that can be integrated' : 'Nguồn dữ liệu có thể đưa vào'}
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: 'menu_book', text: lang === 'EN' ? 'Equipment manuals and manufacturer documents' : 'Manual thiết bị và tài liệu từ nhà sản xuất' },
            { icon: 'receipt_long', text: lang === 'EN' ? 'SOPs, operational guides, and maintenance procedures' : 'SOP, hướng dẫn vận hành và quy trình bảo trì' },
            { icon: 'history', text: lang === 'EN' ? 'Repair logs, error history, and incident reports' : 'Nhật ký sửa chữa, lịch sử lỗi và biên bản sự cố' },
            { icon: 'school', text: lang === 'EN' ? 'Internal training materials' : 'Tài liệu đào tạo nội bộ' },
            { icon: 'dataset', text: lang === 'EN' ? 'Data from ERP, CMMS, or maintenance management systems' : 'Dữ liệu từ ERP, CMMS hoặc hệ thống quản lý bảo trì' },
            { icon: 'help', text: lang === 'EN' ? 'Frequently asked questions from engineers and operators' : 'Câu hỏi thường gặp của kỹ sư và đội vận hành' },
            { icon: 'image', text: lang === 'EN' ? 'Error images, error codes, or equipment information from the field' : 'Hình ảnh lỗi, mã lỗi hoặc thông tin thiết bị tại hiện trường' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <span className="material-symbols-outlined text-[18px] text-[#22D3EE]">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="section-3" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">3.</span> {lang === 'EN' ? 'Experience in the system' : 'Trải nghiệm trong hệ thống'}
        </h2>
        <p className="mb-6">
          {lang === 'EN' 
            ? 'Users can type questions, describe error symptoms, or capture images of equipment error codes. Ugate analyzes the input, searches the technical knowledge base, and returns appropriate troubleshooting instructions.'
            : 'Người dùng có thể nhập câu hỏi, mô tả hiện tượng lỗi hoặc chụp ảnh mã lỗi thiết bị. Ugate phân tích thông tin đầu vào, tìm kiếm trong kho tri thức kỹ thuật và trả về hướng dẫn xử lý phù hợp.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Examples:' : 'Ví dụ:'}</h3>
        <ul className="space-y-3 mb-6 pl-2 bg-[#111827] border border-white/10 rounded-2xl p-6">
          {[
            lang === 'EN' ? "Equipment shows error E102, what should be checked first?" : "Thiết bị báo lỗi E102 cần kiểm tra gì trước?",
            lang === 'EN' ? "What is the reset procedure for this inverter model?" : "Quy trình reset biến tần dòng này như thế nào?",
            lang === 'EN' ? "When was the last time this equipment had a similar error?" : "Lần gần nhất thiết bị này gặp lỗi tương tự là khi nào?",
            lang === 'EN' ? "Where is the periodic maintenance manual for this model?" : "Tài liệu bảo trì định kỳ của model này nằm ở đâu?"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-0.5 shrink-0">chat</span>
                <span>"{item}"</span>
             </li>
          ))}
        </ul>
      </div>

      <div id="section-4" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Operational Value' : 'Giá trị vận hành'}
        </h2>
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">lightbulb</span>
          <p className="text-lg md:text-xl text-white font-medium relative z-10 leading-relaxed px-4 text-center">
             {lang === 'EN'
               ? "Ugate helps businesses preserve technical knowledge, reduce time spent searching for documents, and standardize how the team handles incidents. When operational experience is stored and reused, businesses can reduce reliance on a few veteran experts and help new engineers work faster."
               : "Ugate giúp doanh nghiệp bảo toàn tri thức kỹ thuật, giảm thời gian tìm kiếm tài liệu và chuẩn hóa cách đội ngũ xử lý sự cố. Khi kinh nghiệm vận hành được lưu trữ và tái sử dụng, doanh nghiệp có thể giảm phụ thuộc vào một vài chuyên gia kỳ cựu và hỗ trợ kỹ sư mới làm việc nhanh hơn."}
          </p>
        </div>
      </div>

      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Suitable For' : 'Phù hợp với'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'factory', text: lang === 'EN' ? 'Factories with many equipment, technical documents, and maintenance procedures' : 'Nhà máy có nhiều thiết bị, tài liệu kỹ thuật và quy trình bảo trì' },
            { icon: 'engineering', text: lang === 'EN' ? 'Technical, maintenance, operation, and after-sales teams' : 'Đội kỹ thuật, bảo trì, vận hành và hậu mãi' },
            { icon: 'library_books', text: lang === 'EN' ? 'Businesses looking to standardize internal technical knowledge' : 'Doanh nghiệp muốn chuẩn hóa tri thức kỹ thuật nội bộ' },
            { icon: 'support_agent', text: lang === 'EN' ? 'Organizations needing an AI assistant for troubleshooting and document queries' : 'Tổ chức cần trợ lý AI hỗ trợ xử lý sự cố và truy vấn tài liệu' }
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
