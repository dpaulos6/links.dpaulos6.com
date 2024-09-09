import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))'
        }
      }
    }
	},

	plugins: []
} as Config;
