<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()

    const data = [
        {
            text: "I'd like to save money monthly",
            id: 'rate and term',
        },
        {
            text: 'Pull cash out',
            id: 'cash out',
        },
        {
            text: 'Get out of PMI or Hard Money',
            id: 'PMI or Hard Money',
        },
        {
            text: 'Shorten/Lengthen my term',
            id: 'shorter or length term',
        },
        {
            text: 'Life event (Divorce, probate etc)',
            id: 'life event',
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
    <h1>What type of refinance are you interested in?</h1>
    <i>
        These questions will help us provide you with rates and relevant
        information.
    </i>
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
