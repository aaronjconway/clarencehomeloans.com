<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()

    function handleClick() {
        gtag('event', 'form_step_progress', {
            step_name: stepName,
            step_number: formStore.currentStep,
            selected_option: formStore.data[stepName],
            form_name: formStore.data['page_source'],
        })
        formStore.nextStep()
    }

    import { formatToUSD } from '$lib/utils'
    formStore.data[stepName] = 400000
</script>

<div class="form-header">
    <h1>What price range are you looking at roughly?</h1>
</div>

<div class="range-input">
    <label for="priceRange">
        {formatToUSD(formStore.data[stepName])}
    </label>
    <input
        class="custom-slider"
        name="priceRange"
        type="range"
        min="0"
        max="1500000"
        step="5000"
        bind:value={formStore.data[stepName]}
    />
    <div class="button-wrapper">
        <button
            class="primary"
            onclick={() => {
                handleClick()
            }}>Next</button
        >
    </div>
</div>
