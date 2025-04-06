import type { Actions } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const actions: Actions = {
	// deleteAccount: async ({ locals: { supabase, safeGetSession } }) => {
	//
	// 	// do check
	// 	const { session } = await safeGetSession()
	// 	if (!session) {
	// 		redirect(303, '/auth/login')
	// 	}
	//
	// 	const { error, data } = await supabase.auth.admin.deleteUser()
	//
	// 	if (error) {
	// 		return { message: error.message }
	// 	} else {
	// 		return { message: "Account Deleted" }
	// 	}
	// },
	deleteDocuments: async ({ locals: { supabase, safeGetSession } }) => {

		// do check
		const { session } = await safeGetSession()
		if (!session) {
			redirect(303, '/auth/login')
		}

		const { error, data } = await supabase.storage.emptyBucket('documents')

		if (error) {
			return { message: error.message }
		} else {
			return { message: "Documents permanently deleted." }
		}
	},
}
