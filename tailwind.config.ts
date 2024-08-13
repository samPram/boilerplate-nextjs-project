import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-ibm-plex-sans-thai)"],
      },
    },
    fontSize: {
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      h5: "1.25rem",
      p: "1rem",
      small: "0.8rem",
      mini: "0.64rem",
      tiny: "0.512rem",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
