/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/images/bannerBg.jpeg')",
      },
    },
  },
  plugins: [],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
};
