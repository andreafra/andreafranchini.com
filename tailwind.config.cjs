const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#20C1B8",
				secondary: "#31938D",
				tertiary: "#D6EDEC",
				"textcolor-1": "#142E2C",
				"textcolor-2": "#33716D",
				"textcolor-3": "#13534E",
				"primary-dark": "#0B5652",
				"secondary-dark": "#50B9B3",
				"tertiary-dark": "#142E2C",
				"textcolor-1-dark": "#89E3DF",
				"textcolor-3-dark": "#4AB0AC",
				"textcolor-2-dark": "#5C9C99",
				"accent-1": "#F47256",
				"accent-2": "#E7B916",
				"accent-3": "#4066EC",
				"accent-1-dark": "#F47256",
				"accent-2-dark": "#ECD06F",
				"accent-3-dark": "#4066EC",
			},
			fontFamily: {
				sans: [
					"Manrope",
					"Helvetica Neue",
					...defaultTheme.fontFamily.sans,
				],
			},
			fontSize: {
				clamp: "clamp(1.5rem,8vmin,3.5rem)",
			},
		},
	},
	plugins: [],
}
