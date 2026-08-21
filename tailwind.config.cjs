/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { spider: { red: '#e62429', blue: '#1b71d1', ink: '#05070b', mist: '#dce7f5' } },
      fontFamily: { display: ['Archivo Black', 'sans-serif'], sans: ['Space Grotesk', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
      boxShadow: { red: '0 0 30px rgba(230, 36, 41, .45)', blue: '0 0 34px rgba(27, 113, 209, .45)', cinema: '0 28px 75px rgba(0,0,0,.45)' },
    },
  },
  plugins: [],
};
