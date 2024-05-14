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
        large: "1.33rem",
        xl: "4.21rem",
        "2xl": "5.61rem",
      },
    },
  },
  plugins: [],
}

// 20 ~h6 24px - large
// 64 ~h2 76px - xl
// 100 ~h1 101px - 2xl
