<script lang="ts">
    import NurseForm from './NurseForm.svelte'

    $effect(() => {
        gtag('event', 'nurse_page_view', {
            form_name: 'nurse_purchase',
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

<NurseForm />
