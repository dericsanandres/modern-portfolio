import React from 'react';
import { portfolioConfig } from '@/configs/portfolio';

const Footer = (): React.JSX.Element => {
  return (
    <footer className='text-textSecondary text-sm'>
      <p>
        Built with {portfolioConfig.footer.builtWith.map((tech, index) => (
          <span key={tech}>
            <span className='highlight'>{tech}</span>
            {index < portfolioConfig.footer.builtWith.length - 1 && ' and '}
          </span>
        ))}, deployed with{' '}
        <span className='highlight'>{portfolioConfig.footer.deployedWith}</span>.
      </p>
      <p>
        &copy; {portfolioConfig.footer.copyright.split(' ')[0]}{' '}
        <a className='btn-primary' href='/github' target='_blank' rel='noreferrer noopener'>
          {portfolioConfig.personal.name}
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
