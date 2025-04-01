import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		// const first_name = formData.get('first_name') as string
		// const last_name = formData.get('last_name') as string
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		//todo: -- why ask for the user info if you're not going to use it.
		const response = await supabase.auth.signUp({ email, password })
		const { error } = response
		if (error) {
			return { message: error.message }
		} else {
			redirect(303, '/auth/verify')
		}
	},
}
