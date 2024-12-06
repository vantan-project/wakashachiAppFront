import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        white: "var(--white-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        loginAccent: "var(--login-accent-color)",
        thinText: "var(--thin-text-color)",
        form: "var(--form-color)",
        formError: "var(--form-error-color)",
        formBorder: "var(--form-border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
