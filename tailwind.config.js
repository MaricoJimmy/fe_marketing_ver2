/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-secondary-container": "#d4dbff",
              "inverse-surface": "#e3e2e3",
              "inverse-primary": "#006875",
              "surface-variant": "#343536",
              "on-secondary-fixed": "#001550",
              "on-primary-fixed-variant": "#004f58",
              "tertiary": "#b1ffb5",
              "surface-border": "rgba(255, 255, 255, 0.1)",
              "secondary": "#b6c4ff",
              "on-surface-variant": "#bac9cc",
              "electric-cyan": "#00FBFF",
              "secondary-fixed-dim": "#b6c4ff",
              "surface-dim": "#121315",
              "glow-blue": "rgba(41, 98, 255, 0.3)",
              "primary-fixed-dim": "#00daf3",
              "on-tertiary-container": "#006727",
              "on-primary-fixed": "#001f24",
              "surface-container-low": "#1b1c1d",
              "error": "#ffb4ab",
              "on-primary-container": "#00626e",
              "on-tertiary": "#003912",
              "error-container": "#93000a",
              "on-secondary-fixed-variant": "#003ab3",
              "surface-container-high": "#292a2b",
              "outline": "#849396",
              "on-secondary": "#002780",
              "surface": "#121315",
              "on-tertiary-fixed": "#002108",
              "inverse-on-surface": "#303032",
              "on-primary": "#00363d",
              "on-error": "#690005",
              "on-error-container": "#ffdad6",
              "surface-container-highest": "#343536",
              "primary": "#c3f5ff",
              "surface-container": "#1f2021",
              "on-tertiary-fixed-variant": "#00531e",
              "background": "#121315",
              "secondary-container": "#0050ee",
              "surface-bright": "#38393a",
              "deep-navy": "#0A192F",
              "soft-emerald": "#10B981",
              "primary-container": "#00e5ff",
              "secondary-fixed": "#dce1ff",
              "on-surface": "#e3e2e3",
              "tertiary-fixed-dim": "#3ce36a",
              "tertiary-container": "#49ed72",
              "tertiary-fixed": "#69ff87",
              "primary-fixed": "#9cf0ff",
              "outline-variant": "#3b494c",
              "sustainability-green": "#10B981",
              "midnight-core": "#06101F",
              "deep-blue": "#1F40AF",
              "electric-cyan": "#22D3EE",
              "sustain-teal": "#10F0CB",
              "soft-white": "#F1F5F9"
          },
          "keyframes": {
              "marquee": {
                  "0%": { "transform": "translateX(0%)" },
                  "100%": { "transform": "translateX(-100%)" }
              },
              "float-node": {
                  "0%, 100%": { "transform": "translateY(0)" },
                  "50%": { "transform": "translateY(-10px)" }
              },
              "flow-dash": {
                  "to": { "stroke-dashoffset": "-24" }
              },
              "shimmer": {
                  "100%": { "transform": "translateX(100%)" }
              }
          },
          "animation": {
              "marquee": "marquee 30s linear infinite",
              "float-node": "float-node 4s ease-in-out infinite",
              "flow-dash": "flow-dash 1s linear infinite",
              "shimmer": "shimmer 2.5s infinite"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "xs": "8px",
              "lg": "40px",
              "base": "4px",
              "md": "24px",
              "xl": "80px",
              "gutter": "24px",
              "margin-mobile": "16px",
              "sm": "16px",
              "margin-desktop": "64px"
          },
          "fontFamily": {
              "title-md": ["Geist", "sans-serif"],
              "headline-lg-mobile": ["Geist", "sans-serif"],
              "body-md": ["Geist", "sans-serif"],
              "display-lg": ["Geist", "sans-serif"],
              "headline-lg": ["Geist", "sans-serif"],
              "label-sm": ["Geist", "sans-serif"],
              "sans": ["Geist", "sans-serif"],
          },
          "fontSize": {
              "title-md": ["20px", {"lineHeight": "1.5", "letterSpacing": "0em", "fontWeight": "500"}],
              "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
              "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400"}],
              "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
              "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
              "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}]
          }
      },
  },
  plugins: [],
}
