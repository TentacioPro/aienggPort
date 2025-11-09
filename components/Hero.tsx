import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import elonImg from '../assets/Elon Maa.jpg';
import dummyResume from '../assets/dummy_resume.txt';
import { setTheme, getStoredTheme, type Theme } from '../src/utils/theme';

const Hero: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => getStoredTheme());

    const themes: Theme[] = ['tech', 'bold', 'industrial'];
    const themeLabels: Record<Theme, string> = {
        tech: 'Tech',
        bold: 'Bold',
        industrial: 'Industrial'
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleThemeChange = (theme: Theme) => {
        setTheme(theme);
        setCurrentTheme(theme);
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-12 sm:py-20 md:py-24 overflow-hidden">
            {/* Parallax background circles - theme-aware */}
            <div 
                className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none"
                style={{ 
                    backgroundColor: `color-mix(in srgb, var(--accent-color) 10%, transparent)`,
                    transform: `translateY(${scrollY * 0.3}px)`,
                    opacity: 0.15
                }}
            />
            <div 
                className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none"
                style={{ 
                    backgroundColor: `color-mix(in srgb, var(--accent-color) 8%, transparent)`,
                    transform: `translateY(${scrollY * 0.2}px)`,
                    opacity: 0.12
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6">
                        <Reveal delay={0}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex gap-2">
                                    {themes.map((theme) => (
                                        <button
                                            key={theme}
                                            onClick={() => handleThemeChange(theme)}
                                            aria-label={`Switch to ${themeLabels[theme]} theme`}
                                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 theme-btn ${
                                                currentTheme === theme
                                                    ? 'bg-[var(--accent-color)] text-white shadow-lg'
                                                    : 'bg-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--secondary-text)]'
                                            }`}
                                        >
                                            {themeLabels[theme]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <a href="https://abishek-maharajan.online" className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--accent-color)] transition-all duration-300 hover:opacity-80">
                                Elon Maa
                            </a>
                        </Reveal>

                        <Reveal delay={100}>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[var(--secondary-text)]">
                                AI Engineer & Innovator
                            </h2>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="text-base sm:text-lg md:text-xl text-[var(--secondary-text)] max-w-xl">
                                I build intelligent systems and data-driven applications that solve real-world problems — from fine-tuned LLMs to full-stack AI products.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
                                <a 
                                    href="#contact" 
                                    aria-label="Work with me" 
                                    className="inline-flex items-center justify-center bg-[var(--accent-color)] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                                >
                                    Work with me
                                </a>
                                <a
                                    href="https://debonair-texture-64a.notion.site/If-you-wanna-know-who-I-am-b9933f7f327841088c4fa2382cf32cd1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download Resume"
                                    className="inline-flex items-center justify-center gap-2 text-sm text-[var(--secondary-text)] hover:text-[var(--accent-color)] px-4 py-3 rounded-lg transition-all duration-300 group"
                                    style={{
                                        border: `1px solid transparent`
                                    }}
                                    onMouseEnter={(e) => {
                                        const element = e.currentTarget;
                                        element.style.borderColor = `var(--accent-color)`;
                                        element.style.backgroundColor = `color-mix(in srgb, var(--accent-color) 10%, transparent)`;
                                        element.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const element = e.currentTarget;
                                        element.style.borderColor = `transparent`;
                                        element.style.backgroundColor = `transparent`;
                                        element.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={400} className="order-first lg:order-last">
                        <div className="relative w-full flex justify-center lg:justify-end">
                            <a href="https://abishek-maharajan.online" className="relative w-full max-w-md lg:max-w-lg block" style={{ transform: `translateY(0)` }}>
                                <div 
                                    className="relative w-full max-w-md lg:max-w-lg"
                                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                                >
                                    <img 
                                        src={elonImg} 
                                        alt="Elon Maa - AI Engineer" 
                                        className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200 transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;