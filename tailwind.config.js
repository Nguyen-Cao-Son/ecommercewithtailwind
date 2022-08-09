/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'son':'10px 5px 5px -5px rgba(0,0,0,0.3)'
      },
      borderRadius: {
        'max':'30px'
      },
      backgroundImage: {
        'ecomBg':"url('https://thumbs.dreamstime.com/z/online-shopping-e-commerce-concept-background-various-icons-58651687.jpg')"
      }

    },
  },
  plugins: [],
}
