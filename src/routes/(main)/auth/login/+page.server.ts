import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'
import type { PageServerLoad } from '../$types'


export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {

	const { session } = await safeGetSession()

	if (session) {
		redirect(303, '/account')
	}
}

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
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const { error } = await supabase.auth.signInWithPassword({ email, password })
		if (error) {
			return { message: error.message }
			// redirect(303, '/auth/error')
		} else {
			redirect(303, '/account')
		}
	},
}
