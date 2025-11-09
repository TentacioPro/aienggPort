import { useEffect, useRef, useState, RefObject } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export default function useInView<T extends Element = Element>(options: Options = {}) {
  const { root = null, rootMargin = '0px', threshold = 0.1, once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Accessibility: if the user prefers reduced motion, don't animate — treat as inView
    try {
      const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        setInView(true);
        return;
      }
    } catch (e) {
      // ignore and proceed with observer
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once && observer && entry.target) observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, threshold, once]);

  return [ref as RefObject<T>, inView] as const;
}
