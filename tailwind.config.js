/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors can be used in dark mode.
        primary: {
          light: '#3b82f6', // 蓝色
          dark: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
};
