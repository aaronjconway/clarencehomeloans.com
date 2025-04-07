import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ data, depends, fetch }) => {

	depends('supabase:auth')

	const reviews = await fetch('/api/testimonials')
		.then((res) => {
			return res.json()
		})
		.then((jsonData) => {
			return jsonData
		}).catch(err => { console.error('Unable to fetch reviews: ', err); return {} })


	const supabase = isBrowser()
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
			global: {
				fetch,
			},
		})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
			global: {
				fetch,
			},
			cookies: {
				getAll() {
					return data?.cookies
				},
			},
		})

	const {
		data: { session },
	} = await supabase.auth.getSession()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return { session, supabase, user, reviews }
}
