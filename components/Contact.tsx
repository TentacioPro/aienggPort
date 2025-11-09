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
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B0270]">
                            Let's Build Something Great
                        </h3>
                        <p className="text-base sm:text-lg text-[#3B0270]/80">
                            I'm always excited to discuss new projects, creative ideas, or opportunities to contribute to your vision. Feel free to reach out and let's connect!
                        </p>
                    </div>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal delay={100}>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                        <a 
                            href="mailto:Sajjadismail22@gmail.com" 
                            className="inline-flex items-center justify-center bg-[#6F00FF] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5a00d6] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#6F00FF]/30"
                            aria-label="Email Sajjad"
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
