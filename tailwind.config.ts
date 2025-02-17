
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        chewy: ["Chewy", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        grandstander: ["Grandstander", "cursive"],
        publicSans: ["Public Sans", "sans-serif"]
      },
      colors: {
        background: "#FFFFFF",
        primary:"#FF7F11",
        secondary:"#E63946",
        accent:"#FFC300",
        slateGray:"#637381"
      },
      screens: {
        'xxs':'330px',  
        'xs':'400px',
        "mds":"500px",
        'sm': '640px',
        'md': '768px',
        'lg': '900px',
        "xl": '1024px',
        "2xl": '1280px',
    
      }
    },
  },
  plugins: [],
} satisfies Config;
