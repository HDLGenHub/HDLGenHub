/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          success: '#4CAF50', // Green
          error: '#f44336',   // Red
          info: '#2196F3',    // Blue
        },
      },
    },
    variants: {},
    plugins: [],
  }