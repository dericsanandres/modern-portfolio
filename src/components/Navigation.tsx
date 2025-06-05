'use client';

import React from 'react';
import Link from 'next/link';

import { portfolioConfig } from '@/configs/portfolio';

const REGEX = /[/#]/g;

const Navigation = (): React.JSX.Element => {
  const [currentSection, setCurrentSection] = React.useState('about');

  React.useEffect(() => {
    const handleScroll = (): void => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        const height = section.id === 'technologies' ? 150 : 100;

        if (sectionTop <= height && sectionBottom >= height) {
          const hasThisSection = portfolioConfig.navigation.find((nav) => {
            return nav.url.replace(REGEX, '') === section.id;
          });

          if (hasThisSection !== undefined) {
            setCurrentSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();

    const target = e.currentTarget.getAttribute('href');

    if (target !== null) {
      const newTarget = target.replace('/', '');

      const element = document.querySelector(newTarget);
      const offset = 90;

      if (element !== null) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className='hidden lg:block'>
      <ul className='list-none space-y-5'>
        {portfolioConfig.navigation.map(({ name, url }, index) => {
          const isCurrentSection = currentSection === url.replace(REGEX, '');
          return (
            <li 
              key={url}
              className='opacity-0 animate-fadeIn'
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <Link href={url} onClick={handleNavClick} className='group flex items-center relative overflow-hidden'>
                <div
                  className={`h-[2px] mr-4 transition-all duration-500 ease-out ${
                    isCurrentSection
                      ? 'w-16 bg-gradient-to-r from-primary to-cyan-400 shadow-lg shadow-primary/50'
                      : 'w-8 bg-textSecondary group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400'
                  } rounded-full`}
                />
                <span
                  className={`uppercase text-sm font-medium tracking-wider transition-all duration-300 ease-out relative ${
                    isCurrentSection
                      ? 'text-primary scale-105'
                      : 'text-textSecondary group-hover:text-primary group-hover:translate-x-1'
                  }`}
                >
                  {name}
                  {isCurrentSection && (
                    <div className='absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-cyan-400 rounded-full' />
                  )}
                </span>
                
                {/* Hover glow effect */}
                <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
