import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './config';

// Frontmatter shared by every category.
const entrySchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	date: z.coerce.date().optional(),
	authors: z.array(z.string()).default([]),
	// Used by categories with sort: 'order'.
	order: z.number().optional(),
	// Drafts are hidden from the site.
	draft: z.boolean().default(false),
});

// One collection per category, each reading src/content/<id>/**/*.md
export const collections = Object.fromEntries(
	CATEGORIES.map((c) => [
		c.id,
		defineCollection({
			loader: glob({ pattern: '**/*.md', base: `./src/content/${c.id}` }),
			schema: entrySchema,
		}),
	]),
);
