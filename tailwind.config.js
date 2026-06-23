/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        crumb: {
          bg: "#fffaf2",
          surface: "#fcecd6",
          border: "#e8d5b7",
          text: "#2b2118",
          muted: "#6b5a45",
          terracotta: "#d9542d",
          gold: "#f3a23c",
          dark: "#2b2118",
        },
      },
    },
  },
  plugins: [],
};
