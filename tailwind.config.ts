/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#650d14',
          lighter: '#8B1A25',
          darker: '#45080E',
        },
        secondary: {
          DEFAULT: '#43080d',
          lighter: '#67121A',
          darker: '#2B0508',
        },
        accent: '#FFD700',
        background: '#F5F5F5',
        foreground: '#1A1A1A',
        muted: '#D1D5DB',
        border: '#E5E7EB',
        'dark-background': '#1A1A1A',
        'dark-foreground': '#F5F5F5',
        'dark-muted': '#4B5563',
        'dark-border': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(135deg, #8B1A25, #650d14, #45080E)',
        'secondary-gradient':
          'linear-gradient(135deg, #67121A, #43080d, #2B0508)',
        'accent-gradient': 'linear-gradient(135deg, #FFD700, #D4AF37)',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
