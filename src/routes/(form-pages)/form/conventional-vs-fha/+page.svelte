<script lang="ts">
    import PurchaseForm from './PurchaseForm.svelte'

    $effect(() => {
        gtag('event', 'purchase_form_page_view', {
            form_name: 'general_purchase',
            page_type: 'form',
        })
    })
</script>

<svelte:head>
    <title>Purchase Form | Clarence Home Loans</title>
    <meta
        name="description"
        content="Explore mortgage options and home buying support with Clarence Home Loans. Start our easy step-by-step form to see what you qualify for—no credit check required to begin."
    />
    <meta
        name="keywords"
        content="home buying, mortgage options, home loans, mortgage pre-approval, real estate financing, first-time homebuyer, purchase mortgage"
    />
    <meta name="author" content="Clarence Home Loans" />
</svelte:head>

<PurchaseForm />
