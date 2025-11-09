import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { toggleMode, getStoredMode, getStoredTheme, type Mode, type Theme } from '../src/utils/theme';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.3c2.8 0 5 2.2 5 5Z"></path>
    </svg>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6h1.5V7zm0 8H11v2h1.5v-2z"/>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M9.37,5.51C9.52,6.15,9.31,6.85,8.93,7.3C8.43,7.92,7.85,7.78,7.15,7.84C5.47,7.99,4.05,9.47,4.05,11.1c0,1.69,1.39,3.1,3.1,3.1 c0.7,0.06,1.29-0.08,1.79-0.7c0.38-0.45,0.59-1.15,0.74-1.79c0.05-0.23,0.09-0.46,0.16-0.68C10.37,10.5,11,10,11.63,10 c0.63,0,1.26,0.5,1.33,1.13c0.07,0.22,0.11,0.45,0.16,0.68c0.15,0.64,0.36,1.34,0.74,1.79c0.5,0.62,1.09,0.76,1.79,0.7 c1.71,0,3.1-1.41,3.1-3.1c0-1.63-1.42-3.11-3.1-3.26c-0.7,-0.06-1.28,0.08-1.78,0.7C14.69,6.85,14.48,6.15,14.63,5.51 C15.37,2.81,13.63,0.5,10.96,0.5C8.08,0.5,5.78,2.73,5.78,5.6C5.78,8.47,8.08,10.7,10.96,10.7c3.67,0,6.44,3.05,6.44,6.72 c0,3.67-2.77,6.72-6.44,6.72c-2.87,0-5.17-2.23-5.17-5.1c0,1.84,1.74,3.1,3.1,3.1c2.33,0,4.22-1.89,4.22-4.22 C16.22,8.63,14.33,6.75,12,6.75C9.67,6.75,7.78,8.63,7.78,10.96"/>
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentMode, setCurrentMode] = useState<Mode>(() => getStoredMode());
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => getStoredTheme());
    const [showTitlebar, setShowTitlebar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleModeToggle = () => {
        const newMode = toggleMode();
        setCurrentMode(newMode);
    };

    return (
        <>
            {/* Titlebar Notification - Above Header */}
            {showTitlebar && (
                <div 
                    className="fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out"
                    style={{ 
                        top: '0',
                        backgroundColor: `color-mix(in srgb, var(--accent-color) 15%, var(--bg-color))`,
                        borderBottomColor: `var(--accent-color)`,
                        borderBottom: `1px solid var(--accent-color)`
                    }}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
                        <a
                            href="https://abishek-maharajan.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-semibold transition-all duration-300 hover:opacity-80"
                            style={{ color: `var(--accent-color)` }}
                        >
                            View the original site here
                        </a>
                        <button
                            onClick={() => setShowTitlebar(false)}
                            className="p-1 rounded transition-all duration-300 hover:opacity-70"
                            style={{ 
                                color: `var(--accent-color)`,
                                backgroundColor: `color-mix(in srgb, var(--accent-color) 10%, transparent)`,
                                border: `1px solid var(--border-color)`
                            }}
                            aria-label="Close notification"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            
            {/* Main Header */}
            <header 
                className={`fixed left-0 right-0 z-40 transition-all duration-300`}
                style={{ 
                    top: showTitlebar ? '48px' : '0',
                    backgroundColor: `color-mix(in srgb, var(--bg-color) 95%, transparent)`,
                    borderBottomColor: `var(--border-color)`,
                    borderBottom: `1px solid var(--border-color)`
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <a href="/" className="text-lg sm:text-xl font-bold transition-colors" style={{ 
                            color: `var(--accent-color)`,
                            opacity: 0.9 
                        }}>
                            Elon Maa
                        </a>
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            <ul className="flex items-center gap-4 lg:gap-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a className="text-sm font-medium transition-colors" href={link.href} style={{ 
                                            color: `var(--secondary-text)` 
                                        }}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={handleModeToggle}
                                    aria-label={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}
                                    className="p-2 rounded-lg transition-all duration-300"
                                    style={{ 
                                        color: `var(--accent-color)`,
                                        backgroundColor: `color-mix(in srgb, var(--accent-color) 12%, transparent)`,
                                        border: `1px solid var(--border-color)`
                                    }}
                                >
                                    {currentMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </button>
                                <a href="https://github.com/TentacioPro" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="transition-colors" style={{ 
                                    color: `var(--secondary-text)` 
                                }}>
                                    <GithubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/abishek-maharajan/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="transition-colors" style={{ 
                                    color: `var(--secondary-text)` 
                                }}>
                                    <LinkedinIcon />
                                </a>
                            </div>
                        </nav>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none rounded" aria-label="Toggle menu" style={{ 
                                color: `var(--text-color)`,
                                outlineColor: `var(--accent-color)` 
                            }}>
                                {menuOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden backdrop-blur-lg" style={{ 
                        backgroundColor: `color-mix(in srgb, var(--bg-color) 95%, transparent)`,
                        borderBottomColor: `var(--border-color)`,
                        borderBottom: `1px solid var(--border-color)`
                    }}>
                        <nav className="flex flex-col p-6 sm:p-8 gap-4 sm:gap-6">
                            <ul className="flex flex-col items-start gap-4 sm:gap-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a onClick={() => setMenuOpen(false)} className="text-base sm:text-lg font-medium transition-colors" href={link.href} style={{ 
                                            color: `var(--text-color)` 
                                        }}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-6 pt-4" style={{ 
                                borderTopColor: `var(--border-color)`,
                                borderTop: `1px solid var(--border-color)`
                            }}>
                                <button 
                                    onClick={handleModeToggle}
                                    aria-label={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}
                                    className="p-2 rounded-lg transition-all duration-300"
                                    style={{ 
                                        color: `var(--accent-color)`,
                                        backgroundColor: `color-mix(in srgb, var(--accent-color) 12%, transparent)`,
                                        border: `1px solid var(--border-color)`
                                    }}
                                >
                                    {currentMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </button>
                                <a href="https://github.com/TentacioPro" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="transition-colors" style={{ 
                                    color: `var(--secondary-text)` 
                                }}>
                                    <GithubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/abishek-maharajan/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="transition-colors" style={{ 
                                    color: `var(--secondary-text)` 
                                }}>
                                    <LinkedinIcon />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;