/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'koulen': ["'Koulen'", 'bold'],
        'londrina': ["'Londrina Solid'", 'bold'],
        'krub': ["'Krub'", 'bold'],
      },
      backgroundImage: {
        'desk' : 'url("Desk-Background.jpg")',
        'mob' : 'url("Desk-Background-Small.jpg")',
        'vert' : 'url("Vert-Background.jpg")'
      },
      },
    },
}

