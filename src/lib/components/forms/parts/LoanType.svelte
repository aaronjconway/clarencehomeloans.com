<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Conventional',
            id: 'conventional',
        },
        {
            text: 'Heloc/Improvement',
            id: 'heloc or small',
        },
        {
            text: 'VA',
            id: 'va',
        },
        {
            text: 'FHA',
            id: 'fha',
        },
        {
            text: 'Hard Money',
            id: 'Hard Money',
        },
        {
            text: 'None - Free & Clear',
            id: 'free and clear',
        },
    ]

    function handleClick(e) {
        if (e.target.value == 'free and clear') {
            formStore.gotoStep(formStore.currentStep + 2)
            delete formStore.data['loan_amount']
        } else {
            formStore.nextStep()
        }
    }
</script>

<div class="form-header">
    <h1>What kind of loan is currently on the home?</h1>
</div>
<div class="radio-wrapper">
    <div class="radio-inner">
        {#each data as item}
            <div class="radio-button">
                <input
                    type="radio"
                    value={item.id}
                    id={item.id}
                    bind:group={formStore.data[stepName]}
                    onclick={handleClick}
                />
                <label
                    for={item.id}
                    class:selected={item.id == formStore.data[stepName]}
                >
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
</div>
