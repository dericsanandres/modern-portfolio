'use client';

import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-backgroundPrimary'>
      <div className='text-center space-y-8'>
        {/* Animated Logo */}
        <div className='relative'>
          <div className='w-20 h-20 mx-auto border-4 border-primary/20 rounded-full animate-spin'>
            <div className='absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin' style={{ animationDuration: '1s' }} />
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-3 h-3 bg-primary rounded-full animate-pulse' />
          </div>
        </div>

        {/* Loading Text */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold text-textPrimary'>Loading Portfolio</h2>
          <div className='flex justify-center space-x-1'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className='w-2 h-2 bg-primary rounded-full animate-bounce'
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto'>
          <div 
            className='h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full animate-pulse' 
            style={{
              animation: 'loading-progress 2s ease-out forwards'
            }} 
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
