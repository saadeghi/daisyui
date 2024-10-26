module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,svx,md,json}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Figtree", "Noto Sans JP", "Noto Sans", "Vazirmatn", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Vazirmatn",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Vazirmatn",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
