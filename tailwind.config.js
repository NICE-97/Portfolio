/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: 'var(--primaryTitle)',
        primaryContent: 'var(--primaryContent)',
        primarySubcontent: 'var(--primarySubcontent)',
        primaryBase: 'var(--primaryBase)',
        primaryAccent: 'var(--primaryAccent)',
        primaryBg: 'var(--primaryBg)',
        primaryFontBtn: 'var(--primaryFontBtn)',
        primaryBeforeBtn: 'var(--primaryBeforeBtn)',
      }
    },
  },
  plugins: [],
}

