'use client';

import React, { useState } from 'react';
import QuoteScreen from './QuoteScreen';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [showQuote, setShowQuote] = useState(true);
  const [showApp, setShowApp] = useState(false);

  const handleQuoteComplete = () => {
    setShowQuote(false);
    // Small delay before showing app for smooth transition
    setTimeout(() => {
      setShowApp(true);
    }, 100);
  };

  return (
    <>
      {/* Quote Screen */}
      {showQuote && <QuoteScreen onComplete={handleQuoteComplete} />}
      
      {/* Main App with Smooth Entrance */}
      <div className={`transition-all duration-1000 ease-out ${
        showApp 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-98'
      }`}>
        {children}
      </div>
    </>
  );
};

export default AppWrapper;