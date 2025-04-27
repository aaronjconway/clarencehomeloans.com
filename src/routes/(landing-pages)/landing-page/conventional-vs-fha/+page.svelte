<script lang="ts">
    //testing
    import Hero from '$lib/components/landing-page/Hero.svelte'
    import { reviews } from '$lib/data/reviews.js'
    import Testimonials from '$lib/components/sections/Testimonials.svelte'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
    import Stats from '$lib/components/landing-page/Stats.svelte'
    import PurchaseForm from '../../../(form-pages)/form/conventional-vs-fha/PurchaseForm.svelte'
    import WhyUs from '$lib/components/landing-page/WhyUs.svelte'

    $effect(() => {
        gtag('event', 'conv_v_fha_landing_view', {
            page_type: 'landing_page',
        })
    })
</script>

<svelte:head>
    <title>Conventional vs FHA Loans | Clarence Home Loans</title>
    <meta
        name="description"
        content="Explore the key differences between Conventional and FHA loans to find the best mortgage option for you. Compare benefits, eligibility, and requirements to make an informed decision for your home purchase."
    />
    <meta
        name="keywords"
        content="Conventional loans, FHA loans, mortgage comparison, Conventional vs FHA, home loan options, mortgage types, FHA loan benefits, Conventional loan requirements"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<div class="form">
    <PurchaseForm />
</div>

<Hero
    title="Conventional vs FHA Loans: Which Is Right for You?"
    subtitle="Understanding your mortgage options for a smarter home buying decision."
    text="Choosing the right loan is key to making your home buying experience smoother and more affordable. We can help break down the differences between Conventional and FHA loans, so you can make the best choice for your situation."
    imagePath="goe-family.avif"
/>

<Stats
    statData={[
        {
            number: 'Over $4,000',
            text: 'Saved on average working with us.',
        },
        { number: '17', text: 'Average days to close' },
        { number: '180+', text: 'Familes helped and counting.' },
    ]}
/>

<Testimonials {reviews} />

<WhyUs />
<section>
    <div class="container">
        <div class="faq-wrapper">
            <h2>Questions About Conventional vs FHA Loans?</h2>
            <div class="item">
                <div class="title">Which loan option is better for me?</div>
                <p>
                    Choosing between a Conventional and FHA loan can feel
                    overwhelming, and there are many factors to consider. While
                    Conventional loans often offer better terms for those with
                    higher credit scores, FHA loans can be a great choice for
                    buyers with lower credit or less money for a down payment.
                    The right option for you depends on your unique financial
                    situation, and we're here to help you explore your best
                    options.
                </p>
                <p>
                    Don’t worry about that analysis yourself. Our team is ready
                    to help you understand all the factors at play and guide you
                    to the loan type that works best for your home buying goals.
                </p>
            </div>

            <div class="item">
                <div class="title">What about the down payment?</div>
                <p>
                    The down payment can be a big factor in your decision.
                    Conventional loans do get slightly better pricing as you put
                    more down but they also allow for 3% down. However, there’s
                    more to consider than just the initial payment. Other
                    factors, like your credit score, current debt, and long-term
                    financial goals, the ability to refinance easily, also play
                    a role in what might be best for you. Let's chat and figure
                    out the best path forward.
                </p>
            </div>

            <div class="item">
                <div class="title">How do interest rates compare?</div>
                <p>
                    Interest rates vary based on the loan type, your credit
                    score, and other personal factors. Generally, FHA loans
                    loans tend to offer lower interest rates when putting less
                    down. FHA loans may have more favorable terms for those with
                    lower credit scores certainly. You'll notice that the
                    balance of rate and mortgage insurance ends up making the
                    loans fairly similar at less than 10% down.
                </p>
            </div>

            <div class="item">
                <div class="title">
                    Are there additional costs with FHA loans?
                </div>
                <p>
                    FHA loans often come with extra costs, like mortgage
                    insurance, which can increase your monthly payment. While
                    this might make them seem less appealing at first, the
                    flexibility they offer for qualifying can sometimes outweigh
                    the additional costs. We’ll help you weigh these trade-offs
                    and decide if an FHA loan is the right choice for you.
                </p>
            </div>

            <div class="item">
                <div class="title">
                    What’s the process for getting pre-approved?
                </div>
                <p>
                    Getting pre-approved for either a Conventional or FHA loan
                    is an important step, but it’s not just about filling out
                    forms. Our team will guide you through every step, helping
                    you understand what documents you need and what options are
                    available to you based on your financial picture.
                </p>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <SimpleCta
            subTitle="Not Sure Which Loan is Right for You?"
            title="Get Expert Guidance on Conventional vs FHA Loans — We’ll Help You Find the Best Option."
            buttonText="Talk to an Expert"
            buttonLink="#main"
        />
    </div>
</section>

<style lang="scss">
    .title {
        margin-top: var(--space-lg);
        font-size: var(--text-lg);
        font-weight: bold;
    }
</style>
