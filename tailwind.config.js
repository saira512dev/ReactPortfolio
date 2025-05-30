// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        light: '#f5f5f5',
        primary: "#6366F1",      // Indigo-500
        secondary: "#F9FAFB",
        textLight: "#475569",
        textDark: "#E2E8F0",
        "card-dark": "#2D3748", // a softer dark (Tailwind's gray-800)
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      // xss:"317px",
      // xs: "480px",
      sm: "450px",
      mini:"650px",
      md: "1060px",
      lg:"1330px"
    },
  },
  plugins: [],
}
