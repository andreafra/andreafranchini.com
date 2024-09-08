import { defineCollection, z, type CollectionEntry } from "astro:content"

const EntrySchema = z.object({
	title: z.string(),
	draft: z.boolean().optional(),
	hidden: z.boolean().optional().default(false),
	publishDate: z.date(),
	description: z.string().max(160, "Short descriptions have better SEO!"),
	empty: z.boolean().default(false),
	hideStarCounter: z.boolean().default(false),
	sourceUrl: z.string().url().optional(),
	demoUrl: z.string().url().optional(),
	tags: z.array(z.string()).min(1, "At least 1 tag is needed!"),
	image: z
		.object({
			url: z.string(),
			alt: z.string(),
		})
		.optional(),
})

const entryCollection = defineCollection({
	type: "content",
	schema: EntrySchema,
})

export type Entry = CollectionEntry<"articles"> | CollectionEntry<"works">

export const collections = {
	works: entryCollection,
	articles: entryCollection,
}
