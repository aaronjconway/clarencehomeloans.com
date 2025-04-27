import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';

const client = createDirectus('https://production-directus.8rjfpz.easypanel.host')
	.with(staticToken(env.DIRECTUS_ACCESS_TOKEN))
	.with(rest());

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('Request timed out')), ms)
	);
	return Promise.race([promise, timeout]);
};

export const load: PageServerLoad = async ({ params }) => {
	try {
		const article = await withTimeout(client.request(readItems('articles', {
			// fields: ['*', { ad1: ["*"] }, { ad2: ['*'] }],
			// //testing
			fields: ['*', { '*': ['*'] }],
			filter: { 'slug': { '_eq': params.article } }
		})), 5000); // 5 seconds timeout
		return { article };
	} catch (error) {
		console.log(JSON.stringify(error, null, 4))
	}
};
