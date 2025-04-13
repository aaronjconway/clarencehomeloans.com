<script lang="ts">
    import '/src/styles/globals.scss'
    import 'font-awesome/css/font-awesome.min.css'
    import Header from '$lib/components/landing-page/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'

    let { children } = $props()
</script>

<main id="main">
    <Header />
    {#if children}
        {@render children()}
    {:else}
        <p>Uh oh! Looks like something is missing.</p>
    {/if}
    <Footer />
</main>
