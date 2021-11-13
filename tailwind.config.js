module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0c3483',
        secondary: '#6b8cce',
        footerbg: '#333333',
        footertext: '#808080',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
