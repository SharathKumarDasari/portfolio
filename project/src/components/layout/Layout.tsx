import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize scroll animations
  useScrollAnimation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;