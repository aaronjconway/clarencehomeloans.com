import { json, fail, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { jsonToPrettyYaml, getStateAbbr } from '$lib/utils';

export const POST: RequestHandler = async ({ request }): Promise<Response> => {

	const data = await request.json()
	const { page_source } = data

	if (data.special) {
		await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
			method: 'POST',
			body: 'bot detected: special failed'
		})
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
			phones: [{ value: data?.phone }],
			tags: ['clarencehomeloans-web', page_source + '-inquiry', getStateAbbr(data.state)],
		},
	};

	const url = 'https://api.followupboss.com/v1/events';

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Basic ' + Buffer.from(`${env.FUB_API_KEY}:`).toString('base64'),
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
			await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
				method: 'POST',
				body: 'error posting to crm: bad response'
			})
			throw fail(500, { message: 'Error posting to crm.' })
		}

		return json({ success: true });

	} catch (err) {
		console.error(err);
		await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
			method: 'POST',
			body: `Error posting to crm: ${err}`
		})
		throw fail(500, { message: 'Error posting to crm.' })
	}
}
