
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

import { sendContactForm } from '../services/emailService';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    postalCode: '',
    date: '',
    time: '',
    cleaningType: '',
    cleaners: '',
    hours: '',
    totalHours: '0',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useScrollReveal();

  const servicesList = t('services.list') as any[];

  useEffect(() => {
    const cleaners = parseFloat(formData.cleaners) || 0;
    const hours = parseFloat(formData.hours) || 0;
    setFormData(prev => ({ ...prev, totalHours: (cleaners * hours).toString() }));
  }, [formData.cleaners, formData.hours]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = language === 'de' ? 'E-Mail ist erforderlich' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'de' ? 'Ungültige E-Mail-Adresse' : 'Invalid email address';
    }

    // Phone regex
    const phoneRegex = /^[\d\+\s\-\(\)]{7,20}$/;
    if (!formData.phone) {
      newErrors.phone = language === 'de' ? 'Telefonnummer ist erforderlich' : 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = language === 'de' ? 'Ungültige Telefonnummer' : 'Invalid phone number';
    }

    if (!formData.postalCode.trim()) newErrors.postalCode = language === 'de' ? 'Postleitzahl ist erforderlich' : 'Postal code is required';
    if (!formData.date) newErrors.date = language === 'de' ? 'Datum ist erforderlich' : 'Date is required';
    if (!formData.time) newErrors.time = language === 'de' ? 'Uhrzeit ist erforderlich' : 'Time is required';
    if (!formData.cleaningType) newErrors.cleaningType = language === 'de' ? 'Reinigungsart ist erforderlich' : 'Cleaning type is required';
    if (!formData.cleaners) newErrors.cleaners = language === 'de' ? 'Erforderlich' : 'Required';
    if (!formData.hours) newErrors.hours = language === 'de' ? 'Erforderlich' : 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      await sendContactForm(formData);
      setStatus('success');
      setFormData({
        postalCode: '',
        date: '',
        time: '',
        cleaningType: '',
        cleaners: '',
        hours: '',
        totalHours: '0',
        phone: '',
        email: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
      // Reset status after 3 seconds so user can try again
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-white scroll-mt-20 reveal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">{t('contact.title')}</h2>
            <p className="text-zinc-500 mb-12 text-lg font-medium">{t('contact.subtitle')}</p>

            <div className="space-y-8">
              <a href="tel:+4917622006681" className="flex items-center group">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center mr-5 group-hover:border-primary-200 transition-colors">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-primary-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t('contact.direct_call')}</p>
                  <p className="text-lg font-bold text-slate-900">+49 176 22006681</p>
                </div>
              </a>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center mr-5">
                  <MessageCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t('contact.direct_whatsapp')}</p>
                  <p className="text-lg font-bold text-slate-900">{t('contact.direct_whatsapp_text')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center mr-5">
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t('contact.direct_office')}</p>
                  <p className="text-lg font-bold text-slate-900">{t('contact.direct_office_text')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-50 p-10 md:p-14 rounded-2xl border border-zinc-100">
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>{language === 'de' ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.' : 'Error sending message. Please try again.'}</span>
              </div>
            )}

            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('contact.form.success')}</h3>
                <button onClick={() => setStatus('idle')} className="text-primary-600 font-bold hover:underline">
                  {t('contact.form.another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Postal Code */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.postalCode')}</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.postalCode ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.postalCode && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.postalCode}</div>}
                  </div>

                  {/* Date & Time */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.date')}</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.date ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.date && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.date}</div>}
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.time')}</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.time ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.time && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.time}</div>}
                  </div>

                  {/* Cleaning Type */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.cleaningType')}</label>
                    <select
                      name="cleaningType"
                      value={formData.cleaningType}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.cleaningType ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium appearance-none`}
                    >
                      <option value="">-</option>
                      {servicesList.map((s, i) => (
                        <option key={i} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                    {errors.cleaningType && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.cleaningType}</div>}
                  </div>

                  {/* Cleaners & Hours */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.cleaners')}</label>
                    <input
                      type="number"
                      name="cleaners"
                      min="1"
                      value={formData.cleaners}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.cleaners ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.cleaners && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.cleaners}</div>}
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.hours')}</label>
                    <input
                      type="number"
                      name="hours"
                      min="1"
                      value={formData.hours}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.hours ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.hours && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.hours}</div>}
                  </div>

                  {/* Total Hours */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.totalHours')}</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.totalHours}
                      className="w-full px-6 py-4 bg-zinc-100 border border-zinc-200 rounded-xl outline-none font-bold text-slate-700 cursor-not-allowed"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.phone ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.phone && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.phone}</div>}
                  </div>
                  <div className="md:col-span-2 relative">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.email ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-primary-500 transition-colors font-medium`}
                    />
                    {errors.email && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</div>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-600 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
