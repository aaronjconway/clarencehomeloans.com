<script lang="ts">
    import RefinanceForm from './RefinanceForm.svelte'

    $effect(() => {
        gtag('event', 'refinance_form_page_view', {
            form_name: 'general_refinance',
            page_type: 'form',
        })
    })
</script>

<svelte:head>
    <title>Refinance Form | Clarence Home Loans</title>
    <meta
        name="description"
        content="Looking to refinance your home? Discover competitive rates and flexible options with Clarence Home Loans. Start our quick, no-credit-check form to see what you qualify for."
    />
    <meta
        name="keywords"
        content="mortgage refinance, home loan refinance, lower interest rate, refinance options, cash-out refinance, mortgage savings, refinance application"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<RefinanceForm />
