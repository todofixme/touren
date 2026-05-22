/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A0A0F",
          50:  "#F0F0F5",
          100: "#D8D8E8",
          200: "#A0A0C0",
          300: "#606080",
          400: "#303050",
          500: "#18182A",
          600: "#0E0E1C",
          700: "#0A0A0F",
          800: "#060608",
          900: "#020204",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#1C1C28",
          foreground: "#E2E2EF",
        },
        accent: {
          DEFAULT: "#E8541A",
          light: "#F07040",
          dark: "#C03A08",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2A2A3A",
          foreground: "#8888A0",
        },
        border: "#2E2E40",
        card: {
          DEFAULT: "#13131F",
          foreground: "#E8E8F0",
        },
        destructive: {
          DEFAULT: "#C0392B",
          foreground: "#FFFFFF",
        },
        ring: "#E8541A",
        background: "#0A0A0F",
        foreground: "#F0F0F8",
        input: "#2A2A3A",
        popover: {
          DEFAULT: "#13131F",
          foreground: "#E8E8F0",
        },
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "0.9" }],
        "display-xl":  ["clamp(2.5rem, 7vw,  5.5rem)", { lineHeight: "0.95" }],
        "display-lg":  ["clamp(2rem,   5vw,  4rem)",   { lineHeight: "1.0" }],
        "display-md":  ["clamp(1.5rem, 3vw,  2.5rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "grid": "8px",
        "grid-2": "16px",
        "grid-3": "24px",
        "grid-4": "32px",
        "grid-5": "40px",
        "grid-6": "48px",
        "grid-8": "64px",
        "grid-10": "80px",
        "grid-12": "96px",
        "grid-16": "128px",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-diagonal": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "accent": "0 0 24px rgba(232, 84, 26, 0.3)",
        "accent-lg": "0 0 48px rgba(232, 84, 26, 0.4)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
