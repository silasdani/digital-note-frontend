const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   gray: colors.gray,
    //   white: colors.white,
    //   black: colors.black,
    //   blue: colors.blue,
    //   red: colors.rose,
    //   pink: colors.fuchsia,
    //   yellow: colors.yellow,
    //   indigo: colors.indigo,
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      animation: {
        slide: "slide 1s linear",
        pi: "rotate-90 linear"
      },
      keyframes: {
        slide: {
          '0%': { transform: 'rotate(0deg)', },
          '50%': { transform: 'rotate(90deg)', },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}