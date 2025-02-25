
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
        primary:"#FC6203",
        lightPrimary:"#FF7F11",
        secondary:"#E63946",
        accent:"#FFC300",
        slateGray:"#637381",
        lightGray:"#e3e0e0"
      },
      screens: {
        'xxs':'330px',  
        "xxmds":"370px",
        'xs':'400px',
        "mdxs":"450px",
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
