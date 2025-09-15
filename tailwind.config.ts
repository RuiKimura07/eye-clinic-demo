import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)', 'Hiragino Mincho ProN', 'Yu Mincho', 'serif'],
      },
      colors: {
        'bg': '#ffffff',
        'brand': {
          DEFAULT: '#2D7A2D',
          50: '#F0F9F0',
          100: '#E1F3E1',
          200: '#C3E7C3',
          300: '#A5DBA5',
          400: '#87CF87',
          500: '#69C369',
          600: '#2D7A2D',
          700: '#236023',
          800: '#1A471A',
          900: '#0F2D0F',
        },
        'accent': {
          DEFAULT: '#4A9A4A',
          light: '#6DB66D',
          dark: '#2E5E2E',
        },
        'text': {
          DEFAULT: '#1A1A1A',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        'border': '#E5E7EB',
        'surface': '#F9FAFB',
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.6' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(30, 91, 184, 0.08)',
        'medium': '0 8px 24px rgba(30, 91, 184, 0.12)',
        'large': '0 16px 48px rgba(30, 91, 184, 0.16)',
      },
    },
  },
  plugins: [],
}
export default config