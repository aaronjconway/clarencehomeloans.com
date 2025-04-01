import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'

const config = defineConfig({
	extensions: ['.md', '.mdx', '.svx'],
	rehypePlugins: [
		[rehypeAutolinkHeadings, { behavior: 'wrap' }],
		[
			rehypeExternalLinks,
			{
				rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
				target: '_blank'
			}
		],
	],
});

export default config;
