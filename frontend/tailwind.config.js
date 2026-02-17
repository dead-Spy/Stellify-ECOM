/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // আপনার Artisanal থিমের কালারগুলো এখানে ডিফাইন করে রাখলে কোড আরও ক্লিন হবে
      colors: {
        'artisanal-bg': '#F9F7F4',
        'artisanal-dark': '#2C261F',
        'artisanal-brown': '#8D7B68',
      },
    },
  },
  plugins: [],
};