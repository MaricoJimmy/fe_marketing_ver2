/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006AFF",
        error: "#E91C2B",
        success: "#58C27D",
        warning: "#FFD166",
        infor: "#3995DB",
        neutral: "#1F2C45",
        gray: "#383B42",
        warning_v2: "#f97216",
        success_v2: "#0AA350",
        "neutral-second": "#232428",
      },
      screens: {
        "tall-sm": {
          raw: "(max-height: 500px)",
        },
        "tall-md": {
          raw: "(max-height: 700px)",
        },
        tabletLG: "1100px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
