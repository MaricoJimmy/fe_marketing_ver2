"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from '@/components/ui/HoverFillButton';
import TrustedBy from '@/components/TrustedBy';
import SolutionChallenges from '@/components/SolutionChallenges';
import SolutionPlatforms from '@/components/SolutionPlatforms';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';
import SolutionUseCases from '@/components/SolutionUseCases';
import SolutionWhyChooseUs from '@/components/SolutionWhyChooseUs';
import SolutionProcess from '@/components/SolutionProcess';
import SolutionFAQ from '@/components/SolutionFAQ';
import SolutionCTA from '@/components/SolutionCTA';
import ScrollReveal from '@/components/ScrollReveal';

export default function SolutionPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Solutions | Udata" : "Giải pháp | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleExploreClick = () => {
    // Scroll down to the next section or navigate
    window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <>
    <div className="min-h-screen lg:h-[calc(100vh-80px)] pt-32 lg:pt-[6vh] pb-12 lg:pb-[4vh] px-6 md:px-12 bg-[#080B10] overflow-hidden flex flex-col justify-center relative">
      {/* Background glow */}
      <div className="absolute top-0 right-[20%] w-[800px] h-[600px] bg-[#22D3EE]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[4vh] xl:gap-16 items-center">
        
        {/* Left Content */}
        <div 
          className="flex flex-col gap-[3vh] transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_#22D3EE]"></span>
            <span className="text-[#22D3EE] text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {lang === 'EN' ? 'AIoT Platform for Green Digital Transformation' : 'NỀN TẢNG AIoT CHO CHUYỂN ĐỔI SỐ XANH'}
            </span>
          </div>

          <h1 className="text-[clamp(2rem,5vh,3.75rem)] font-bold text-white leading-[1.15] tracking-tight">
            {lang === 'EN' ? (
              <>
                Transform enterprise<br />operations with <span className="text-[#22D3EE]">AIoT</span><br />
                and <span className="text-[#0EA5E9]">realtime data</span>
              </>
            ) : (
              <>
                Chuyển đổi vận hành<br />doanh nghiệp bằng <span className="text-[#22D3EE]">AIoT</span><br />
                và <span className="text-[#0EA5E9]">dữ liệu realtime</span>
              </>
            )}
          </h1>

          <p className="text-[clamp(0.875rem,2.5vh,1.125rem)] text-[#9CA3AF] leading-relaxed max-w-[560px]">
            {lang === 'EN' 
              ? 'Udata helps enterprises connect data from manufacturing, logistics, finance, energy, IoT devices, and internal systems into a centralized operational intelligence layer, thereby optimizing performance and building a data foundation for sustainable development.'
              : 'Udata giúp doanh nghiệp kết nối dữ liệu từ sản xuất, kho vận, tài chính, năng lượng, thiết bị IoT và các hệ thống nội bộ vào một lớp trí tuệ vận hành tập trung từ đó tối ưu hiệu suất và xây dựng nền tảng dữ liệu cho phát triển bền vững.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-[1vh]">
            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="bg-[#22D3EE] text-[#06101F] px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vh,0.875rem)] rounded-xl font-bold text-[clamp(0.875rem,2vh,1rem)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              {lang === 'EN' ? 'Explore Solutions' : 'Xem tình huống ứng dụng'}
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => router.push('/demo')}
              className="border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-white px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vh,0.875rem)] rounded-xl font-bold text-[clamp(0.875rem,2vh,1rem)] hover:bg-[#22D3EE]/10 transition-all flex items-center gap-2"
            >
              {lang === 'EN' ? 'Book a Consultation' : 'Đặt lịch Demo'}
            </HoverFillButton>
          </div>
        </div>

        {/* Right Diagram */}
        <div 
          className="relative w-full aspect-[4/3] max-h-[50vh] xl:max-h-[600px] bg-[#0C1017] border border-white/5 rounded-3xl shadow-2xl transition-all duration-1000 ease-out flex items-center justify-center p-[clamp(1rem,3vh,2rem)] overflow-hidden"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '200ms' }}
        >
          {/* Tech Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-50 bg-[length:40px_40px]"></div>
            <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[#22D3EE]/40 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#0EA5E9]/40 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          </div>

          {/* We build a flex layout for nodes to align them, and draw SVG behind them. */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-[5%] z-10">
            
            {/* Left nodes */}
            <div className="flex flex-col gap-[clamp(1rem,4vh,4rem)] relative z-10 w-[28%] max-w-[160px]">
              <div className="h-[clamp(3rem,8vh,4rem)] bg-[#161B22] border border-[#22D3EE]/30 rounded-xl flex items-center justify-center text-[clamp(8px,1.5vh,12px)] text-white/80 shadow-[0_0_15px_rgba(34,211,238,0.1)] font-medium text-center px-2 animate-float-node" style={{ animationDelay: '0s' }}>AIoT Intelligence</div>
              <div className="h-[clamp(3rem,8vh,4rem)] bg-[#161B22] border border-[#0EA5E9]/30 rounded-xl flex items-center justify-center text-[clamp(8px,1.5vh,12px)] text-white/80 shadow-[0_0_15px_rgba(14,165,233,0.1)] font-medium text-center px-2 animate-float-node" style={{ animationDelay: '1.5s' }}>Realtime Data Flow</div>
            </div>

            {/* Center node */}
            <div className="relative z-10 w-[25%] max-w-[128px] aspect-square">
              <div className="w-full h-full rounded-full border border-[#22D3EE]/50 flex items-center justify-center relative bg-[#080B10] shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <div className="absolute inset-[-10%] rounded-full border-t border-b border-[#22D3EE]/40 animate-[spin_8s_linear_infinite]"></div>
                <div className="absolute inset-[-20%] rounded-full border border-[#22D3EE]/10"></div>
                <div className="absolute inset-0 bg-[#22D3EE]/10 rounded-full blur-xl"></div>
                <div className="text-center relative z-10">
                  <div className="text-white font-bold text-[clamp(12px,2.5vh,20px)] tracking-widest">UDATA</div>
                  <div className="text-[clamp(6px,1.2vh,10px)] text-[#22D3EE] mt-1 font-medium uppercase tracking-wider">Core</div>
                </div>
              </div>
            </div>

            {/* Right nodes */}
            <div className="flex flex-col gap-[clamp(1rem,4vh,4rem)] relative z-10 w-[28%] max-w-[160px]">
              <div className="h-[clamp(3rem,8vh,4rem)] bg-[#0D131F] border border-[#3B82F6]/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] relative px-2 animate-float-node" style={{ animationDelay: '0.8s' }}>
                <div className="absolute inset-0 bg-[#3B82F6]/5 rounded-xl pointer-events-none"></div>
                <div className="text-[#60A5FA] font-medium text-[clamp(8px,1.5vh,12px)] text-center">Operational Insights</div>
              </div>
              
              <div className="h-[clamp(3rem,8vh,4rem)] bg-[#0C1A14] border border-[#10B981]/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] relative px-2 animate-float-node" style={{ animationDelay: '2.2s' }}>
                <div className="absolute inset-0 bg-[#10B981]/5 rounded-xl pointer-events-none"></div>
                <div className="text-[#34D399] font-medium text-[clamp(8px,1.5vh,12px)] text-center">Green Transformation</div>
              </div>
            </div>

          </div>

          {/* SVG Connecting Lines */}
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Left to center lines */}
            <path d="M 80 105 C 140 105, 140 150, 200 150" stroke="rgba(34,211,238,0.5)" strokeWidth="3" fill="none" strokeDasharray="12 12" className="animate-flow-dash" />
            <path d="M 80 195 C 140 195, 140 150, 200 150" stroke="rgba(14,165,233,0.5)" strokeWidth="3" fill="none" strokeDasharray="12 12" className="animate-flow-dash" />
            
            {/* Center to right lines */}
            <path d="M 200 150 C 260 150, 260 105, 320 105" stroke="rgba(59,130,246,0.5)" strokeWidth="3" fill="none" strokeDasharray="12 12" className="animate-flow-dash" />
            <path d="M 200 150 C 260 150, 260 195, 320 195" stroke="rgba(16,185,129,0.5)" strokeWidth="3" fill="none" strokeDasharray="12 12" className="animate-flow-dash" />
            
            {/* Data flow dots */}
            <circle cx="0" cy="0" r="5" fill="#22D3EE" className="shadow-[0_0_15px_#22D3EE]">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 80 105 C 140 105, 140 150, 200 150" />
            </circle>
            <circle cx="0" cy="0" r="5" fill="#0EA5E9" className="shadow-[0_0_15px_#0EA5E9]">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 80 195 C 140 195, 140 150, 200 150" />
            </circle>
            <circle cx="0" cy="0" r="5" fill="#60A5FA" className="shadow-[0_0_15px_#60A5FA]">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 200 150 C 260 150, 260 105, 320 105" />
            </circle>
            <circle cx="0" cy="0" r="5" fill="#34D399" className="shadow-[0_0_15px_#34D399]">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 200 150 C 260 150, 260 195, 320 195" />
            </circle>
          </svg>
        </div>
        
        
      </div>
    </div>
    <ScrollReveal><TrustedBy /></ScrollReveal>
    <ScrollReveal><SolutionChallenges /></ScrollReveal>
    <ScrollReveal><SolutionPlatforms /></ScrollReveal>
    <ScrollReveal><SolutionsByIndustry /></ScrollReveal>
    <ScrollReveal><SolutionUseCases /></ScrollReveal>
    <ScrollReveal><SolutionWhyChooseUs /></ScrollReveal>
    <ScrollReveal><SolutionProcess /></ScrollReveal>
    <ScrollReveal><SolutionFAQ /></ScrollReveal>
    <ScrollReveal><SolutionCTA /></ScrollReveal>
    </>
  );
}
