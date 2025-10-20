import React from 'react';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Software',
    languages: 'Languages',
  };
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
            I'm constantly learning and expanding my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="animate-on-scroll">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {categories[category as keyof typeof categories]}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => {
                    const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons];
                    return (
                      <div key={skill.name} className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                          {Icon && <Icon size={20} />}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-900 dark:text-white font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.proficiency * 20}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary-600 dark:bg-primary-500 rounded-full"
                              style={{ width: `${skill.proficiency * 20}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;