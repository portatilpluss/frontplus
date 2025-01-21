/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/views/**/*.ejs",//carpetas y subcarpetas
    "./app/views/admin/**/*.ejs",// archivos de admin
    "./app/views/user/**/*.ejs",//archivos de user
    "./app/views/templates/**/*.ejs",//templates
    "./app/public/css/**/*.css",//archivos de css
    "./app/public/js/**/*.js"//archivos de js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

