const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primarycolor: '#2563eb',
        yellowprimary: '#ffe946',
        primarytext: '#061C3D',
        secundarycolor: '#407BFF',
        bgsecundary: '#F7F7FB',
        colorgreen: '#01C29E',
        powercolor: '#111827',
        newprimarycolor: '#003E9D'
      },
      fontFamily: {
        'dmsans': ['"Poppins", sans-serif'],
        'lato' : ['"Lato", sans-serif']
      },
      keyframes: {
        spinIn: {
          to: { transform: 'rotate(18deg)'}
        },
        spinOut: {
          to: { transform: 'rotate(360deg)'}
        },
        'fade-right': {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'fade-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
        
      },
      animation: {
        spinIn: 'spinIn 30s linear infinite',
        spinout: 'spinIn 10s linear infinite',
      },
      backgroundImage: {
        'primarygradient': 'linear-gradient(0.25turn, #2563EB, #13337A)',
        'primarygradientmobile': 'linear-gradient(0.50turn, #2563EB, #13337A)',
        'secundarygradient': 'linear-gradient(0.25turn, #2563EB, #4D2EA4)',
        'primarygradientdark': 'linear-gradient(0.50turn, #013E9A, #021B79)',
        'bgpowergradient': 'linear-gradient(0.25turn, #ebf4ff  , #ffffff )',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-right': 'fade-right 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out'
      },
    },
  },  
  plugins: [
  ],
})

