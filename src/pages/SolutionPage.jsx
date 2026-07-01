import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverFillButton from '../components/ui/HoverFillButton';
import TrustedBy from '../components/TrustedBy';
import SolutionChallenges from '../components/SolutionChallenges';
import SolutionPlatforms from '../components/SolutionPlatforms';
import SolutionsByIndustry from '../components/SolutionsByIndustry';
import SolutionUseCases from '../components/SolutionUseCases';
import SolutionWhyChooseUs from '../components/SolutionWhyChooseUs';
import SolutionProcess from '../components/SolutionProcess';
import SolutionFAQ from '../components/SolutionFAQ';
import SolutionCTA from '../components/SolutionCTA';

export default function SolutionPage() {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Solutions | Udata" : "Giải pháp | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#080B10] overflow-hidden flex flex-col justify-center relative">
      {/* Background glow */}
      <div className="absolute top-0 right-[20%] w-[800px] h-[600px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div 
          className="space-y-8 transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_#22D3EE]"></span>
            <span className="text-[#22D3EE] text-[11px] md:text-xs font-bold tracking-widest uppercase">
              {lang === 'EN' ? 'AIoT Platform for Green Digital Transformation' : 'Nền tảng AIoT cho Chuyển đổi số Xanh'}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.15] tracking-tight">
            {lang === 'EN' ? (
              <>
                Transform Enterprise<br />Operations with <span className="text-[#22D3EE]">AI,</span><br />
                <span className="text-[#0EA5E9]">Data Intelligence &</span><br />
                <span className="text-[#3B82F6]">Sustainability</span>
              </>
            ) : (
              <>
                Chuyển đổi Vận hành<br />Doanh nghiệp với <span className="text-[#22D3EE]">AI,</span><br />
                <span className="text-[#0EA5E9]">Dữ liệu thông minh &</span><br />
                <span className="text-[#3B82F6]">Phát triển bền vững</span>
              </>
            )}
          </h1>

          <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-[540px]">
            {lang === 'EN' 
              ? 'An integrated platform that helps organizations unify data, deploy enterprise AI, automate customer engagement, and optimize carbon performance.'
              : 'Nền tảng tích hợp giúp các tổ chức hợp nhất dữ liệu, triển khai AI doanh nghiệp, tự động hóa tương tác khách hàng và tối ưu hóa hiệu suất carbon.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <HoverFillButton 
              onClick={() => {}}
              className="bg-[#22D3EE] text-[#06101F] px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              {lang === 'EN' ? 'Book a Demo' : 'Nhận Demo'}
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => {}}
              className="border border-white/10 bg-white/5 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base font-bold">play_arrow</span>
              {lang === 'EN' ? 'Explore the Platform' : 'Khám phá Nền tảng'}
            </HoverFillButton>
          </div>
        </div>

        {/* Right Diagram */}
        <div 
          className="relative w-full aspect-[4/3] max-h-[600px] bg-[#0C1017] border border-white/5 rounded-3xl shadow-2xl transition-all duration-1000 ease-out flex items-center justify-center p-8 overflow-hidden"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '200ms' }}
        >
          {/* We build a flex layout for nodes to align them, and draw SVG behind them. */}
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
            
            {/* Left nodes */}
            <div className="flex flex-col gap-8 relative z-10" id="left-nodes">
              <div className="w-14 h-14 bg-[#161B22] border border-white/5 rounded-xl flex items-center justify-center text-[10px] text-white/40 shadow-lg font-medium">ERP</div>
              <div className="w-14 h-14 bg-[#161B22] border border-white/5 rounded-xl flex items-center justify-center text-[10px] text-white/40 shadow-lg font-medium">IoT</div>
              <div className="w-14 h-14 bg-[#161B22] border border-white/5 rounded-xl flex items-center justify-center text-[10px] text-white/40 shadow-lg font-medium">CRM</div>
            </div>

            {/* Center node */}
            <div className="relative z-10" id="center-node">
              <div className="w-32 h-32 rounded-full border border-[#22D3EE]/30 flex items-center justify-center relative bg-[#080B10]">
                <div className="absolute inset-[-15px] rounded-full border border-[#22D3EE]/20 animate-[spin_12s_linear_infinite]"></div>
                <div className="absolute inset-[-30px] rounded-full border border-[#22D3EE]/5"></div>
                <div className="absolute inset-0 bg-[#22D3EE]/5 rounded-full blur-xl"></div>
                <div className="text-center relative z-10">
                  <div className="text-[#22D3EE] font-bold text-base tracking-widest">UBOARD</div>
                  <div className="text-[10px] text-[#22D3EE]/60 mt-1 font-medium">Data Hub</div>
                </div>
              </div>
            </div>

            {/* Right nodes */}
            <div className="flex flex-col gap-10 relative z-10 w-28 md:w-36 items-end" id="right-nodes">
              {/* UGATE */}
              <div className="w-24 h-24 bg-[#0D131F] border border-[#3B82F6]/40 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.15)] relative mb-12">
                <div className="absolute inset-0 bg-[#3B82F6]/5 rounded-2xl pointer-events-none"></div>
                <div className="text-[#60A5FA] font-bold text-xs tracking-wider">UGATE</div>
                <div className="text-[8px] text-white/40 mt-1.5">AI Engine</div>
              </div>
              
              <div className="flex gap-4">
                {/* MINIUGATE */}
                <div className="w-[72px] h-[72px] bg-[#161B22] border border-white/10 rounded-xl flex flex-col items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-[9px] tracking-wider">MINIUGATE</div>
                  <div className="text-[7px] text-white/40 mt-1.5">Engagement</div>
                </div>
                {/* UZERO */}
                <div className="w-[72px] h-[72px] bg-[#0C1A14] border border-[#10B981]/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)] relative">
                  <div className="absolute inset-0 bg-[#10B981]/5 rounded-xl pointer-events-none"></div>
                  <div className="text-[#34D399] font-bold text-[10px] tracking-wider">UZERO</div>
                  <div className="text-[7px] text-white/40 mt-1.5">Carbon</div>
                </div>
              </div>
            </div>

          </div>

          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Left to center lines */}
            <path d="M 15% 25% C 30% 25%, 35% 50%, 50% 50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" fill="none" />
            <path d="M 15% 50% L 50% 50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" fill="none" />
            <path d="M 15% 75% C 30% 75%, 35% 50%, 50% 50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" fill="none" />
            
            {/* Center to right lines */}
            <path d="M 50% 50% C 70% 50%, 65% 30%, 85% 30%" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" fill="none" />
            <path d="M 50% 50% C 70% 50%, 65% 75%, 85% 75%" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        
        
      </div>
    </div>
    <TrustedBy />
    <SolutionChallenges />
    <SolutionPlatforms />
    <SolutionsByIndustry />
    <SolutionUseCases />
    <SolutionWhyChooseUs />
    <SolutionProcess />
    <SolutionFAQ />
    <SolutionCTA />
    </>
  );
}
