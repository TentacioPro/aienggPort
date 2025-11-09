import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { SKILLS } from '../constants';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Section - About Content */}
                <Reveal>
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <div className="space-y-3 sm:space-y-4 text-left">
                                <p className="text-base sm:text-lg leading-relaxed" style={{ color: `var(--secondary-text)` }}>
                                    I'm working to accelerate sustainable energy adoption and make humanity multiplanetary. Through Tesla, I'm scaling electric vehicles to disrupt the automotive industry and drive the world toward clean energy. With SpaceX, I'm building fully reusable rockets to enable life on Mars and reduce space access costs dramatically.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed" style={{ color: `var(--secondary-text)` }}>
                                    At xAI, I'm developing advanced artificial intelligence systems to better understand the universe and accelerate human progress. I'm also advancing neural technology through Neuralink to create high-bandwidth brain-computer interfaces, unlocking new possibilities for human cognition and communication.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed" style={{ color: `var(--secondary-text)` }}>
                                    I believe in first-principles thinking, pushing technological boundaries, and taking on ambitious problems that matter for humanity's future. The goal is to make the impossible possible and reshape the industries that define our civilization.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Right Section - Core Technologies */}
                <Reveal delay={100}>
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-left" style={{ color: `var(--accent-color)` }}>Core Technologies</h3>
                        <ul className="flex flex-wrap gap-4 items-start">
                            {SKILLS.map((skill, index) => (
                                <li key={index} className="flex items-center rounded-md px-3 py-1.5 text-sm font-medium leading-5 transition-all" style={{ 
                                    backgroundColor: `color-mix(in srgb, var(--accent-color) 20%, transparent)`,
                                    color: `var(--accent-color)`,
                                    borderColor: `var(--border-color)`,
                                    borderWidth: '1px'
                                }}>
                                    {skill.icon}
                                    <span className="ml-2">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default About;
