<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()

    const data = [
        {
            text: 'Single Family or Townhome',
            id: 'single family',
        },
        {
            text: 'Condo',
            id: 'shorter or length term',
        },
        {
            text: 'Multi Family',
            id: 'multi unit',
        },
        {
            text: 'Commercial',
            id: 'commercial',
        },
    ]

    function handleClick() {
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>What kind of property is this?</h1>
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
