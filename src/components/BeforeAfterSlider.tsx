
import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  before: string;
  after: string;
  label: string;
  location: string;
  days: number;
}

const BeforeAfterSlider: React.FC<Props> = ({ before, after, label, location, days }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        setSliderPos(prev => Math.max(prev - 5, 0));
        break;
      case 'ArrowRight':
        setSliderPos(prev => Math.min(prev + 5, 100));
        break;
      case 'Home':
        setSliderPos(0);
        break;
      case 'End':
        setSliderPos(100);
        break;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-center">
        <h4 className="text-xl font-extrabold text-gray-900">{label}</h4>
        <span className="text-xs text-primary-700 font-bold uppercase tracking-widest">{location}</span>
      </div>

      <div 
        ref={containerRef}
        role="slider"
        aria-label={`Comparison for ${label}`}
        aria-valuenow={sliderPos}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        className="relative w-full aspect-[16/10] max-w-4xl rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50"
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img src={before} alt="Before" className="w-full h-full object-cover" />
          <span className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded backdrop-blur-md">
            {t('beforeAfter.labels.before')}
          </span>
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0" 
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          aria-hidden="true"
        >
          <img src={after} alt="After" className="w-full h-full object-cover" />
          <span className="absolute bottom-4 right-4 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded backdrop-blur-md">
            {t('beforeAfter.labels.after')}
          </span>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-10 h-10 bg-primary-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg -translate-x-1/2">
            <div className="flex space-x-1" aria-hidden="true">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" aria-hidden="true"></span>
          {t('beforeAfter.completed')} {days} {t('beforeAfter.day')}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" aria-hidden="true"></span>
          {t('beforeAfter.satisfied')}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
