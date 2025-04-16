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
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>Do you work in the healthcare industry?</h1>
    <i>
        Although we dont' stress about the exact title - this program is for
        healthcare professionals only. If you're concerned, feel free to call
        us.
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
