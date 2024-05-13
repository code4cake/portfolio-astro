/** @type {import("prettier").Config} */

export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tabWidth: 2,
  semi: false,
  useTabs: false,
  printWidth: 80,
}
