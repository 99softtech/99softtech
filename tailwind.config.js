/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        width: {
          78: "19rem",
          95: "27rem",
          100: "37rem",
          128: "40rem",
          150: "45rem",
          175: "62rem",
        },
        height: {
          128: "26rem",
          150: "30rem",
        },
        borderRadius: {
          image: "50%",
        },
        backgroundPosition: {
          "top-4": "center top -10rem",
        },
        colors: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          accent: "var(--accent-color)",
          background: "var(--background-color)",
          text: "var(--text-color)",
          borderColor: "var(--border-color)",
        },
        fontFamily: {
          sans: ["Manrope", "sans-serif"],
        },
      },
    },
    variants: {},
    plugins: [],
  };