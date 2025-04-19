<script lang="ts">
    import LoanEstimateForm from './LoanEstimateForm.svelte'

    $effect(() => {
        gtag('event', 'loan_estimate_form_view', {
            form_name: 'loan_estimate_form',
            page_type: 'form',
        })
    })
</script>

<svelte:head>
    <title>Compare Your Loan Estimate | Clarence Home Loans</title>
    <meta
        name="description"
        content="Already have a loan estimate? Let us match or beat it. Upload your LE and get a competitive mortgage offer—no credit check required to compare."
    />
    <meta
        name="keywords"
        content="loan estimate comparison, mortgage rate match, compare mortgage offers, beat loan estimate, mortgage broker quote, home loan rate comparison"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<LoanEstimateForm />
