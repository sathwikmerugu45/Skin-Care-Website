/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf7f0',
          100: '#fbeee0',
          200: '#f6dcc1',
          300: '#f0c397',
          400: '#e8a06b',
          500: '#e2844a',
          600: '#d46d3f',
          700: '#b15536',
          800: '#8d4532',
          900: '#723a2b',
        },
        rose: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf2e1',
          300: '#f5e6c8',
          400: '#eed5a3',
          500: '#e5c07b',
          600: '#d4a574',
          700: '#b8855f',
          800: '#9a6b4f',
          900: '#7f5642',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: [],
}