/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },

          "33%": {
            transform: "scale(1.1)"
          },

          "66%": {
            transform: "scale(0.9)"
          },

          "100%": {
            transform: "scale(1)"
          }
        }
      },

      animation: {
        blob: "blob 7s infinite"
      },

      colors: {
        brand: {
          primary: "#010010",
          secondary: "#0F0C3D",
          tertiary: "#4A3FEB",
          quaternary: "#E0EB3F",
          text: "#DEDEDE"
        }
      }
    },
  },
  plugins: [],
}
