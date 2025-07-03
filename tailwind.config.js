/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zentry': ['zentry', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'general': ['general', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#dfdff0',
          100: '#dfdff2',
          200: '#f0f2fa',
          300: '#010101',
          400: '#4f87dd',
        },
        violet:{
          100: '#5724ff',
        },
        yellow:{
          100: '#8e983f',
          200: '#edff66',
        }
      },
    },
  },
  plugins: [],
}