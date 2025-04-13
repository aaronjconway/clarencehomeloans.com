<script lang="ts">
    import '/src/styles/globals.scss'
    import 'font-awesome/css/font-awesome.min.css'
    import Header from '$lib/components/forms/Header.svelte'
    import Footer from '$lib/components/forms/Footer.svelte'

    let { children } = $props()
</script>

<Header />
<div class="form">
    {#if children}
        {@render children()}
    {:else}
        <p>Uh oh! Looks like something is missing.</p>
    {/if}
</div>
<Footer />
