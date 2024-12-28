import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:[
    { pattern: /bg-[a-z0-9-]+/ },
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      base: "0px",
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#fe1d1d",
        strong: "#1a1a1a",
        light: "#171515",
      },
    },
  },
  plugins: [],
};
export default config;
