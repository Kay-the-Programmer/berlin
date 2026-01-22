
import React, { useEffect, useRef } from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const reviews = (Array.isArray(t('testimonials.reviews')) ? t('testimonials.reviews') : []) as any[];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = `${i * 150}ms`;
            el.classList.add('active');
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration - subtle */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-50 rounded-full blur-[80px] md:blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <div className="reveal">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
            {t('testimonials.title')} <span className="text-orange-600">{t('testimonials.subtitle')}</span>
          </h2>
          <p className="text-zinc-500 mb-8 md:mb-10 max-w-2xl mx-auto font-bold text-base md:text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="reveal flex flex-col items-center justify-center mb-16 md:mb-24 bg-zinc-50/80 backdrop-blur-sm px-6 py-4 md:px-10 md:py-8 rounded-2xl md:rounded-[3rem] border border-zinc-100 inline-block shadow-sm">
          <div className="flex space-x-1 md:space-x-2 mb-3 md:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-7 md:h-7 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <span className="text-[10px] md:text-sm font-black text-slate-900 uppercase tracking-[0.2em] md:tracking-[0.3em]">{t('testimonials.ratingText')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="reveal bg-white p-8 md:p-12 rounded-2xl border border-zinc-100 flex flex-col items-start text-left hover:border-orange-200 transition-all duration-500 group relative">
              <Quote className="absolute top-6 right-6 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 text-orange-50 group-hover:text-orange-100 transition-colors" />

              <div className="flex space-x-1 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium italic mb-8 md:mb-12 grow relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center w-full pt-6 md:pt-10 border-t border-zinc-100">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-white text-lg font-black mr-4 md:mr-5 group-hover:bg-orange-600 transition-colors duration-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base md:text-lg leading-none mb-1 md:mb-1.5">{review.name}</div>
                  <div className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1 md:mb-2">{review.location}</div>
                  <div className="text-[10px] text-orange-600 font-extrabold uppercase leading-none">{review.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 md:space-x-12 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400">
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-2 md:mr-3" />
            {t('testimonials.googleText')}
          </div>
          <a href="#" className="flex items-center hover:text-orange-600 transition-colors group">
            {t('testimonials.viewAll')}
            <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
