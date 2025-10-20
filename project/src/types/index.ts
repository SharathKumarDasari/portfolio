export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: number; // 1-5
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}