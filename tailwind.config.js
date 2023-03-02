/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "321px",
        xss: "410px",
        xsss: "450px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
