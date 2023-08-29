import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), sitemap()],
	experimental: {
		assets: true,
	},
	site: "https://andreafranchini.com",
})
