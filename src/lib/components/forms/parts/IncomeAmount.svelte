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
    formStore.data[stepName] = 70000
</script>

<div class="form-header">
    <h1>How much do you make roughly?</h1>
    <div>Annually</div>
</div>

<div class="range-input">
    <label for="income_amount">
        {formatToUSD(formStore.data[stepName])}
    </label>
    <input
        class="custom-slider"
        name="income_amount"
        type="range"
        min="0"
        max="300000"
        step="10000"
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
