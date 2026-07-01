"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverFillButton from './ui/HoverFillButton';

const NAV_ITEMS = [
  { labelKey: 'nav.about', path: '/about-us' },
  {
    labelKey: 'nav.platform',
    children: [
      { labelKey: 'Uboard', path: '/product/uboard' },
      { labelKey: 'Ugate', path: '/product/ugate' }, // We just use the string itself if not translated
      { labelKey: 'MiniUgate', path: '/product/miniugate' },
      { labelKey: 'Uzero', path: '/product/uzero' },
      { labelKey: 'nav.build_to_order', path: '/build-to-order' },
      { labelKey: 'nav.offshore_dev', path: '/offshore-dev-teams' },
    ],
  },
  { labelKey: 'nav.solution', path: '/solution' },
  { labelKey: 'nav.usecase', path: '/use-case' },
  { labelKey: 'nav.sustainability', path: '/sustainability' },
  { labelKey: 'nav.blog', path: '/blog' },
  { labelKey: 'nav.resource', path: '/careers' },
];

function NavItem({ item, depth = 0, onClose }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (item.scrollTo) {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(item.scrollTo);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        const el = document.getElementById(item.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onClose && onClose();
      setOpen(!open);
    } else if (hasChildren) {
      setOpen(!open);
    } else if (item.path) {
      router.push(item.path);
      window.scrollTo(0, 0);
      onClose && onClose();
    }
  };

  const displayLabel = t(item.labelKey);

  const isActive = item.path === pathname || (item.children && item.children.some(child => child.path === pathname));

  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer group transition-colors rounded-lg px-3 py-2.5
          ${depth === 0 ? (isActive ? 'text-[#4AA0F0] bg-white/5' : 'text-white hover:bg-white/5') : (isActive ? 'text-[#4AA0F0] bg-white/5' : 'text-on-surface-variant hover:text-white hover:bg-white/5')}
          ${depth > 0 ? 'ml-4 text-sm' : 'text-base font-medium'}
        `}
        onClick={handleClick}
      >
        {hasChildren || item.scrollTo ? (
          <span>{displayLabel}</span>
        ) : (
          <span className="flex-1">{displayLabel}</span>
        )}
        {hasChildren && (
          <span
            className="material-symbols-outlined text-base text-on-surface-variant transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            keyboard_arrow_down
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && (
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? '500px' : '0px', opacity: open ? 1 : 0 }}
        >
          <div className="border-l border-white/10 ml-6 mt-1 mb-1 space-y-0.5">
            {item.children.map((child, i) => (
              <NavItem key={i} item={child} depth={depth + 1} onClose={onClose} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopNavItem({ item }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();
  const hasChildren = item.children && item.children.length > 0;

  const displayLabel = t(item.labelKey);
  const isActive = item.path === pathname || (item.children && item.children.some(child => child.path === pathname));

  return (
    <div 
      className="relative group"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      {item.path ? (
        <Link 
          href={item.path}
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${isActive ? 'text-[#4AA0F0]' : 'text-white/80 hover:text-white'}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {displayLabel}
          {hasChildren && (
            <span className="material-symbols-outlined text-[16px]" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>keyboard_arrow_down</span>
          )}
        </Link>
      ) : (
        <div 
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium cursor-pointer transition-colors rounded-lg hover:bg-white/5 ${isActive ? 'text-[#4AA0F0]' : 'text-white/80 hover:text-white'}`}
        >
          {displayLabel}
          {hasChildren && (
            <span className="material-symbols-outlined text-[16px]" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>keyboard_arrow_down</span>
          )}
        </div>
      )}
      
      {/* Dropdown Menu */}
      {hasChildren && (
        <div 
          className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${open ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}
        >
          <div className="bg-[#06101F]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
            {item.children.map((child, i) => (
              <Link 
                key={i}
                href={child.path}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${child.path === pathname ? 'text-[#4AA0F0] bg-[#4AA0F0]/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {t(child.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleToggle = (e) => {
      setHidden(e.detail?.hide === true);
    };
    window.addEventListener('toggleHeader', handleToggle);
    return () => window.removeEventListener('toggleHeader', handleToggle);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className={`absolute top-0 left-0 w-full z-[60] bg-[#06101F] border-b border-white/5 py-2 px-4 overflow-hidden flex items-center justify-center transition-transform duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="text-[11px] sm:text-xs md:text-sm font-medium text-white/70 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 group cursor-pointer hover:text-white transition-colors text-center max-w-full">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] whitespace-nowrap">
            {t('nav.announcement.badge')}
          </span>
          <span className="flex-1 md:flex-none">{t('nav.announcement.text')}</span>
          <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform shrink-0">arrow_outward</span>
        </div>
      </div>

      <header className={`fixed left-1/2 -translate-x-1/2 max-w-[1440px] z-50 bg-[#06101F]/90 backdrop-blur-xl shadow-2xl transition-all duration-500 ${hidden ? '-translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'} ${scrolled ? 'top-0 md:top-4 w-full md:w-[95%] rounded-none md:rounded-full border-b md:border border-white/10' : 'top-[52px] md:top-12 w-[95%] rounded-full border border-white/10'}`}>
        <div className="flex justify-between items-center px-4 py-1.5 md:px-6 md:py-2 lg:px-8 lg:py-2">
          {/* Logo */}
          <div className="flex items-center gap-md">
            <Link 
              href="/"
              className="px-2 py-1 hover:scale-105 transition-transform cursor-pointer block"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                alt="Udata Logo"
                className="h-6 md:h-7 lg:h-8 w-auto"
                src="/product/logo_2_backup.png"
              />
            </Link>
          </div>

          {/* Desktop Inline Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {NAV_ITEMS.map((item, i) => (
              <DesktopNavItem key={i} item={item} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-colors px-3 py-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
              {lang}
            </button>

            <HoverFillButton 
              onClick={() => router.push('/dung-thu')}
              className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] px-3 py-1.5 md:px-5 md:py-2 rounded-full font-title-md text-[13px] md:text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all whitespace-nowrap"
            >
              {t('nav.bookDemo')}
            </HoverFillButton>
            
            {/* Hamburger for mobile/tablet only */}
            <div className="flex lg:hidden items-center pl-3 md:pl-4 border-l border-white/10">
              <button
                id="menu-toggle"
                className="text-on-surface hover:text-white transition-colors"
                onClick={() => setDrawerOpen(true)}
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
        style={{ opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? 'auto' : 'none' }}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-[340px] z-[70] bg-[#0D0D0F] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden"
        style={{ transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div 
            onClick={() => { setDrawerOpen(false); router.push('/'); }}
            className="px-2 py-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              alt="Udata Logo"
              className="h-8 w-auto"
              src="/product/logo_2_backup.png"
            />
          </div>
          <button
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-white/30 transition-all"
            onClick={() => setDrawerOpen(false)}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item, i) => (
            <NavItem key={i} item={item} depth={0} onClose={() => setDrawerOpen(false)} />
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="px-6 py-6 border-t border-white/10 space-y-4">
          <button 
            onClick={toggleLang}
            className="w-full flex items-center justify-center gap-2 bg-white/5 text-white/80 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
            {t('nav.changeLang')} ({lang})
          </button>
          <HoverFillButton 
            onClick={() => { router.push('/dung-thu'); setDrawerOpen(false); }}
            className="w-full bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] text-[#06101F] py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all"
          >
            {t('nav.bookDemo')}
          </HoverFillButton>
        </div>
      </div>
    </>
  );
}


