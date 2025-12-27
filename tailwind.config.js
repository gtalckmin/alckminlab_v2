/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Source Serif Pro", "Georgia", "serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        base: {
          50: "#f7f7f5",
          100: "#eeeeea",
          200: "#e1e1dc",
          800: "#1f1f1b",
          900: "#0f0f0c",
        },
        accent: {
          500: "#2f6bff",
          600: "#1f4dcc",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
