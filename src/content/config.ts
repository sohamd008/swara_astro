import { defineCollection, z } from 'astro:content';

const artistsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        bio: z.string(),
        image: z.string().optional(),
        songs: z.array(z.object({
            title: z.string(),
            url: z.string(),
            duration: z.string().optional(),
            id: z.string()
        }))
    })
});

export const collections = {
    'artists': artistsCollection,
};
