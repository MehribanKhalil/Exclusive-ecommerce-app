/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary_dark:'var(--primary-dark)',
        secondary: "var(--secondary)",
        green_color:"var(--green-color)",
        green_dark:"var(--green-dark)"
      },
    },
  },
  plugins: [],
};
