/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4k': '3840px',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '15xl': '15rem',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '48': 'repeat(48, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr))',
        '96': 'repeat(96, minmax(0, 1fr))',
        '128': 'repeat(128, minmax(0, 1fr))',
        '192': 'repeat(192, minmax(0, 1fr))',
        '256': 'repeat(256, minmax(0, 1fr))',
      }
    },
    plugins: [],
    darkMode: 'class',
  }
}