module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
        'sm': '1.25rem',
        'md': '1.5rem',
        'lg': '1.75rem',
        'xl': '2rem',
    },
    extend: {
      colors: {
        'g-purple-1': '#896CFF',
        'g-purple-2': '#9041F4',
        'gray': '#AFAFAF',
        'darker-purple': '#190A2D',
        'dark-purple': '#220E3A',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
