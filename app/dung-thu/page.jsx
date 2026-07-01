"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

function FreeTrial() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    request: '',
    subscribe: false
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  useEffect(() => {
    document.title = language === 'vi' ? 'Dùng thử | Udata' : 'Free Trial | Udata';
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = language === 'vi' ? [
    'Năng lượng mặt trời áp mái',
    'Thang máy',
    'Sản xuất công nghiệp',
    'Bất động sản & Tòa nhà',
    'Logistics & Vận tải',
    'Khác'
  ] : [
    'Solar Rooftop',
    'Elevators',
    'Manufacturing',
    'Real Estate & Buildings',
    'Logistics & Transportation',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await addDoc(collection(db, 'trial_requests'), {
        ...formData,
        source: 'Free Trial Form',
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({
        name: '', company: '', phone: '', email: '', industry: '', request: '', subscribe: false
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-display-md font-bold leading-tight">
                {t('trial.title')}
              </h2>
              <h4 className="mt-4 text-electric-cyan text-lg font-title-md leading-relaxed" dangerouslySetInnerHTML={{ __html: t('trial.subtitle') }} />
            </div>

            <div>
              <h4 className="text-white text-xl font-bold mb-6">{t('trial.list_title')}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item 1 */}
                <div className="p-5 flex flex-col gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="material-symbols-outlined text-electric-cyan text-3xl">check_circle</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-lg font-semibold">{t('trial.item1.title')}</span>
                    <span className="text-on-surface-variant text-base leading-relaxed">{t('trial.item1.desc')}</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-5 flex flex-col gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="material-symbols-outlined text-electric-cyan text-3xl">check_circle</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-lg font-semibold">{t('trial.item2.title')}</span>
                    <span className="text-on-surface-variant text-base leading-relaxed">{t('trial.item2.desc')}</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-5 flex flex-col gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="material-symbols-outlined text-electric-cyan text-3xl">check_circle</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-lg font-semibold">{t('trial.item3.title')}</span>
                    <span className="text-on-surface-variant text-base leading-relaxed">{t('trial.item3.desc')}</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="p-5 flex flex-col gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="material-symbols-outlined text-electric-cyan text-3xl">check_circle</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-lg font-semibold">{t('trial.item4.title')}</span>
                    <span className="text-on-surface-variant text-base leading-relaxed">{t('trial.item4.desc')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-card rounded-2xl border border-surface-border bg-surface-container-lowest/30 p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient light effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-white text-2xl font-semibold mb-8 relative z-10">{t('trial.form.title')}</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-sustainability-green/20 border border-sustainability-green/50 text-sustainability-green font-medium">
                {t('trial.form.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 font-medium">
                {t('trial.form.error')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.name')} <span className="text-red-500">*</span></label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder={t('trial.form.name_placeholder')} 
                    className="px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.company')} <span className="text-red-500">*</span></label>
                  <input 
                    required 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder={t('trial.form.company_placeholder')} 
                    className="px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="flex flex-col">
                  <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.phone')} <span className="text-red-500">*</span></label>
                  <input 
                    required 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    type="tel" 
                    placeholder={t('trial.form.phone_placeholder')} 
                    className="px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.email')} <span className="text-red-500">*</span></label>
                  <input 
                    required 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    type="email" 
                    placeholder={t('trial.form.email_placeholder')} 
                    className="px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>
              </div>

              {/* Industry */}
              <div className="flex flex-col">
                <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.industry')} <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select 
                    required 
                    name="industry" 
                    value={formData.industry} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  >
                    <option value="" disabled hidden>{t('trial.form.industry_placeholder')}</option>
                    {industries.map((ind, idx) => (
                      <option key={idx} value={ind} className="bg-surface-container text-white">{ind}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Request (Textarea as requested by user) */}
              <div className="flex flex-col">
                <label className="mb-2 text-on-surface-variant font-medium text-sm">{t('trial.form.request')} <span className="text-red-500">*</span></label>
                <textarea 
                  required
                  name="request" 
                  value={formData.request} 
                  onChange={handleChange} 
                  placeholder={t('trial.form.request_placeholder')} 
                  rows="4"
                  className="px-4 py-3 bg-surface-container/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors resize-y"
                ></textarea>
              </div>

              {/* Subscribe Checkbox */}
              <div className="mt-2 flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input 
                    id="subscribe" 
                    name="subscribe" 
                    type="checkbox" 
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                  />
                </div>
                <label htmlFor="subscribe" className="text-sm font-medium text-on-surface-variant cursor-pointer">
                  {t('trial.form.subscribe')}
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-electric-cyan text-background font-title-md font-bold hover:bg-electric-cyan/90 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="material-symbols-outlined animate-spin text-[20px]">autorenew</span>
                  ) : (
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  )}
                  {t('trial.form.submit')}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FreeTrial;
