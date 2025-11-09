import type { NavLink, Skill, ExperienceItem, Project } from './types';
import React from 'react';

// Import project images
import deepPulseImg from './assets/DeepPulse.webp';
import skyMarineImg from './assets/Sky Marine Services.png';

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


export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
];

export const SKILLS: Skill[] = [
    { name: 'Python', icon: React.createElement(PythonIcon, { className: "h-5 w-5" }) },
    { name: 'Generative AI', icon: React.createElement(SparklesIcon, { className: "h-5 w-5" }) },
    { name: 'RAG', icon: React.createElement(DocumentTextIcon, { className: "h-5 w-5" }) },
    { name: 'Docker', icon: React.createElement(CubeIcon, { className: "h-5 w-5" }) },
    { name: 'Langchain', icon: React.createElement(LinkIcon, { className: "h-5 w-5" }) },
    { name: 'FastAPI', icon: React.createElement(BoltIcon, { className: "h-5 w-5" }) },
    { name: 'Streamlit', icon: React.createElement(ChartBarIcon, { className: "h-5 w-5" }) },
    { name: 'Tensorflow', icon: React.createElement(CpuChipIcon, { className: "h-5 w-5" }) },
    { name: 'PyTorch', icon: React.createElement(CpuChipIcon, { className: "h-5 w-5" }) },
    { name: 'Scikit-learn', icon: React.createElement(CpuChipIcon, { className: "h-5 w-5" }) },
    { name: 'AWS', icon: React.createElement(CloudIcon, { className: "h-5 w-5" }) },
    { name: 'GCP', icon: React.createElement(CloudIcon, { className: "h-5 w-5" }) },
    { name: 'PostgreSQL', icon: React.createElement(CircleStackIcon, { className: "h-5 w-5" }) },
    { name: 'Computer Vision', icon: React.createElement(EyeIcon, { className: "h-5 w-5" }) },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        company: 'NeoQubit',
        companyUrl: 'https://neoqubit.io/',
        role: 'AI Engineer',
        duration: 'OCT 2024 — NOV 2025',
        responsibilities: [
            'Led development of NeoStack, an end-to-end HR platform using AI for resume parsing and candidate-job matching, featuring a responsive React TypeScript UI.',
            'Engineered Bidkaizen, a customized LLM fine-tuned to understand proposal intents and craft tailored solutions aligned with industry best practices.',
            'Built and maintained scalable AI models on cloud platforms like AWS, ensuring high availability and performance.'
        ]
    },
    {
        company: 'Pirai Infotech',
        companyUrl: 'https://www.piraiinfo.com/',
        role: 'AI Engineer',
        duration: 'FEB 2024 — AUG 2024',
        responsibilities: [
            'Developed a Test Case Generator using a RAG architecture to automatically create test scenarios from business requirement documents.',
            'Created Equiax, a customized RAG model for high-precision, structured data extraction in specialized domains like legal and finance.',
            'Collaborated with cross-functional teams to integrate AI models into existing products, improving efficiency and functionality.'
        ]
    },
];

export const PROJECTS: Project[] = [
     {
        title: 'DeepPulse',
        description: 'An intelligent, multi-agent research assistant powered by LangGraph and LangChain that conducts iterative web searches to provide comprehensive, well-cited answers with real-time streaming updates.',
        tags: ['Chatbot', 'LLM', 'Generative AI', 'Python'],
        imageUrl: deepPulseImg,
        githubUrl: 'https://github.com/SajjadIsmail/DeepPulse'
    },
    {
        title: 'Sky Marine Website',
        description: 'Developed a responsive frontend for a company specializing in marine services, enhancing user engagement and providing detailed product information.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: skyMarineImg,
        githubUrl: 'https://github.com/SajjadIsmail/Sky-Marine-Services'
    }
];