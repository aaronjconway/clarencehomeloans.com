<script lang="ts">
    import GOEForm from './GOEForm.svelte'

    $effect(() => {
        gtag('event', 'GOE_page_view', {
            form_name: 'GOE_purchase',
            page_type: 'form',
        })
    })
</script>

<svelte:head>
    <title>Family Home Buying Program | Clarence Home Loans</title>
    <meta
        name="description"
        content="Explore how a Gift of Equity can help you buy a home with little to no out-of-pocket costs. Start our simple step-by-step form to see what you qualify for—no credit check required to begin."
    />
    <meta
        name="keywords"
        content="gift of equity, gift of equity home loan, buy home from family, zero down home loan, gift of equity mortgage, home buying assistance, Clarence Home Loans"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<GOEForm />
