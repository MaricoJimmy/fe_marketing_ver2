"use client";
import React from 'react';

export default function ProductDataFlow() {
  return (
    <section className="relative py-xl px-margin-desktop overflow-hidden border-b border-surface-border bg-background z-20">
      <div className="max-w-[1440px] mx-auto text-center mb-10 space-y-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Data collection ecosystem <span className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent">Udata</span>
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Các thiết bị vệ tinh liên tục truyền tải luồng dữ liệu thời gian thực về UGate để phân tích, trả lời khách hàng tự động và tối ưu hóa vận hành nhà máy.
        </p>
      </div>

      {/* Product Data Flow Animation Layer */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] z-10 mt-10">
        
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            {/* Fade out gradient from satellites to UGate */}
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(0, 251, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 251, 255, 0.4)" />
            </linearGradient>
          </defs>

          {/* Path 1: Uboard to UGate (Curved) */}
          <path id="path1" d="M 20 15 C 20 30, 40 37.5, 50 37.5" fill="none" stroke="url(#lineGrad)" strokeWidth="0.4" strokeLinecap="round" />
          <circle r="0.6" fill="#fff" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </circle>
          <circle r="0.4" fill="#00FBFF" filter="url(#glow)">
            <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </circle>

          {/* Path 2: MiniUgate to UGate (Straight Beam) */}
          <path id="path2" d="M 50 15 L 50 37.5" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" strokeLinecap="round" />
          <circle r="0.7" fill="#fff" filter="url(#glow)">
            <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </circle>
          <circle r="0.4" fill="#00FBFF" filter="url(#glow)">
            <animateMotion dur="2.5s" begin="1.75s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </circle>

          {/* Path 3: Uzero to UGate (Curved) */}
          <path id="path3" d="M 80 15 C 80 30, 60 37.5, 50 37.5" fill="none" stroke="url(#lineGrad)" strokeWidth="0.4" strokeLinecap="round" />
          <circle r="0.6" fill="#fff" filter="url(#glow)">
            <animateMotion dur="3.5s" begin="1s" repeatCount="indefinite">
              <mpath href="#path3" />
            </animateMotion>
          </circle>
          <circle r="0.4" fill="#00FBFF" filter="url(#glow)">
            <animateMotion dur="3.5s" begin="2.75s" repeatCount="indefinite">
              <mpath href="#path3" />
            </animateMotion>
          </circle>
        </svg>

        {/* Uboard Node */}
        <div className="absolute left-[20%] top-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group">
          <p className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent">Uboard</p>
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center border-white/20 hover:border-electric-cyan/50 transition-all hover:shadow-[0_0_20px_rgba(0,251,255,0.3)] bg-white/5">
            <img src="/product/uboard-logo.webp" alt="Uboard" className="w-[60%] h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100" />
          </div>
        </div>

        {/* MiniUgate Node */}
        <div className="absolute left-[50%] top-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group">
          <p className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent">Mini Ugate</p>
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center border-white/20 hover:border-electric-cyan/50 transition-all hover:shadow-[0_0_20px_rgba(0,251,255,0.3)] bg-white/5">
            <img src="/product/mini-ugate-logo.webp" alt="MiniUgate" className="w-[60%] h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100" />
          </div>
        </div>

        {/* Uzero Node */}
        <div className="absolute left-[80%] top-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group">
          <p className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent">Uzero</p>
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center border-white/20 hover:border-electric-cyan/50 transition-all hover:shadow-[0_0_20px_rgba(0,251,255,0.3)] bg-white/5">
            <img src="/product/uzero-logo.webp" alt="Uzero" className="w-[60%] h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100" />
          </div>
        </div>

        {/* Central UGate Node */}
        <div className="absolute left-[50%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group z-20">
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-electric-cyan/10 border-2 border-electric-cyan/50 flex items-center justify-center shadow-[0_0_40px_rgba(0,251,255,0.3)] animate-pulse-node relative backdrop-blur-sm">
            <img src="/product/ugate-logo.webp" alt="UGate" className="w-[50%] h-auto object-contain brightness-0 invert" />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <p className="bg-gradient-to-r from-[#4AA0F0] to-[#76C0F8] bg-clip-text text-transparent font-bold">UGate Core</p>
            </div>
          </div>
        </div>

        {/* Base Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-electric-cyan/5 blur-[100px] rounded-full -z-10"></div>
      </div>
    </section>
  );
}

