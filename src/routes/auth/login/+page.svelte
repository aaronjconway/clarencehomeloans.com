<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'

    let { form }: { form: ActionData } = $props()

    let loading = $state(false)

    function handleSubmit() {
        loading = true
        return async () => {
            loading = false
        }
    }
</script>

<div class="form-wrapper">
    <form
        method="POST"
        action="?/google"
        use:enhance={() => {
            handleSubmit()
        }}
    >
        <button class="google" type="submit" disabled={loading}>
            <img
                id="logo"
                class="btn_logo"
                src="/google-g-logo.svg"
                alt="Google"
            /><span>{!loading ? 'Sign in with Google' : 'Signing in...'}</span>
        </button>
    </form>

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
