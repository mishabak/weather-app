/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        currentWeather: "var(--clr1)",
        textWeather: "var(--clr2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "card-img": "var(--img1)",
      },
      boxShadow: {
        "card-outer": "0px 0px 1px 8px var(--clr1)",
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
