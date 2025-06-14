import type { Actions } from './$types';

export const actions: Actions = {
	resetPassword: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: 'https://clarencehomeloans.com/account/password-reset'
		});

		if (error) {
			return { success: false, message: error.message };
		} else {
			return { success: true, message: data };
		}
	}
} satisfies Actions;
