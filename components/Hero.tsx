import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import sampleImg from '../assets/IMG-20251109-WA0002.jpg';
import resumePDF from '../assets/Sajjad Ismail Resume.pdf';

const Hero: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-12 sm:py-20 md:py-24 overflow-hidden">
            {/* Parallax background circles */}
            <div 
                className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#E9B3FB]/20 to-[#6F00FF]/10 rounded-full blur-3xl pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />
            <div 
                className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#6F00FF]/10 to-[#E9B3FB]/20 rounded-full blur-3xl pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6">
                        <Reveal delay={0}>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#3B0270]">
                                Sajjad Ismail
                            </h1>
                        </Reveal>

                        <Reveal delay={100}>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#3B0270]/90">
                                AI Engineer & Innovator
                            </h2>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="text-base sm:text-lg md:text-xl text-[#3B0270]/80 max-w-xl">
                                I build intelligent systems and data-driven applications that solve real-world problems — from fine-tuned LLMs to full-stack AI products.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
                                <a 
                                    href="#contact" 
                                    aria-label="Work with me" 
                                    className="inline-flex items-center justify-center bg-[#6F00FF] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5a00d6] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-[#6F00FF]/30"
                                >
                                    Work with me
                                </a>
                                <a 
                                    href={resumePDF} 
                                    download="Sajjad_Ismail_Resume.pdf"
                                    aria-label="Download CV"
                                    className="inline-flex items-center justify-center gap-2 text-sm text-[#3B0270]/80 hover:text-[#6F00FF] px-4 py-3 rounded-lg transition-colors duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={400} className="order-first lg:order-last">
                        <div className="relative w-full flex justify-center lg:justify-end">
                            <div 
                                className="relative w-full max-w-md lg:max-w-lg"
                                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                            >
                                <img 
                                    src={sampleImg} 
                                    alt="Sajjad Ismail - AI Engineer" 
                                    className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200 transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;