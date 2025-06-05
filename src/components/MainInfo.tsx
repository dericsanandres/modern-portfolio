'use client';

import React from 'react';
import Link from 'next/link';

import Socials from './Socials';
import Navigation from './Navigation';
import { portfolioConfig } from '@/configs/portfolio';
import AnimatedSection from './AnimatedSection';

const MainInfo = (): React.JSX.Element => {
  return (
    <div className='h-auto lg:h-[calc(100vh-180px)] flex flex-col lg:justify-between justify-normal lg:w-[550px] mr-auto w-full static lg:fixed'>
      <div className='space-y-6 mb-3 lg:mb-0'>
        <AnimatedSection animation="slideUp" delay={0}>
          <Link href='/' className='group'>
            <h1 className='md:text-5xl font-bold text-4xl inline-block text-textPrimary hover:scale-105 transition-transform duration-300 animate-float'>
              {portfolioConfig.personal.name}
            </h1>
          </Link>
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={100}>
          <h2 className='text-xl md:text-2xl font-medium text-textPrimary hover:text-primary transition-colors duration-300'>
            {portfolioConfig.personal.title}
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={200}>
          <h3 className='max-w-[350px] text-textSecondary leading-relaxed hover:text-textPrimary transition-colors duration-300'>
            {portfolioConfig.personal.description}
          </h3>
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={300}>
          <div className='transform translate-y-20'>
            <Navigation />
          </div>
        </AnimatedSection>
      </div>
      
      <AnimatedSection animation="fadeIn" delay={500}>
        <Socials />
      </AnimatedSection>
    </div>
  );
};

export default MainInfo;
