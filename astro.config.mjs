import { defineConfig } from "astro/config"
import { astroImageTools as imageTools } from "astro-imagetools"
import sitemap from "@astrojs/sitemap"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), mdx(), imageTools],
	// Deploy
	site: "https://www.andreafranchini.com",
	// Enable experimental integrations
	experimental: {
		integrations: true,
	},
})
