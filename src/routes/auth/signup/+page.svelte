<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'
    let { form }: { form: ActionData } = $props()
    import OauthButton from '$lib/components/OauthButton.svelte'
</script>

<div class="form-wrapper">
    <div class="oauth-wrapper">
        <OauthButton buttonText={'Sign up with Apple '} provider={'Apple'} />
        <OauthButton buttonText={'Sign up with Google '} provider={'Google'} />
    </div>
    <form method="POST" action="?/signup" use:enhance>
        <!-- <div class="name-group"> -->
        <!--     <div class="form-group"> -->
        <!--         <label for="first_name">First Name</label> -->
        <!--         <input type="text" id="first_name" name="first_name" required /> -->
        <!--     </div> -->
        <!--     <div class="form-group"> -->
        <!--         <label for="last_name">Last Name</label> -->
        <!--         <input type="text" id="last_name" name="last_name" required /> -->
        <!--     </div> -->
        <!-- </div> -->
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
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
