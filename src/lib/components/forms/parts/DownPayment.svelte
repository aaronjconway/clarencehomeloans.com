<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()

    function handleClick() {
        formStore.nextStep()
    }

    import { formatToUSD } from '$lib/utils'
</script>

<div class="form-header">
    <h1>
        How much would you like to put down on {formatToUSD(
            formStore.data['price']
        )}?
    </h1>
    <p>Don't stress on the details if you don't know what's best for you.</p>
    <div class="options-wrapper">
        <button
            onclick={() => {
                formStore.data[stepName] = 3.0
            }}>3%</button
        >
        <button
            onclick={() => {
                formStore.data[stepName] = 3.5
            }}>3.5%</button
        >
        <button
            onclick={() => {
                formStore.data[stepName] = 5.0
            }}>5%</button
        >
        <button
            onclick={() => {
                formStore.data[stepName] = 10
            }}>10%</button
        >
        <button
            onclick={() => {
                formStore.data[stepName] = 20
            }}>20%</button
        >
    </div>
</div>

<div class="range-input">
    <label for="down_payment">
        {formatToUSD(
            (formStore.data[stepName] * formStore.data['price']) / 100
        )} ({formStore.data[stepName]}%)
    </label>
    <input
        class="custom-slider"
        name="down_payment"
        type="range"
        min="0"
        max="100"
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

<style lang="scss">
    .options-wrapper {
        button {
            border: solid 1px var(--green-200);
            padding: 4px 8px;
            background: var(--green-100);
            border-radius: 4px;
            &:hover {
                border: solid 1px var(--green-300);
            }
        }
    }
</style>
