const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
			fontFamily: {
				sans: [
					// "TeX Gyre Heros",
					"neue-haas-grotesk-display",
					// "Manrope Variable",
					"Helvetica Neue",
					...defaultTheme.fontFamily.sans,
				],
			},
			fontSize: {
				clamp: "clamp(1.5rem,8vmin,3.5rem)",
				base: "1.5rem",
				jumbo: "5rem",
			},
			gridTemplateColumns: {
				headerBox: "8px 1fr",
			},
		},
	},
	plugins: [],
	applyBaseStyles: false,
}
