/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1A6FD0", dark: "#155BB0", navy: "#111827" },
      },
    },
  },
  plugins: [],
};
