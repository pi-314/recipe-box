import type { Config } from "tailwindcss";
import { hlmPreset } from "@spartan-ng/ui-core/hlm-tailwind-preset";

export default {
  presets: [hlmPreset],
  content: [
    './projects/**/*.{html,ts}',
    './libs/spartan/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
