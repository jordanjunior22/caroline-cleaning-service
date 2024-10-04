/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212B2D',       // Complement of #DED4D2
        lightTeal: '#FAF3E0',     // Light cream
        goldenYellow: '#FFFFFF',   // White
        coralRed: '#B2B8A2',      // Muted green alternative
        mutedGreen: '#D9534F',    // Coral red for contrast
        white: '#FFFFFF',          // White
      }
    },
  },
  plugins: [],
};
