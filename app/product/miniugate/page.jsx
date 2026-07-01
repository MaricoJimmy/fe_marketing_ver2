"use client";
import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import DynamicNodesBG from '@/components/backgrounds/DynamicNodesBG';
import AnimatedNumber from '@/components/AnimatedNumber';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import HoverFillButton from '@/components/ui/HoverFillButton';

const floatStyle = (delay = '0s', duration = '3s') => ({
  animation: `floatBob ${duration} ease-in-out ${delay} infinite`,
});

export default function MiniUgatePage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const challengesRef = useRef(null);
  const [isChallengesVisible, setIsChallengesVisible] = useState(false);
  const solutionsRef = useRef(null);
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  const solutionsSliderRef = useRef(null);

  const featuresRef = useRef(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const featuresSliderRef = useRef(null);

  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const industriesSliderRef = useRef(null);

  useEffect(() => {
    document.title = lang === 'EN' ? 'MiniUgate – AI Chatbot for Website | Udata' : 'MiniUgate – AI Chatbot cho Website | Udata';
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowVideo(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsChallengesVisible(true);
      },
      { threshold: 0.15 }
    );
    if (challengesRef.current) observer.observe(challengesRef.current);

    const solutionsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsSolutionsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (solutionsRef.current) solutionsObserver.observe(solutionsRef.current);

    const featuresObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsFeaturesVisible(true);
      },
      { threshold: 0.15 }
    );
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);

    return () => {
      observer.disconnect();
      solutionsObserver.disconnect();
      featuresObserver.disconnect();
    };
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      [solutionsSliderRef, featuresSliderRef, industriesSliderRef].forEach(ref => {
        if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            ref.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by roughly one card width (snap will correct it)
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      });
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, []);

  // Workflow auto step
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveWorkflowStep(prev => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-hidden">
      <DynamicNodesBG />

      {/* ── Video Modal ─────────────────────────────────────── */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              onClick={() => setShowVideo(false)}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <iframe
              src="https://drive.google.com/file/d/1Pw-bCkkUvulhDdR4qlO9q9tBdtHteqaW/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>



      <section className="relative w-full max-w-[1440px] mx-auto px-8 md:px-20 pt-36 pb-28">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ── LEFT – Text ──────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-8 relative z-10">

            {/* Badge */}
            <div
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 0ms',
              }}
            >
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#4AA0F0] px-4 py-2 rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-base">auto_awesome</span>
                {lang === 'EN' ? "Part of the Ugate – Udata ecosystem" : "Thuộc hệ sinh thái Ugate – Udata"}
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 120ms',
              }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.15]">
                MiniUgate –{' '}
                <span className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent">
                  AI Chatbot
                </span>
                <br />
                {lang === 'EN' ? "for Website" : "cho Website"}
              </h1>
            </div>

            {/* Subtitle */}
            <div
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 240ms',
              }}
            >
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                {lang === 'EN' ? "Create a smart AI chatbot for your website in minutes." : "Tạo chatbot AI thông minh cho website chỉ trong vài phút."}
                <br />
                <strong className="text-white/90">
                  {lang === 'EN' ? "No coding. No IT needed." : "Không cần code. Không cần IT."}
                </strong>
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease-out 360ms',
              }}
            >
              <HoverFillButton 
                onClick={() => { window.location.href = 'https://ugate.udata.ai/vi/welcome'; }}
                className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-3.5 rounded-full font-bold text-base shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                {lang === 'EN' ? "Try for free" : "Dùng thử miễn phí"}
              </HoverFillButton>
              <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold text-base flex items-center gap-2 transition-all duration-300"
                onClick={() => setShowVideo(true)}
              >
                <span className="material-symbols-outlined text-xl text-[#4AA0F0]">play_arrow</span>
                {lang === 'EN' ? "See MiniUgate in action" : "Xem MiniUgate hoạt động"}
              </button>
            </div>


          </div>

          {/* ── RIGHT – Chat mockup ───────────────────────────────────────── */}
          <div
            className="flex-shrink-0 w-full lg:w-[420px] relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(48px)',
              transition: 'all 1s ease-out 300ms',
            }}
          >
            {/* Floating emoji bubbles – each has its own float animation speed/delay */}
            <div className="absolute -top-14 -left-10 w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-lg"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 600ms', ...floatStyle('0s', '3.2s') }}>😊</div>
            <div className="absolute top-8 -left-20 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-base"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 800ms', ...floatStyle('0.6s', '2.8s') }}>🤔</div>
            <div className="absolute -top-8 -right-10 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-base"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 1000ms', ...floatStyle('1.1s', '3.6s') }}>👩‍💼</div>
            <div className="absolute bottom-24 -right-12 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-base"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 1200ms', ...floatStyle('0.4s', '4s') }}>🧑‍💻</div>
            <div className="absolute -bottom-8 left-1/3 w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-lg"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 700ms', ...floatStyle('1.8s', '3s') }}>😄</div>

            {/* "Đang chat..." pill – gentle float */}
            <div className="absolute -top-6 right-16 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 1100ms', ...floatStyle('0.9s', '4.5s') }}>
              <span className="w-1.5 h-1.5 bg-[#4AA0F0] rounded-full animate-pulse" />
              <span className="text-xs text-white/50">{lang === 'EN' ? "Typing..." : "Đang chat..."}</span>
            </div>

            {/* "AI trả lời ngay" pill – gentle float */}
            <div className="absolute bottom-16 -left-16 bg-[#4AA0F0]/10 border border-[#4AA0F0]/20 text-[#4AA0F0] px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-semibold"
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-out 900ms', ...floatStyle('1.5s', '3.8s') }}>
              <span className="material-symbols-outlined text-sm">bolt</span>
              {lang === 'EN' ? "AI replies instantly" : "AI trả lời ngay"}
            </div>

            {/* Chat card */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-10px_rgba(74,160,240,0.2)] bg-[#111114]">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">robot_2</span>
                </div>
                <div>
                  <p className="text-white font-bold leading-tight">MiniUgate</p>
                  <p className="text-white/75 text-xs">Online</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-3 min-h-[240px] bg-[#111114]">
                {/* Bot */}
                <div style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.5s ease-out 600ms' }} className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#4AA0F0] to-[#5AAFFF] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm shadow-[0_4px_20px_rgba(74,160,240,0.35)] max-w-[85%]">
                    {lang === 'EN' ? "Hello! How can I help you?" : "Xin chào! Tôi có thể giúp gì cho bạn?"}
                  </div>
                </div>
                {/* User */}
                <div style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.5s ease-out 900ms' }} className="flex justify-start">
                  <div className="bg-white/8 border border-white/10 text-white/80 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[85%]">
                    {lang === 'EN' ? "Does this product have a warranty?" : "Sản phẩm này có bảo hành không?"}
                  </div>
                </div>
                {/* Bot reply */}
                <div style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.5s ease-out 1200ms' }} className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#4AA0F0] to-[#5AAFFF] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm shadow-[0_4px_20px_rgba(74,160,240,0.35)] max-w-[85%] leading-relaxed">
                    {lang === 'EN' ? "Yes! The product has a 12-month genuine warranty. Do you need any more info? 😊" : "Dạ có ạ! Sản phẩm được bảo hành 12 tháng chính hãng. Bạn cần thêm thông tin gì không ạ? 😊"}
                  </div>
                </div>
                {/* Typing */}
                <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-out 1500ms' }} className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#4AA0F0] to-[#5AAFFF] px-4 py-3 rounded-2xl rounded-tr-sm flex items-center gap-1.5 shadow-[0_4px_20px_rgba(74,160,240,0.3)]">
                    <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                    <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}
            <div className="absolute -bottom-5 -right-4 bg-gradient-to-br from-[#4AA0F0] to-[#76C0F8] p-0.5 rounded-2xl shadow-[0_8px_30px_rgba(74,160,240,0.45)]">
              <div className="bg-[#0A0A0A] rounded-2xl p-3">
                <span className="material-symbols-outlined text-4xl text-[#4AA0F0]">smart_toy</span>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ── Challenges Section ───────────────────────────────────────── */}
      <section 
        ref={challengesRef}
        className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-28 z-10"
      >
        <div 
          className="text-center space-y-4 mb-16 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isChallengesVisible ? 1 : 0, 
            transform: isChallengesVisible ? 'translateY(0)' : 'translateY(40px)' 
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {lang === 'EN' ? "Traditional websites have traffic, but..." : "Website truyền thống có traffic, nhưng..."}
          </h2>
          <p className="text-lg text-white/60">
            {lang === 'EN' ? (
              <>These are the <span className="text-[#F59E0B] font-semibold">challenges</span> most businesses face</>
            ) : (
              <>Đây là những <span className="text-[#F59E0B] font-semibold">thách thức</span> mà hầu hết doanh nghiệp đang gặp phải</>
            )}
          </p>
        </div>

        <div className="w-full max-w-[1200px] mx-auto border border-white/10 rounded-[2rem] overflow-hidden bg-[#0A0E14] grid grid-cols-2 lg:grid-cols-4">
          
          {/* Block 1 */}
          <div 
            className="flex flex-col items-center justify-center p-6 md:p-10 text-center border-b border-r border-white/10 lg:border-b-0 hover:bg-white/5 transition-colors"
            style={{ 
              opacity: isChallengesVisible ? 1 : 0, 
              transitionDelay: '100ms'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={65} isVisible={isChallengesVisible} />–<AnimatedNumber value={75} isVisible={isChallengesVisible} />
              <span className="text-[#F59E0B]">%</span>
            </h3>
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {lang === 'EN' ? "visitors leave if not supported immediately" : "khách rời đi khi không hỗ trợ ngay"}
            </p>
          </div>
          
          {/* Block 2 */}
          <div 
            className="flex flex-col items-center justify-center p-6 md:p-10 text-center border-b border-white/10 lg:border-r lg:border-b-0 hover:bg-white/5 transition-colors"
            style={{ 
              opacity: isChallengesVisible ? 1 : 0, 
              transitionDelay: '200ms'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={15} isVisible={isChallengesVisible} />–<AnimatedNumber value={60} isVisible={isChallengesVisible} />
              <span className="text-[#F59E0B] text-xl ml-1">{lang === 'EN' ? 'min' : 'phút'}</span>
            </h3>
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {lang === 'EN' ? "common customer service response time" : "thời gian phản hồi CSKH trung bình"}
            </p>
          </div>

          {/* Block 3 */}
          <div 
            className="flex flex-col items-center justify-center p-6 md:p-10 text-center border-r border-white/10 hover:bg-white/5 transition-colors"
            style={{ 
              opacity: isChallengesVisible ? 1 : 0, 
              transitionDelay: '300ms'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={40} isVisible={isChallengesVisible} />–<AnimatedNumber value={50} isVisible={isChallengesVisible} />
              <span className="text-[#F59E0B]">%</span>
            </h3>
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {lang === 'EN' ? "customer service questions repeated daily" : "câu hỏi CSKH lặp lại mỗi ngày"}
            </p>
          </div>

          {/* Block 4 */}
          <div 
            className="flex flex-col items-center justify-center p-6 md:p-10 text-center hover:bg-white/5 transition-colors"
            style={{ 
              opacity: isChallengesVisible ? 1 : 0, 
              transitionDelay: '400ms'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={2} isVisible={isChallengesVisible} />–<AnimatedNumber value={3} isVisible={isChallengesVisible} />
              <span className="text-[#F59E0B]">%</span>
            </h3>
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {lang === 'EN' ? "average website conversion rate" : "tỷ lệ chuyển đổi website trung bình"}
            </p>
          </div>
        </div>

        <div 
          className="text-center mt-12 text-sm text-white/40 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isChallengesVisible ? 1 : 0, 
            transitionDelay: '500ms'
          }}
        >
          {lang === 'EN' ? "* Estimated data based on SMB industry benchmarks" : "* Số liệu ước tính theo industry benchmark SMB"}
        </div>
      </section>

      {/* ── Solutions Section ───────────────────────────────────────── */}
      <section 
        ref={solutionsRef}
        className="relative w-full max-w-[1440px] mx-auto px-8 md:px-20 pb-28 z-10"
      >
        <div 
          className="text-center space-y-4 mb-16 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isSolutionsVisible ? 1 : 0, 
            transform: isSolutionsVisible ? 'translateY(0)' : 'translateY(40px)' 
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {lang === 'EN' ? "MiniUgate helps change that" : "MiniUgate giúp thay đổi điều đó"}
          </h2>
          <p className="text-lg text-white/60">
            {lang === 'EN' ? "Real results when deploying AI Chatbot for your website" : "Kết quả thực tế khi triển khai AI Chatbot cho website của bạn"}
          </p>
        </div>

        <div 
          ref={solutionsSliderRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory px-4 md:px-0"
        >
          
          {/* Card 1: Hiệu quả AI Chatbot */}
          <div 
            className="shrink-0 w-[85vw] md:w-[400px] snap-center bg-[#111114] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out"
            style={{ 
              opacity: isSolutionsVisible ? 1 : 0, 
              transform: isSolutionsVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '100ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl">robot_2</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{lang === 'EN' ? "AI Chatbot Efficiency" : "Hiệu quả AI Chatbot"}</h3>
            <ul className="space-y-4 mb-8 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "45–65% of questions automatically handled by AI" : "45–65% câu hỏi được AI xử lý tự động"}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "< 5 seconds response time" : "< 5 giây thời gian phản hồi"}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "24/7 – 100% continuous operation" : "24/7 – 100% hoạt động liên tục"}</span>
              </li>
            </ul>

            {/* Chat Mockup */}
            <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4AA0F0]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px] text-[#4AA0F0]">robot_2</span>
                </div>
                <div className="bg-[#4AA0F0]/20 text-white/90 text-[13px] px-3 py-2 rounded-2xl rounded-tl-sm">
                  {lang === 'EN' ? "Hello! How can I help?" : "Xin chào! Tôi có thể giúp gì?"}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-white/10 text-white/90 text-[13px] px-3 py-2 rounded-2xl rounded-tr-sm">
                  {lang === 'EN' ? "How much is the product?" : "Giá sản phẩm bao nhiêu?"}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4AA0F0]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px] text-[#4AA0F0]">robot_2</span>
                </div>
                <div className="flex items-center gap-1 bg-[#4AA0F0]/20 px-3 py-2.5 rounded-2xl rounded-tl-sm">
                   <span className="w-1.5 h-1.5 bg-[#4AA0F0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <span className="w-1.5 h-1.5 bg-[#4AA0F0] rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                   <span className="w-1.5 h-1.5 bg-[#4AA0F0] rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Tương tác & chuyển đổi */}
          <div 
            className="shrink-0 w-[85vw] md:w-[400px] snap-center bg-[#111114] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out"
            style={{ 
              opacity: isSolutionsVisible ? 1 : 0, 
              transform: isSolutionsVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '200ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl">trending_up</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{lang === 'EN' ? "Interaction & Conversion" : "Tương tác & chuyển đổi"}</h3>
            <ul className="space-y-4 mb-8 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "50–70% of visitors start chatting" : "50–70% khách bắt đầu chat"}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "+20–30% time-on-site" : "+20–30% time-on-site"}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>+15–30% conversion rate</span>
              </li>
            </ul>

            {/* Chart Mockup */}
            <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-end h-44">
              <div className="flex items-center gap-1.5 mb-auto">
                 <span className="material-symbols-outlined text-sm text-white/40">bar_chart</span>
                 <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{lang === 'EN' ? "Statistics" : "Thống kê"}</span>
              </div>
              <div className="flex items-end gap-2 h-16 mb-4 mt-4">
                <div className="bg-[#4AA0F0]/80 w-full rounded-sm" style={{height: '40%'}}></div>
                <div className="bg-[#4AA0F0]/80 w-full rounded-sm" style={{height: '70%'}}></div>
                <div className="bg-[#4AA0F0]/80 w-full rounded-sm" style={{height: '50%'}}></div>
                <div className="bg-[#4AA0F0] w-full rounded-sm" style={{height: '100%'}}></div>
                <div className="bg-[#4AA0F0]/80 w-full rounded-sm" style={{height: '60%'}}></div>
                <div className="bg-[#4AA0F0]/80 w-full rounded-sm" style={{height: '80%'}}></div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-auto">
                 <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                   <div className="text-[10px] text-white/40 mb-0.5">{lang === 'EN' ? "Chats" : "Lượt chat"}</div>
                   <div className="text-sm font-bold text-white">1,247</div>
                 </div>
                 <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                   <div className="text-[10px] text-white/40 mb-0.5">Conversion</div>
                   <div className="text-sm font-bold text-[#4AA0F0]">+28%</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 3: Tối ưu nguồn lực */}
          <div 
            className="shrink-0 w-[85vw] md:w-[400px] snap-center bg-[#111114] border border-white/10 rounded-3xl p-8 flex flex-col hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out"
            style={{ 
              opacity: isSolutionsVisible ? 1 : 0, 
              transform: isSolutionsVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl">attach_money</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{lang === 'EN' ? "Resource Optimization" : "Tối ưu nguồn lực"}</h3>
            <ul className="space-y-4 mb-8 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "40–60% reduction in customer service workload" : "40–60% giảm workload CSKH"}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4AA0F0] mt-2 shrink-0" />
                <span>{lang === 'EN' ? "30–50% reduction in operational costs" : "30–50% giảm chi phí vận hành"}</span>
              </li>
            </ul>

            {/* Support Tickets Mockup */}
            <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-1.5 mb-4">
                 <span className="material-symbols-outlined text-sm text-white/40">confirmation_number</span>
                 <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Support Tickets</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                    <span className="text-[13px] text-white/80">{lang === 'EN' ? "Inquiry about order #1234" : "Hỏi về đơn hàng #1234"}</span>
                  </div>
                  <span className="text-[11px] text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded-full">{lang === 'EN' ? "Resolved" : "Đã xử lý"}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                    <span className="text-[13px] text-white/80">{lang === 'EN' ? "Return/Exchange request" : "Yêu cầu đổi trả"}</span>
                  </div>
                  <span className="text-[11px] text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded-full">{lang === 'EN' ? "Resolved" : "Đã xử lý"}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]"></span>
                    <span className="text-[13px] text-white/80">{lang === 'EN' ? "Technical question" : "Câu hỏi kỹ thuật"}</span>
                  </div>
                  <span className="text-[11px] text-yellow-400 font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">{lang === 'EN' ? "Pending" : "Đang chờ"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div 
          className="text-center mt-12 text-sm text-white/40 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isSolutionsVisible ? 1 : 0, 
            transitionDelay: '400ms'
          }}
        >
          {lang === 'EN' ? "* Estimated results, depending on traffic & website content" : "* Kết quả ước tính, phụ thuộc traffic & nội dung website"}
        </div>
      </section>

      {/* ── Workflow Section ───────────────────────────────────────── */}
      <section className="relative w-full max-w-[1000px] mx-auto px-8 md:px-20 pb-28 z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center bg-[#4AA0F0]/10 border border-[#4AA0F0]/20 text-[#4AA0F0] px-4 py-1.5 rounded-full text-sm font-medium mb-2">
            {lang === 'EN' ? "Simple process" : "Quy trình đơn giản"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {lang === 'EN' ? "How MiniUgate works" : "Cách MiniUgate hoạt động"}
          </h2>
          <p className="text-lg text-white/60">
            {lang === 'EN' ? "Just 3 steps to turn your website into an interactive AI channel" : "Chỉ 3 bước để biến website thành kênh AI tương tác"}
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row items-center md:items-start justify-between gap-0 relative w-full">
          
          {/* Step 1 */}
          <div 
            className={`flex flex-col items-center text-center z-10 flex-1 px-4 transition-all duration-500 cursor-pointer ${activeWorkflowStep === 0 ? 'opacity-100 scale-105' : 'opacity-40 scale-100 hover:opacity-70'}`}
            onClick={() => setActiveWorkflowStep(0)}
          >
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${activeWorkflowStep === 0 ? 'bg-[#4AA0F0]/20 border border-[#4AA0F0]/50 shadow-[0_0_40px_rgba(74,160,240,0.3)]' : 'bg-white/5 border border-white/10'}`}>
              <span className={`material-symbols-outlined text-5xl transition-colors duration-500 ${activeWorkflowStep === 0 ? 'text-[#4AA0F0]' : 'text-white/50'}`}>language</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-xs px-2 py-0.5 rounded-full mr-2 mb-1">{lang === 'EN' ? "Step 1" : "Bước 1"}</span>
              <br/>
              {lang === 'EN' ? "Your Website" : "Website của bạn"}
            </h3>
            <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Content is scanned\n& trained" : "Nội dung được quét\n& huấn luyện"}</p>
          </div>

          {/* Arrow 1 */}
          <div className={`flex absolute top-[48px] left-[calc(16.666%+64px)] right-[calc(50%+64px)] items-center z-0 -translate-y-1/2 transition-opacity duration-500 ${activeWorkflowStep === 0 ? 'opacity-100' : 'opacity-30'}`}>
             <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4AA0F0]/50 to-[#4AA0F0] relative rounded-full">
                <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#4AA0F0]"></div>
             </div>
          </div>

          {/* Step 2 */}
          <div 
            className={`flex flex-col items-center text-center z-10 flex-1 px-4 transition-all duration-500 cursor-pointer ${activeWorkflowStep === 1 ? 'opacity-100 scale-105' : 'opacity-40 scale-100 hover:opacity-70'}`}
            onClick={() => setActiveWorkflowStep(1)}
          >
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${activeWorkflowStep === 1 ? 'bg-gradient-to-br from-[#4AA0F0] to-[#76C0F8] shadow-[0_0_50px_rgba(74,160,240,0.5)]' : 'bg-white/5 border border-white/10'}`}>
              <span className={`material-symbols-outlined text-5xl transition-colors duration-500 ${activeWorkflowStep === 1 ? 'text-[#06101F]' : 'text-white/50'}`}>psychology</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-xs px-2 py-0.5 rounded-full mr-2 mb-1">{lang === 'EN' ? "Step 2" : "Bước 2"}</span>
              <br/>
              MiniUgate AI
            </h3>
            <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Processing &\ncontext understanding" : "Xử lý &\nhiểu ngữ cảnh"}</p>
          </div>

          {/* Arrow 2 */}
          <div className={`flex absolute top-[48px] left-[calc(50%+64px)] right-[calc(16.666%+64px)] items-center z-0 -translate-y-1/2 transition-opacity duration-500 ${activeWorkflowStep === 1 ? 'opacity-100' : 'opacity-30'}`}>
             <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4AA0F0]/50 to-[#4AA0F0] relative rounded-full">
                <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#4AA0F0]"></div>
             </div>
          </div>

          {/* Step 3 */}
          <div 
            className={`flex flex-col items-center text-center z-10 flex-1 px-4 transition-all duration-500 cursor-pointer ${activeWorkflowStep === 2 ? 'opacity-100 scale-105' : 'opacity-40 scale-100 hover:opacity-70'}`}
            onClick={() => setActiveWorkflowStep(2)}
          >
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${activeWorkflowStep === 2 ? 'bg-[#4AA0F0]/20 border border-[#4AA0F0]/50 shadow-[0_0_40px_rgba(74,160,240,0.3)]' : 'bg-white/5 border border-white/10'}`}>
              <span className={`material-symbols-outlined text-5xl transition-colors duration-500 ${activeWorkflowStep === 2 ? 'text-[#4AA0F0]' : 'text-white/50'}`}>chat_bubble</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-xs px-2 py-0.5 rounded-full mr-2 mb-1">{lang === 'EN' ? "Step 3" : "Bước 3"}</span>
              <br/>
              Live Chat
            </h3>
            <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Instant replies\nto customers" : "Trả lời khách hàng\ntức thì"}</p>
          </div>
        </div>

        {/* Mobile View: Auto-playing Carousel showing 1 step at a time */}
        <div className="flex md:hidden flex-col items-center relative w-full mt-4">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8 w-full max-w-[240px] mx-auto">
            <div 
              onClick={() => setActiveWorkflowStep(0)}
              className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 z-10 ${activeWorkflowStep === 0 ? 'bg-[#4AA0F0] text-black shadow-[0_0_15px_rgba(74,160,240,0.5)]' : (activeWorkflowStep > 0 ? 'bg-[#4AA0F0]/20 text-[#4AA0F0] border border-[#4AA0F0]/50' : 'bg-white/5 text-white/40 border border-white/10')}`}
            >
              1
            </div>
            
            <div className="flex-1 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
               <div className={`absolute top-0 left-0 h-full bg-[#4AA0F0] transition-all duration-500 ${activeWorkflowStep > 0 ? 'w-full' : 'w-0'}`} />
            </div>

            <div 
              onClick={() => setActiveWorkflowStep(1)}
              className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 z-10 ${activeWorkflowStep === 1 ? 'bg-[#4AA0F0] text-black shadow-[0_0_15px_rgba(74,160,240,0.5)]' : (activeWorkflowStep > 1 ? 'bg-[#4AA0F0]/20 text-[#4AA0F0] border border-[#4AA0F0]/50' : 'bg-white/5 text-white/40 border border-white/10')}`}
            >
              2
            </div>

            <div className="flex-1 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
               <div className={`absolute top-0 left-0 h-full bg-[#4AA0F0] transition-all duration-500 ${activeWorkflowStep > 1 ? 'w-full' : 'w-0'}`} />
            </div>

            <div 
              onClick={() => setActiveWorkflowStep(2)}
              className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 z-10 ${activeWorkflowStep === 2 ? 'bg-[#4AA0F0] text-black shadow-[0_0_15px_rgba(74,160,240,0.5)]' : 'bg-white/5 text-white/40 border border-white/10'}`}
            >
              3
            </div>
          </div>

          {/* Steps Container */}
          <div className="w-full relative min-h-[220px]">
            {/* Step 1 */}
            <div className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${activeWorkflowStep === 0 ? 'opacity-100 z-10 translate-x-0' : (activeWorkflowStep > 0 ? 'opacity-0 -translate-x-10 pointer-events-none' : 'opacity-0 translate-x-10 pointer-events-none')}`}>
              <div className="w-24 h-24 bg-[#4AA0F0]/20 border border-[#4AA0F0]/50 shadow-[0_0_40px_rgba(74,160,240,0.3)] rounded-3xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-[#4AA0F0]">language</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-[10px] px-2 py-0.5 rounded-full mr-2 mb-1 uppercase tracking-wider">{lang === 'EN' ? "Step 1" : "Bước 1"}</span>
                <br/>
                {lang === 'EN' ? "Your Website" : "Website của bạn"}
              </h3>
              <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Content is scanned\n& trained" : "Nội dung được quét\n& huấn luyện"}</p>
            </div>

            {/* Step 2 */}
            <div className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${activeWorkflowStep === 1 ? 'opacity-100 z-10 translate-x-0' : (activeWorkflowStep > 1 ? 'opacity-0 -translate-x-10 pointer-events-none' : 'opacity-0 translate-x-10 pointer-events-none')}`}>
              <div className="w-24 h-24 bg-gradient-to-br from-[#4AA0F0] to-[#76C0F8] shadow-[0_0_50px_rgba(74,160,240,0.5)] rounded-3xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-[#06101F]">psychology</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-[10px] px-2 py-0.5 rounded-full mr-2 mb-1 uppercase tracking-wider">{lang === 'EN' ? "Step 2" : "Bước 2"}</span>
                <br/>
                MiniUgate AI
              </h3>
              <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Processing &\ncontext understanding" : "Xử lý &\nhiểu ngữ cảnh"}</p>
            </div>

            {/* Step 3 */}
            <div className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${activeWorkflowStep === 2 ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <div className="w-24 h-24 bg-[#4AA0F0]/20 border border-[#4AA0F0]/50 shadow-[0_0_40px_rgba(74,160,240,0.3)] rounded-3xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-[#4AA0F0]">chat_bubble</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="inline-block bg-[#4AA0F0]/20 text-[#4AA0F0] text-[10px] px-2 py-0.5 rounded-full mr-2 mb-1 uppercase tracking-wider">{lang === 'EN' ? "Step 3" : "Bước 3"}</span>
                <br/>
                Live Chat
              </h3>
              <p className="text-white/60 text-sm whitespace-pre-line">{lang === 'EN' ? "Instant replies\nto customers" : "Trả lời khách hàng\ntức thì"}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#4AA0F0]/10 border border-[#4AA0F0]/20 text-[#4AA0F0] px-5 py-2 rounded-full text-sm font-medium">
             <span className="material-symbols-outlined text-base text-yellow-400" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
             {lang === 'EN' ? "Done in minutes" : "Hoàn thành trong vài phút"}
          </div>
        </div>
      </section>

      {/* ── Features Section ───────────────────────────────────────── */}
      <section 
        ref={featuresRef}
        className="relative w-full max-w-[1440px] mx-auto px-8 md:px-20 pb-28 z-10"
      >
        <div 
          className="text-center space-y-4 mb-16 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isFeaturesVisible ? 1 : 0, 
            transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)' 
          }}
        >
          <div className="inline-flex items-center justify-center bg-[#4AA0F0]/10 border border-[#4AA0F0]/20 text-[#4AA0F0] px-4 py-1.5 rounded-full text-sm font-medium mb-2">
            {lang === 'EN' ? "Highlight Features" : "Tính năng nổi bật"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {lang === 'EN' ? "Everything you need to create an AI chatbot" : "Mọi thứ bạn cần để tạo chatbot AI"}
          </h2>
          <p className="text-lg text-white/60">
            {lang === 'EN' ? "From setup to operation, MiniUgate has all the tools for you" : "Từ thiết lập đến vận hành, MiniUgate có đầy đủ công cụ cho bạn"}
          </p>
        </div>

        <div 
          ref={featuresSliderRef}
          className="flex overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-visible hide-scrollbar gap-4 xl:gap-6 pb-8 snap-x snap-mandatory lg:snap-none px-4 md:px-0"
        >
          
          {/* Card 1 */}
          <div 
            className="shrink-0 w-[85vw] md:w-[350px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 lg:p-5 xl:p-8 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out group flex flex-col"
            style={{ 
              opacity: isFeaturesVisible ? 1 : 0, 
              transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '100ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl group-hover:scale-110 transition-transform duration-300">auto_fix_high</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No-code AI Chatbot</h3>
            <p className="text-white/60 leading-relaxed">
              {lang === 'EN' ? "Anyone can create a chatbot. No technical knowledge needed, no developer needed." : "Ai cũng tạo được chatbot. Không cần kiến thức kỹ thuật, không cần developer."}
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="shrink-0 w-[85vw] md:w-[350px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 lg:p-5 xl:p-8 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out group flex flex-col"
            style={{ 
              opacity: isFeaturesVisible ? 1 : 0, 
              transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '200ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl group-hover:scale-110 transition-transform duration-300">description</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{lang === 'EN' ? "Train from Website, Documents & FAQs" : "Train từ Website, Documents & FAQs"}</h3>
            <p className="text-white/60 leading-relaxed">
              {lang === 'EN' ? "Chatbot understands your business content correctly. Automatically learns from your data." : "Chatbot hiểu đúng nội dung doanh nghiệp. Tự động học từ dữ liệu của bạn."}
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="shrink-0 w-[85vw] md:w-[350px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 lg:p-5 xl:p-8 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out group flex flex-col"
            style={{ 
              opacity: isFeaturesVisible ? 1 : 0, 
              transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl group-hover:scale-110 transition-transform duration-300">chat</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Chat Sessions</h3>
            <p className="text-white/60 leading-relaxed">
              {lang === 'EN' ? "View & analyze customer conversations. Understand insights and optimize continuously." : "Xem & phân tích hội thoại khách hàng. Hiểu insight và tối ưu liên tục."}
            </p>
          </div>

          {/* Card 4 */}
          <div 
            className="shrink-0 w-[85vw] md:w-[350px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 lg:p-5 xl:p-8 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out group flex flex-col"
            style={{ 
              opacity: isFeaturesVisible ? 1 : 0, 
              transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '400ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl group-hover:scale-110 transition-transform duration-300">confirmation_number</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Support Tickets</h3>
            <p className="text-white/60 leading-relaxed">
              {lang === 'EN' ? "AI + human handle critical requests. Do not miss any potential customers." : "AI + con người xử lý yêu cầu quan trọng. Không bỏ sót khách hàng tiềm năng."}
            </p>
          </div>

          {/* Card 5 */}
          <div 
            className="shrink-0 w-[85vw] md:w-[350px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 lg:p-5 xl:p-8 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_30px_rgba(74,160,240,0.15)] transition-all duration-300 ease-out group flex flex-col"
            style={{ 
              opacity: isFeaturesVisible ? 1 : 0, 
              transform: isFeaturesVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '500ms'
            }}
          >
            <div className="w-12 h-12 bg-[#4AA0F0]/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4AA0F0] text-2xl group-hover:scale-110 transition-transform duration-300">palette</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{lang === 'EN' ? "Customize chatbot interface" : "Tuỳ chỉnh giao diện chatbot"}</h3>
            <p className="text-white/60 leading-relaxed">
              {lang === 'EN' ? "Colors, tone, brand. Chatbot carries a strong business mark." : "Màu sắc, giọng điệu, thương hiệu. Chatbot mang đậm dấu ấn doanh nghiệp."}
            </p>
          </div>

        </div>
      </section>
      {/* ── Industries Section ───────────────────────────────────────── */}
      <section className="relative w-full max-w-[1440px] mx-auto px-8 md:px-20 pb-28 z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {lang === 'EN' ? "Suitable for multiple industries" : "Phù hợp với nhiều ngành nghề"}
          </h2>
          <p className="text-lg text-white/60">
            {lang === 'EN' ? "MiniUgate supports diverse business sectors" : "MiniUgate hỗ trợ đa dạng lĩnh vực kinh doanh"}
          </p>
        </div>

        <div 
          ref={industriesSliderRef}
          className="flex overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-visible hide-scrollbar gap-4 md:gap-6 pb-8 snap-x snap-mandatory lg:snap-none px-4 md:px-0"
        >
          {[
            { icon: "shopping_cart", textEN: "E-commerce", textVI: "Website\nbán hàng" },
            { icon: "work", textEN: "Service\nBusiness", textVI: "Doanh nghiệp\ndịch vụ" },
            { icon: "school", textEN: "Education", textVI: "Giáo dục –\nđào tạo" },
            { icon: "domain", textEN: "Real Estate", textVI: "Bất động sản" },
            { icon: "business_center", textEN: "B2B\nBusiness", textVI: "Doanh nghiệp\nB2B" },
          ].map((item, idx) => (
            <div key={idx} className="shrink-0 w-[75vw] md:w-[220px] lg:w-auto snap-center bg-[#111114] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row xl:flex-row items-center gap-4 xl:gap-5 hover:border-[#4AA0F0]/50 hover:shadow-[0_0_20px_rgba(74,160,240,0.15)] transition-all duration-300">
               <div className="w-12 h-12 rounded-xl bg-[#4AA0F0]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4AA0F0] text-2xl">{item.icon}</span>
               </div>
               <span className="text-white font-medium whitespace-pre-line text-sm md:text-base leading-tight text-center md:text-left">
                 {lang === 'EN' ? item.textEN : item.textVI}
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA Section ───────────────────────────────────────── */}
      <section className="relative w-full max-w-[1200px] mx-auto px-4 md:px-20 pb-36 z-10">
        <div className="relative rounded-[40px] p-8 md:p-24 text-center overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-700 hover:border-[#4AA0F0]/30 hover:shadow-[0_0_80px_rgba(74,160,240,0.15)]">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111114] to-[#050505] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] bg-[#4AA0F0]/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none group-hover:bg-[#4AA0F0]/25 group-hover:scale-110 transition-all duration-1000 z-0"></div>
          
          {/* Inner glass overlay */}
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#4AA0F0]/10 to-[#76C0F8]/10 border border-[#4AA0F0]/30 text-[#4AA0F0] px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(74,160,240,0.2)] backdrop-blur-md">
              <span className="material-symbols-outlined text-[18px] mr-2 animate-pulse">rocket_launch</span>
              {lang === 'EN' ? "Start today" : "Bắt đầu ngay hôm nay"}
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {lang === 'EN' ? "Turn your website into a" : "Biến website thành"}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA0F0] via-[#76C0F8] to-[#E0F2FE] drop-shadow-lg">
                {lang === 'EN' ? "24/7 AI consulting channel" : "kênh tư vấn AI 24/7"}
              </span>
            </h2>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
              {lang === 'EN' ? "Create an AI chatbot for your website in minutes. No coding. No IT needed." : "Tạo chatbot AI cho website chỉ trong vài phút. Không cần code. Không cần IT."}
            </p>

            {/* CTA Button */}
            <HoverFillButton 
              onClick={() => { window.location.href = 'https://ugate.udata.ai/vi/welcome'; }}
              className="group/btn relative overflow-hidden bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] text-[#06101F] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-[0_0_40px_rgba(74,160,240,0.4)] hover:shadow-[0_0_60px_rgba(74,160,240,0.6)] transition-all duration-300 mb-12 flex items-center gap-3 transform hover:scale-105"
            >
              <span className="relative z-10">{lang === 'EN' ? "Try MiniUgate for free" : "Dùng thử MiniUgate miễn phí"}</span>
              <span className="material-symbols-outlined text-2xl relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
            </HoverFillButton>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm font-medium">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">check_circle</span>
                No-code
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">bolt</span>
                {lang === 'EN' ? "Fast deployment" : "Triển khai nhanh"}
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <span className="material-symbols-outlined text-[#4AA0F0] text-[18px]">hub</span>
                {lang === 'EN' ? "Ugate ecosystem" : "Thuộc hệ sinh thái Ugate"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
