
import React from 'react';
import { Zap, ShieldCheck, Heart, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const items = t('whyChooseUs.items') as any[];
  const sectionRef = useScrollReveal();

  const icons = [
    <Zap className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Heart className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-zinc-50 overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-20">
          <div className="text-left reveal-left reveal-child">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
              {t('whyChooseUs.title')} <span className="text-orange-600">{t('whyChooseUs.subtitle')}</span>.
            </h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-md leading-relaxed font-medium">
              {t('whyChooseUs.description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden rounded-2xl">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 md:p-10 hover:bg-zinc-50 transition-all duration-300 group reveal reveal-stagger delay-${idx * 100}`}
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 md:mb-8 text-slate-500 group-hover:text-orange-600 transition-colors">
                {icons[idx]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 md:mb-4">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
