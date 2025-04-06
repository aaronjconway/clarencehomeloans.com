import type { Actions } from './$types'

export const actions: Actions = {
	resetPassword: async ({ request, locals: { supabase } }) => {
		console.log("Register Password")
		const formData = await request.formData()
		const email = formData.get('email') as string
		console.log(email)
		const { data, error } = await supabase.auth.resetPasswordForEmail(email)

		console.log(data, error)
		if (error) {
			return { success: false, message: error.message }
		} else {
			return { success: true, message: data }
		}
	}
} satisfies Actions
