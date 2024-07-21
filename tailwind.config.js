/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        beacon: {
          "primary": "#202020",
          "secondary": '#8830EA',
          ".btn": {
            "background-color": '#202020'
          },
          ".btn:hover": {
            "background-color": '#8830EA'
          }
        },
      },
    ],
  },
}

