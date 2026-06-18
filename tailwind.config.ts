import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obri: {
          navy: "#111827",
          ink: "#111827",
          blue: "#0D9488",
          electric: "#14B8A6",
          red: "#cc0000",
          emergency: "#0D9488",
          mist: "#FAFAF8",
          card: "#FFFFFF",
          text: "#6B7280",
          border: "#E5E7EB"
        }
      },
      fontFamily: {
        sans: ["var(--font-lato)", "Arial", "sans-serif"],
        display: ["var(--font-comfortaa)", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 50px rgba(17, 24, 39, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
