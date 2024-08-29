/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        currentWeather: "var(--clr1)",
      },
      textColor: {
        currentWeather: "var(--clr2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "548px",
      sm: "640px",

      md: "1024px",

      lg: "1280px",
    },
  },
  plugins: [],
};
