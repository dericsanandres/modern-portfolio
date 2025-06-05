'use client';

import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full glass-effect border-gradient glow-effect transition-all duration-500 hover:scale-110 group ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <FiArrowUp className='w-5 h-5 text-primary group-hover:text-white transition-colors duration-300' />
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow' />
    </button>
  );
};

export default BackToTopButton;
