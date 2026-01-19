
import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import WhyChooseUs from './src/components/WhyChooseUs';
import Services from './src/components/Services';
import BeforeAfter from './src/components/BeforeAfter';
import Testimonials from './src/components/Testimonials';
import FAQ from './src/components/FAQ';
import AboutUs from './src/components/AboutUs';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
