import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { socialLinks } from '../../data/skills';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 pb-32 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background elements - decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-60 dark:opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-60 dark:opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Dasari Sharath Kumar
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
              Computer Science Student | Web Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating solutions that are both beautiful and functional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                rightIcon={<Mail size={18} />}
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Download CV
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400">Follow me:</span>
              <div className="flex space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sharathdasari1719@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative animate-on-scroll">
              <div className="rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl w-96 h-96 mx-auto">
                <img 
                  src="#"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-xl -rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500 rounded-xl rotate-12"></div>
            </div>
          </div>
        </div>
      
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <a 
            href="#about" 
            className="inline-flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;