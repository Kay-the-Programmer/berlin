
import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BeforeAfter: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal();
  const projects = (Array.isArray(t('beforeAfter.projects')) ? t('beforeAfter.projects') : []) as any[];

  return (
    <section ref={sectionRef} id="references" className="py-24 bg-white scroll-mt-20 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-child reveal mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t('beforeAfter.title')} – <span className="text-orange-600">{t('beforeAfter.subtitle')}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            {t('beforeAfter.description')}
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`reveal reveal-child delay-${(idx + 1) * 100}`}>
              <BeforeAfterSlider
                {...project}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 reveal reveal-child delay-500">
          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-100"
          >
            {t('contact.form.submit')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
