import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "footer-pulse": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "footer-pulse-reversed":
          "pulseReversed 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        themeBg: "#111827",
        bannerBg: "#192337",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "0.4", transform: "translateX(0)" },
          "80%": { opacity: "1", transform: "translate(20px)" },
        },
        pulseReversed: {
          "0%, 100%": { opacity: "0.4", transform: "translateX(0)" },
          "80%": { opacity: "1", transform: "translate(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
