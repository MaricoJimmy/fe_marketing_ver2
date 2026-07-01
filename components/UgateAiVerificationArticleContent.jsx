"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UgateAiVerificationArticleContent() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col gap-10 text-[#D1D5DB] text-[17px] leading-[1.8] font-body-md">
      
      <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
           {lang === 'EN' 
             ? 'Conversational AI and Product Verification' 
             : 'Trợ lý AI hội thoại và xác minh sản phẩm'}
         </h1>
         <p className="text-white/70 text-lg md:text-xl leading-relaxed">
           {lang === 'EN'
             ? 'Ugate supports engineers, dealers, distributors, and operations teams to look up equipment information, verify serial numbers, check CO/CQ, and cross-reference product data using AI. This module helps businesses reduce the risk of using unverified components, increases transparency in equipment management, and supports the technical team in responding faster.'
             : 'Ugate hỗ trợ kỹ sư, đại lý, nhà phân phối và đội vận hành tra cứu thông tin thiết bị, xác minh mã serial, kiểm tra CO/CQ và đối chiếu dữ liệu sản phẩm bằng AI. Module này giúp doanh nghiệp giảm rủi ro sử dụng linh kiện không rõ nguồn gốc, tăng tính minh bạch trong quản lý thiết bị và hỗ trợ đội ngũ kỹ thuật phản hồi nhanh hơn.'}
         </p>
      </div>

      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
         <img src="/image/Ugate/Ugate-2.webp" alt="Product Verification" className="w-full h-full object-cover" />
      </div>

      <div id="section-1" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">1.</span> {lang === 'EN' ? 'What does Ugate support?' : 'Ugate hỗ trợ những gì?'}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            lang === 'EN' ? "Conversational AI to look up equipment information" : "Hội thoại AI để tra cứu thông tin thiết bị",
            lang === 'EN' ? "Scan barcodes, serial numbers, or product images" : "Quét mã vạch, mã serial hoặc hình ảnh sản phẩm",
            lang === 'EN' ? "Check CO/CQ information and related certification documents" : "Kiểm tra thông tin CO/CQ và tài liệu chứng nhận liên quan",
            lang === 'EN' ? "Cross-reference equipment info with stored data" : "Đối chiếu thông tin thiết bị với dữ liệu đã lưu trữ",
            lang === 'EN' ? "Support identifying signs of mismatch or lack of transparency" : "Hỗ trợ nhận diện dấu hiệu không khớp hoặc thiếu minh bạch",
            lang === 'EN' ? "Save verification history for future management and retrieval" : "Lưu lại lịch sử xác minh để phục vụ quản lý và truy xuất sau này"
          ].map((item, index) => (
             <li key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#22D3EE] text-[20px] mt-1 shrink-0">verified</span>
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
            { icon: 'qr_code', text: lang === 'EN' ? 'Serial numbers, barcodes, and equipment model info' : 'Mã serial, mã vạch và thông tin model thiết bị' },
            { icon: 'verified_user', text: lang === 'EN' ? 'CO, CQ, and product certification documents' : 'CO, CQ và tài liệu chứng nhận sản phẩm' },
            { icon: 'library_books', text: lang === 'EN' ? 'Catalogs, datasheets, and manufacturer documents' : 'Catalogue, datasheet và tài liệu nhà sản xuất' },
            { icon: 'history', text: lang === 'EN' ? 'Purchase, warranty, or maintenance history' : 'Lịch sử mua hàng, bảo hành hoặc bảo trì' },
            { icon: 'local_shipping', text: lang === 'EN' ? 'Supplier, dealer, or shipment data' : 'Dữ liệu nhà cung cấp, đại lý hoặc lô hàng' },
            { icon: 'image', text: lang === 'EN' ? 'Images of labels, tags, or components' : 'Hình ảnh tem nhãn, nhãn thiết bị hoặc ảnh linh kiện' },
            { icon: 'dataset', text: lang === 'EN' ? 'Internal data from ERP, warehouse, or asset management systems' : 'Dữ liệu nội bộ từ ERP, kho hoặc hệ thống quản lý tài sản' }
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
            ? 'Users can enter a model, scan a serial number, upload CO/CQ, or directly ask the AI assistant. Ugate supports cross-referencing information, suggesting related data, and helping users determine if the product has enough information for further inspection.'
            : 'Người dùng có thể nhập model, quét mã serial, tải lên CO/CQ hoặc đặt câu hỏi trực tiếp cho trợ lý AI. Ugate hỗ trợ đối chiếu thông tin, gợi ý dữ liệu liên quan và giúp người dùng xác định sản phẩm có đủ thông tin để tiếp tục kiểm tra hay không.'}
        </p>

        <h3 className="text-xl font-bold text-white mb-4">{lang === 'EN' ? 'Examples:' : 'Ví dụ:'}</h3>
        <ul className="space-y-3 mb-6 pl-2 bg-[#111827] border border-white/10 rounded-2xl p-6">
          {[
            lang === 'EN' ? "Does this serial match the product documentation?" : "Serial này có khớp với tài liệu sản phẩm không?",
            lang === 'EN' ? "What information is missing in this CO/CQ that needs further checking?" : "CO/CQ này đang thiếu thông tin gì cần kiểm tra thêm?",
            lang === 'EN' ? "Does this model have technical documents and installation guides?" : "Model này có tài liệu kỹ thuật và hướng dẫn lắp đặt không?",
            lang === 'EN' ? "Has this equipment ever been recorded in the system?" : "Thiết bị này đã từng được ghi nhận trong hệ thống chưa?"
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
          <span className="text-[#22D3EE]">4.</span> {lang === 'EN' ? 'Key Features' : 'Các khối nội dung chính'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { 
              title: lang === 'EN' ? 'Contextual Conversational AI' : 'AI hội thoại theo ngữ cảnh',
              desc: lang === 'EN' ? 'Allows users to ask questions about equipment, specs, documents, manuals, or certifications using natural language.' : 'Cho phép người dùng hỏi đáp về thiết bị, thông số, tài liệu, hướng dẫn sử dụng hoặc thông tin chứng nhận bằng ngôn ngữ tự nhiên.',
              icon: 'forum'
            },
            { 
              title: lang === 'EN' ? 'Verify serial and CO/CQ' : 'Xác minh serial và CO/CQ',
              desc: lang === 'EN' ? 'Supports quick checking of serial numbers, barcodes, equipment images, and certification documents to reduce the risk of information discrepancy.' : 'Hỗ trợ kiểm tra nhanh mã serial, mã vạch, hình ảnh thiết bị và tài liệu chứng nhận để giảm rủi ro sai lệch thông tin.',
              icon: 'fact_check'
            },
            { 
              title: lang === 'EN' ? 'Retrieve equipment data' : 'Truy xuất dữ liệu thiết bị',
              desc: lang === 'EN' ? 'Saves verification history, related documents, and equipment info to serve operations, maintenance, or after-sales.' : 'Lưu lại lịch sử xác minh, tài liệu liên quan và thông tin thiết bị để phục vụ vận hành, bảo trì hoặc hậu mãi.',
              icon: 'manage_search'
            },
            { 
              title: lang === 'EN' ? 'Multi-user group support' : 'Hỗ trợ đa nhóm người dùng',
              desc: lang === 'EN' ? 'Suitable for field engineers, maintenance teams, distributors, EPC general contractors, after-sales teams, and enterprise customers.' : 'Phù hợp cho kỹ sư hiện trường, đội bảo trì, nhà phân phối, tổng thầu EPC, đội hậu mãi và khách hàng doanh nghiệp.',
              icon: 'groups'
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0A0E14] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#22D3EE]/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#22D3EE] text-[20px]">{item.icon}</span>
                 </div>
                 <h4 className="text-white font-bold">{item.title}</h4>
               </div>
               <p className="text-[#9CA3AF] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="section-5" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">5.</span> {lang === 'EN' ? 'Operational Value' : 'Giá trị vận hành'}
        </h2>
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 relative mb-8">
          <span className="material-symbols-outlined text-[64px] text-[#22D3EE] opacity-20 absolute top-4 left-4">lightbulb</span>
          <p className="text-lg md:text-xl text-white font-medium relative z-10 leading-relaxed px-4 text-center">
             {lang === 'EN'
               ? "Ugate makes the equipment look-up and verification process faster, clearer, and traceable. Businesses can reduce risks from unverified components, standardize how they check CO/CQ, and support technical teams to respond more accurately when working with industrial equipment."
               : "Ugate giúp quá trình tra cứu và xác minh thiết bị trở nên nhanh hơn, rõ ràng hơn và có thể truy xuất lại. Doanh nghiệp có thể giảm rủi ro từ linh kiện thiếu minh bạch, chuẩn hóa cách kiểm tra CO/CQ và hỗ trợ đội kỹ thuật phản hồi chính xác hơn khi làm việc với thiết bị công nghiệp."}
          </p>
        </div>
      </div>

      <div id="section-6" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-[#22D3EE]">6.</span> {lang === 'EN' ? 'Suitable For' : 'Phù hợp với'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: 'store', text: lang === 'EN' ? 'Industrial equipment distributors' : 'Nhà phân phối thiết bị công nghiệp' },
            { icon: 'construction', text: lang === 'EN' ? 'EPC general contractors and system integrators' : 'Tổng thầu EPC và đơn vị tích hợp hệ thống' },
            { icon: 'factory', text: lang === 'EN' ? 'Factories with numerous equipment, components, and technical records' : 'Nhà máy có nhiều thiết bị, linh kiện và hồ sơ kỹ thuật' },
            { icon: 'engineering', text: lang === 'EN' ? 'Technical, maintenance, after-sales, and QA/QC teams' : 'Đội kỹ thuật, bảo trì, hậu mãi và kiểm soát chất lượng' },
            { icon: 'verified_user', text: lang === 'EN' ? 'Businesses needing product verification and equipment info management' : 'Doanh nghiệp cần xác minh sản phẩm và quản lý thông tin thiết bị' }
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
