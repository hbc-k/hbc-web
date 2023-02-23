/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YakuHanJPs_Narrow', 'Inter', 'IBM Plex Sans JP', 'sans-serif'],
        wo_yakuhan: ['Inter', 'IBM Plex Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
