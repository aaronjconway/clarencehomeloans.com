<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Just doing research',
            id: 'doing_resesarch',
        },
        {
            text: "I'd like to make an offer on a home",
            id: 'making_offers',
        },
        {
            text: 'I am under contract and shopping rates',
            id: 'under_contract',
        },
        {
            text: 'Within the next few months',
            id: 'few_months',
        },
    ]

    function handleClick() {
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>Where are you at in the home buying process?</h1>
    <p>These questions help us</p>
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
