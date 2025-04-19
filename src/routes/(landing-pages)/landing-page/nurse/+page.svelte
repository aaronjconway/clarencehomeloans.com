<script lang="ts">
    import Hero from '$lib/components/landing-page/Hero.svelte'
    import WhyUsNurse from '$lib/components/landing-page/WhyUsNurse.svelte'
    import Accordion from '$lib/components/Accordion.svelte'
    import faqs from '$lib/data/nurse-faqs.js'
    import NurseForm from '../../../(form-pages)/form/nurse/NurseForm.svelte'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
    import Stats from '$lib/components/landing-page/Stats.svelte'

    $effect(() => {
        gtag('event', 'nurse_page_view', {
            page_type: 'landing_page',
        })
    })
</script>

<svelte:head>
    <title>Nurse Home Buying Program | Clarence Home Loans</title>
    <meta
        name="description"
        content="Get exclusive mortgage options and home buying support tailored for nurses. Start our step-by-step form to see what you qualify for—no credit check needed to begin."
    />
    <meta
        name="keywords"
        content="nurse home buying program, mortgage for nurses, home loans for healthcare workers, nurse mortgage assistance, mortgage pre-approval for nurses, nurse home loan program"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<div class="form">
    <NurseForm />
</div>
<Hero
    title="Exclusive Home Buying Program for Nurses"
    subtitle="Helping healthcare heroes become homeowners — with less hassle and more savings."
    text="As a mortgage broker, we specialize in helping nurses navigate the home buying process with tailored loan options, low down payments, and flexible qualification guidelines. Whether you're a first-time buyer or moving into your next home, this program is designed specifically for you."
    imagePath="nurse/hero-male-nurse-700-400.jpg"
/>

<Stats
    statData={[
        { number: '>$4,000', text: 'Saved on average' },
        { number: '17', text: 'Average days to close' },
        { number: '180+', text: 'Familes Helped' },
    ]}
/>

<WhyUsNurse />

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
            title="Trusted by healthcare professionals nation wide. Get started today."
            buttonText="Request more info"
            buttonLink="#main"
        />
    </div>
</section>
