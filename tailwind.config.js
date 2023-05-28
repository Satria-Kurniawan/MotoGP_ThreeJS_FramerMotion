/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marc: "#361000",
        maverick: "#141414",
        luca: "#313300",
        fabio: "#00082E",
        pecco: "#A91818",
        jack: "#3B2600",
      },
    },
  },
  plugins: [],
};
