/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inputShadow: "5px 5px 7px #1c1d1f -5ps -5px 7px #222527",
      },
    },
  },
  plugins: [
    (module.exports = {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
  ],
};
