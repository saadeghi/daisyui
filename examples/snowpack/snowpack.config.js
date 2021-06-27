module.exports = {
  plugins: [

    ['@snowpack/plugin-run-script', {
      watch: 'tailwindcss -o output.css --watch',
      cmd: 'tailwindcss -o output.css --minify',
    }],

  ],
};