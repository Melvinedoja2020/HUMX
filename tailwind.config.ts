import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary palette from design tokens
        "bg-primary": "#ecece9", // Warm cream beige background
        surface: "#ffffff", // White cards/surfaces
        "text-primary": "#111111", // Near black primary text
        "text-secondary": "#555555", // Dark gray secondary text
        "text-tertiary": "#888888", // Medium gray tertiary text
        "text-quaternary": "#aaaaaa", // Light gray for disabled/hints
        "text-inverse": "#ffffff", // White text on dark bg
        border: "#dddddd", // Light gray borders
        "accent-dark": "#1a1a1a", // Deep black for CTAs and booking strip
        "accent-light": "#f5f5f5", // Very light gray for hover states
        light: "#f5f5f5", // Generic light color for hover states
        success: "#4caf50", // Green for success states
        error: "#f44336", // Red for errors
      },
      backgroundColor: {
        cream: "#ecece9",
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
      textColor: {
        ink: "#111111",
        muted: "#555555",
        subtle: "#888888",
        hint: "#aaaaaa",
      },
      borderColor: {
        light: "#dddddd",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.32em" }], // 12px, kicker
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }], // 14px, button
        base: ["1rem", { lineHeight: "1.75", letterSpacing: "0" }], // 16px, body
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.25", letterSpacing: "0" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "0" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "0" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "0" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "0" }], // 60px
      },
      spacing: {
        "2": "0.5rem", // 8px
        "3": "0.75rem", // 12px
        "4": "1rem", // 16px
        "5": "1.25rem", // 20px
        "6": "1.5rem", // 24px
        "8": "2rem", // 32px
        "10": "2.5rem", // 40px
        "12": "3rem", // 48px
        "16": "4rem", // 64px
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        drawer: "0 20px 25px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
      },
      maxWidth: {
        xs: "20rem", // 320px
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem", // 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
        "4xl": "56rem", // 896px
        "5xl": "64rem", // 1024px
        "6xl": "72rem", // 1152px
        "7xl": "80rem", // 1280px
      },
      animation: {
        reveal: "reveal 0.6s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "drawer-slide": "drawer-slide 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drawer-slide": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
