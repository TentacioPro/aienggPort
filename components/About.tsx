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
                            {/* <h3 className="text-xl sm:text-2xl font-semibold text-[#3B0270] mb-4 sm:mb-6 text-left relative inline-block">
                                About Me
                                <span className="absolute bottom-[-8px] left-0 h-1 w-1/2 bg-[#6F00FF] rounded-full"></span>
                            </h3> */}
                            <div className="space-y-3 sm:space-y-4 text-left">
                                <p className="text-base sm:text-lg text-[#3B0270]/80 leading-relaxed">
                                    Driven by a passion for artificial intelligence and machine learning, I specialize in developing robust, end-to-end solutions that transform complex challenges into practical, high-impact applications. My experience spans from building custom Large Language Models and Retrieval-Augmented Generation systems to engineering intelligent agentic platforms.
                                </p>
                                <p className="text-base sm:text-lg text-[#3B0270]/80 leading-relaxed">
                                    I thrive on architecting and implementing systems for diverse sectors, including HR tech, FinTech, and quality assurance. I enjoy turning innovative ideas into reality, whether it's fine-tuning an LLM for a specific domain or building a full-stack AI-powered application from the ground up.
                                </p>
                                <p className="text-base sm:text-lg text-[#3B0270]/80 leading-relaxed">
                                    When I'm not at the computer, I'm likely exploring new technologies, contributing to open-source projects, or diving into a good book on system design.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Right Section - Core Technologies */}
                <Reveal delay={100}>
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#3B0270] text-left  ">Core Technologies</h3>
                        <ul className="flex flex-wrap gap-4 items-start">
                            {SKILLS.map((skill, index) => (
                                <li key={index} className="flex items-center rounded-md bg-[#E9B3FB]/50 px-3 py-1.5 text-sm font-medium leading-5 text-[#3B0270] transition-all hover:bg-[#E9B3FB]">
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
