/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D13',
        accent: '#F59E0B',
        'accent-light': '#FDE047',
        'accent-dark': '#B45309',
        'accent-gold': '#D4AF37',
        ghost: '#F8FAFC',
        'ghost-muted': '#94A3B8',
        graphite: '#151824',
        'graphite-light': '#1E2232',
        surface: '#11141E',
        'surface-light': '#181D2A',
        'surface-lighter': '#22283A',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 20px rgba(245, 158, 11, 0.35)' },
          '100%': { textShadow: '0 0 35px rgba(245, 158, 11, 0.7), 0 0 70px rgba(245, 158, 11, 0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
