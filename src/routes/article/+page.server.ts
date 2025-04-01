import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

//redirect if not on the correct page
export const load: PageServerLoad = () => {
	redirect(303, '/');
};
