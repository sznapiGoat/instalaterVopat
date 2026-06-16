import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1D4ED8",
          light: "#3B82F6",
          muted: "#DBEAFE",
        },
        ink: "#0F172A",
        steel: "#1E293B",
        slatemuted: "#64748B",
        line: "#E2E8F0",
        paper: {
          DEFAULT: "#FFFFFF",
          muted: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)",
        "card-hover":
          "0 2px 4px rgba(15,23,42,0.06), 0 18px 40px -16px rgba(29,78,216,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
