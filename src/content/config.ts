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

const talents = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        generation: z.string(),
        flavor: z.string(),
        mark: z.string(),
        description: z.string(),
        images: z.array(z.string()),
        socialMedia: z.object({
            youtube: z.optional(z.array(z.string())),
            twitch: z.optional(z.string()),
            twitter: z.optional(z.string()),
        }),
    }),
});

export const collections = { news, talents };
