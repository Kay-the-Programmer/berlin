
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import logo from '../images/footer_logo.png';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal();

  return (
    <footer ref={sectionRef} className="bg-slate-900 text-white pt-16 md:pt-24 pb-12 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="space-y-6 reveal-child">
            <img
              src={logo}
              alt="Act Umzugs & Reinigungs"
              className="h-10 w-auto object-contain"
            />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Professional clearing out and household liquidation throughout Berlin since 2015. Reliable, fast, and fair.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-10 reveal-child" style={{ transitionDelay: '100ms' }}>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 md:mb-8">Links</h4>
              <ul className="space-y-3 md:space-y-4">
                {['home', 'about', 'services', 'contact'].map((l) => (
                  <li key={l}>
                    <a href={`#${l}`} className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center group">
                      <ChevronRight className="w-3 h-3 mr-2 text-zinc-700 group-hover:text-primary-600" />
                      {t(`nav.${l}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-left md:text-right flex flex-col md:items-end reveal-child" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 md:mb-8">Contact</h4>
            <p className="text-lg font-bold mb-2">+49 176 22006681</p>
            <p className="text-zinc-400 text-sm">actreinigung@gmail.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-600 space-y-6 md:space-y-0 text-center md:text-left reveal-child" style={{ transitionDelay: '300ms' }}>
          <p>© 2025 Act Umzugs & Reinigungs.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
