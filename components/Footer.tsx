import React, { useState, useEffect } from 'react';
import { getStoredTheme, type Theme } from '../src/utils/theme';

const Footer: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('tech');

    useEffect(() => {
        const theme = getStoredTheme();
        setCurrentTheme(theme);
    }, []);

    return (
        <footer 
            className="py-6 sm:py-8 border-t backdrop-blur-sm"
            style={{ 
                borderColor: `var(--border-color)`,
                backgroundColor: `color-mix(in srgb, var(--bg-color) 95%, var(--accent-color) 5%)`
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Three-Column Grid - 1/3 each */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    
                    {/* Column 1: Name & Bio */}
                    <div>
                        <button
                            onClick={() => window.location.href = 'https://abishek-maharajan.online'}
                            className="group font-bold mb-2 transition-all duration-300 cursor-pointer hover:opacity-80"
                            style={{ color: `var(--accent-color)` }}
                        >
                            <h2 className="text-xl sm:text-2xl" style={{ fontFamily: `var(--primary-font)` }}>
                                Abishek M.
                            </h2>
                        </button>
                        <p className="text-xs sm:text-sm leading-snug mb-3" style={{ color: `var(--secondary-text)`, fontFamily: `var(--primary-font)` }}>
                            AI Engineer & Full-Stack Developer. LLM integration, ML pipelines, cloud architecture.
                        </p>
                        <a
                            href="https://debonair-texture-64a.notion.site/If-you-wanna-know-who-I-am-b9933f7f327841088c4fa2382cf32cd1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: `color-mix(in srgb, var(--accent-color) 20%, transparent)`,
                                color: `var(--accent-color)`,
                                border: `1px solid var(--accent-color)`,
                                fontFamily: `var(--primary-font)`
                            }}
                            onMouseEnter={(e) => {
                                const element = e.currentTarget;
                                if (currentTheme === 'tech') {
                                    element.style.transform = 'scale(1.05)';
                                    element.style.textShadow = '0 0 10px var(--accent-color)';
                                } else if (currentTheme === 'bold') {
                                    element.style.filter = 'drop-shadow(0 0 8px var(--accent-color))';
                                } else if (currentTheme === 'industrial') {
                                    element.style.transform = 'translateX(4px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget;
                                element.style.transform = 'none';
                                element.style.textShadow = 'none';
                                element.style.filter = 'none';
                            }}
                        >
                            📄 Resume
                        </a>
                    </div>

                    {/* Column 2: Empty Grid */}
                    <div />

                    {/* Column 3: Get In Touch - Icons */}
                    <div className="flex items-center justify-start md:justify-end">
                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:maharajanabishek@gmail.com"
                                className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                                style={{ 
                                    color: `var(--accent-color)`,
                                    backgroundColor: `color-mix(in srgb, var(--accent-color) 8%, transparent)`,
                                    border: `1px solid var(--border-color)`
                                }}
                                title="Email"
                                onMouseEnter={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    if (currentTheme === 'tech') {
                                        element.style.textShadow = '0 0 8px var(--accent-color)';
                                    } else if (currentTheme === 'bold') {
                                        element.style.filter = 'drop-shadow(0 0 6px var(--accent-color))';
                                    } else if (currentTheme === 'industrial') {
                                        element.style.transform = 'translateX(2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    element.style.textShadow = 'none';
                                    element.style.filter = 'none';
                                    element.style.transform = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/TentacioPro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                                style={{ 
                                    color: `var(--accent-color)`,
                                    backgroundColor: `color-mix(in srgb, var(--accent-color) 8%, transparent)`,
                                    border: `1px solid var(--border-color)`
                                }}
                                title="GitHub"
                                onMouseEnter={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    if (currentTheme === 'tech') {
                                        element.style.textShadow = '0 0 8px var(--accent-color)';
                                    } else if (currentTheme === 'bold') {
                                        element.style.filter = 'drop-shadow(0 0 6px var(--accent-color))';
                                    } else if (currentTheme === 'industrial') {
                                        element.style.transform = 'translateX(2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    element.style.textShadow = 'none';
                                    element.style.filter = 'none';
                                    element.style.transform = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/abishek-maharajan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                                style={{ 
                                    color: `var(--accent-color)`,
                                    backgroundColor: `color-mix(in srgb, var(--accent-color) 8%, transparent)`,
                                    border: `1px solid var(--border-color)`
                                }}
                                title="LinkedIn"
                                onMouseEnter={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    if (currentTheme === 'tech') {
                                        element.style.textShadow = '0 0 8px var(--accent-color)';
                                    } else if (currentTheme === 'bold') {
                                        element.style.filter = 'drop-shadow(0 0 6px var(--accent-color))';
                                    } else if (currentTheme === 'industrial') {
                                        element.style.transform = 'translateX(2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const element = e.currentTarget as HTMLAnchorElement;
                                    element.style.textShadow = 'none';
                                    element.style.filter = 'none';
                                    element.style.transform = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.3c2.8 0 5 2.2 5 5Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="max-w-7xl mx-auto pt-4 border-t text-center text-xs" style={{ borderColor: `var(--border-color)`, fontFamily: `var(--primary-font)` }}>
                    <p style={{ color: `var(--secondary-text)` }}>
                        Built with ❤️ and passion -{' '}
                        <button
                            onClick={() => window.location.href = 'https://abishek-maharajan.online'}
                            className="transition-all duration-300 hover:opacity-80"
                            style={{ color: `var(--accent-color)`, fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                            Abishek M
                        </button>
                    </p>
                    <p style={{ color: `var(--secondary-text)`, marginTop: '0.25rem' }}>
                        © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;