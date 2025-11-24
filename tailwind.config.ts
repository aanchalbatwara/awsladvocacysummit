import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: '#0f2b4c', // Deep Navy
          gold: '#d4af37', // Metallic Gold
          green: '#2e5a38', // Forest Green
          cream: '#f8f7f4', // Off-white paper
          red: '#8a1b1b', // Deep Red for accents
        },
        blue: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
        },
        capitol: {
          green: '#2C5530',
          gold: '#C5B358',
          navy: '#1e3a8a',
        }
      },
    },
  },
  plugins: [],
};
export default config;
