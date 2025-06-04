import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import { experience } from '@/constants';
import { portfolioConfig } from '@/configs/portfolio';

const Experience = (): React.JSX.Element => {
  return (
    <section id='experience' className='mb-24 sm:mb-32'>
      <h2 className='section-title'>Experience</h2>
      <ol className='group/list space-y-10 mb-10'>
        {experience.map(({ title, company, companyUrl, location, range, duties }) => {
          const id =
            title.replaceAll(' ', '-').toLowerCase() +
            '-' +
            company.replaceAll(' ', '-').toLowerCase();

          return (
            <li
              key={id}
              className='group lg:group-hover/list:opacity-50 lg:hover:!opacity-100 transition-all duration-300 ease-in-out hover:after:bg-primary/5 after:content-[""] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-lg after:transition-colors after:duration-300 after:ease-in-out after:pointer-events-none after:z-[-1] p-4 -m-4'
            >
              <div className='grid grid-cols-8 relative z-10'>
                <div className='col-span-8 sm:col-span-2 text-textSecondary text-sm mb-1 sm:mb-0'>
                  {range}
                </div>
                <div className='ml-0 sm:ml-4 col-span-8 sm:col-span-6'>
                  <h3 className='text-base group-hover:text-primary'>
                    {title} ·{' '}
                    {companyUrl ? (
                      <a
                        href={companyUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-textPrimary hover:text-primary transition-colors duration-300 ease-in-out font-medium inline-flex items-center gap-1 group/link'
                      >
                        {company}
                        <AiOutlineArrowUp className='transform rotate-45 w-3 h-3 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200' />
                      </a>
                    ) : (
                      company
                    )}
                  </h3>
                  <span className='text-textSecondary text-sm'>{location}</span>
                  <div className='mt-2 space-y-2'>
                    {duties.map((duty) => (
                      <p key={duty} className='text-sm text-textSecondary leading-relaxed'>
                        {'- '}
                        {duty}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <a
        href={portfolioConfig.personal.resumeUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='link-primary'
      >
        View resume
      </a>
    </section>
  );
};

export default Experience;
