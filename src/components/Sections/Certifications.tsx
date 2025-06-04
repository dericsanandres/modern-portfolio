import React from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { 
  SiCisco, 
  SiOracle, 
  SiPython
} from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import { certifications } from '@/constants';

const Certifications = (): React.JSX.Element => {
  // Function to get the appropriate logo based on issuer
  const getCertificationLogo = (issuer: string) => {
    const issuerLower = issuer.toLowerCase();
    
    if (issuerLower.includes('cisco')) {
      return <SiCisco className='w-5 h-5 text-[#1BA0D7]' />;
    }
    if (issuerLower.includes('oracle')) {
      return <SiOracle className='w-5 h-5 text-[#F80000]' />;
    }
    if (issuerLower.includes('university') || issuerLower.includes('michigan')) {
      return <FaUniversity className='w-5 h-5 text-[#FFCB05]' />;
    }
    if (issuerLower.includes('python')) {
      return <SiPython className='w-5 h-5 text-[#3776AB]' />;
    }
    
    // Default fallback icon for all others (AWS, Azure, GCP, CompTIA, IBM, etc.)
    return <HiOutlineBadgeCheck className='w-5 h-5 text-primary' />;
  };
  return (
    <section id='certifications' className='mb-24 sm:mb-32'>
      <h2 className='section-title'>Certifications</h2>
      <div className='grid gap-4 sm:grid-cols-2'>
        {certifications.map(({ name, issuer, date }) => {
          const id = name.replaceAll(' ', '-').toLowerCase();
          
          return (
            <div
              key={id}
              className='group hover:bg-primary/5 p-4 -m-4 rounded-lg transition-all duration-300 ease-in-out'
            >
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 mt-1'>
                  {getCertificationLogo(issuer)}
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-sm font-medium text-textPrimary group-hover:text-primary transition-colors duration-300'>
                    {name}
                  </h3>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-1'>
                    <span className='text-xs text-textSecondary'>{issuer}</span>
                    <span className='hidden sm:block text-textSecondary'>•</span>
                    <span className='text-xs text-textSecondary'>{date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
