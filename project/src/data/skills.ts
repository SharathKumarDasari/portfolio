import { Skill, SocialLink, NavLink } from '../types';

export const skills: Skill[] = [
  {
    name: 'React',
    icon: 'Code',
    category: 'frontend',
    proficiency: 2,
  },
  // {
  //   name: 'TypeScript',
  //   icon: 'FileCode',
  //   category: 'languages',
  //   proficiency: 4,
  // },
  {
    name: 'JavaScript',
    icon: 'FileCode',
    category: 'languages',
    proficiency: 4,
  },
  {
    name: 'Java',
    icon: 'FileCode',
    category: 'languages',
    proficiency: 4,
  },
  {
    name: 'C++',
    icon: 'FileCode',
    category: 'languages',
    proficiency: 4,
  },
  {
    name: 'HTML/CSS',
    icon: 'FileCode',
    category: 'frontend',
    proficiency: 4,
  },
  {
    name: 'Node.js',
    icon: 'Server',
    category: 'backend',
    proficiency: 3,
  },
  {
    name: 'Express',
    icon: 'Server',
    category: 'backend',
    proficiency: 3,
  },
  {
    name: 'MongoDB',
    icon: 'Database',
    category: 'backend',
    proficiency: 3,
  },
  // {
  //   name: 'PostgreSQL',
  //   icon: 'Database',
  //   category: 'backend',
  //   proficiency: 3,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: 'Paintbrush',
  //   category: 'frontend',
  //   proficiency: 5,
  // },
  {
    name: 'Git',
    icon: 'GitBranch',
    category: 'tools',
    proficiency: 3,
  },
  {
    name:'VS Code',
    icon:'Editor',
    category:'tools',
    proficiency:4,
  },
  // {
  //   name: 'Docker',
  //   icon: 'Package',
  //   category: 'tools',
  //   proficiency: 3,
  // },
  // {
  //   name: 'Jest',
  //   icon: 'TestTube',
  //   category: 'tools',
  //   proficiency: 4,
  // },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail',
  },
];

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];