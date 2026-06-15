"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

function parseStat(value) {
  // Try to match a simple number followed by a suffix
  const match = value.match(/^([\d.]+)([^\d.]*)$/);
  // Also try to match a range like "60-80" followed by a suffix
  const rangeMatch = value.match(/^([\d]+-[\d.]+)([^\d.]*)$/);
  
  if (rangeMatch) {
    // For ranges, we can extract the last number to count up to, and keep the first part as prefix
    const parts = rangeMatch[1].split('-');
    return { 
      number: parseFloat(parts[1]), 
      prefix: parts[0] + '-',
      suffix: rangeMatch[2], 
      isDecimal: parts[1].includes('.') 
    };
  }
  
  if (!match) return { number: 0, suffix: value, isDecimal: false, prefix: '' };
  
  return {
    number: parseFloat(match[1]),
    suffix: match[2],
    isDecimal: match[1].includes('.'),
    prefix: ''
  };
}

function useCountUp(target, isDecimal, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setCount(target);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration, isDecimal]);

  return count;
}

function StatItem({ value, labelKey, label, idx, active }) {
  const { t } = useLanguage();
  const { number, suffix, prefix, isDecimal } = parseStat(value);
  const count = useCountUp(number, isDecimal, 1800, active);

  return (
    <div
      className={`flex flex-col items-center justify-center py-10 md:py-14 px-4 text-center
        ${idx !== 0 ? 'border-l border-white/5' : ''}
        ${idx < 2 ? 'border-b lg:border-b-0 border-white/5' : ''}
      `}
    >
      <h3 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {prefix}{isDecimal ? count.toFixed(1) : count}
        <span className="text-[#22D3EE]">{suffix}</span>
      </h3>
      <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/50">
        {label || t(labelKey)}
      </p>
    </div>
  );
}

export default function TrustedBy({ customStats }) {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const logos = [
    { name: "Donghwa",     src: "/customers/donghwa.webp" },
    { name: "Long Hau",    src: "/customers/long-hau.webp" },
    { name: "Mekong",      src: "/customers/mekong.webp" },
    { name: "Rhythm",      src: "/customers/rhythm.webp" },
    { name: "Sametel",     src: "/customers/sametel.webp" },
    { name: "SNTEK",       src: "/customers/sntek.webp" },
    { name: "Tana",        src: "/customers/tana.webp" },
    { name: "Zeroboard",   src: "/customers/zeroboard.webp" },
  ];

  const defaultStats = [
    { value: "500+",  labelKey: "trusted.stat1.label" },
    { value: "50M+",  labelKey: "trusted.stat2.label" },
    { value: "35%",   labelKey: "trusted.stat3.label" },
    { value: "99.9%", labelKey: "trusted.stat4.label" },
  ];

  const stats = customStats || defaultStats;

  return (
    <section className="border-y border-surface-border bg-[#06101F]/80 relative overflow-hidden flex flex-col items-center pt-8">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full text-center mb-8 px-4">
        <p className="font-display-md text-sm md:text-base lg:text-lg uppercase tracking-wider md:tracking-[0.15em] font-bold bg-gradient-to-r from-[#10F0CB] via-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          {t('trusted.title')}
        </p>
      </div>

      {/* Marquee Section */}
      <div
        className="w-full overflow-hidden border-t border-white/5 relative"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <div className="animate-marquee flex items-center h-24 md:h-28">
          {[...Array(4)].map((_, groupIdx) => (
            <React.Fragment key={groupIdx}>
              {logos.map((logo, idx) => (
                <div key={`${groupIdx}-${idx}`} className="flex items-center shrink-0 h-full">
                  <div className="px-12 md:px-16 flex items-center justify-center h-full">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
                    />
                  </div>
                  <div className="h-1/2 w-px bg-white/10" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Statistics Section — count-up animation on scroll */}
      <div ref={statsRef} className="w-full border-t border-white/10">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatItem 
              key={idx} 
              value={stat.value} 
              labelKey={stat.labelKey} 
              label={stat.label}
              idx={idx} 
              active={statsVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

