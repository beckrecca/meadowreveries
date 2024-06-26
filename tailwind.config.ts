import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      aster: '#6C5579',
      black: '#000000',
      fern: '#627955',
      paper: '#f1f2ecff',
      white: '#ffffff'
    }
  },
  extend: {
    backgroundImage: {
      'main': "url('../assets/img/bg-main.png')",
    }
  },
  plugins: [],
};
export default config;
