import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function UseCaseMetrics() {
  const { t, lang } = useLanguage();

  const metricsCols = [
    {
      icon: 'monitoring',
      titleKey: 'usecases.metrics.1.title',
      itemsKey: 'usecases.metrics.1.items'
    },
    {
      icon: 'inventory_2',
      titleKey: 'usecases.metrics.2.title',
      itemsKey: 'usecases.metrics.2.items'
    },
    {
      icon: 'bolt',
      titleKey: 'usecases.metrics.3.title',
      itemsKey: 'usecases.metrics.3.items'
    },
    {
      icon: 'eco',
      titleKey: 'usecases.metrics.4.title',
      itemsKey: 'usecases.metrics.4.items'
    },
    {
      icon: 'attach_money',
      titleKey: 'usecases.metrics.5.title',
      itemsKey: 'usecases.metrics.5.items'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#0A0E14]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('usecases.metrics.title')}
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {t('usecases.metrics.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metricsCols.map((col, idx) => {
            // Split string into array based on delimiter |
            const items = t(col.itemsKey).split('|');
            return (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left bg-[#0C1017] p-6 rounded-2xl border border-white/5 hover:border-[#22D3EE]/20 transition-all">
                <span className="material-symbols-outlined text-3xl text-[#22D3EE] mb-4">{col.icon}</span>
                <h3 className="font-bold text-white mb-4 text-base">{t(col.titleKey)}</h3>
                <ul className="space-y-2 text-sm text-[#9CA3AF] w-full">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
