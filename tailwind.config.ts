import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        dark_bg: "#253140",
        primary_lite: "#6ec8c0",
        primary: "#009688",
        hahugray: "#868686",
        hahugray6: "#E6F5F3",
        hahuGray: "#ECEDEF",
        hahuGray2: "#697280",
        hahuGray1: "#444F60",
        hahuGray3: "#C7CACF",
        hahuGreen3: "#e6f5f3bf",
        hahuGray4: "#c8cbd033",
        lightDark: "#304159",
        hahugray5: "#80CBC4",
        bordercolor: "#263142",

        secondary: {
          2: "#868686",
          4: "#E5E5E5",
          3: "rgb(248 248 248 / <alpha-value>)",
        },
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "1920px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
};

export default config;
