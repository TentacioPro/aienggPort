import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeTheme } from './src/utils/theme';

const App: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Initialize theme on app mount
        initializeTheme();
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div 
                className="cursor-blob"
                style={{
                    transform: `translate3d(${mousePosition.x - 200}px, ${mousePosition.y - 200}px, 0)`,
                }}
            ></div>
            
            <div className="relative z-10">
                <Header />
                <div className=" px-6 py-12 font-sans md:px-12 md:py-20 lg:px-8 lg:py-0">
                    <main id="content" className="pt-24 lg:w-full lg:py-24">
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
};

export default App;