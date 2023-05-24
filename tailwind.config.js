const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries")
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
      "2xl" : ["1.5rem","2rem"],
      "3/9xl" : ["2.1rem","2.3rem"],
      "4/4xl" : ["2.4rem", "2.8rem"],
      "4/7xl" : ["2.7rem", "3.2rem"],
      "5/4xl" : ["3.4rem", "4rem"],
      "6/5xl" : ["4.3rem","4.8rem"],
      "7/5xl": ["5.5rem", "6rem"]
    },
    colors: {
      "blue": "#4498fc",
      green: "#35CC66",
      yellow: "#fff145",
      black: "#000000",
      "card-stroke": "#d9d9d9",
      "gray-background": "#f5f5f5",
      white: "#ffffff",
      grey: "#E3E3E2",
      red: "#ff0053",
      orange: "#ff8500",
      // base-transition: 0.2s ease,
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
      'tt-hoves-pro': ["TT Hoves Pro", 'sans-serif']
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
