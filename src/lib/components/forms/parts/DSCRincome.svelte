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
    formStore.data[stepName] = (formStore.data['home_value'] * 0.02) / 2
</script>

<div class="form-header">
    <h1>What is the current ( or future ) rent for the property?</h1>
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
        max={formStore.data['home_value'] * 0.025}
        step="100"
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
