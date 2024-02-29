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
      },
      fontFamily: {
        "brahma-ultra-bold": ["BrahmaRounded-Ultrabold", "sans-serif"],
      },
      colors: {
        "my-light-blue": "var(--My-Light-Blue)",
        "my-white": "var(--My-White)",
        "text-black": "var(--Text-Black)",
      },
    },
  },
  plugins: [],
};
export default config;
