import React from 'react';
import { socialLinks, navLinks } from '../../data/skills';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio<span className="text-primary-500">.</span></h3>
            <p className="text-gray-400 mb-4">
              A passionate web developer creating beautiful, functional, and user-friendly digital experiences.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = LucideIcons[link.icon as keyof typeof LucideIcons];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-primary-500 hover:underline"
                >
                  sharathdasari1719@gmail.com
                </a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Dasari Sharath Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;