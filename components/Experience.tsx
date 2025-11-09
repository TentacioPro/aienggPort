import React, { useRef, useEffect } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { EXPERIENCE } from '../constants';
import type { ExperienceItem } from '../types';

const Experience: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const timelineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('timeline-animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const itemsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('timeline-item-visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (timelineRef.current) {
            timelineObserver.observe(timelineRef.current);
        }

        itemsRef.current.forEach((item) => {
            if (item) itemsObserver.observe(item);
        });

        return () => {
            timelineObserver.disconnect();
            itemsObserver.disconnect();
        };
    }, []);

    return (
        <Section id="experience" title="Where I've Worked">
            <div className="relative">
                {/* Vertical Timeline Bar */}
                <div ref={timelineRef} className="timeline-line absolute left-4 md:left-1/2 top-2 h-full w-0.5 transform-origin-top scale-y-0" style={{ backgroundColor: `var(--accent-color)` }}></div>
                
                <div className="relative">
                    {EXPERIENCE.map((item: ExperienceItem, index: number) => {
                        return (
                        <div
                            key={index}
                            ref={(el) => {itemsRef.current[index] = el;}}
                            className="timeline-item opacity-0 mb-12"
                        >
                            <div className={`flex items-center flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                <div className="md:w-5/12"> {/* Left/Right Spacer on desktop */} </div>
                                <div className="w-2/12 hidden md:flex justify-center">
                                    <div className="h-4 w-4 rounded-full border-4" style={{ 
                                        backgroundColor: `var(--accent-color)`,
                                        borderColor: `var(--bg-color)`,
                                        boxShadow: `0 0 0 2px var(--accent-color)`
                                    }}></div>
                                </div>
                                <div className="w-full md:w-5/12 relative pl-10 md:pl-0">
                                    <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 -translate-x-1/2 md:hidden" style={{ 
                                        backgroundColor: `var(--accent-color)`,
                                        borderColor: `var(--bg-color)`,
                                        boxShadow: `0 0 0 2px var(--accent-color)`
                                    }}></div>
                                    <div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow" style={{ 
                                        backgroundColor: `color-mix(in srgb, var(--bg-color) 50%, var(--accent-color) 5%)`,
                                        borderColor: `var(--border-color)`
                                    }}>
                                        <h3 className={`text-xl font-bold mb-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`} style={{ color: `var(--text-color)` }}>
                                            <span>{item.role}</span>
                                            <span style={{ color: `var(--accent-color)` }}>&nbsp;@&nbsp;
                                                <a href={item.companyUrl} target="_blank" rel="noreferrer noopener" className="hover:underline focus:underline">{item.company}</a>
                                            </span>
                                        </h3>
                                        <p className={`text-sm font-semibold mb-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`} style={{ color: `var(--secondary-text)` }}>{item.duration}</p>
                                        <ul className={` pl-5 space-y-2 text-sm ${index % 2 !== 0 ? 'md:text-right md:list-none md:pl-0' : ''}`} style={{ color: `var(--secondary-text)` }}>
                                            {item.responsibilities.map((resp, i) => (<li key={i}>{resp}</li>))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
            
            <style>{`
                .timeline-line {
                    transition: transform 1s ease-out;
                }
                .timeline-line.timeline-animate {
                    transform: scaleY(1);
                }
                .timeline-item {
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                    transform: translateY(20px);
                }
                .timeline-item.timeline-item-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </Section>
    );
};

export default Experience;
