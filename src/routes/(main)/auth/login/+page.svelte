<script lang="ts">
    import OauthButton from '$lib/components/OauthButton.svelte'
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'

    let { form }: { form: ActionData } = $props()
</script>

<div class="form-wrapper">
    <div class="oauth-wrapper">
        <!-- <OauthButton provider={'Apple'} /> -->
        <OauthButton provider={'Google'} />
    </div>
    <form method="POST" action="?/login" use:enhance autocomplete="on">
        <label for="email"> Email </label>
        <input
            id="email"
            name="email"
            type="email"
            autocomplete="username"
            required
        />
        <label for="password"> Password </label>
        <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
        />

        <div class="button-wrapper">
            <button class="primary" type="submit">Login</button>
            <a class="btn" href="/auth/signup">Sign up</a>
        </div>
        <div class="forgot-pass">
            <a href="/auth/forgot-password">forgot password</a>
        </div>
    </form>
    <p class="error">
        {form?.message ?? ''}
    </p>
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
    .forgot-pass {
        margin-top: var(--space-md);
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
</style>
