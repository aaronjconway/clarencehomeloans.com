import { redirect } from "@sveltejs/kit"
import { type Actions } from "@sveltejs/kit"


export const actions: Actions = {
	GET: async () => {
		redirect(303, '/auth/login')
	}
}
