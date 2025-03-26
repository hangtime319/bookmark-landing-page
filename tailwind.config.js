/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
      },
    },
    plugins: [],
  },
};
