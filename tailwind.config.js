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
      xl : ["1.3rem","1.8rem"],
      "2xl" : ["2.1rem","2.4rem"],
      "3xl" : ["2.4rem", "2.8rem"],
      "4xl" : ["2.7rem", "3.2rem"],
      "5xl" : ["3.4rem", "4rem"],
      "6xl" : ["4.3rem","4.8rem"],
      "7xl": ["5.5rem", "6rem"]
    },
    colors: {
      "purple-1": "#06083D",
      "purple-2": "#311166",
      "purple-3": "#1F1871",
      "purple-4": "#4B65CD",
      "purple-5": "#AF74E9",
      "blue-1": "#0070EA",
      "blue-2": "#4498FC",
      green: "#33C15B",
      yellow: "#FFF145",
      black: "#000000",
      text: "#808080",
      "card-stroke": "#D9D9D9",
      background: "#F5F5F5",
      white: "#ffffff",
      grey: "#E3E3E2",
      red: "#FF0053",
      orange: "#FF8500",
      "orange-text": "#F46300",

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
        10: "1rem",
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
        69: "9.6rem",
        70: "10rem",
      },
      borderRadius: {},
    },
  },
  plugins: plugins,
};
