import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary-800": "#141D2F",
        "dark-primary-600": "#1E2A47",
        "dark-secondary": "#FEFEFE",
        "primary-500": "#0079FF",
        "light-primary-800": "#2B3442",
        "light-primary-600": "#4B6A9B",
        "light-primary-400": "#697C9A",
        "light-secondary": "#F6F8FF",
      },
    },
  },
  plugins: [forms],
};
