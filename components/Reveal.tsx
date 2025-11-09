import React from 'react';
import useInView from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', threshold = 0.12, delay = 0 }) => {
  const [ref, inView] = useInView<HTMLElement>({ threshold, once: true });

  return (
    <div
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      } ${className}`}
      aria-hidden={!inView}
      data-revealed={inView}
    >
      {children}
    </div>
  );
};

export default Reveal;
