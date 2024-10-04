import type { Config } from "tailwindcss";

export default {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset') as Config],
  content: [
    './projects/**/*.{html,ts}',
    './libs/spartan/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
