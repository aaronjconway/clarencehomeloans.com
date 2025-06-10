import type { Actions } from './$types';
import { env /* FUB_SYSTEM_KEY, X_SYSTEM_KEY  */ } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

// do post to followup boss
export const actions: Actions = {
	contact: async ({ request }) => {
		const formData = await request.formData();
		const firstName = formData.get('first_name');
		const lastName = formData.get('last_name');
		const phone = formData.get('phone');
		const email = formData.get('email');
		const message = formData.get('message');
		const special = formData.get('special');

		if (special) {
			return fail(400, { message: 'Bot Detected' });
		}

		// Event data
		const eventData = {
			source: 'clarencehomeloans.com',
			system: 'Clarence Home Loans',
			type: 'General Inquiry',
			description:
				'An inquiry generated from the contact form on the clarencehomeloans.com/careers',
			pageTitle: 'landing-page/careers',
			pageUrl: 'clarencehomeloans.com/landing-page/careers',
			message: message,
			person: {
				contacted: false,
				firstName: firstName,
				lastName: lastName,
				emails: [{ value: email }],
				phones: [{ value: phone }],
				tags: ['loan-officer-recruiting']
			}
		};

		const url = 'https://api.followupboss.com/v1/events';
		const options = {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				authorization:
					'Basic ' + Buffer.from(`${env.FUB_API_KEY}:`).toString('base64')
				// 'SYSTEM-KEY': FUB_SYSTEM_KEY,
				// 'X-SYSTEM-KEY': X_SYSTEM_KEY,
			},
			body: JSON.stringify(eventData)
		};

		let errorMessage = '';

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => {
				console.log(err);
			});

		if (errorMessage) {
			return { success: false, message: errorMessage };
		}

		return { success: true, message: '' };
	}
} satisfies Actions;
