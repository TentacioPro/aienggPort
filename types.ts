// FIX: Import React to make the JSX namespace available.
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error in a .ts file.
  icon: React.ReactElement;
}

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}
