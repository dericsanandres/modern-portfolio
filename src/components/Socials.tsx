import React from 'react';

import { socials } from '@/constants';

const Socials = (): React.JSX.Element => {
  return (
    <div className='flex space-x-4 items-center'>
      {socials.map(({ url, Icon }, index) => {
        const label = url.includes('mail') ? 'email' : url.replace('/', '');
        const isTiktok = url.includes('tiktok');

        return (
          <a
            href={url}
            key={url}
            target='_blank'
            rel='noopener'
            aria-label={label}
            className='group relative p-2 rounded-lg glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow-effect'
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <Icon
              className={`text-textSecondary group-hover:text-primary transition-all duration-300 ease-out group-hover:rotate-12 ${
                isTiktok ? 'text-xl' : 'text-2xl'
              }`}
            />
            <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
