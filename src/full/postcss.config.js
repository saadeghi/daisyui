const config = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    ["tailwindcss", "./src/full/tailwind.config.js"],
    "autoprefixer",
  ],
}
