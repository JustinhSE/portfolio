/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      colors: {
        primary: '#1c1c22',
        surface: '#232329',
        'surface-2': '#27272c',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
      },
      boxShadow: {
        sm:     '0 1px 3px rgba(0,0,0,0.40)',
        md:     '0 4px 12px rgba(0,0,0,0.50)',
        lg:     '0 8px 24px rgba(0,0,0,0.60)',
        accent: '0 4px 20px rgba(0,255,153,0.15)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.60), 0 4px 20px rgba(0,255,153,0.15)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}