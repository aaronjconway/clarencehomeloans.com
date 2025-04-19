<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Yes',
            id: 'yes',
        },
        {
            text: 'No',
            id: 'no',
        },
    ]

    function handleClick() {
        gtag('event', 'form_step_progress', {
            step_name: stepName,
            step_number: formStore.currentStep,
            selected_option: formStore.data[stepName],
            form_name: formStore.data['page_source'],
        })
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>Does your loan estimate look like this?</h1>
    <a
        href="https://www.consumerfinance.gov/static/apps/owning-a-home/img/loan-estimate-H24B-1.639aeb7e50d5.png"
        >[click for loan estimate example image]</a
    >
    <div>
        If it doesn’t, then it’s not a true Loan Estimate! A Loan Estimate (LE)
        is a standardized document that includes very specific information, such
        as your interest rate, monthly payments, and estimated closing costs.
    </div>
    <div>
        We'll help regardless, but may be unable to match an unofficial
        estimate.
    </div>
</div>

<div class="radio-wrapper">
    <div class="radio-inner">
        {#each data as item}
            <div class="radio-button">
                <label
                    for={item.id}
                    class:selected={item.id == formStore.data[stepName]}
                >
                    <input
                        type="radio"
                        value={item.id}
                        id={item.id}
                        bind:group={formStore.data[stepName]}
                        onclick={handleClick}
                    />
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
</div>
