module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["hover", "responsive", " focus", "dark", "dark-hover"],
    textColor: ["hover", "responsive", "focus", "dark", "dark-hover"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
