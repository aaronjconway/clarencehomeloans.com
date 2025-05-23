import type { Actions } from './$types';
//TODO:-- register system and get key
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
		const message = formData.get('message') as string;
		const special = formData.get('special');

		const badWords = [
			'seo',
			'animations',
			'images',
			'videos',
			'generate',
			'across social media',
			'advertise your business',
			'examples of our',
			'previous work',
			'unsubscribe',
			'impressive result',
			'may interest you',
			'immediate access',
			'premium digital',
			'digital marketing',
			'rebrand',
			'build your list',
			'audience',
			'find out more',
			'offerings',
			'send you a quote',
			' AI ',
			'funnel',
			'letsgetoptimize',
			'price list',
			'SEO',
			'first page'
		];

		function isFilteredMessage(message: string | null): boolean {
			if (!message) return false;
			return badWords.some((word) =>
				message.toLowerCase().includes(word.toLowerCase())
			);
		}

		if (isFilteredMessage(message)) {
			await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
				method: 'POST',
				body: `bad message attempt: ${JSON.stringify(Object.fromEntries(formData.entries()))}`
			});
			return fail(400, { message: 'spam' });
		}

		if (special) {
			await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
				method: 'POST',
				body: `special field on contact page: ${message}`
			});
			return fail(400, { message: 'Bot Detected' });
		}

		// Event data
		const eventData = {
			source: 'clarencehomeloans.com',
			system: 'Clarence Home Loans',
			type: 'General Inquiry',
			description:
				'An inquiry generated from the contact form on the clarencehomeloans.com/contact',
			pageTitle: 'Contact Us',
			pageUrl: 'clarencehomeloans.com/contact',
			message: message,
			person: {
				contacted: false,
				firstName: firstName,
				lastName: lastName,
				emails: [{ value: email }],
				phones: [{ value: phone }]
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

		await fetch(url, options)
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => {
				console.log(err);
			});

		if (errorMessage) {
			await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
				method: 'POST',
				body: `error from contact ${errorMessage}`
			});
			return { success: false, message: errorMessage };
		}

		return { success: true, message: '' };
	}
} satisfies Actions;
