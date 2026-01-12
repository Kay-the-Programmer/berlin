
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const servicesList = t('services.list') as any[];
  const sectionRef = useScrollReveal();

  const images = [
    "https://images.unsplash.com/photo-1591389062496-84fb24e48812?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695ce6958?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 bg-white scroll-mt-20 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-24 reveal-left delay-100 reveal-item">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-zinc-500 max-w-xl text-base md:text-lg font-medium">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className={`reveal reveal-item flex flex-col xl:flex-row bg-zinc-50 border border-zinc-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-all duration-500 delay-${idx * 100 + 100}`}
            >
              <div className="xl:w-1/2 h-52 sm:h-64 xl:h-auto overflow-hidden">
                <img 
                  src={images[idx]} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="xl:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center justify-between group">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-zinc-300 group-hover:text-orange-600 transition-colors" />
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="space-y-2 pt-4 md:pt-6 border-t border-zinc-200">
                  {service.features.slice(0, 3).map((f: string, i: number) => (
                    <div key={i} className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-orange-600 rounded-full mr-2 md:mr-3"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
