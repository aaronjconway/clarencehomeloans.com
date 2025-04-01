<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'
    let { form }: { form: ActionData } = $props()
</script>

<div class="form-wrapper">
    <form method="POST" action="?/signup" use:enhance>
        <div class="name-group">
            <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" required />
            </div>
            <div class="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" required />
            </div>
        </div>

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
