import { defineConfig } from "astro/config"
import { astroImageTools } from "astro-imagetools"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), astroImageTools],
	// Deploy
	site: "https://www.andreafranchini.com",
})
