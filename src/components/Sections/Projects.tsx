'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

import { FiGithub } from 'react-icons/fi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { projects } from '@/constants';
import AnimatedSection from '../AnimatedSection';

const Projects = (): React.JSX.Element => {
  const [perPage, setPerPage] = useState(4);

  const filteredProjects = useMemo(() => {
    return projects.slice(0, perPage);
  }, [perPage]);

  const handleShowMore = (): void => {
    if (filteredProjects.length === projects.length) return;
    setPerPage((prev) => prev + 4);
  };

  const handleShowLess = (): void => {
    setPerPage(4);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();

    if (filteredProjects.length < projects.length) {
      handleShowMore();
    } else {
      handleShowLess();
    }
  };

  return (
    <AnimatedSection animation="slideUp" className="mb-24 sm:mb-32">
      <section id='projects'>
        <h2 className='section-title'>Featured Projects</h2>
        <div className='space-y-8 mb-10'>
          {filteredProjects.map(({ name, alt, image, info, techs, links }, index) => (
            <AnimatedSection
              key={name}
              animation="slideUp"
              delay={index * 100}
              className="group"
            >
              <div className='relative p-6 rounded-xl glass-effect border-gradient card-hover glow-effect transition-all duration-500'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-center'>
                  {/* Project Image */}
                  <div className='relative w-full h-48 lg:h-32 rounded-lg overflow-hidden border border-gray-600/30 group-hover:border-primary/50 transition-all duration-300'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <Image
                      src={`/assets/images/projects/${image}`}
                      fill
                      className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                      alt={alt}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
                  </div>
                  
                  {/* Project Content */}
                  <div className='lg:col-span-2 space-y-4'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-lg font-semibold text-textPrimary group-hover:scale-105 transition-transform duration-300'>
                        {name}
                      </h3>
                      <div className='flex space-x-3'>
                        <a
                          href={links.github}
                          className='p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-effect'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`View ${name} on GitHub`}
                        >
                          <FiGithub className='w-5 h-5 text-textSecondary hover:text-primary transition-colors duration-300' />
                        </a>
                        <a
                          href={links.demo}
                          className='p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-effect'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`View ${name} demo`}
                        >
                          <HiOutlineExternalLink className='w-5 h-5 text-textSecondary hover:text-primary transition-colors duration-300' />
                        </a>
                      </div>
                    </div>
                    
                    <p className='text-sm text-textSecondary leading-relaxed group-hover:text-textPrimary transition-colors duration-300'>
                      {info}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2'>
                      {techs.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 shimmer-effect ${
                            techIndex % 2 === 0 ? 'animate-pulse-glow' : ''
                          }`}
                          style={{
                            animationDelay: `${techIndex * 0.1}s`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {projects.length > 4 && (
          <AnimatedSection animation="fadeIn" delay={400}>
            <div className='text-center'>
              <button
                className='px-6 py-3 rounded-lg glass-effect border-gradient hover:bg-primary/10 transition-all duration-300 hover:scale-105 glow-effect group'
                type='button'
                onClick={handleButtonClick}
              >
                <span className='text-primary font-medium flex items-center space-x-2'>
                  <span>{filteredProjects.length < projects.length ? 'View More Projects' : 'Show Less'}</span>
                  <AiOutlineArrowUp className={`w-4 h-4 transform transition-transform duration-300 ${
                    filteredProjects.length < projects.length 
                      ? 'rotate-45 group-hover:translate-x-1' 
                      : '-rotate-90 group-hover:-translate-y-1'
                  }`} />
                </span>
              </button>
            </div>
          </AnimatedSection>
        )}
      </section>
    </AnimatedSection>
  );
};

export default Projects;
