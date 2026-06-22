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
    <div className="min-h-[auto] lg:h-[calc(100vh-80px)] pt-24 md:pt-32 lg:pt-[12vh] pb-8 md:pb-12 lg:pb-[6vh] px-4 md:px-12 bg-[#080B10] overflow-hidden flex flex-col justify-center relative">
      {/* Enhanced Background glows */}
      <div className="absolute top-[-5%] right-[-10%] md:right-[10%] w-[120vw] md:w-[800px] h-[500px] md:h-[600px] bg-[#22D3EE]/15 md:bg-[#22D3EE]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[30%] left-[-20%] w-[400px] h-[400px] bg-[#10F0CB]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-15 pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-[4vh] xl:gap-16 items-center">
        
        {/* Left Content */}
        <div 
          className="flex flex-col gap-4 md:gap-[3vh] transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22D3EE]/40 bg-gradient-to-r from-[#22D3EE]/20 to-transparent self-start shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_#22D3EE]"></span>
            <span className="text-[#22D3EE] text-[9px] md:text-xs font-bold tracking-widest uppercase">
              {lang === 'EN' ? 'AIoT Platform for Green Digital Transformation' : 'NỀN TẢNG AIoT CHO CHUYỂN ĐỔI SỐ XANH'}
            </span>
          </div>

          <h1 className="text-[26px] sm:text-4xl lg:text-[clamp(2.5rem,5vh,3.75rem)] font-bold text-white leading-[1.3] lg:leading-[1.15] tracking-tight">
            {lang === 'EN' ? (
              <>
                Transform enterprise operations with <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">AIoT</span>{' '}
                and <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">realtime data</span>
              </>
            ) : (
              <>
                Chuyển đổi vận hành doanh nghiệp bằng <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">AIoT</span>{' '}
                và <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">dữ liệu realtime</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[clamp(0.875rem,2.5vh,1.125rem)] text-[#9CA3AF] leading-relaxed max-w-[560px]">
            {lang === 'EN' 
              ? 'Udata helps enterprises connect data from manufacturing, logistics, finance, energy, IoT devices, and internal systems into a centralized operational intelligence layer, thereby optimizing performance and building a data foundation for sustainable development.'
              : 'Udata giúp doanh nghiệp kết nối dữ liệu từ sản xuất, kho vận, tài chính, năng lượng, thiết bị IoT và các hệ thống nội bộ vào một lớp trí tuệ vận hành tập trung từ đó tối ưu hiệu suất và xây dựng nền tảng dữ liệu cho phát triển bền vững.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 pt-2 md:pt-[1vh] w-full sm:w-auto">
            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="w-full sm:w-auto flex justify-center items-center bg-[#22D3EE] text-[#06101F] px-5 py-3 rounded-xl font-bold text-sm md:text-[clamp(0.875rem,2vh,1rem)] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105"
            >
              {lang === 'EN' ? 'Explore Solutions' : 'Xem tình huống ứng dụng'}
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => router.push('/demo')}
              className="w-full sm:w-auto flex justify-center items-center border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-white px-5 py-3 rounded-xl font-bold text-sm md:text-[clamp(0.875rem,2vh,1rem)] hover:bg-[#22D3EE]/10 transition-all gap-2"
            >
              {lang === 'EN' ? 'Book a Consultation' : 'Đặt lịch Demo'}
            </HoverFillButton>
          </div>
        </div>

        {/* Right Diagram */}
        <div 
          className="relative w-full mt-2 md:mt-0 group"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '200ms' }}
        >
          {/* Outer glow for video */}
          <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] rounded-[2rem] blur-xl opacity-30 md:opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <div className="relative w-full aspect-[4/3] lg:aspect-video max-h-[40vh] md:max-h-[50vh] xl:max-h-[550px] bg-[#0C1017]/80 backdrop-blur-xl border border-[#22D3EE]/30 rounded-2xl md:rounded-[2rem] shadow-[0_0_30px_rgba(34,211,238,0.15)] flex items-center justify-center p-3 md:p-[clamp(1rem,3vh,2rem)] overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/videos/solution.mp4" type="video/mp4" />
            </video>
            {/* Subtle gradient overlay for visual blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017]/60 via-transparent to-[#22D3EE]/10 pointer-events-none" />
            {/* Corner dark gradients to hide Gemini watermark */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `radial-gradient(circle at top left, #0C1017 0%, transparent 25%), radial-gradient(circle at top right, #0C1017 0%, transparent 25%), radial-gradient(circle at bottom left, #0C1017 0%, transparent 25%), radial-gradient(circle at bottom right, #0C1017 0%, transparent 35%)`
            }} />
          </div>
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
