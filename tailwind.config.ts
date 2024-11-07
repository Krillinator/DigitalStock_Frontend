import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        current: "currentColor",

        black: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },

        limedSpruce: {
          50: "#f2f9f9",
          100: "#ddedf0",
          400: "#5ea2b2",
          500: "#438697",
          600: "#3a6e80",
          700: "#345b6a",
          800: "#314d59",
          900: "#2f4550",
          950: "#1a2a32",
        },

        bismark: {
          50: "#f4f6f7",
          100: "#e2e8eb",
          200: "#c9d4d8",
          300: "#a3b4bd",
          400: "#768d9a",
          500: "#586f7c",
          600: "#4e606c",
          700: "#43515b",
          800: "#3c454e",
          900: "#363d43",
          950: "#21262b",
        },

        jetStream: {
          50: "#f2f9f9",
          100: "#deefee",
          200: "#b8dbd9",
          300: "#96cac8",
          400: "#64acaa",
          500: "#49918f",
          600: "#3f797b",
          700: "#386366",
          800: "#345356",
          900: "#2f474a",
          950: "#1c2e30",
        },

        whiteLilac: {
          50: "#f4f4f9",
          100: "#e7e7f2",
          200: "#d5d5e8",
          300: "#b8b9d8",
          400: "#9697c4",
          500: "#807db4",
          600: "#726ba5",
          700: "#695f96",
          800: "#5a517c",
          900: "#4a4464",
          950: "#302d3e",
        },
      },
    },
  },
  plugins: [],
}
export default config
