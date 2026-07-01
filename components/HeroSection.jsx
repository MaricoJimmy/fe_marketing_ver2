"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function HeroSection({ videoSrc }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();
  const router = useRouter();

  const [showVideo, setShowVideo] = useState(false);

  // Typing effect state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setCurrentWordIndex(0);
    setCurrentText('');
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const typingWords = lang === 'EN' 
      ? ['Intelligent Operations', 'Financial Visibility', 'Domain-Specific AI Agents']
      : ['Vận hành thông minh', 'Minh bạch tài chính', 'AI Agent chuyên ngành'];
      
    let timer;
    const currentWord = typingWords[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText.length === currentWord.length) {
          timer = setTimeout(() => setIsDeleting(true), 2500); // Wait longer on full word
        }
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, lang]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowVideo(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 px-4 md:px-margin-desktop min-h-[90vh] flex flex-col justify-center">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center -mt-16">
        <video 
          ref={videoRef}
          src={videoSrc || "/videos/344800_medium.mp4"}
          loop
          muted 
          playsInline
          className="absolute w-[85%] h-[95%] rounded-3xl object-cover opacity-70 shadow-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-background/30 z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 z-20"></div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto text-center relative z-10 -mt-16">
        <div className="max-w-[1200px] mx-auto space-y-md flex flex-col items-center w-full px-4">
          {/* Badge */}
          <div className="inline-block border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-[#22D3EE] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 backdrop-blur-sm max-w-[90vw] md:max-w-none text-center">
            {t('hero.badge')}
          </div>

          <h1 className="font-display-lg text-[clamp(22px,6.5vw,28px)] tracking-tighter sm:tracking-normal leading-[1.3] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white md:leading-[1.2] drop-shadow-lg text-center w-full px-0 sm:px-2 flex flex-col items-center justify-start min-h-[140px] md:min-h-[200px]">
            <div className="mb-1 md:mb-4 whitespace-nowrap sm:whitespace-normal">
              {t('hero.title.part1')}
            </div>
            <div className="w-full max-w-[800px] h-[60px] sm:h-[96px] md:h-[120px] lg:h-[144px] flex justify-center">
              <div>
                <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">
                  {currentText}
                </span>
                <span className="inline-block w-1.5 md:w-2.5 h-[0.85em] bg-[#10F0CB] ml-1 md:ml-2 animate-pulse rounded-full align-baseline translate-y-[1px] md:translate-y-[2px]"></span>
              </div>
            </div>
          </h1>

          {/* Desktop Subtitle */}
          <p 
            className="hidden md:block font-body-md text-xl text-white/70 w-full max-w-3xl mx-auto drop-shadow-md mt-6 text-center px-0 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
          />
          {/* Mobile Subtitle */}
          <p 
            className="md:hidden font-body-md text-sm text-white/70 w-full max-w-3xl mx-auto drop-shadow-md mt-2 text-center px-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle.mobile') }}
          />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-4 md:pt-8 w-full px-4 sm:px-0">
            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-bold text-sm md:text-base shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2"
            >
              {t('hero.btn.freeTrial')}
              <span className="material-symbols-outlined text-xs md:text-sm font-bold">arrow_outward</span>
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => router.push('/solution')}
              rippleColor="bg-[#22D3EE]" 
              className="w-full sm:w-auto justify-center border border-white/20 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-bold text-sm md:text-base hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              {t('hero.btn.seePlatform')}
            </HoverFillButton>
          </div>

        </div>

      </div>

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
    </section>
  );
}

