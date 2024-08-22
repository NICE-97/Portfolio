/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "red",
        primaryContent: "white",
        primarySubcontent: "#db6708",
        primaryBase: "#301E67",
        primaryAccent: "#white",
        primaryBg: "#03001C",
      }
    },
  },
  plugins: [],
}

