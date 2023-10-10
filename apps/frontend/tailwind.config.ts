import config from "config/tailwind.config";
import type { Config } from "tailwindcss";

const configs: Config = {
  ...config,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default configs;
