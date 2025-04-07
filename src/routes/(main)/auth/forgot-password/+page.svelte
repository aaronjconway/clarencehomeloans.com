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
    {#if form?.success}
        <div>
            If that email is assocated with a user account we'll send a password
            reset link shortly.
        </div>
    {:else if form?.message}
        <div>{form.message}</div>
    {:else}
        <form
            method="POST"
            action="?/resetPassword"
            use:enhance={() => {
                handleSubmit()
            }}
        >
            <label class:disabled={loading}>
                Email
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                />
            </label>
            <button class="primary">Submit</button>
        </form>
    {/if}
</div>

<style lang="scss">
    .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        margin: 0 auto;
        height: 80vh;
    }
</style>
