<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Just doing Research',
            id: 'research',
        },
        {
            text: "I'd like to make an offer on a home.",
            id: 'offer',
        },
        {
            text: "I've a signed purchase agreement",
            id: 'signed_pa',
        },
        {
            text: 'Another Margarita Please!',
            id: 'margarita_please',
        },
    ]

    function handleClick() {
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>Where are you at in the buying process?</h1>
</div>
<div class="radio-wrapper">
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
