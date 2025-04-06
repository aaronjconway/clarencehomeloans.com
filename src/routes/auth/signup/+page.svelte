<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'
    let { form }: { form: ActionData } = $props()
    import OauthButton from '$lib/components/OauthButton.svelte'
    import PasswordInput from '$lib/components/PasswordInput.svelte'
</script>

<div class="form-wrapper">
    <div class="oauth-wrapper">
        <OauthButton buttonText={'Sign up with Google '} provider={'Google'} />
    </div>
    <form method="POST" action="?/signup" use:enhance>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <PasswordInput name={'password'} />
        </div>

        <div class="form-group">
            <label for="privacy">
                <input type="checkbox" id="privacy" name="privacy" required />
                I agree to the
                <a class="link" href="/privacy-policy?from=contact"
                    >privacy policy</a
                >
            </label>
        </div>
        <button type="submit" class="primary">Submit</button>
        <p class="error">{form?.message ?? ''}</p>
    </form>
</div>

<style lang="scss">
    .oauth-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: var(--space-sm);
    }
    .button-wrapper {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        margin: 0 auto;
        padding: 0;
        height: 80vh;

        form {
            width: 100%;
        }

        label,
        input {
            margin: 0;
        }

        label {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
        }
    }
</style>
