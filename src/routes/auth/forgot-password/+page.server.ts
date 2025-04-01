import type { Actions } from './$types'

export const actions: Actions = {
	resetPassword: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const email = formData.get('email') as string
		await supabase.auth.resetPasswordForEmail(email)
		return { success: true }
	}
}
