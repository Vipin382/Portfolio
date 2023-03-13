/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      nm: "940px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/Blue.svg')",
        "footer-texture": "url('/img/Green.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
