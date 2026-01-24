
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t } = useLanguage();
  const sectionRef = useScrollReveal();
  const items = (Array.isArray(t('faq.items')) ? t('faq.items') : []) as { question: string, answer: string }[];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#FDFCFB] reveal overflow-hidden" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="faq-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-6 reveal-child">
          {t('faq.title')} <span className="text-primary-600">{t('faq.subtitle')}</span>
        </h2>
        <p className="text-gray-500 mb-16 md:mb-20 text-base md:text-xl font-medium reveal-child delay-100">
          {t('faq.description')}
        </p>

        <div className="space-y-4 md:space-y-6 text-left">
          {items.map((faq, idx) => (
            <div
              key={idx}
              className={`group border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 reveal-child ${openIdx === idx ? 'ring-1 ring-primary-500 bg-white shadow-xl shadow-primary-100/20' : 'bg-white hover:border-primary-200'
                }`}
              style={{ transitionDelay: `${idx * 50 + 200}ms` }}
            >
              <button
                id={`faq-btn-${idx}`}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-content-${idx}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIdx === idx ? 'text-primary-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${openIdx === idx ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600'
                  }`}>
                  {openIdx === idx ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                </div>
              </button>

              <div
                id={`faq-content-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className={`grid transition-all duration-500 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
