import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  cb: (t: Element) => void,
  elseCb?: (t: Element) => void,
  options: IntersectionObserverInit = {},
) => {
  const elementRef = useRef(null);

  const observerRef = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cb(entry.target);
          // observer.unobserve(entry.target);
        } else if (elseCb) {
          elseCb(entry.target);
        }
      });
    }, options),
  );

  useEffect(() => {
    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  }, []);

  return elementRef;
};

export default useIntersectionObserver;
