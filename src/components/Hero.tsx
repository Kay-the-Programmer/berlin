
import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-60 md:pb-40 bg-white overflow-hidden scroll-mt-20 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-zinc-100 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 md:mb-8 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('hero.badge')}
          </div>

          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 md:mb-8 transition-all duration-700 delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('hero.title1')} <span className="text-orange-600">{t('hero.title2')}</span>
          </h1>

          <p className={`text-base md:text-lg lg:text-xl text-zinc-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t('hero.description')}
          </p>

          <div className={`flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-x-8 md:gap-y-4 mb-10 md:mb-14 transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {((Array.isArray(t('hero.benefits')) ? t('hero.benefits') : []) as string[]).map((benefit, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-600 flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-400 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#contact"
              className="bg-orange-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center group"
            >
              <span>{t('hero.ctaPrimary')}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4917622006681"
              className="bg-white border border-zinc-200 text-slate-900 px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:border-orange-200 hover:text-orange-600 transition-all flex items-center justify-center"
            >
              <span>{t('hero.ctaSecondary').split(':')[1]}</span>
            </a>
          </div>
        </div>

        <div className={`mt-16 md:mt-24 transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-8 sm:gap-0 sm:divide-x divide-zinc-100 border-t border-zinc-100 pt-10 md:pt-12">
            <div className="px-4">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">500+</div>
              <div className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">{t('hero.stats.projects')}</div>
            </div>
            <div className="px-4">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">24h</div>
              <div className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">{t('hero.stats.service')}</div>
            </div>
            <div className="px-4">
              <div className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center justify-center sm:justify-center">
                5.0
              </div>
              <div className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">{t('hero.stats.rating')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
