import type { Actions } from './$types'

export const actions: Actions = {
	updatePassword: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const password = formData.get('password-1') as string

		const { error } = await supabase.auth.updateUser({ password: password })
		if (error) {
			return { message: error.message }
		} else {
			return { message: "Password has been changed!" }
		}
	},
}
