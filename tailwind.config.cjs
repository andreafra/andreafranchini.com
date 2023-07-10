const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				neutral: "#E1E1E1",
				accent: "#0C57D4",
				"accent-dark": "#3aaa8c",
			},
			fontFamily: {
				sans: ["Manrope", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				clamp: "clamp(1.5rem,8vmin,3.5rem)",
			},
		},
	},
	plugins: [],
}
