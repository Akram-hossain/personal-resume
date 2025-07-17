/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1290px',
      '2xl': '1410px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {
        'one': '0px 0px 10px 0px rgba(30, 30, 30, 0.05)',   
      },
      backgroundImage: {
        // 'hero-small': "url('./images/hero-bg-small.png')", 
        // 'hero-large': "url('./images/hero-bg-large.png')", 
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'roboto': ['Roboto Slab', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#ECECEC', 
        'half': 'rgba(255, 255, 255, 0.20)', 
        'ash': '#F9F9F9', 
        'ash2': '#F6FAFA', 
        'dark-main': '#222427', 
        'dark-half': '#343941', 
      },
      borderColor: {
        'first' : '#FF9040', 
        'second' : 'rgba(29, 29, 29, 0.10)', 
        'third' : '#9B3D35', 
      },
      colors: {
        'first': '#1d1d1d', 
        'second': '#9B3D35', 
        'third': 'rgba(29, 29, 29, 0.8)', 
        'dark-txt': 'rgba(255, 255, 255, 0.8)', 
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#00E016' },
          '50%': { backgroundColor: '#00E01633' },
        },
        wave: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
        wave: 'wave 1s linear infinite',
      },
    },
  },
  plugins: [],
}

