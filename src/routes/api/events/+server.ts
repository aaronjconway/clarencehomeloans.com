import { json, fail, type RequestHandler } from '@sveltejs/kit';
import { env, /* FUB_SYSTEM_KEY, X_SYSTEM_KEY  */ } from '$env/dynamic/private';
import { jsonToPrettyYaml } from '$lib/utils';


export const POST: RequestHandler = async ({ request }): Promise<Response> => {

	const data = await request.json()
	const { page_source } = data

	if (data.special) {
		throw fail(400, { message: 'Bot Detected' })
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

	const url = 'https://api.followupboss.com/v1/events';

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Basic ' + Buffer.from(`${env.FUB_API_KEY}:`).toString('base64'),
			// needed for high writes https://docs.followupboss.com/reference/rate-limiting
			// I think posts to /events is not limited. We're small here
			// anyways.
			// 'SYSTEM-KEY': FUB_SYSTEM_KEY,
			// 'X-SYSTEM-KEY': X_SYSTEM_KEY,
		},
		body: JSON.stringify(eventData),
	};


	//fire off event notification
	await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
		method: 'POST',
		body: jsonToPrettyYaml(data)
	})


	try {
		const res = await fetch(url, options);

		if (!res.ok) {
			throw fail(500, { message: 'Error posting to crm.' })
		}

		return json({ success: true });

	} catch (err) {
		console.error(err);
		throw fail(500, { message: 'Error posting to crm.' })
	}
}
