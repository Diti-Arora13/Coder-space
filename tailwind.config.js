module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
        'xs': '1rem',
        'sm': '1.25rem',
        'md': '1.5rem',
        'lg': '1.75rem',
        'xl': '2rem',
        '2xl': '2.5rem',
    },
    extend: {
      screens: {
        'ex-small': '476px',
      },
      colors: {
        'g-color-1': '#6533F5',
        'g-color-2': '#4F7BD1',
        'black-bg': '#12181B',
        'gray': '#2A2E35',
        'light-gray': '#585F6B',
        'gray-text': '#E3E3E3',
      },
      fontSize: {
        '3xl': '3.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'regular-txt': '400',
        'semibold-txt': '500',
        'bold-txt': '700',
      },
    },
  },
  plugins: [],
}
