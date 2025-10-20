import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { socialLinks } from '../../data/skills';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out! I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">Email</span>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      sharathdasari1719@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">Location</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      Hyderabad, Telangana
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">Phone</span>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +91 8897742519
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-gray-900 dark:text-white font-medium mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = LucideIcons[link.icon as keyof typeof LucideIcons];
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
                        aria-label={link.name}
                      >
                        {Icon && <Icon size={20} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  rightIcon={<Send size={16} />}
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;