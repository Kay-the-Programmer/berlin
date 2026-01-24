
import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Support for children with reveal classes
            const children = entry.target.querySelectorAll('.reveal-child, .reveal-item, .reveal-unit, .reveal-stagger, .reveal-scale');
            children.forEach(child => child.classList.add('active'));
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return ref;
};
