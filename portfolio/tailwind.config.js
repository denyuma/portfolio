/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 追記
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
