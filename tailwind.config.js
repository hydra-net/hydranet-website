module.exports = {
  mode: 'jit',
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
          blue: '#22263f',
          'light-blue': '#1356de',
          aqua: '#26b6d4',
          greyed: '#9395b0',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg,#1d96ec 0%,#1254dd 100%)',
        'divider-top-right': "url('/divider-top-right.svg')",
        'divider-top-right-2': "url('/divider-top-right-2.svg')",
        'divider-top-left': "url('/divider-top-left.svg')",
      },
      backgroundSize: {
        divider: '100% 150px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
