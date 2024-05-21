/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#252627",
        accent: "var(--accent-color)",
        grey: "#6a6a6a",
      },

      fontFamily: {
        cursive: "'La Belle Aurore', cursive",
      },
    },
  },
  plugins: [],
};
