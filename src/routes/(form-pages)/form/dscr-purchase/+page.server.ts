import type { Actions } from './$types';
import { env, /* FUB_SYSTEM_KEY, X_SYSTEM_KEY  */ } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import { jsonToPrettyYaml } from '$lib/utils';

// do post to followup boss
export const actions: Actions = {
	submit: async ({ request }) => {
		const data = await request.json()
		console.log(data)

		if (data.special) {
			return fail(400, { message: 'Bot Detected' })
		}

		const eventData = {
			source: 'clarencehomeloans.com',
			system: 'Clarence Home Loans',
			type: 'General Inquiry',
			description: 'An inquiry generated from the contact form on the clarencehomeloans.com/purchase',
			pageTitle: 'form-page/purchase',
			pageUrl: 'clarencehomeloans.com/purchase',
			message: jsonToPrettyYaml(data),
			property: {
				city: data.city,
				state: data.state,
				code: data.zip,
				price: data.price
			},
			person: {
				contacted: false,
				firstName: data.first_name,
				lastName: data.last_name,
				emails: [{ value: data.email }],
				phones: [{ value: data.phone }],
				tags: ['clarencehomeloans-web', 'purchase-inquiry',],
			},
		};

		console.log(eventData)

		const url = 'https://api.followupboss.com/v1/events';
		const options = {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				authorization: 'Basic ' + Buffer.from(`${env.FUB_API_KEY}:`).toString('base64'),
				// 'SYSTEM-KEY': FUB_SYSTEM_KEY,
				// 'X-SYSTEM-KEY': X_SYSTEM_KEY,
			},
			body: JSON.stringify(eventData),
		};

		let errorMessage = '';

		fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
			method: 'POST',
			body: jsonToPrettyYaml(data)
		})

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => {
				console.log(err);
			});

		if (errorMessage) {
			return { success: false, message: errorMessage }
		}
		return { success: true }
	}
} satisfies Actions



