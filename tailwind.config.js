module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      colors: {
        primary: '#0c3483',
        secondary: '#6b8cce', // #6b8cce #1351cf #517bcf #275fcf
        // tertiary: '#824412', // #b56422 #824412
        secondarybg: '#275fcf',
        darkblue: '#272341',
        footerbg: '#333333',
        footertext: '#808080',
        footerhr: '#484848',
      },
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }
 