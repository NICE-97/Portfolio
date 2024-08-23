/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "white",
        primaryContent: "#cccccc",
        primarySubcontent: "#100662",
        primaryBase: "#0b053b",
        primaryAccent: "white",
        primaryBg: "#03001C",
      }
    },
  },
  plugins: [],
}

