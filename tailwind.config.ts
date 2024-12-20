const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./public/index.html"],
  safelist: [`bg-background`, `text-gray-300`],
  theme: {
    extend: {
      // Colors designed for versatility
      colors: {
        primary: colors.cyan[600], // A versatile cyan for modern aesthetics
        secondary: colors.amber[600], // Warm amber balances the palette
        background: colors.gray[800], // A neutral dark-gray for universal contrast
        surface: colors.gray[700], // Slightly lighter gray for cards and panels
        accent: colors.red[500], // Vibrant red for intensity and highlights
        text: colors.gray[100], // Light gray text for dark backgrounds
        muted: colors.gray[400], // Soft gray for subdued elements
      },

      // Fonts optimized for genre neutrality
      fontFamily: {
        header: ["Roboto Slab", "serif"], // Modern and adaptable serif for headers
        body: ["Inter", "sans-serif"], // Clean, tech-friendly sans-serif for body text
      },

      // Shadows for atmosphere
      boxShadow: {
        "shadow-primary": "0 0 10px rgba(6, 182, 212, 0.6)", // Cyan glow for emphasis
        "shadow-accent": "0 0 10px rgba(239, 68, 68, 0.6)", // Red glow for accents
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle, versatile shadow
      },

      // Background Images for multi-genre use
      backgroundImage: {
        nebula: "url('/images/nebula-texture.png')", // Sci-fi inspired background
        grunge: "url('/images/grunge-texture.png')", // Horror/fantasy neutral texture
      },

      // Typography for genre-neutral design
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            h1: {
              color: theme("colors.primary"),
              fontFamily: theme("fontFamily.header"),
            },
            h2: {
              color: theme("colors.secondary"),
              fontFamily: theme("fontFamily.header"),
            },
            h3: {
              color: colors.rose[300],
              fontFamily: theme("fontFamily.header"),
            },
            a: {
              color: theme("colors.secondary"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      }),

      // Spacing for flexible layout options
      spacing: {
        128: "32rem",
        144: "36rem",
        "1/2": "50%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
