const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./public/index.html"],
  safelist: [`bg-background`, `text-gray-300`],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan[600],
        secondary: colors.amber[600],
        background: colors.gray[800],
        surface: colors.gray[700],
        accent: colors.red[500],
        text: colors.gray[100],
        muted: colors.gray[400],
      },
      fontFamily: {
        header: ["Roboto Slab", "serif"],
        body: ["Inter", "sans-serif"],
      },

      // Shadows for atmosphere
      boxShadow: {
        "shadow-primary": "0 0 10px rgba(6, 182, 212, 0.6)",
        "shadow-accent": "0 0 10px rgba(239, 68, 68, 0.6)",
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
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
            "--tw-prose-bold": theme("colors.text"),
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
