import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			seoTitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			locale: z.enum(['es', 'en']).default('es'),
			translationKey: z.string().optional(),
			coverImage: image().optional()
		})
});

export const collections = { blog };
