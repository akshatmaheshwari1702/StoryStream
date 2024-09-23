/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')  // Make sure daisyui is required correctly
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "wireframe", "luxury", "cyberpunk", "aqua"],
  },
}
