'use client';

import React, { useEffect, useState } from 'react';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar at top */}
      <div className='fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50 backdrop-blur-sm'>
        <div
          className='h-full bg-gradient-to-r from-primary via-cyan-500 to-blue-400 transition-all duration-200 ease-out'
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Floating scroll indicator */}
      <div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
        <div className='flex flex-col items-center space-y-2'>
          <div className='w-1 h-20 bg-gray-700 rounded-full overflow-hidden'>
            <div
              className='w-full bg-gradient-to-b from-primary to-cyan-500 transition-all duration-200 ease-out rounded-full'
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          <span className='text-xs text-textSecondary font-medium'>
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;
