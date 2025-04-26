/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF7A00',
        secondary: '#2A2A2A',
        dark: {
          background: '#121212',
          primary: '#FF7A00',
          secondary: '#F2F2F2',
        },
        light: {
          background: '#F9F9F9',
          primary: '#FF7A00',
          secondary: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
