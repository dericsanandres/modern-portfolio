'use client';

import React, { useEffect, useState } from 'react';
import QuoteScreen from './QuoteScreen';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showQuote, setShowQuote] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const handleQuoteComplete = () => {
    setShowQuote(false);
    setShowLoading(true);
  };

  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showLoading, onComplete]);

  return (
    <>
      {/* Quote Screen - Shows first */}
      {showQuote && <QuoteScreen onComplete={handleQuoteComplete} />}
      
      {/* Minimalist Loading Screen */}
      {showLoading && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-backgroundPrimary'>
          <div className='text-center space-y-6'>
            
            {/* Simple spinning circle */}
            <div className='w-8 h-8 mx-auto border-2 border-textSecondary/20 border-t-primary rounded-full animate-spin'></div>
            
            {/* Clean text */}
            <p className='text-textSecondary text-lg font-light tracking-wide'>
              Loading
            </p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;