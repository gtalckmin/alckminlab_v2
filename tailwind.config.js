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
          50: "#f5f4ee",
          100: "#ecece4",
          200: "#dedfd5",
          800: "#35443d",
          900: "#1b2925",
        },
        accent: {
          50: "#eef2eb",
          100: "#e2e9df",
          500: "#37664f",
          600: "#214b3d",
          700: "#17382f",
        },
      },
      boxShadow: {
        soft: "0 12px 35px rgba(30,43,36,0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
