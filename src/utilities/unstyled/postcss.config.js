const config = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    ["tailwindcss", "./src/utilities/unstyled/tailwind.config.js"],
  ],
}
