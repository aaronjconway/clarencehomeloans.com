<script lang="ts">
    import '../styles/globals.scss'
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

<Header />
<!-- <Header {data} /> -->
{#if children}
    {@render children()}
{:else}
    <p>uh oh! Looks like something is missing.</p>
{/if}
<Footer />
