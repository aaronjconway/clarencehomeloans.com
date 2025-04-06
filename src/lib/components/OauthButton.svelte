<script lang="ts">
    import { enhance } from '$app/forms'
    let loading = $state(false)

    function handleSubmit() {
        loading = true
        return async () => {
            loading = false
        }
    }

    const { provider, buttonText = `Sign in with ${provider}` } = $props()
</script>

<div class="oauth-wrapper">
    <form
        method="POST"
        action={`?/signInWith${provider}`}
        use:enhance={() => {
            handleSubmit()
        }}
    >
        <button class={provider.toLowerCase()} type="submit" disabled={loading}>
            <img
                id="logo"
                class="btn_logo"
                width={50}
                src={`/${provider}.svg`}
                alt={`${provider}`}
            /><span>{!loading ? buttonText : 'Signing in...'}</span>
        </button>
    </form>
</div>
