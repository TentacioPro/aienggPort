import React from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="pt-8 sm:pt-12 md:pt-16 mb-16 sm:mb-20 md:mb-24 scroll-mt-24 container mx-auto px-4 sm:px-6 lg:px-8" aria-label={title}>
      <Reveal className="mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#3B0270] relative inline-block">
          {title}
          <span className="absolute bottom-[-8px] left-0 h-1 w-1/2 bg-[#6F00FF] rounded-full"></span>
        </h2>
      </Reveal>
      {children}
    </section>
  );
};

export default Section;