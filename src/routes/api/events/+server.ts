// for posting to crm

import { json, fail } from '@sveltejs/kit';

import { env, /* FUB_SYSTEM_KEY, X_SYSTEM_KEY  */ } from '$env/dynamic/private';
import { jsonToPrettyYaml } from '$lib/utils';


// do post to followup boss
export const POST = async ({ request }) => {

	const data = await request.json()
	const { page_source } = data

	if (data.special) {
		return fail(400, { message: 'Bot Detected' })
	}

	const eventData = {
		source: 'clarencehomeloans.com',
		system: 'Clarence Home Loans',
		type: 'General Inquiry',
		description: 'An inquiry generated from the contact form on the clarencehomeloans.com/' + page_source,
		pageTitle: 'form/' + page_source,
		pageUrl: 'clarencehomeloans.com/form/' + page_source,
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
			tags: ['clarencehomeloans-web', page_source + '-inquiry',],
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


	fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
		method: 'POST',
		body: jsonToPrettyYaml(data)
	})

	let errorMessage = '';
	fetch(url, options)
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch((err) => {
			console.log(err);
			errorMessage = err
		});

	if (errorMessage) {
		return { success: false, message: errorMessage }
	}

	return json({ success: true })
}
