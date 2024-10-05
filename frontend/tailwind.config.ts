import type { Config } from "tailwindcss";
import hlmTailwindPreset from "./tailwind.hlm.preset";

export default {
  presets: [hlmTailwindPreset],
  content: [
    './projects/**/*.{html,ts}',
    './libs/spartan/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
