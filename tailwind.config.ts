import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // or 'app' instead of 'src' depending on your structure
  ],
  theme: {
    extend: {
       screens: {
        'xs': '370px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'swipe-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-10px)' },
        },
        'swipe-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'swipe-left': 'swipe-left 0.3s ease-in-out',
        'swipe-right': 'swipe-right 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;