import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'family-green': '#84906c',
        'family-peach': '#f8a792', 
        'family-cream': '#f7e4c3',
        'family-gray': '#e6e6e6'
      },
    },
    fontFamily: {
      'birthday': ['Indie Flower', 'cursive']
    },
    backgroundImage: {
      'birthday-pattern': 'url("/birthday-pattern.svg")'
    },
  },
  plugins: [],
} satisfies Config;
