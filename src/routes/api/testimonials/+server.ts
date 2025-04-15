import { env } from '$env/dynamic/private';
import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';
import { json } from '@sveltejs/kit';

const client = createDirectus('https://production-directus.8rjfpz.easypanel.host')
	.with(staticToken(env.DIRECTUS_ACCESS_TOKEN))
	.with(rest());

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {

	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('Request timed out')), ms)
	);
	return Promise.race([promise, timeout]);
};

export const GET = async ({ }) => {
	try {
		const result = await withTimeout(client.request(readItems('reviews', {
			fields: ['*'], sort: ['review_date']
		})), 5000); // 5 seconds timeout
		return json(result, { status: 200 })
	} catch (error) {
		return new Response(null, { status: 200 })
	}
};
