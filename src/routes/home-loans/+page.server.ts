import type { PageServerLoad } from './$types';
import { DIRECTUS_ACCESS_TOKEN } from '$env/static/private';

import { createDirectus, staticToken, graphql } from '@directus/sdk';

const client = createDirectus('https://production-directus.8rjfpz.easypanel.host')
	.with(staticToken(DIRECTUS_ACCESS_TOKEN))
	.with(graphql());

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('Request timed out')), ms)
	);
	return Promise.race([promise, timeout]);
};

export const load: PageServerLoad = async () => {
	try {
		const result = await withTimeout(client.query(`

		query {
			Loan_Programs { Name, status, tags, short_summary, loan_page {slug} }
			}


`), 5000); // 5 seconds timeout
		console.log(result)
		return {
			result: result
		};
	} catch (error) {
		throw new Error('Failed to load Loan_Programs data');
	}
};
