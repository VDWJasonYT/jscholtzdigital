/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1A6FD0", dark: "#155BB0", light: "#4DA3FF", deep: "#0B4F9E" },
        ink: { DEFAULT: "#0B1220", 2: "#111A2E", 3: "#1A2540" },
        paper: "#F4F6FA",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
