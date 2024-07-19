module.exports = {
  content: ["./templates/**/*.html", "./**/templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      height: {
        "screen-1/2": "50vh",
      },
    },
  },
  plugins: [require("daisyui")],
};
