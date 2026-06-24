"use client";
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper to render mock dashboard
const MockDashboard = () => (
  <div className="bg-[#0C1017] rounded-xl border border-white/10 p-4 w-full h-full flex flex-col gap-4 shadow-inner">
    <div className="grid grid-cols-2 gap-4 h-[45%]">
      <div className="bg-[#111827] rounded-lg p-3 border border-white/5 relative overflow-hidden flex flex-col">
        <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider mb-2">Hiệu suất tổng (OEE)</span>
        <div className="flex-1 flex items-center justify-center relative">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
            <circle cx="32" cy="32" r="28" stroke="#22D3EE" strokeWidth="6" fill="none" strokeDasharray="175" strokeDashoffset="40" className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">78%</span>
        </div>
      </div>
      <div className="bg-[#111827] rounded-lg p-3 border border-white/5 flex flex-col">
        <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider mb-2">Cảnh báo gần nhất</span>
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-white/80 line-clamp-1">Nhiệt độ motor cao</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            <span className="text-white/80 line-clamp-1">Rung động bất thường</span>
          </div>
          <a href="#" className="text-[#22D3EE] text-[10px] mt-1 hover:underline flex items-center">Xem tất cả <span className="material-symbols-outlined text-[12px] ml-1">arrow_forward</span></a>
        </div>
      </div>
    </div>
    <div className="bg-[#111827] rounded-lg p-3 border border-white/5 h-[55%] flex flex-col">
      <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider mb-2">Xu hướng sản lượng</span>
      <div className="flex-1 flex items-end gap-2 px-2 pb-1">
        {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-[#22D3EE] to-[#10F0CB] rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  </div>
);

// Map section index to specific icons based on wireframe
const sectionIcons = [
  'account_balance', // Bối cảnh
  'extension', // Bài toán
  'database', // Dữ liệu
  'verified_user', // Cách hỗ trợ
  'insights', // Chỉ số
  'diamond', // Giá trị
  'route' // Lộ trình
];

export default function UseCaseModal({ isOpen, onClose, useCase }) {
  const { lang } = useLanguage();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !useCase) return null;

  const content = lang === 'EN' ? (useCase.enDetails || useCase.viDetails) : (useCase.viDetails || useCase.enDetails);
  
  if (!content) {
    // Fallback if no details
    return createPortal(
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#06101F]/80 backdrop-blur-sm">
        <div className="bg-[#0C1017] border border-white/10 rounded-2xl p-8 w-[90%] max-w-md min-w-[300px] text-center relative shadow-2xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <span className="material-symbols-outlined text-5xl text-[#22D3EE] mb-4">hourglass_empty</span>
          <h3 className="text-xl font-bold text-white mb-2">
            {lang === 'EN' ? 'Content Updating' : 'Nội dung đang cập nhật'}
          </h3>
          <p className="text-[#9CA3AF]">
            {lang === 'EN' ? 'Detailed information for this use case is being prepared.' : 'Thông tin chi tiết cho tình huống này đang được chuẩn bị.'}
          </p>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#06101F]/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      {/* Modal Container */}
      <div 
        className="bg-[#0A0E14] border border-[#22D3EE]/20 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col relative shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden font-body-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed top */}
        <div className="flex items-center justify-between p-4 md:px-8 md:py-4 border-b border-white/5 bg-[#0A0E14] z-10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full text-xs font-bold text-[#22D3EE] tracking-wide">
              {lang === 'EN' ? useCase.category?.en : useCase.category?.vi}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 space-y-12 custom-scrollbar bg-[#06101F] relative">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {lang === 'EN' ? useCase.enTitle : useCase.viTitle}
              </h1>
              <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
                {lang === 'EN' ? useCase.enDesc : useCase.viDesc}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-sm font-medium text-white/50">
                  {lang === 'EN' ? 'Related Products:' : 'Sản phẩm liên quan:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-xs font-bold text-[#22D3EE]">
                      <span className="material-symbols-outlined text-[14px]">check_box</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-64 lg:h-80 bg-gradient-to-br from-[#111827] to-[#0A0E14] rounded-2xl border border-white/5 p-4 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[#22D3EE]/10 opacity-30 blur-3xl rounded-full"></div>
              <MockDashboard />
            </div>
          </div>

          {/* Timeline / Sections */}
          <div className="relative border-l-2 border-white/5 ml-4 md:ml-6 space-y-16 pb-8">
            {content.sections.map((section, idx) => {
              const title = section.title;
              const isPills = idx === 2; // Dữ liệu cần kết nối
              const isGrid = idx === 4; // Chỉ số nên theo dõi
              const isCheckList = idx === 5 || idx === 3; // Giá trị kỳ vọng, Cách hỗ trợ
              const isStepper = idx === 6; // Lộ trình triển khai
              
              return (
                <div key={idx} className="relative pl-10 md:pl-12">
                  {/* Timeline Dot/Icon */}
                  <div className="absolute -left-7 top-0 w-14 h-14 bg-[#0A0E14] border-2 border-[#22D3EE]/30 rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-2">
                    <span className="material-symbols-outlined text-[#22D3EE] text-xl">{sectionIcons[idx] || 'feed'}</span>
                  </div>

                  <div className="bg-[#0C1017] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-sm group">
                    <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="text-[#22D3EE]/40 text-xs md:text-sm font-mono">{idx + 1}.</span>
                      <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">{title}</span>
                    </h3>
                    
                    {/* Render standard text */}
                    {section.type === 'text' && !isCheckList && !isPills && !isGrid && !isStepper && (
                      <div className="text-[#9CA3AF] leading-relaxed text-sm md:text-base">
                        {section.content.split('\n').map((line, i) => (
                          <p key={i} className="mb-2 last:mb-0">{line}</p>
                        ))}
                      </div>
                    )}

                    {/* Render Standard List (e.g. Bài toán) */}
                    {section.type === 'list' && !isCheckList && !isPills && !isGrid && !isStepper && (
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#9CA3AF] leading-relaxed text-sm md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]/50 mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Render Pills Grid (Dữ liệu cần kết nối) */}
                    {isPills && section.type === 'list' && (
                      <div className="flex flex-wrap gap-3">
                        {section.items.map((item, i) => (
                          <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-[#E5E7EB] hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Render Checklist (Cách hỗ trợ) */}
                    {isCheckList && section.type === 'list' && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#E5E7EB] leading-relaxed bg-white/5 rounded-xl p-4 border border-white/5">
                            <span className="material-symbols-outlined text-[#10F0CB] text-xl flex-shrink-0">check_circle</span>
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Render Giá trị kỳ vọng if it's text */}
                    {isCheckList && section.type === 'text' && (
                      <div className="flex items-start gap-3 text-[#E5E7EB] leading-relaxed bg-white/5 rounded-xl p-5 border border-white/5">
                        <span className="material-symbols-outlined text-[#10F0CB] text-2xl flex-shrink-0 mt-0.5">diamond</span>
                        <p className="text-sm md:text-base">{section.content}</p>
                      </div>
                    )}

                    {/* Render Cards Grid (Chỉ số nên theo dõi) */}
                    {isGrid && section.type === 'list' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((item, i) => {
                          const parts = item.split(':');
                          const titlePart = parts[0];
                          const descPart = parts.length > 1 ? parts.slice(1).join(':').trim() : '';
                          return (
                            <div key={i} className="bg-[#111827] border border-white/5 rounded-xl p-5 hover:border-[#22D3EE]/30 transition-colors relative overflow-hidden group/card">
                              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/card:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-4xl text-[#22D3EE]">insights</span>
                              </div>
                              <span className="block text-sm font-bold text-white mb-2 relative z-10">{titlePart}</span>
                              {descPart && <span className="block text-xs text-[#9CA3AF] leading-relaxed relative z-10">{descPart}</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Render Stepper (Lộ trình triển khai) */}
                    {isStepper && section.type === 'list' && (
                      <div className="pt-8 overflow-x-auto pb-4 custom-scrollbar">
                        <div className="flex items-start min-w-[700px] relative">
                          {/* Connecting Line */}
                          <div className="absolute top-5 left-12 right-12 h-[1px] bg-gradient-to-r from-[#22D3EE]/50 via-white/20 to-transparent -z-0"></div>
                          
                          {section.items.map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 px-4">
                              <div className="w-10 h-10 rounded-full bg-[#0C1017] border-2 border-[#22D3EE] text-[#22D3EE] flex items-center justify-center font-bold mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                {i + 1}
                              </div>
                              <span className="text-xs md:text-sm font-medium text-[#E5E7EB] leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
          
        </div>

        {/* Footer CTA - Fixed bottom */}
        <div className="p-4 md:px-8 md:py-5 border-t border-white/5 bg-[#0A0E14] flex justify-end flex-shrink-0">
          <button 
            onClick={() => window.location.href = '/demo'}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#22D3EE] text-[#06101F] font-bold hover:scale-105 hover:bg-[#10F0CB] transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            {lang === 'EN' ? `Get a demo for ${useCase.tags.join(', ')}` : `Nhận demo về ${useCase.tags.join(', ')}`}
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}

