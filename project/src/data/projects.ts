import { Project } from '../types';
import arogya_ai from './arogya_ai.jpg';
import sar_marine_servalance from './sar_marine_servalance.png';
import astra from './astra.png';
import study_nest from './study_nest.jpg';
import bank from './bank.webp';

export const projects: Project[] = [
  {
    id: 0,
    title:'SAR Marine Surveillance System',
    description: 'SAR Marine Surveillance is a deep learning–based system designed to detect and monitor ships in Synthetic Aperture Radar (SAR) satellite imagery.The project aims to enhance maritime domain awareness by automatically identifying vessels regardless of lighting or weather conditions — where traditional optical imagery fails.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'GenAI','Python','TensorFlow','Keras','Deformable DETR'],
    imageUrl: sar_marine_servalance,
    demoUrl: 'https://example.com',
    codeUrl:'https://github.com/trinetra-Remote-Sensing-using-SAR',
    featured: true,
  },
  {
    id: 1,
    title: 'ASTRA',
    description:'A.S.T.R.A. (Advanced Smart Transcription and Recognition Assistant) is an AI-powered web application that enables real-time gesture recognition during video conferencing.It uses computer vision and deep learning to detect hand gestures from live video feeds, then translates them into text and speech, allowing users to interact naturally and hands-free.',
    technologies: ['HTML/CSS','JavaScript', 'Node.js', 'Express', 'MongoDB','WebRTC','pyTorch','Mediapipe'],
    imageUrl: astra,
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/SharathKumarDasari/ASTRA_v2',
    featured: true,
  },
  {
    id: 2,
    title: 'Arogya AI',
    description:'Arogya AI is a comprehensive healthcare triage application with multilingual support and WhatsApp integration.',
    technologies: ['React', 'NodeJs' ,'TypeScript', 'Python' , 'MongoDB',],
    imageUrl: arogya_ai,
    demoUrl: 'https://arogya-ai-liard.vercel.app/',
    codeUrl: 'https://github.com/SharathKumarDasari/arogya_ai',
    featured: true,
  },
  {
    id: 3,
    title: 'Study-Nest Flutter App',
    description: 'Developed a cross-platform mobile app using Flutter for managing academic resources with AI chatbot and personalized study roadmaps.',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'OpenAI API'],
    imageUrl: study_nest,
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/SharathKumarDasari/study_nest_flutter_app',
    featured: true,
  },
  {
    id:4 ,
    title: 'Study Nest',
    description: 'Built a full-stack web app for managing academic resources like notes and assignments with Integrated AI chatbot and personalized study roadmaps.',
    technologies: ['HTML/CSS','Bootstrap','JavaScript','Node.js', 'MongoDB'],
    imageUrl: study_nest,
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/SharathKumarDasari/Study-Nest',
    featured: true,
  },
  {
    id: 5,
    title: 'Bank Management System',
    description: 'Developed a web-based banking system enabling users to perform core transactions remotely.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL'],
    imageUrl: bank,
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  }
];