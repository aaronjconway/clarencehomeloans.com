<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()

    function handleClick() {
        formStore.nextStep()
    }

    import { formatToUSD } from '$lib/utils'
</script>

<div class="form-header">
    <h1>How much do you make roughly?</h1>
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
