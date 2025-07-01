import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
    seoTitle: z.string().optional(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
		coverImage: image()
      .optional()
     // .refine((img) => !img || img.width >= 960, {
    //    message: 'Cover image must be at least 960 pixels wide if provided!'
     // })
	}),
});

export const collections = { blog };
