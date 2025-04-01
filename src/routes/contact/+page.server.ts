import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await request.formData()
        const first_name = form.get('first_name')
        const last_name = form.get('last_name')
        const phone = form.get('phone')
        const email = form.get('email')
        const privacy = form.get('privacy')
        return { success: true }
    },
} satisfies Actions
