/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-lavender': '#F7F7FD',
        'dark-purple': '#4C3B8D',
        'soft-green': '#F0FFF9',
        'charcoal': '#1F2937',
        'light-border': '#EAE6F9',
        'slate-gray': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem', // 40px
      },
    },
  },
  plugins: [],
}