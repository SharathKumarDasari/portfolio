import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [elementsToAnimate, setElementsToAnimate] = useState<Element[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the Intersection Observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once animated, no need to observe anymore
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Get all elements with the animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    setElementsToAnimate(Array.from(elements));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Observe each element
    if (observer.current && elementsToAnimate.length > 0) {
      elementsToAnimate.forEach((element) => {
        observer.current?.observe(element);
      });
    }

    return () => {
      if (observer.current && elementsToAnimate.length > 0) {
        elementsToAnimate.forEach((element) => {
          observer.current?.unobserve(element);
        });
      }
    };
  }, [elementsToAnimate]);
};

export default useScrollAnimation;