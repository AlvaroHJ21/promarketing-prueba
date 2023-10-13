import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-900': '#091B50',
        'primary-500': '#3C4D82',
        'primary-100': '#E0E4EF',

        'accent-900': '#FBBF24',
        'accent-500': '#FFCA1C',
        'accent-100': '#F7F3E3',

        'neutral-200': '#909090',
        'neutral-100': '#E8E8E8',
      },
    },
  },
  plugins: [],
};
export default config;
