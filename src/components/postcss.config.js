const config = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    ["tailwindcss", "./src/components/tailwind.config.js"],
  ],
}
