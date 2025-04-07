<script>
    import Hero from '$lib/components/sections/Hero.svelte'
    import Benefits from '$lib/components/sections/Benefits.svelte'
    import Testimonials from '$lib/components/sections/Testimonials.svelte'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
    import BannerLinks from '$lib/components/sections/BannerLinks.svelte'
    import HowItWorks from '$lib/components/sections/HowItWorks.svelte'

    const { data } = $props()
    const reviews = $derived(data.reviews)
</script>

<svelte:head>
    <title>Your Arizona Mortgage Professionals | Clarence Home Loans</title>
</svelte:head>

<Hero />
<BannerLinks />
<Testimonials {reviews} />
<HowItWorks />
<Benefits />
<section>
    <div class="container">
        <SimpleCta />
    </div>
</section>
