/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
      serif: ["Spectral", "serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "2.75rem",
      "6xl": "3rem",
      "7xl": "3.25rem",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
