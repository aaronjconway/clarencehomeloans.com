<script lang="ts">
    import Hero from '$lib/components/landing-page/Hero.svelte'
    import WhyNexa from '$lib/components/landing-page/WhyNexa.svelte'
    import Accordion from '$lib/components/Accordion.svelte'
    import faqs from '$lib/data/career-faqs.ts'
    import Contact from '$lib/components/landing-page/Contact.svelte'

    import type { PageProps } from './$types'
    let { form }: PageProps = $props()
</script>

<svelte:head>
    <title>Your Arizona Mortgage Professionals | Clarence Home Loans</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Hero
    title="Take Control of Your Income and Career"
    subtitle=" Step into a better position — earn more, work your way."
    text="Tired of capped commissions and limited product options as a Retail loan officer? In the broker world, you gain full control over your pipeline, access to hundreds of lenders, and the freedom to build your own brand — all while earning upwards of 275bps per deal."
/>

<WhyNexa />

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
        <Contact {form} />
    </div>
</section>

<style lang="scss">
    .faq-wrapper {
        max-width: 800px;
        margin: 0 auto;
    }
</style>
