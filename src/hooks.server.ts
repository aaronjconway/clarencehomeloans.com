import { createServerClient } from '@supabase/ssr'
import { type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

const supabase: Handle = async ({ event, resolve }) => {
	console.log('calling supabase')
	event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			getAll: () => event.cookies.getAll(),
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					if (event.cookies) {
						event.cookies.set(name, value, { ...options, path: '/' })
					}
				})
			},
		},
	})

	// @ts-expect-error: suppressGetSessionWarning is not part of the public API
	event.locals.supabase.auth.suppressGetSessionWarning = true

	event.locals.safeGetSession = async () => {
		console.log('calling safeGetSession')

		const { data: { session }, } = await event.locals.supabase.auth.getSession()
		if (!session) {
			return { session: null, user: null }
		}

		const { data: { user }, error, } = await event.locals.supabase.auth.getUser()

		if (error) {
			// JWT validation has failed
			return { session: null, user: null }
		}

		return { session, user }
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version'
		},
	})
}

// const authGuard: Handle = async ({ event, resolve }) => {
// 	const { session, user } = await event.locals.safeGetSession()
// 	console.log('authguard')
// 	event.locals.session = session
// 	event.locals.user = user
//
// 	//if you dont have a session and you try to access private pages.
// 	if (!event.locals.session && event.url.pathname.startsWith('/account')) {
// 		redirect(303, '/auth/login')
// 	}
//
//
// 	//if session and you try to get to auth pages
// 	if (event.locals.session && event.url.pathname.startsWith('/auth')) {
// 		redirect(303, '/account')
// 	}
//
// 	return resolve(event)
// }

export const handle: Handle = sequence(supabase)
