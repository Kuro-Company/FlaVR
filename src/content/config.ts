import { defineCollection, z } from "astro:content";

const news = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        publishedDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        image: z.string().optional(),
    }),
});

export const collections = { news };
