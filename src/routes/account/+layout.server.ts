import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from '../$types'


export const load: LayoutServerLoad = async ({ depends, locals: { safeGetSession, supabase } }) => {

	console.log('layoutserverload')

	depends('supabase:documents')

	const { session, user } = await safeGetSession()

	if (!session) {
		redirect(303, '/auth/login')
	}


	const { data, error } = await supabase.storage.from('documents').list(`${user?.id}`)

	if (error) {
		console.error(`Error getting documents`)
	}

	return { documents: data }
}

