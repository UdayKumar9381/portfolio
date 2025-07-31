/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        uday: ['Orbitron', 'sans-serif'],
        pixel: ['Silkscreen', 'cursive'],
        hacker: ['Press Start 2P', 'monospace'],
        sci: ['Oxanium', 'sans-serif'],
      },
      colors: {
        galaxy: {
          100: '#d0d0e6',
          500: '#0f0f2d',
          900: '#050510',
        },
        neonBlue: {
          300: '#66ffff',
          500: '#00ffff',
          700: '#009999',
        },
        star: '#ffffff',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      boxShadow: {
      navbar: '0 4px 12px rgba(0, 255, 255, 0.2)',
      },
      keyframes: {
        'card-flip': {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7, textShadow: '0 0 10px #00ffff' }
        },
        'floatUp': {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        'floatDown': {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out both',
        'wave': 'waveMotion 6s linear infinite',
        'floatUp': "floatUp 3s ease-in-out infinite",
        'floatDown': "floatDown 3s ease-in-out infinite",
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      }
    },
  },
  variants:
  {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-neon-glow': {
          'text-shadow': '0 0 8px rgba(0, 255, 255, 0.8)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-900': {
          'perspective': '900px',
        }
      })
    }
  ],
}