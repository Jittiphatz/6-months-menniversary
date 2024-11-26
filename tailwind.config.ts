import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '1.5rem',
        lg: '2rem'
      },
      screens: {
        sm: '100%',
        md: '672px',
        lg: '672px'
      }
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  
  fontFamily: {
    'sans': ['"Kanit"'],
  },
  plugins: [nextui()]
} satisfies Config;
