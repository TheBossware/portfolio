import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F4",      // cool off-white
        ink: "#0E1726",        // aviation navy near-black
        navy: "#16233B",
        slate: "#4A5568",
        mist: "#E3E6E2",
        signal: "#E0A116",     // amber signal (instrument accent)
        signalsoft: "#F5D98B",
        line: "#D3D7D2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
