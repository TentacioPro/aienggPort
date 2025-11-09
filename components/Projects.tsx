import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';

const GithubIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
    </svg>
);


const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {PROJECTS.map((project, index) => (
                        <div key={index} className="flex flex-col rounded-lg shadow-sm border overflow-hidden transition-all duration-300 hover:shadow-md" style={{
                            backgroundColor: `var(--bg-color)`,
                            borderColor: `var(--border-color)`
                        }}>
                            <div className="relative w-full h-48 overflow-hidden">
                                <img alt={project.title} loading="lazy" width="400" height="250" decoding="async" className="w-full h-full object-cover" src={project.imageUrl} />
                                {/* Color mask overlay to blend with background */}
                                <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: `color-mix(in srgb, var(--bg-color) 40%, transparent)` }}></div>
                                {/* Blur overlay for softer appearance */}
                                <div className="absolute inset-0 backdrop-blur-[0.5px]" style={{ backgroundColor: `color-mix(in srgb, var(--accent-color) 10%, transparent)` }}></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2" style={{ color: `var(--accent-color)` }}>{project.title}</h3>
                                <p className="text-sm mb-4 flex-grow" style={{ color: `var(--secondary-text)` }}>{project.description}</p>
                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <li key={tag} className="flex items-center rounded-md px-3 py-1 text-xs font-medium leading-5" style={{
                                            backgroundColor: `color-mix(in srgb, var(--accent-color) 20%, transparent)`,
                                            color: `var(--accent-color)`,
                                            borderColor: `var(--border-color)`,
                                            borderWidth: '1px'
                                        }}>{tag}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-4 mt-auto">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="transition-colors" style={{ color: `var(--secondary-text)` }} aria-label="GitHub repository">
                                            <GithubIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Section>
    );
};

export default Projects;