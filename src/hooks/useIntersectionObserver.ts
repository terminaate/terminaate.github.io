import { useEffect, useRef } from 'react';

const useIntersectionObserver = (cb: () => void, elseCb: () => void, options?: IntersectionObserverInit) => {
  const elementRef = useRef(null);

  const observerRef = useRef(new IntersectionObserver(((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cb();
      } else if (elseCb) {
        elseCb();
      }
    });
  }), options));

  useEffect(() => {
    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  }, []);

  return elementRef;
};

export default useIntersectionObserver;