import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        mb_base: "375px",
      },
      minWidth: {
        mb_base: "375px",
      },
      colors: {
        primary: "#5483E8",
        secondary: "#EBBB82",
      },
      fontFamily: {
        spoqa: ["SPOQA", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
