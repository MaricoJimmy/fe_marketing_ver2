"use client";
import React from 'react';
import { useLanguage } from './../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest/90 backdrop-blur-xl border-t border-surface-border relative z-10 pt-16 pb-12">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        
        {/* Top Border Line */}
        <div className="w-full h-px bg-surface-border mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1.5fr] gap-x-6 gap-y-10 md:gap-16">
          
          {/* Col 1: Logo & Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-center text-left md:text-center">
            <img
              alt="Udata Logo"
              className="h-10 md:h-12 w-auto mb-6"
              src="/product/logo_2_backup.png"
            />
            <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-[240px] mb-6" dangerouslySetInnerHTML={{ __html: t('footer.slogan') }}>
            </p>
            <a href="/credential.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 px-4 py-2 mb-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-[14px] font-medium text-white transition-all group">
              <span className="material-symbols-outlined text-electric-cyan group-hover:-translate-y-1 transition-transform">download</span>
              {t('footer.download_udata_profile')}
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <a href="tel:+84 965778589" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-electric-cyan transition-colors">
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">call</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566884154567" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/udatajsc/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/udata_jsc/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}}>
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Dịch vụ chính */}
          <div className="col-span-1 flex flex-col items-start text-left space-y-6">
            <h4 className="font-bold text-[18px] md:text-[22px] tracking-tight text-on-surface">{t('footer.main_services')}</h4>
            <div className="flex flex-col items-start space-y-4">
              {/* Product names are standard so we keep them as is */}
              {['Uboard', 'Ugate', 'Uzero', 'MiniUgate', 'Build to Order', 'Offshore Dev Teams'].map(item => (
                <a key={item} className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{item}</a>
              ))}
            </div>
          </div>

          {/* Col 3: Khám phá */}
          <div className="col-span-1 flex flex-col items-start text-left space-y-6">
            <h4 className="font-bold text-[18px] md:text-[22px] tracking-tight text-on-surface">{t('footer.explore')}</h4>
            <div className="flex flex-col items-start space-y-4">
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.about')}</a>
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.solution')}</a>
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.usecase')}</a>
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.sustainability')}</a>
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.blog')}</a>
              <a className="block text-[14px] md:text-[15px] text-on-surface-variant hover:text-electric-cyan transition-colors" href="#">{t('nav.resource')}</a>
            </div>
          </div>

          {/* Col 4: Thông tin liên hệ */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start text-left space-y-6 pt-4 md:pt-0">
            <h4 className="font-bold text-[18px] md:text-[22px] tracking-tight text-on-surface">{t('footer.contact')}</h4>
            <div className="flex flex-col items-start space-y-4 text-[14px] md:text-[15px] text-on-surface-variant w-full">
              
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1877F2] text-lg">call</span>
                <span> +84 965778589</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1877F2] text-lg">mail</span>
                <a href="mailto:support@udata.ai" className="hover:text-electric-cyan transition-colors">support@udata.ai</a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1877F2] text-lg">mail</span>
                <a href="mailto:sales@udata.ai" className="hover:text-electric-cyan transition-colors">sales@udata.ai</a>
              </div>
              
              <div className="flex flex-col items-start space-y-4 w-full pt-1">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1877F2] text-lg mt-0.5 shrink-0">location_on</span>
                  <div>
                    <p className="font-medium text-on-surface">{t('footer.hn_office')}</p>
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.hn_address') }}></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1877F2] text-lg mt-0.5 shrink-0">location_on</span>
                  <div>
                    <p className="font-medium text-on-surface">{t('footer.hcm_office')}</p>
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.hcm_address') }}></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom divider (optional, but looks good in layout) */}
        <div className="w-full h-px bg-surface-border mt-16 mb-4"></div>
      </div>
    </footer>
  );
}

