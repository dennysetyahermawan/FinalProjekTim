/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f83cb",
        secondary: "#1f83cba8",
        blue: "#FFF8E3",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
