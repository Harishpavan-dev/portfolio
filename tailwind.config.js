import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#5A52D5',
          light: '#8B83FF',
          glow: 'rgba(108, 99, 255, 0.4)',
        },
        accent: {
          cyan: '#00D4AA',
          pink: '#FF6B9D',
          amber: '#FFB86C',
        },
        dark: {
          bg: '#0A0A1A',
          surface: '#12122A',
          card: '#1A1A3E',
          border: 'rgba(108, 99, 255, 0.15)',
        },
        light: {
          bg: '#F0F0F8',
          surface: '#FFFFFF',
          card: '#F8F8FF',
          border: 'rgba(108, 99, 255, 0.1)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient': 'gradient-shift 6s ease infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'float-fast': 'float-fast 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'orbit': 'orbit 8s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.5)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(108, 99, 255, 0.3)' },
          '50%': { borderColor: 'rgba(108, 99, 255, 0.8)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
        '400': '400% 100%',
      },
      backdropBlur: {
        xs: '2px',
      },
      dropShadow: {
        'glow': '0 0 20px rgba(108, 99, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(108, 99, 255, 0.5)',
        'cyan': '0 0 20px rgba(0, 212, 170, 0.35)',
        'pink': '0 0 20px rgba(255, 107, 157, 0.35)',
      },
    },
  },
  plugins: [
    typography,
  ],
};
