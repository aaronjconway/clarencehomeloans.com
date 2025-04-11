<script lang="ts">
    import Hero from '$lib/components/landing-page/Hero.svelte'
    import Accordion from '$lib/components/Accordion.svelte'
    import faqs from '$lib/data/career-faqs.ts'
    import Contact from '$lib/components/landing-page/Contact.svelte'
</script>

<svelte:head>
    <title>Your Arizona Mortgage Professionals | Clarence Home Loans</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Hero
    title="Take Control of Your Income and Career"
    subtitle=" Step out of the retail box — earn more, work your way."
    text="Tired of capped commissions and limited product options? As a broker, you gain full control over your pipeline, access to hundreds of lenders, and the freedom to build your own brand — all while earning over upwards of 275bps per deal."
/>

<section>
    <div class="container">
        <div class="faq-wrapper">
            <h3>Frequently Asked Questions</h3>
            <div>
                {#each faqs as faq}
                    <Accordion title={faq.title}>
                        {@html faq.content}
                    </Accordion>
                {/each}
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <Contact />
    </div>
</section>

<style lang="scss">
    .faq-wrapper {
        max-width: 800px;
        margin: 0 auto;
    }
</style>
