import React from 'react';
import Section from './Section';
import Reveal from './Reveal';

const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Get in Touch">
            <div className="flex flex-col items-center text-center">
                {/* Heading */}
                <Reveal>
                    <div className="space-y-4 sm:space-y-6 max-w-2xl">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: `var(--accent-color)` }}>
                            Let's Build Something Great
                        </h3>
                        <p className="text-base sm:text-lg" style={{ color: `var(--secondary-text)` }}>
                            I'm always excited to discuss new projects, creative ideas, or opportunities to contribute to your vision. Feel free to reach out and let's connect!
                        </p>
                    </div>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal delay={100}>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                        <a 
                            href="mailto:maharajanabishek@gmail.com" 
                            className="inline-flex items-center justify-center text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            style={{ 
                                backgroundColor: `var(--accent-color)`,
                                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.2)`
                            }}
                            aria-label="Email Abishek"
                        >
                            Send Email
                        </a>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default Contact;
