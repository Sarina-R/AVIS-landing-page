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
        accent: '#D14975',
        background: '#000000',
        foreground: '#F5F5F5',
        muted: '#4B5563',
        border: '#374151',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(135deg, #8B1A25, #650d14, #45080E)',
        'secondary-gradient':
          'linear-gradient(135deg, #67121A, #43080d, #2B0508)',
        'accent-gradient': 'linear-gradient(135deg, #D14975, #B03A60)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
