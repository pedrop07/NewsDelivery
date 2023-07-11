/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
  },
  plugins: [require('flowbite/plugin')],
}
