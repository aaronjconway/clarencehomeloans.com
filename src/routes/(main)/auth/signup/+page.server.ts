import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
	signInWithGoogle: async ({ locals: { supabase } }) => {

		const { error, data } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: '/auth/callback'
			}
		})

		if (data.url) {
			redirect(303, data.url)
		}

		if (error) {
			return { message: error.message }
		} else {
			redirect(303, '/account')
		}
	},
	signup: async ({ request, locals: { supabase } }) => {

		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		// this will not send an email if already signed in.
		const { data, error } = await supabase.auth.signUp({ email, password })

		if (error) {
			return { message: error.message }
		} else {
			redirect(303, '/auth/verify')
		}
	},
}
