import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card, { CardContent, CardFooter } from '../ui/Card';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and demonstrates different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="animate-on-scroll">
              <Card hover>
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                    >
                      <span>Code</span>
                      <Github size={16} className="ml-1" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
            >
              <span>View More Projects</span>
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;