module.exports = {
  content: ["index.html"],
  presets: [
    require('./my-preset')
  ],
  theme: {
    extend: {
      colors: {
        'bg-furniture': '#F2F5FF',
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}

