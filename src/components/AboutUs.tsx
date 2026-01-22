
import React, { useEffect, useRef } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.querySelectorAll('.reveal-unit').forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-zinc-50 scroll-mt-20 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal-unit reveal">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            <span className="text-orange-600">{t('about.title1')}</span> {t('about.title2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6 text-zinc-500 leading-relaxed font-medium reveal-unit reveal-left delay-100">
            <p>
              <span className="font-bold text-slate-900">{t('about.p1_1')}</span>
              {t('about.p1_2')}
              <span className="font-bold text-slate-900">{t('about.p1_3')}</span>
              {t('about.p1_4')}
              <span className="font-bold text-slate-900">{t('about.p1_5')}</span>
              {t('about.p1_6')}
              <span className="font-bold text-slate-900">{t('about.p1_7')}</span>
              {t('about.p1_8')}
            </p>
            <p>
              {t('about.p2_1')}
              <span className="font-bold text-slate-900">{t('about.p2_2')}</span>
              {t('about.p2_3')}
              <span className="font-bold text-slate-900">{t('about.p2_4')}</span>
              {t('about.p2_5')}
            </p>
            <p>
              {t('about.p3_1')}
              <span className="font-bold text-slate-900">{t('about.p3_2')}</span>
              {t('about.p3_3')}
              <span className="font-bold text-slate-900">{t('about.p3_4')}</span>
              {t('about.p3_5')}
              <span className="font-bold text-slate-900">{t('about.p3_6')}</span>
              {t('about.p3_7')}
              <span className="font-bold text-slate-900">{t('about.p3_8')}</span>
              {t('about.p3_9')}
              <span className="font-bold text-slate-900">{t('about.p3_10')}</span>
              {t('about.p3_11')}
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-zinc-100 relative reveal-unit reveal-right delay-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">{t('about.listTitle')}</h3>
            <ul className="space-y-4 mb-10">
              {(Array.isArray(t('about.services')) ? t('about.services') : []).map((item: string, i: number) => (
                <li key={i} className="flex items-center text-slate-700 text-sm font-semibold">
                  <div className="w-6 h-6 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-[10px] text-orange-600 font-bold">{i + 1}</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 flex items-center shadow-sm">
              <div className="w-10 h-10 bg-white border border-zinc-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <a href="tel:+4917622006681" className="block hover:opacity-80 transition-opacity" title={t('about.hotlineLabel')}>
                <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t('about.hotlineLabel')}</div>
                <div className="text-lg font-bold text-slate-900">+49 176 22006681</div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {(Array.isArray(t('about.features')) ? t('about.features') : []).map((feature: string, i: number) => (
              <div key={i} className={`text-center flex flex-col items-center reveal-unit reveal delay-${i * 100 + 300}`}>
                <div className="w-10 h-10 bg-white border border-zinc-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
