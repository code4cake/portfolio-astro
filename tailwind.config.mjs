/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "black-muted": "#071c20",
      },
      fontSize: {
        base: "1rem",
        large: "1.33rem", // h6
        xl: "2.369rem", // h4
        "2xl": "4.21rem", // h2
        "3xl": "5.61rem", // h1
      },
    },
  },
  plugins: [],
}

// 20 ~h6 24px - large
// 44 ~h4 43px - xl
// 64 ~h2 76px - 2xl
// 100 ~h1 101px - 3xl
