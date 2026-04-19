/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F7',
        card: '#FFFFFF',
        text: {
          primary: '#111111',
          secondary: '#666666',
        },
        border: '#E5E5E5',
        accent: {
          blue: '#0092FF',
          soft: '#EAF5FF',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        'minimal': '0px 1px 2px rgba(0,0,0,0.04)',
      },
      minHeight: {
        'screen-dvh': '100dvh',
      }
    },
  },
  plugins: [],
}
