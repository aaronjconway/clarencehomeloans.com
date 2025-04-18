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
    let downPaymentMessage = $state('')
</script>

<div class="form-header">
    <h1>
        How much would you like to put down on {formatToUSD(
            formStore.data['price']
        )}?
    </h1>
    <p>
        Don't stress on the details if you don't know what's best for you. Here
        are some helpful presets, although you can adjust this however you want.
    </p>
    <div class="options-wrapper">
        {#if formStore.data['loan_type'] != 'dscr' && formStore.data['occupancy'] != 'investment'}
            <button
                onclick={() => {
                    formStore.data[stepName] = 3.0
                    downPaymentMessage =
                        'The minimum you can put down on conventional as a first time home buyer or low income.'
                }}>3%</button
            >
            <button
                onclick={() => {
                    formStore.data[stepName] = 3.5
                    downPaymentMessage =
                        'The minimum you can put down on FHA. Great for credit below 700.'
                }}>3.5%</button
            >
            <button
                onclick={() => {
                    formStore.data[stepName] = 5.0
                    downPaymentMessage =
                        'The minimum a non first time home buyer can put down on conventional when income is high.'
                }}>5%</button
            >
            <button
                onclick={() => {
                    formStore.data[stepName] = 10
                    downPaymentMessage =
                        'Great option for high income, good credit borrowers wanting to put less than 20% down.'
                }}>10%</button
            >
        {/if}
        <button
            onclick={() => {
                formStore.data[stepName] = 20
                downPaymentMessage = ''
            }}>20%</button
        >
    </div>
    <p>
        {downPaymentMessage}
    </p>
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
        onchange={(downPaymentMessage = '')}
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
