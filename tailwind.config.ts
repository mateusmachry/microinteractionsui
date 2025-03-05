import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/registry/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config