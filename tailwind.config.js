// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6b21a8',
          light: '#8b5cf6',
          dark: '#581c87',
        },
        background: '#ffffff',
        text: {
          DEFAULT: '#1f2937',
          light: '#6b7280',
        },
        border: '#e5e7eb',
        success: '#10B981',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
}