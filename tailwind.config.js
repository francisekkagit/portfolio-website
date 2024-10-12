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
      colors: {
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
          background: "#FAFAFA",         //Gray-200
          foreground: "#000000",         //Black
          subtext: "#757575",
          nav_dd_hover:"#ECECEC",        //Gray-400
          background_tile: "#FFFFFF"     //White
        }
      },
      "dark": {
        colors:{
          background: "#15202b",         //Blue-800
          foreground: "#FFFFFF",         //White
          subtext: "#C0C0C0",
          nav_dd_hover:"#22303c",        //Blue-500
          background_tile: "#192734"     //Blue-600
        }
      }
    }
  })],

}
