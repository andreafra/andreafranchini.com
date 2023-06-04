import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import { astroImageTools } from "astro-imagetools"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), astroImageTools, mdx()],
	compressHTML: true,
	// Deploy
	site: "https://andreafranchini.com",
})
