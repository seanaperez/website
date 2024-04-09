/** @type {import('tailwindcss').Config} */
import tailwind_theme from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Flex Variable', ...tailwind_theme.fontFamily.sans],
        mono: ['Fira Code Variable', ...tailwind_theme.fontFamily.mono]
      },
    },
  },
  plugins: [],
};
