"use client";
import React, { useState, useEffect } from 'react';

export default function MiniUgateHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10 lg:py-20">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 left-[40%] bg-white p-3 rounded-full shadow-lg transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
        <div className={`absolute top-[40%] left-[50%] bg-white p-2 rounded-full shadow-lg transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-xl">🤔</span>
        </div>
        <div className={`absolute top-20 right-[10%] bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-slate-600">Đang chat...</span>
        </div>
        <div className={`absolute top-[30%] right-[5%] bg-white p-3 rounded-full shadow-lg transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" className="w-6 h-6 rounded-full" />
        </div>
        <div className={`absolute bottom-[20%] left-[45%] bg-white p-3 rounded-full shadow-lg transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jocelyn" alt="avatar" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Left Column */}
      <div className="relative z-10 space-y-8 text-left">
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-medium transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <span className="material-symbols-outlined text-base">auto_awesome</span>
          Thuộc hệ sinh thái Ugate - Udata
        </div>

        <h1 
          className={`text-5xl md:text-6xl font-bold text-slate-900 leading-[1.2] transition-all duration-700 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          MiniUgate – <span className="text-[#007BFF]">AI Chatbot</span><br />
          cho Website
        </h1>

        <p 
          className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Tạo chatbot AI thông minh cho website chỉ trong vài phút.<br />
          <strong className="text-slate-800">Không cần code. Không cần IT.</strong>
        </p>

        <div 
          className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <button className="bg-[#007BFF] text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Dùng thử miễn phí
          </button>
          <button className="bg-transparent border border-blue-200 text-[#007BFF] px-8 py-3.5 rounded-lg font-semibold text-base flex items-center gap-2 hover:bg-blue-50 transition-all">
            <span className="material-symbols-outlined text-xl">play_arrow</span>
            Xem MiniUgate hoạt động
          </button>
        </div>

        <div 
          className={`inline-flex items-center gap-3 px-5 py-3 mt-4 bg-white border border-blue-100 rounded-full shadow-sm transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex -space-x-2">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            🤝 Đăng Kí Affiliate — <span className="text-[#007BFF]">Kiếm 2.000.000đ/deal</span>
          </span>
        </div>
      </div>

      {/* Right Column (Chatbot Mockup) */}
      <div 
        className={`relative z-10 lg:pl-10 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      >
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,123,255,0.2)] overflow-hidden border border-slate-100">
          {/* Chat Header */}
          <div className="bg-[#007BFF] px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">robot_2</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">MiniUgate</h3>
              <p className="text-blue-100 text-sm">Online</p>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="p-6 space-y-4 bg-slate-50/50">
            {/* Bot Message */}
            <div className="flex justify-end">
              <div className="bg-[#007BFF] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                Xin chào! Tôi có thể giúp gì cho bạn?
              </div>
            </div>
            {/* User Message */}
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 text-slate-700 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                Sản phẩm này có bảo hành không?
              </div>
            </div>
            {/* Bot Message */}
            <div className="flex justify-end relative">
              <div className="bg-[#007BFF] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm leading-relaxed">
                Dạ có ạ! Sản phẩm được bảo hành 12 tháng chính hãng. Bạn cần thêm thông tin gì không ạ? 😊
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white p-1 rounded-full shadow-sm border border-slate-100">
                 <span className="text-sm">😍</span>
              </div>
            </div>
            {/* Bot Typing */}
            <div className="flex justify-end">
              <div className="bg-[#007BFF] text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-sm flex items-center gap-1.5">
                <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI badge */}
        <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-3xl shadow-xl">
          <div className="bg-white rounded-3xl p-3 flex flex-col items-center justify-center gap-1">
             <span className="material-symbols-outlined text-4xl text-blue-500">smart_toy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

