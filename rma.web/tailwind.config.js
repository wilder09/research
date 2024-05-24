/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'koulen': ["'Koulen'", 'bold'],
        'londrina': ["'Londrina Solid'", 'bold'],
        'krub': ["'Krub'", 'bold'],
      },
      backgroundImage: {
        'desk' : 'url("/static/Desk-Background.jpg")',
        'mob' : 'url("/static/Desk-Background-Small.jpg")',
        'vert' : 'url("/static/Vert-Background.jpg")'
      },
      },
    },
}

