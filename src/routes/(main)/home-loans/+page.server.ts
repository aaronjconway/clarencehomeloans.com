import type { PageServerLoad } from './$types';
import { DIRECTUS_ACCESS_TOKEN } from '$env/static/private';
import { createDirectus, staticToken, rest, readItems } from '@directus/sdk';


const client = createDirectus('https://production-directus.8rjfpz.easypanel.host')
	.with(staticToken(DIRECTUS_ACCESS_TOKEN))
	.with(rest());

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('Request timed out')), ms)
	);
	return Promise.race([promise, timeout]);
};

export const load: PageServerLoad = async () => {
	try {
		const loanPrograms = await withTimeout(client.request(readItems('Loan_Programs', { fields: ['*', { slug: ['slug'] }], })), 5000)
		return {
			loanPrograms
		};
	} catch (error) {
		throw new Error('Failed to load Loan_Programs data');
	}
};
