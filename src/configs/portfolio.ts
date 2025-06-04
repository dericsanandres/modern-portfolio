// Portfolio Configuration
// Update this file to easily modify portfolio information

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Deric San Andres',
    title: 'Systems Engineer',
    description: 'I build automations, architect cloud services, maintain servers, integrate AI solutions, and deliver seamless CI/CD. Focused on continuous learning and staying ahead of the AI race.',
    email: 'dercsanandres@gmail.com',
    location: 'Manila, Philippines',
    resumeUrl: '/assets/resume.pdf'
  },

  // Social Links
  socials: {
    linkedin: 'https://linkedin.com/in/dericsanandres',
    github: 'https://github.com/dericsadrs'
  },

  // Site Configuration
  site: {
    title: 'Deric San Andres - Systems Engineer',
    description: 'Portfolio of Deric San Andres, Systems Engineer specializing in automation, AI integration, cloud infrastructure, and staying ahead of emerging technologies.',
    url: 'https://my-portfolio-dericsadrs-projects.vercel.app',
    author: 'Deric San Andres'
  },

  // Theme Colors
  theme: {
    colors: {
      primary: '#0891b2',      // Modern Cyan
      secondary: '#ffb2de',    // Pink
      background: {
        primary: '#0e0e0e',    // Dark
        secondary: '#1a1a1a'   // Lighter dark
      },
      text: {
        primary: '#f2f2f2',    // Light gray
        secondary: '#919191'   // Medium gray
      }
    }
  },

  // Navigation sections
  navigation: [
    { name: 'About', url: '/#about' },
    { name: 'Technologies', url: '/#technologies' },
    { name: 'Certifications', url: '/#certifications' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' }
  ],

  // Footer information
  footer: {
    builtWith: ['Next.js', 'Tailwind CSS'],
    deployedWith: 'Vercel',
    copyright: '2025 Deric San Andres. All rights reserved.'
  }
};
