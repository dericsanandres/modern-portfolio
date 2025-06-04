/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/dericsanandres',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/dericsadrs',
        permanent: true
      },
      {
        source: '/automa',
        destination: 'https://automa.solutions',
        permanent: true
      },
      {
        source: '/gamerpoints',
        destination: 'https://www.rappler.com/technology/features/philippine-startup-gamer-points-ad-based-earning-video-games-alab-incubation-2023/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
