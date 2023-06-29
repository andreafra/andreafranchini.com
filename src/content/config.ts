import { defineCollection, z } from "astro:content";

const entryCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        draft: z.boolean().optional(),
        hidden: z.boolean().optional().default(false),
        publishDate: z.date(),
        description: z.string().max(160, "Short descriptions have better SEO!"),
        tags: z.array(z.string()).min(1, "At least 1 tag is needed!"),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
    }),
})

export const collections = {
    "works": entryCollection,
    "articles": entryCollection
}