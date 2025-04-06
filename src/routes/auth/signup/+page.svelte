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
            <label class="privacy" for="privacy">
                <input type="checkbox" id="privacy" name="privacy" required />
                <span>
                    I agree to be contacted by Clarence Home Loans via call,
                    email, and text. To opt out, you can reply 'stop' at any
                    time or click the unsubscribe link in the emails. Message
                    and data rates may apply.
                    <a href="/privacy-policy?from=contact">Privacy policy</a>
                </span>
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

        input {
            margin: 0;
            margin-bottom: var(--space);
        }

        label {
            padding: 0;
            margin: 0;
            margin-top: var(--space-md);
        }
    }

    label.privacy {
        display: flex;
        gap: var(--space);
        font-size: var(--text-sm);
    }
</style>
