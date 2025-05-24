import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';

interface Category {
	id: string;
	name: string;
	title: string;
	description: string;
}

const client = createDirectus(
	'https://production-directus.8rjfpz.easypanel.host'
)
	.with(staticToken(env.DIRECTUS_ACCESS_TOKEN))
	.with(rest());

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('Request timed out')), ms)
	);
	return Promise.race([promise, timeout]);
};

export const load: PageServerLoad = async () => {
	try {
		const categories = (await withTimeout(
			client.request(
				readItems('categories', {
					fields: ['*', { '*': ['*'] }]
				})
			),
			5000
		)) as Category[];
		return {
			categories
		};
	} catch (error) {
		throw new Error('Failed to fetch articles data');
	}
};
