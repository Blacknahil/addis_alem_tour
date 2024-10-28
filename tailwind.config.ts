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
        customGreen:'rgb(29,35,31)',
        customBlueBlack:'rgb(72,72,72)',
        customWhiteGray:'rgb(99, 171, 69)',
      },
    },
  },
  plugins: [],
};
export default config;
