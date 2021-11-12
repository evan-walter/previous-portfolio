module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0c3483',
        secondary: '#6b8cce',
      },
      fontFamily: {
        body: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
