import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "4.5": "1.125rem",
        "11.5": "2.875rem",
        "5.5": "1.375rem",
      },
      size: {
        "5.5": "1.375rem",
      },
      fontFamily: {
        "brahma-ultra-bold": ["BrahmaRounded-UltraBold", "sans-serif"],
        "brahma-semi-bold": ["BrahmaRounded-SemiBold", "sans-serif"],
      },
      colors: {
        "my-light-blue": "var(--My-Light-Blue)",
        "my-blue": "var(--My-Blue)",
        "my-blue-hover": "var(--My-Blue-Hover)",
        "my-blue-press": "var(--My-Blue-Press)",
        "my-red": "var(--My-Red)",
        "my-white": "var(--My-White)",
        "text-black": "var(--Text-Black)",
      },
    },
  },
  plugins: [],
};
export default config;
