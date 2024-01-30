/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        screenNav:'93.6vh',
      },
      colors: {
        website: {
          10: "#081b29",
          20: "#122e43",

        },
        websiteHighlight: {
          10: "#00abf1",
          20: "#0275a3",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        colors:{
          background: "#FFFFFF",
          foreground: "#000000",
          focus: "#28c900",
          dropDown: "#E5E4E2",
          tileBack: "#FFDD33"
        }
      },
      "dark": {
        colors:{
          background: "#000000",
          foreground: "#FFFFFF",
          focus: "#ab00c9",
          dropDown: "#212121",
          tileBack: "#FF7733"
        }
      }
    }
  })],

}
