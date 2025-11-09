import type { NavLink, Skill, ExperienceItem, Project } from './types';
import React from 'react';

// Import project images
import deepPulseImg from './assets/DeepPulse.webp';
import skyMarineImg from './assets/Sky Marine Services.png';
import grokAIImg from './assets/Grok-AI.jpg';
import cybertruckImg from './assets/Cybertruck.jpg';
import starshipImg from './assets/Starship.webp';

// Python Icon
const PythonIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75M14.25 3l-4.5 18" })
    )
);

// AI/Brain Icon
const SparklesIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" })
    )
);

// Document/RAG Icon
const DocumentTextIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" })
    )
);

// CPU/Tensor Icon
const CpuChipIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" })
    )
);

// Cloud Icon (AWS/GCP)
const CloudIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" })
    )
);

// Database Icon
const CircleStackIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" })
    )
);

// Eye/Vision Icon
const EyeIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })
    )
);

// Docker/Container Icon
const CubeIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" })
    )
);

// Langchain/Link Icon
const LinkIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" })
    )
);

// FastAPI/Bolt Icon
const BoltIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" })
    )
);

// Streamlit/Chart Icon
const ChartBarIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" })
    )
);

// Electric Vehicle Icon
const BatteryIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 13.5v3.75a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-3.75m0-3V8.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25v2.25m19.5 0a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25m19.5 0v3.75c0 .414-.336.75-.75.75H.75c-.414 0-.75-.336-.75-.75v-3.75m19.5 0a2.25 2.25 0 0 0 2.25-2.25V8.25m0 0H21a2.25 2.25 0 0 1 2.25 2.25v2.25" })
    )
);

// Rocket Icon
const RocketIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v18m0-18c-3 0-4.5 1.5-4.5 4.5 0 3 1.5 6 4.5 9 3-3 4.5-6 4.5-9 0-3-1.5-4.5-4.5-4.5M6 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" })
    )
);

// Brain/Neural Icon
const BrainIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5.432 9.75m0 0H15m0 0a2.25 2.25 0 1 0 0 4.5m0 0H5.432m9.568 0a2.25 2.25 0 1 1 0 4.5m0 0l-4.718 4.718a2.25 2.25 0 0 1-1.591.659h-7.5" })
    )
);

// Sustainability/Leaf Icon
const LeafIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.828 14.828a4 4 0 1 0-5.656-5.656m5.656 5.656L9.172 9.172m5.656 5.656l1.414-1.414M9.172 9.172L7.758 7.758m0 11.314l1.414 1.414m0-11.314L6 8.586a2 2 0 0 0 0 2.828l5.656 5.656a2 2 0 0 0 2.828 0l5.656-5.656a2 2 0 0 0 0-2.828l-5.656-5.656" })
    )
);

// Mars/Globe Icon
const GlobeIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0a8.968 8.968 0 0 0 5.5-1.901M12 21v-8.25m0 0a4.5 4.5 0 0 1 2.25-.75H15m-3 0a4.5 4.5 0 0 0-2.25.75M12 12.75h.008v.008H12v-.008z" })
    )
);


export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
];

export const SKILLS: Skill[] = [
    { name: 'Electric Vehicles', icon: React.createElement(BatteryIcon, { className: "h-5 w-5" }) },
    { name: 'Space Technology', icon: React.createElement(RocketIcon, { className: "h-5 w-5" }) },
    { name: 'Artificial Intelligence', icon: React.createElement(SparklesIcon, { className: "h-5 w-5" }) },
    { name: 'Neural Interfaces', icon: React.createElement(BrainIcon, { className: "h-5 w-5" }) },
    { name: 'Sustainable Energy', icon: React.createElement(LeafIcon, { className: "h-5 w-5" }) },
    { name: 'Mars Colonization', icon: React.createElement(GlobeIcon, { className: "h-5 w-5" }) },
    { name: 'Autonomous Systems', icon: React.createElement(CubeIcon, { className: "h-5 w-5" }) },
    { name: 'Machine Learning', icon: React.createElement(CpuChipIcon, { className: "h-5 w-5" }) },
    { name: 'Robotics', icon: React.createElement(LinkIcon, { className: "h-5 w-5" }) },
    { name: 'Battery Technology', icon: React.createElement(BoltIcon, { className: "h-5 w-5" }) },
    { name: 'Manufacturing', icon: React.createElement(CubeIcon, { className: "h-5 w-5" }) },
    { name: 'Cloud Infrastructure', icon: React.createElement(CloudIcon, { className: "h-5 w-5" }) },
    { name: 'Full-Stack Engineering', icon: React.createElement(CircleStackIcon, { className: "h-5 w-5" }) },
    { name: 'Systems Design', icon: React.createElement(DocumentTextIcon, { className: "h-5 w-5" }) },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        company: 'Tesla',
        companyUrl: 'https://www.tesla.com/',
        role: 'CEO & Chief Engineer',
        duration: '2004 — Present',
        responsibilities: [
            'Led the design and development of the Cybertruck, Model S, Model 3, Model X, and Model Y, revolutionizing the EV market.',
            'Scaled battery production and energy storage solutions, including Gigafactories across the globe to accelerate sustainable energy adoption.',
            'Advanced autonomous driving technology and AI systems for full self-driving capabilities.'
        ]
    },
    {
        company: 'SpaceX',
        companyUrl: 'https://www.spacex.com/',
        role: 'CEO & Chief Engineer',
        duration: '2002 — Present',
        responsibilities: [
            'Designed and launched the Falcon 9, the first orbital-class reusable rocket, drastically reducing space access costs.',
            'Developed the Starship for deep space exploration and human missions to Mars.',
            'Built Starlink, a global satellite internet constellation serving millions of users worldwide.'
        ]
    },
    {
        company: 'xAI',
        companyUrl: 'https://x.ai/',
        role: 'Founder & CEO',
        duration: '2023 — Present',
        responsibilities: [
            'Founded xAI to develop advanced AI systems that can accelerate human progress and help understand the nature of the universe.',
            'Created Grok, a conversational AI designed to answer almost anything with a bit of humor and access to real-time information.',
            'Focused on building safe, beneficial artificial general intelligence (AGI).'
        ]
    },
];

export const PROJECTS: Project[] = [
     {
        title: 'Starship',
        description: 'A fully reusable super heavy-lift launch vehicle designed for missions to Earth orbit, the Moon, Mars, and beyond. Starship is the most powerful rocket ever built and represents the next generation of space exploration technology.',
        tags: ['Aerospace', 'Reusable Rockets', 'Mars Missions', 'Space Exploration'],
        imageUrl: starshipImg,
        githubUrl: 'https://github.com/TentacioPro'
    },
    {
        title: 'Tesla Cybertruck',
        description: 'An exoskeleton-inspired electric pickup truck with ultra-hard stainless steel body, low production costs, and revolutionary design. The Cybertruck embodies the future of sustainable, durable, and powerful vehicles.',
        tags: ['Electric Vehicles', 'Sustainable Energy', 'Innovation', 'Manufacturing'],
        imageUrl: cybertruckImg,
        githubUrl: 'https://github.com/TentacioPro'
    },
    {
        title: 'Grok AI',
        description: 'A large language model developed by xAI designed to answer almost anything with a bit of humor and access to real-time information. Grok aims to be a fun and useful conversational AI that can engage with complex topics.',
        tags: ['AI', 'LLM', 'Generative AI', 'xAI'],
        imageUrl: grokAIImg,
        githubUrl: 'https://github.com/TentacioPro'
    }
];