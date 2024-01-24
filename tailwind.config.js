/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f83cb",
        secondary: "#1f83cba8",
        cyan: "#FFF8E3",
        blue: "#40A2D8",
        dark_blue: "#00618F",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
