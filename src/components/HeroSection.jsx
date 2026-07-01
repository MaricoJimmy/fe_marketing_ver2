import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

export default function HeroSection({ videoSrc }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const { t, lang } = useLanguage();
  const navigate = useNavigate();

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
      ? ['Real-time Operational Intelligence', 'Centralized Data Monitoring', 'Net Zero Emissions Calculation', 'Smart AI Technical Support', 'Machinery & Inverter Monitoring', 'Web App AI Integration']
      : ['trí tuệ vận hành thời gian thực', 'giám sát dữ liệu tập trung', 'tính toán phát thải Net Zero', 'hỗ trợ kỹ thuật thông minh AI', 'giám sát máy móc & biến tần', 'tích hợp AI Chatbot Web App'];
      
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
    <section ref={sectionRef} className="relative pt-32 pb-20 px-margin-desktop min-h-[90vh] flex flex-col justify-center">
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
          <div className="inline-block border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-[#22D3EE] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            {t('hero.badge')}
          </div>

          <h1 className="font-display-lg text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] drop-shadow-lg text-center w-full min-h-[140px] md:min-h-[180px] flex flex-col items-center justify-center">
            <span>{t('hero.title.part1')}</span>
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent mt-2 inline-flex items-center text-center lg:whitespace-nowrap">
              {currentText}
              <span className="w-1.5 md:w-2.5 h-[1em] bg-[#10F0CB] ml-2 animate-pulse rounded-full shrink-0"></span>
            </span>
          </h1>

          <p 
            className="font-body-md text-lg md:text-xl text-white/70 w-full mx-auto drop-shadow-md mt-6 text-center"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
          />

          <div className="flex flex-wrap justify-center items-center gap-4 pt-8">
            <HoverFillButton 
              onClick={() => navigate('/dung-thu')}
              className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-8 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2"
            >
              {t('hero.btn.freeTrial')}
              <span className="material-symbols-outlined text-sm font-bold">arrow_outward</span>
            </HoverFillButton>
            <HoverFillButton 
              onClick={() => setShowVideo(true)}
              rippleColor="bg-[#22D3EE]" 
              className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
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
