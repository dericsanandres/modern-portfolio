import { type Metadata } from 'next';

export const DEFAULT_URL =
  process.env.NODE_ENV === 'production' ? 'https://my-portfolio-dericsadrs-projects.vercel.app' : 'http://localhost:3000';
export const SITE_URL = process.env.SITE_URL ?? DEFAULT_URL;
export const title = 'Deric San Andres - Systems Engineer';
export const description =
  'Systems Engineer focused on certification preparation, continuous learning, and building innovative projects. Specializing in automation, AI integration, and exploring cutting-edge technologies to stay ahead of the AI race.';

export const seo: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  applicationName: 'Deric San Andres Portfolio',
  appleWebApp: {
    capable: true,
    title,
    statusBarStyle: 'default'
  },
  icons: {
    other: [
      { url: '/assets/icons/favicon-16x16.png', sizes: '16x16' },
      { url: '/assets/icons/favicon-32x32.png', sizes: '32x32' },
      { url: '/assets/icons/safari-pinned-tab.svg', rel: 'mask-icon' }
    ],
    icon: '/favicon.ico',
    apple: '/assets/icons/apple-icon.png'
  },
  creator: 'Deric San Andres',
  authors: [{ name: 'Deric San Andres', url: SITE_URL }],
  openGraph: {
    url: SITE_URL,
    title,
    description,
    images: [
      {
        url: '/assets/icons/opengraph-image.png'
      }
    ],
    type: 'website',
    siteName: 'Deric San Andres Portfolio'
  },
  formatDetection: {
    telephone: false
  },
  manifest: '/manifest.json',
  twitter: {
    creator: '@dericsadrs',
    site: SITE_URL,
    card: 'summary_large_image',
    description,
    title,
    images: ['/assets/icons/opengraph-image.png']
  },
  keywords: [
    'Deric San Andres',
    'Systems Engineer',
    'Automation Engineer',
    'AI Integration',
    'Cloud Infrastructure',
    'DevOps',
    'Python Developer',
    'Certification Preparation',
    'Continuous Learning',
    'Emerging Technologies',
    'AI Race',
    'Innovation',
    'Flask',
    'Django',
    'Docker',
    'Kubernetes',
    'Technology Explorer',
    'Manila Philippines'
  ]
};
