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
        'hydra-bg': "url('/hydra-bg.png')",
        'divider-about': "url('/divider-about.svg')",
        'divider-dex': "url('/divider-dex.svg')",
        'divider-roadmap': "url('/divider-roadmap.svg')",
        'divider-articles': "url('/divider-articles.svg')",
      },
      backgroundSize: {
        divider: '100% 150px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
