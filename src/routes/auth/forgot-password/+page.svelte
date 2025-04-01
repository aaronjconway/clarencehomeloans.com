<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'

    let { form }: { form: ActionData } = $props()
</script>

<div class="form-wrapper">
    {#if form?.success}
        <div>Please check your email for a password reset link.</div>
    {:else}
        <form method="POST" action="?/resetPassword" use:enhance>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
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
