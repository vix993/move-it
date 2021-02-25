module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['Rajdhani', 'monospace']
    },
    maxWidth: {
      '3/4': '75%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
