import type { Actions } from './$types';
// import { FUB_API_KEY, FUB_SYSTEM_KEY, X_SYSTEM_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

// do post to followup boss
export const actions: Actions = {
	contact: async ({ request }) => {

		// const formData = await request.formData();
		// const firstName = formData.get('first-name');
		// const lastName = formData.get('last-name');
		// const phone = formData.get('phone');
		// const email = formData.get('email');
		// const message = formData.get('message');
		// const beans = formData.get('beans')

		return json({ success: true, message: 'Success!' }, { status: 200 })

		// if (beans) {
		//     return json({ success: false, message: 'Bot detected.' }, { status: 404 })
		// }
		//
		// // Event data
		// const eventData = {
		//     source: 'clarencehomeloans.com',
		//     system: 'Clarence Home Loans',
		//     type: 'General Inquiry',
		//     description: 'An inquiry generated from the contact form on the clarencehomeloans.com/contact',
		//     pageTitle: 'Contact Us',
		//     pageUrl: 'clarencehomeloans.com/contact',
		//     message: message,
		//     person: {
		//         firstName: firstName,
		//         lastName: lastName,
		//         emails: [{ value: email }],
		//         phones: [{ value: phone }],
		//     },
		// };
		//
		// const url = 'https://api.followupboss.com/v1/events';
		// const options = {
		//     method: 'POST',
		//     headers: {
		//         accept: 'application/json',
		//         'content-type': 'application/json',
		//         authorization: FUB_API_KEY,
		//         'SYSTEM-KEY': FUB_SYSTEM_KEY,
		//         'X-SYSTEM-KEY': X_SYSTEM_KEY,
		//     },
		//     body: JSON.stringify(eventData),
		// };
		//
		// let errorMessage = '';
		//
		// fetch(url, options)
		//     .then((res) => res.json())
		//     .then((json) => console.log(json))
		//     .catch((err) => {
		//         console.log(err);
		//     });
		//
		// if (errorMessage) {
		//     return json({ success: false, message: errorMessage }, { status: 200 })
		// }
		//
		//
		// return json({ success: true, message: 'Success!' }, { status: 200 })
	}
} satisfies Actions



