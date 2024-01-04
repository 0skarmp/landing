/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        'Dancing-script': ["'Dancing Script', cursive"],
        'Pacifico': ['Pacifico'],
        'Oswald': ['sans-serif'],
        'Abril-Fatface':['serif'] 
    },
  },
  plugins: [],
}

}