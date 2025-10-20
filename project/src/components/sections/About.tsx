import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const About: React.FC = () => {
  // Experience data
  const experiences = [
    { year: '2025 - 2025 (1 month)', position: 'Web Development Intern ', company: 'Cognifyz Technologies ' },
    { year: '2024- 2024 (september,2 weeks)' , position: 'Business Development Specialist Intern', company: 'younity.in' }
    // { year: '2018 - 2020', position: 'Frontend Developer', company: 'Digital Creatives' },
    // { year: '2016 - 2018', position: 'Junior Developer', company: 'StartUp Hub' },
  ];
  
  // Education data
  const education = [
    { year: '2024 - Present', degree: 'Bachelor of Computer Science', institution: 'Keshav Memorial Insitute of Technology' },
    { year: '2021 - 2024', degree: 'Diploma in Computer Science', institution: 'Government Polytechnic ,Gadwal' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="animate-on-scroll relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            {/* <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-20 animate-float">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-600">5+</span>
                <span className="block text-sm text-gray-700 dark:text-gray-300">Years of Experience</span>
              </div>
            </div> */}
            
            {/* Background shapes */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary-200 dark:bg-primary-900/30 rounded-full opacity-70"></div>
            <div className="absolute -z-10 -bottom-10 right-20 w-20 h-20 bg-secondary-200 dark:bg-secondary-900/30 rounded-full opacity-70"></div>
          </div>
          
          {/* Content Column */}
          <div className="animate-on-scroll">
            <h2 className="section-title">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate Web Developer focused on building responsive websites and web applications that deliver seamless user experiences. I specialize in crafting clean, efficient code and creating intuitive interfaces that engage users across all devices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started with a strong interest in creating solutions that make a difference. 
              I'm constantly learning and staying up-to-date with the latest technologies to provide cutting-edge solutions.
            </p>
            
            {/* Experience and Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8">
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full">
                      <span className="block text-sm text-primary-600 dark:text-primary-400">{exp.year}</span>
                      <span className="block text-base font-medium text-gray-900 dark:text-white">{exp.position}</span>
                      <span className="block text-sm text-gray-600 dark:text-gray-400">{exp.company}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-secondary-500 before:rounded-full">
                      <span className="block text-sm text-secondary-600 dark:text-secondary-400">{edu.year}</span>
                      <span className="block text-base font-medium text-gray-900 dark:text-white">{edu.degree}</span>
                      <span className="block text-sm text-gray-600 dark:text-gray-400">{edu.institution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Button 
              variant="primary"
              rightIcon={<ArrowRight size={16} />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;