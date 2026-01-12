
import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = language === 'de' ? 'Ungültige E-Mail-Adresse' : 'Invalid email address';
    }

    // Phone regex (Generic international/local format)
    const phoneRegex = /^[\d\+\s\-\(\)]{7,20}$/;
    if (!formData.phone) {
      newErrors.phone = language === 'de' ? 'Telefonnummer ist erforderlich' : 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = language === 'de' ? 'Ungültige Telefonnummer' : 'Invalid phone number';
    }

    if (!formData.name.trim()) {
      newErrors.name = language === 'de' ? 'Name ist erforderlich' : 'Name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'de' ? 'Nachricht ist erforderlich' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-white scroll-mt-20 reveal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">{t('contact.title')}</h2>
            <p className="text-zinc-500 mb-12 text-lg font-medium">{t('contact.subtitle')}</p>
            
            <div className="space-y-8">
              <a href="tel:+4917679567083" className="flex items-center group">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center mr-5 group-hover:border-orange-200 transition-colors">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t('contact.direct_call')}</p>
                  <p className="text-lg font-bold text-slate-900">+49 176 79567083</p>
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
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('contact.form.success')}</h3>
                <button onClick={() => setStatus('idle')} className="text-orange-600 font-bold hover:underline">
                  {t('contact.form.another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.name').replace(' *', '')} 
                      className={`w-full px-6 py-4 bg-white border ${errors.name ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-orange-500 transition-colors font-medium`}
                    />
                    {errors.name && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</div>}
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phone').replace(' *', '')} 
                      className={`w-full px-6 py-4 bg-white border ${errors.phone ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-orange-500 transition-colors font-medium`}
                    />
                    {errors.phone && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.phone}</div>}
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email')}
                    className={`w-full px-6 py-4 bg-white border ${errors.email ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-orange-500 transition-colors font-medium`}
                  />
                  {errors.email && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</div>}
                </div>
                <div className="relative">
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message').replace(' *', '')} 
                    className={`w-full px-6 py-4 bg-white border ${errors.message ? 'border-red-500' : 'border-zinc-200'} rounded-xl outline-none focus:border-orange-500 resize-none transition-colors font-medium`}
                  ></textarea>
                  {errors.message && <div className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</div>}
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
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
