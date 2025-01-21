/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
      serif: ["Spectral", "serif"],
      display: ["Spectral", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
