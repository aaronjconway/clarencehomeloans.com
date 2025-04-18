<script lang="ts">
    const { formStore = $bindable() } = $props()

    function handleClick() {
        gtag('event', 'form_step_progress', {
            step_name: 'confirm_investment',
            step_number: formStore.currentStep,
            selected_option: 'true',
            form_name: formStore.data['page_source'],
        })
        formStore.data['confirm_investment'] = 'true'
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>
        DSCR loans are exclusively for investment properties and cannot be used
        for primary residences.
    </h1>
</div>
<div class="container">
    <div class="wrapper">
        <p>
            If you're looking for a property as your primary residence, please
            explore our other options.
        </p>
        <a href="/home-loans">Home Loan Options</a>
        <button class="primary" onclick={handleClick}>Proceed</button>
    </div>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-xl);
    }
</style>
