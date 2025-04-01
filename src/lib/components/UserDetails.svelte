<script lang="ts">
    import { enhance } from '$app/forms'
    const { data } = $props()
    import { format } from 'date-fns'
</script>

<section>
    <h3>Account</h3>
    <div class="wrapper">
        <div class="header">User Info</div>
        <hr />
        <div class="item-wrapper">
            <label for="email">Email:</label>
            <div>{data.user.email}</div>
            {#if data.user.user_metadata.email_verified}
                <div class="verified">verified</div>
            {/if}
        </div>
        <div class="item-wrapper">
            <label for="email">Last Sign In: </label>
            <div>
                {format(data.user.last_sign_in_at, 'MMMM d, yyyy h:mm a')}
            </div>
        </div>
    </div>
</section>

<div class="warn header">DANGER</div>
<hr />

<div class="form-wrapper">
    <form action="?/deleteAccount" method="post" use:enhance>
        <button class="warn primary" type="submit">Delete Account</button>
    </form>
</div>

<style lang="scss">
    .header {
        margin-top: var(--space-lg);
        &.warn {
            color: indianred;
        }
    }
    .wrapper {
        margin-bottom: 1rem;
    }

    label {
        font-weight: bold;
    }

    hr {
        padding: 0;
        margin: var(--space-sm) 0;
    }

    .item-wrapper {
        display: flex;
        gap: 0.5rem;
        .verified {
            background: var(--green-100);
            width: fit-content;
            height: fit-content;
            font-size: var(--text-xs);
            padding: 4px 8px;
            border-radius: 4px;
        }
    }
</style>
