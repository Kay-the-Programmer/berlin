
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.references'), href: '#references' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex flex-col group focus:outline-none">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Berlin<span className="text-orange-600">ClearOut</span>
              </span>
            </a>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-orange-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex bg-zinc-100 p-0.5 rounded-lg">
                <button 
                  onClick={() => setLanguage('de')}
                  className={`px-2.5 py-1 text-[9px] font-bold rounded-md transition-all ${language === 'de' ? 'bg-white text-slate-900 shadow-sm' : 'text-zinc-400'}`}
                >
                  DE
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-[9px] font-bold rounded-md transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-zinc-400'}`}
                >
                  EN
                </button>
              </div>
              
              <a 
                href="tel:+4917679567083" 
                className="text-slate-900 font-bold text-xs flex items-center hover:text-orange-600 transition-colors"
              >
                <Phone className="w-3 h-3 mr-2 text-orange-600" />
                <span>+49 176 79567083</span>
              </a>

              <a 
                href="#contact" 
                className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-widest flex items-center hover:bg-orange-600 transition-all active:scale-95"
              >
                <span>{t('nav.freeQuote')}</span>
              </a>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-zinc-100 transition-all duration-300 transform origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-8 py-10 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl font-bold text-slate-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-zinc-100">
               <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block bg-orange-600 text-white text-center py-4 rounded-xl font-bold text-lg"
              >
                {t('nav.freeQuote')}
              </a>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/20 backdrop-blur-sm lg:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
