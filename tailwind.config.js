/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['general', 'sanf-serif'],
        'orbitron-regular': ['orbitron-regular', 'sans-serif'],
        'orbitron-bold': ['orbitron-bold', 'sans-serif'],
        'orbitron-medium': ['orbitron-medium', 'sans-serif'],
        'orbitron-semi-bold': ['orbitron-semi-bold', 'sans-serif'],
        'orbitron-extra-bold': ['orbitron-extra-bold', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'robert-medium' : ['robert-medium', 'sans-serif'],
        'tektur-medium' : ['tektur-medium', 'sans-serif'],
      },
      colors: {
       blue: {
        50: '#DFDFF0',
        75: '#DFDFF2',
        100: '#F0F2FA',
        200: '#010101',
        300: '#4FB7DD',
      },
      violet: {
        300: '#5724FF',
      },
      yellow: {
        100: '#8E983F',
        300: '#EDFF66',
    },
  },
  plugins: [],
}
}
}