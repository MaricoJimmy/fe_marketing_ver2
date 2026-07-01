"use client";

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalDataFlow from '@/components/GlobalDataFlow';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-clip w-full text-[#E5E7EB]">
        <GlobalDataFlow />
        <div className="sustainability-glow top-[-100px] right-[-100px]"></div>
        <div className="sustainability-glow bottom-[10%] left-[-200px]"></div>
        
        <Header />
        <main className="pt-[45px] relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
