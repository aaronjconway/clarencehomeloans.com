<script lang="ts">
    import Hero from '$lib/components/landing-page/Hero.svelte'
    import WhyUsDSCR from '$lib/components/landing-page/WhyUsDSCR.svelte'
    import Accordion from '$lib/components/Accordion.svelte'
    import faqs from '$lib/data/dscr-faqs.js'
    import DscrPurchaseForm from '../../../(form-pages)/form/dscr-purchase/DSCRPurchaseForm.svelte'

    import type { PageProps } from './$types'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
    let { form }: PageProps = $props()
</script>

<svelte:head>
    <title>DSCR Purchase | Clarence Home Loans</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="form">
    <DscrPurchaseForm {form} />
</div>
<Hero
    title="Buy Investment Properties Using Rental Income"
    subtitle="No tax returns, no W2s — just your property's cash flow."
    text="DSCR loans are designed for real estate investors who want to qualify based on rental income, not personal income. Whether you're purchasing or refinancing, it's a faster, more flexible way to grow your portfolio — with no income docs required."
    imagePath="dscr.avif"
/>

<WhyUsDSCR />

<section>
    <div class="container">
        <div class="faq-wrapper">
            <h3>Frequently Asked Questions</h3>
            {#each faqs as faq}
                <Accordion title={faq.title}>
                    {@html faq.content}
                </Accordion>
            {/each}
        </div>
    </div>
</section>

<section>
    <div class="container">
        <SimpleCta
            subTitle="Start with Trusted Expert Advice"
            title="Trusted by investors and realestate pro's nation wide. Get started today."
            buttonText="Request more info"
            buttonLink="#main"
        />
    </div>
</section>
