<script lang="ts">
    import '/src/styles/globals.scss'
    import 'font-awesome/css/font-awesome.min.css'
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import { invalidate } from '$app/navigation'
    let { data, children } = $props()
    let { session, supabase } = $derived(data)

    $effect(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth')
            }
        })

        return () => data.subscription.unsubscribe()
    })
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-51P86CD244"
    ></script>
    <script>
        window.dataLayer = window.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'G-51P86CD244')
    </script>
</svelte:head>

<Header {data} />
{#if children}
    {@render children()}
{:else}
    <p>Uh oh! Looks like something is missing.</p>
{/if}
<Footer />
