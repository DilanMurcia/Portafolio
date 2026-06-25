import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../../consts';

export async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => data.locale === 'es');
	const site = SITE.es;
	return rss({
		title: site.title,
		description: site.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/es/posts/${post.slug}/`
		}))
	});
}
