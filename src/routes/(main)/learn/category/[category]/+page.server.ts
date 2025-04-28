import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';

// interface Article {
// 	id: string
// 	status: string
// 	sort: string | null
// 	user_created: string
// 	date_created: string
// 	user_updated: string
// 	date_updated: string
// 	title: string
// 	description: string
// 	tags: string[]
// 	image: Object
// }


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
	console.log(params)
	try {
		const articles = await withTimeout(client.request(readItems('articles', {
			// fields: ['*', { ad1: ["*"] }, { ad2: ['*'] }],
			fields: ['*', { '*': ['*'] }],
			filter: { 'Category': { '_eq': params.category } }
		})), 5000); // 5 seconds timeout
		return {
			articles
		};
	} catch (error) {
		throw new Error('Failed to load Loan_Programs data');
	}
};
