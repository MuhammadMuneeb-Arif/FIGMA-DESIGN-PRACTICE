import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-russian-gradient":
          "linear-gradient(100.91deg, rgba(88, 86, 214, 0.5) 10.57%, rgba(12, 0, 27, 0.5) 50.78%, rgba(88, 86, 214, 0.5) 91%)",
          'custom-gradient': 'linear-gradient(80.76deg, #FFFFFF 19.75%, #ADABFB 55.95%, #FFFFFF 87.95%)',
          
        },
        backdropBlur: {
          '20px': '19.665px', 
        },

      boxShadow: {
        "custom-purple": "0px 12px 60px 5px rgba(177, 76, 255, 0.125)",
        "custom-large": "0px 12px 60px 5px rgba(177, 76, 255, 0.3)",
     
      }, screens: {
        xs: '500px',
       
         'sm-md': '625px', 
         'base-md': '810px',
        
      },
    },
  },
  plugins: [],
};

export default config;
