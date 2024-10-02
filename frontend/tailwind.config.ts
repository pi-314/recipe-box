import type { Config } from "tailwindcss";

export default {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './projects/**/*.{html,ts}',
    './libs/spartan/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
