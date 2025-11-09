import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#FFF1F1]/80 backdrop-blur-lg border-b border-[#E9B3FB]/50' : 'bg-[#FFF1F1]'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a href="/" className="text-lg sm:text-xl font-bold text-[#3B0270] hover:text-[#6F00FF] transition-colors">
                        Sajjad Ismail
                    </a>
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <ul className="flex items-center gap-4 lg:gap-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a className="text-sm font-medium text-[#3B0270]/80 hover:text-[#6F00FF] transition-colors" href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/SajjadIsmail" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-[#3B0270]/70 hover:text-[#6F00FF] transition-colors">
                                <GithubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/sajjad-ismail/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-[#3B0270]/70 hover:text-[#6F00FF] transition-colors">
                                <LinkedinIcon />
                            </a>
                        </div>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#3B0270] p-2 focus:outline-none focus:ring-2 focus:ring-[#6F00FF] rounded" aria-label="Toggle menu">
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-[#FFF1F1]/95 backdrop-blur-lg absolute top-16 md:top-20 left-0 w-full border-b border-[#E9B3FB]/50">
                    <nav className="flex flex-col p-6 sm:p-8 gap-4 sm:gap-6">
                        <ul className="flex flex-col items-start gap-4 sm:gap-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a onClick={() => setMenuOpen(false)} className="text-base sm:text-lg font-medium text-[#3B0270] hover:text-[#6F00FF] transition-colors" href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 pt-4 border-t border-[#E9B3FB]/30">
                            <a href="https://github.com/SajjadIsmail" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-[#3B0270]/70 hover:text-[#6F00FF] transition-colors">
                                <GithubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/sajjad-ismail/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-[#3B0270]/70 hover:text-[#6F00FF] transition-colors">
                                <LinkedinIcon />
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;