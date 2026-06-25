import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../../consts';

export async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => data.locale === 'en');
	const site = SITE.en;
	return rss({
		title: site.title,
		description: site.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/en/posts/${post.slug}/`
		}))
	});
}
