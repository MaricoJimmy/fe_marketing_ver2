"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const jobsData = [
  { id: 1, title: 'Business Development & Solution Consultant', typeVI: 'Toàn thời gian', typeEN: 'Full-time', location: 'Hà Nội', department: 'sales', link: '/JD/Udata_JD_Consultant_Hanoi.pdf', icon: 'payments' },
  { id: 2, title: 'Fullstack Engineer', typeVI: 'Toàn thời gian', typeEN: 'Full-time', location: 'Hà Nội', department: 'engineering', link: '/JD/Udata_JD_Fullstack_Engineer.pdf', icon: 'terminal' },
  { id: 3, title: 'Business Development & Solution Consultant Intern', typeVI: 'Thực tập', typeEN: 'Internship', location: 'Hà Nội', department: 'sales', link: '/JD/Udata_JD_Intern_Consultant_Hanoi.pdf', icon: 'payments' },
  { id: 4, title: 'Kế toán & Hành chính tổng hợp', titleEN: 'Accounting & Admin', typeVI: 'Toàn thời gian', typeEN: 'Full-time', location: 'Hà Nội', department: 'office', link: '/JD/Udata_JD_Ke_toanandHanh_chinh_tong_hop_HaNoi.pdf', icon: 'manage_accounts' },
  { id: 5, title: 'Kỹ sư Triển khai', titleEN: 'Deployment Engineer', typeVI: 'Toàn thời gian', typeEN: 'Full-time', location: 'Hà Nội', department: 'engineering', link: '/JD/Udata_JD_Ky_su_trien_khai_Hanoi.pdf', icon: 'integration_instructions' },
  { id: 6, title: 'Marketing Intern', typeVI: 'Thực tập', typeEN: 'Internship', location: 'Hà Nội', department: 'marketing', link: '/JD/Udata_JD_MKT_Intern_HaNoi.pdf', icon: 'campaign' },
  { id: 7, title: 'Performance Marketing Executive', typeVI: 'Toàn thời gian', typeEN: 'Full-time', location: 'Hà Nội', department: 'marketing', link: '/JD/Udata_JD_Performance_Marketing_Executive_HaNoi.pdf', icon: 'campaign' },
];

const filters = ['all', 'sales', 'engineering', 'office', 'marketing'];

export default function CareersPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = lang === 'EN' ? "Careers | Udata" : "Tuyển dụng | Udata";
  }, [lang]);

  const filteredJobs = activeFilter === 'all' 
    ? jobsData 
    : jobsData.filter(job => job.department === activeFilter);


  return (
    <div className="w-full relative pb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-margin-desktop overflow-hidden border-b border-surface-border">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1440px] mx-auto text-center relative z-10"
        >
          <div className="inline-block bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-4 py-2 rounded-full mb-6">
            <span className="font-label-sm text-sm uppercase tracking-wider text-[#22D3EE] font-bold">
              {t('careers.hero.badge')}
            </span>
          </div>
          <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-bold text-on-surface mb-6 max-w-4xl mx-auto leading-tight">
            {t('careers.hero.title.part1')}
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#10F0CB] bg-clip-text text-transparent">
              {t('careers.hero.title.highlight')}
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t('careers.hero.subtitle')}
          </p>
          <button 
            onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#22D3EE] hover:bg-[#10F0CB] text-[#06101F] rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            {t('careers.hero.btn')}
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
        </motion.div>
      </section>

      {/* Why Udata */}
      <section className="py-20 px-4 md:px-margin-desktop relative">
        <div className="max-w-[1440px] mx-auto text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-on-surface mb-4">
            {t('careers.why.title')}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            {t('careers.why.subtitle')}
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num, idx) => (
            <motion.div 
              key={num} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-surface-border hover:border-[#22D3EE]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#22D3EE]">
                  {num === 1 ? 'rocket_launch' : num === 2 ? 'trending_up' : 'public'}
                </span>
              </div>
              <h3 className="font-bold text-xl text-on-surface mb-3">{t(`careers.why.${num}.title`)}</h3>
              <p className="text-on-surface-variant">{t(`careers.why.${num}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-roles" className="py-20 px-4 md:px-margin-desktop relative bg-surface-container-lowest/50">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-on-surface mb-4">
              {t('careers.jobs.title')}
            </h2>
            <p className="text-on-surface-variant text-lg">
              {t('careers.jobs.subtitle')}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-electric-cyan text-midnight-core' 
                    : 'glass-card text-on-surface-variant hover:text-white hover:border-electric-cyan/50'
                }`}
              >
                {t(`careers.jobs.filter.${filter}`)}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job, idx) => (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-surface-border hover:border-electric-cyan/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hidden md:flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-electric-cyan transition-colors">{job.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-on-surface mb-3 group-hover:text-electric-cyan transition-colors">
                      {lang === 'EN' && job.titleEN ? job.titleEN : job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">work</span>
                        {t(`careers.jobs.filter.${job.department}`)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {job.location}
                      </div>
                      <div className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan rounded-md font-medium text-xs">
                        {lang === 'EN' ? job.typeEN : job.typeVI}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                  <a 
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-surface-border hover:bg-white/5 text-on-surface font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    {t('careers.jobs.btn.view')}
                  </a>
                  <a 
                    href={`mailto:hr@udata.ai?subject=${encodeURIComponent(`Application for ${lang === 'EN' && job.titleEN ? job.titleEN : job.title}`)}`}
                    className="px-6 py-2.5 rounded-xl bg-electric-cyan text-midnight-core font-bold hover:bg-[#10F0CB] transition-all hover:scale-105 whitespace-nowrap shadow-[0_0_15px_rgba(34,211,238,0.2)] w-full sm:w-auto text-center justify-center flex"
                  >
                    {t('careers.jobs.btn.apply')}
                  </a>
                </div>
              </motion.div>
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 text-on-surface-variant">
                Không có vị trí nào phù hợp với bộ lọc hiện tại.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-4 md:px-margin-desktop relative">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-on-surface mb-4">
            {t('careers.process.title')}
          </h2>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl mx-auto">
            {t('careers.process.subtitle')}
          </p>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-px bg-surface-border"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map(step => (
                <div key={step} className="relative flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#06101F] border border-surface-border flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#22D3EE] text-[#06101F] font-bold flex items-center justify-center border-4 border-[#06101F]">
                      {step}
                    </div>
                    <span className="material-symbols-outlined text-3xl text-white">
                      {step === 1 ? 'description' : step === 2 ? 'groups' : 'verified'}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-on-surface mb-3">{t(`careers.process.${step}.title`)}</h3>
                  <p className="text-on-surface-variant text-sm px-4">{t(`careers.process.${step}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="pb-20 px-4 md:px-margin-desktop relative">
        <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-[#0284c7] to-[#06b6d4] rounded-3xl p-12 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold mb-4 relative z-10">
            {t('careers.cta.title')}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-body-md">
            {t('careers.cta.subtitle')}
          </p>
          <a 
            href={`mailto:hr@udata.ai?subject=${encodeURIComponent('Application for Open Application')}`}
            className="bg-white text-[#0284c7] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold font-title-md transition-all hover:scale-105 flex items-center gap-2 mx-auto w-fit relative z-10 shadow-lg"
          >
            {t('careers.cta.btn')}
            <span className="material-symbols-outlined text-[20px]">send</span>
          </a>
        </div>
      </section>

    </div>
  );
}
