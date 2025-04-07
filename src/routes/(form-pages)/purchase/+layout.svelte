<script lang="ts">
    import '/src/styles/globals.scss'
    import 'font-awesome/css/font-awesome.min.css'
    import Header from '$lib/components/forms/Header.svelte'
    import Footer from '$lib/components/forms/Footer.svelte'

    const { children } = $props()
</script>

<div class="form">
    <Header />
    {@render children()}
    <Footer />
</div>
