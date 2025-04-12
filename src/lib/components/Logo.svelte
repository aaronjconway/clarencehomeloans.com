<script lang="ts">
    const { href = '/' } = $props()
</script>

{#if href}
    <a {href} class="logo-wrapper">
        <div class="logo">
            <span class="title">Clarence Home Loans</span>
            <span class="subtitle">Powered by Nexa Mortgage</span>
        </div>
    </a>
{:else}
    <div class="logo">
        <span class="title">Clarence Home Loans</span>
        <span class="subtitle">Powered by Nexa Mortgage</span>
    </div>
{/if}

<style lang="scss">
    a.logo-wrapper {
        color: inherit;
    }
    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;
        font-size: var(--text-md);
    }

    .title {
        //font-size: var(--text);
        font-weight: bold;
    }

    .subtitle {
        font-size: calc(var(--text-md) * 0.7);
        line-height: 1;
        color: var(--grey-700);
    }
</style>
