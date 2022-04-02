module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'darkest-blue': '#0d1328',
          'darker-blue': '#101835',
          'medium-blue': '#151d36',
          medium: '#22263f',
          'light-blue': '#1356de',
          aqua: '#26b6d4',
          greyed: '#9395b0',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
