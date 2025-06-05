'use client';

import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [showApp, setShowApp] = useState(false);

  const handleLoadingComplete = () => {
    setShowApp(true);
  };

  return (
    <>
      {!showApp && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${showApp ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
};

export default AppWrapper;