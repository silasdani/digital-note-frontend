const colors = require('tailwindcss/colors')

module.exports = {
  daisyui: {
    themes: [
      "bumblebee"
    ],
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
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
        pi: "rotate-90 linear",
        show: "show 0.7s",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'rotate(0deg)', },
          '50%': { transform: 'rotate(90deg)', },
        },
        show: {
          "0%, 49.99%": { opacity: 0, "z-index": 10 },
          "50%, 100%": { opacity: 1, "z-index": 50 },
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