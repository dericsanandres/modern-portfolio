/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#0e0e0e',
        backgroundSecondary: '#1a1a1a',
        primary: '#0891b2',
        secondary: '#ffb2de',
        textPrimary: '#f2f2f2',
        textSecondary: '#919191'
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '1000': '1000ms'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(8, 145, 178, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(8, 145, 178, 0.3)' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  safelist: [
    'duration-300',
    'duration-500',
    'duration-600',
    'duration-700',
    'duration-800',
    'duration-1000',
    'animate-float',
    'animate-fadeIn',
    'animate-pulse-glow',
    'animate-gradient',
    'animate-shimmer'
  ],
  plugins: []
};
