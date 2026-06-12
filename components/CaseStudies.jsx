"use client";
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { USE_CASES_DATA } from './UseCaseGrid';
import UseCaseModal from './UseCaseModal';

const images = [
  "/images/cases/case1.png",
  "/images/cases/case2.png",
  "/images/cases/case3.png",
  "/images/cases/case4.png",
  "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
];

const CASE_STUDIES = USE_CASES_DATA.slice(0, 7).map((caseData, index) => ({
  ...caseData,
  image: images[index] || images[0]
}));

export default function CaseStudies() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const [selectedCase, setSelectedCase] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Reusable Card Component
  const StudyCard = ({ study, isLastInPreview }) => (
    <div 
      onClick={() => {
        if (isLastInPreview) {
          setModalOpen(true);
        } else {
          setSelectedCase(study);
        }
      }}
      className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:-translate-y-2 cursor-pointer border border-surface-border hover:border-electric-cyan/50"
    >
      <img alt={lang === 'EN' ? study.enTitle : study.viTitle} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" src={study.image} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06101F]/95 via-[#06101F]/60 to-transparent group-hover:from-[#06101F] group-hover:via-[#06101F]/80 transition-all duration-500"></div>
      
      {/* The +X Overlay for the last preview card */}
      {isLastInPreview && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-black/80">
          <span className="text-white text-6xl font-display-lg font-bold drop-shadow-lg">+{CASE_STUDIES.length - 3}</span>
          <span className="text-white/80 font-body-md mt-2 text-lg">Xem tất cả</span>
        </div>
      )}
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <div className="mb-4">
           <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider group-hover:bg-electric-cyan/20 group-hover:text-electric-cyan group-hover:border-electric-cyan/50 transition-colors duration-300">
             {lang === 'EN' ? study.category.en : study.category.vi}
           </span>
        </div>

        <h3 className="font-headline-md text-white text-xl md:text-2xl font-bold leading-tight mb-2 group-hover:text-electric-cyan transition-colors duration-300">
          {lang === 'EN' ? study.enTitle : study.viTitle}
        </h3>
        
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <div className="overflow-hidden">
            <p className="text-on-surface-variant text-sm mt-3 mb-5 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {lang === 'EN' ? study.enDesc : study.viDesc}
            </p>
            
            <button className="flex items-center gap-2 text-electric-cyan font-bold text-sm group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mb-2">
              {t('case.cta')}
              <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-md px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-background/30 backdrop-blur-sm border-t border-surface-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-lg space-y-sm text-center md:text-left">
            <div className="inline-block bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-4 py-2 rounded-sm mb-4">
              <span className="font-label-sm text-sm uppercase tracking-wider text-[#22D3EE]">{t('case.badge')}</span>
            </div>
            <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl max-w-4xl text-white font-bold leading-tight">
              {t('case.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {CASE_STUDIES.slice(0, 4).map((study, index) => (
              <StudyCard key={study.viTitle} study={study} isLastInPreview={index === 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Modal */}
      {modalOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex flex-col items-center animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-2xl cursor-pointer"
            onClick={() => setModalOpen(false)}
          ></div>
          
          <button 
            onClick={() => setModalOpen(false)} 
            className="fixed top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-[110] flex items-center justify-center shadow-lg backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div className="relative w-full max-w-[1440px] h-full overflow-y-auto overflow-x-hidden py-12 px-4 md:px-12 z-[105]">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-5xl font-display-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] drop-shadow-lg">
                Tất cả câu chuyện thành công ({CASE_STUDIES.length})
              </h2>
              <p className="text-white/80 mt-4 font-body-md text-lg">Khám phá cách các doanh nghiệp chuyển đổi số cùng UDATA</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CASE_STUDIES.map((study, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    setModalOpen(false);
                    router.push('/use-case#usecase-grid');
                  }}
                  className="group relative aspect-[16/10] rounded-xl overflow-hidden glass-card cursor-pointer border border-surface-border hover:border-electric-cyan/50 transition-all duration-300"
                >
                  <img alt={lang === 'EN' ? study.enTitle : study.viTitle} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src={study.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                    <h3 className="font-headline-lg-mobile text-white uppercase tracking-tight text-xl mb-1 group-hover:text-electric-cyan transition-colors">
                      {lang === 'EN' ? study.enTitle : study.viTitle}
                    </h3>
                    <p className="text-white/80 text-xs mb-3 line-clamp-2">{lang === 'EN' ? study.enDesc : study.viDesc}</p>
                    <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                        {lang === 'EN' ? study.category.en : study.category.vi}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Use Case Modal */}
      {selectedCase && (
        <UseCaseModal 
          useCase={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </>
  );
}

