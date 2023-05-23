const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: { max: "639px" },
    },
    fontSize: {
      l: ["1.7rem", "2.4rem"],
      m: ["1.5rem", "2rem"],
      s: ["1.3rem", "1.8rem"],
    },
    colors: {
      "light-yellow": "rgba(255, 241, 69, 0.25)",
      "blue-1": "#0070ea",
      "blue-2": "#4498fc",
      green: "#33c15b",
      yellow: "#fff145",
      black: "#000000",
      text: "#808080",
      "card-stroke": "#d9d9d9",
      background: "#f5f5f5",
      white: "#ffffff",
      devider: "#d9d9d9",
      grey: "#e3e3e2",
      red: "#ff0053",
      orange: "#ff8500",
      "orange-text": "#f46300",

      // base-transition: 0.2s ease,
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        4: "0.4rem",
        8: "0.8rem",
        12: "1.2rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        44: "4.4rem",
        48: "4.8rem",
        52: "5.2rem",
        56: "5.6rem",
        60: "6rem",
        64: "6.4rem",
        68: "6.8rem",
      },
      borderRadius: {},
    },
  },
  plugins: plugins,
};
