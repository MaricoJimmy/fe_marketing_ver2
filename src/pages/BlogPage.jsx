import React, { useEffect, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogPage() {
  const { t, lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = lang === 'EN' ? "Blog | Udata" : "Blog | Udata";
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-8 bg-midnight-core overflow-hidden flex flex-col items-center justify-center text-center">
      <AnimatedBackground />
      <div className="relative z-10 space-y-6 max-w-4xl">
        <div 
          className="inline-flex items-center justify-center bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}
        >
          {t('blog.badge')}
        </div>
        <h1 
          className="text-5xl md:text-7xl font-bold text-soft-white leading-tight transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '100ms' }}
          dangerouslySetInnerHTML={{ __html: t('blog.title') }}
        />
        <p 
          className="text-xl text-soft-white/60 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '200ms' }}
        >
          {t('blog.desc')}
        </p>
        <div 
          className="mt-12 p-12 bg-soft-white/5 border border-soft-white/10 rounded-3xl backdrop-blur-md transition-all duration-1000 ease-out shadow-[0_0_50px_rgba(34,211,238,0.1)]"
          style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '300ms' }}
        >
          <span className="material-symbols-outlined text-4xl text-electric-cyan mb-4 animate-pulse">menu_book</span>
          <p className="text-soft-white/50 italic text-lg">{t('blog.coming_soon')}</p>
        </div>
      </div>
    </div>
  );
}
