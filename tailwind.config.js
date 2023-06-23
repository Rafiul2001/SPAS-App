/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-gray-c': '#272B29',
        'bg-green-c': '#00603D',
        'bg-light-green-c': '#03C988',
        'bg-gray-deep': '#202322',
        'bg-deep-green-c': '#0C3124',
      },
      backgroundImage: {
        'linear-1': 'radial-gradient(187.12% 116.25% at 16.04% -11.18%, rgba(97, 215, 172, 0.22) 0%, rgba(217, 217, 217, 0.00) 100%)',
      },
      gridTemplateColumns: {
        'for-2': 'repeat(2, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
}
