/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b0026',
        accent: '#556b2f',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
