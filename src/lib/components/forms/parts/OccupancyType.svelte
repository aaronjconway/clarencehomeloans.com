<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Primary Residence',
            id: 'primary',
        },
        {
            text: 'Second Home',
            id: 'second',
        },
        {
            text: 'Investment',
            id: 'investment',
        },
    ]

    function handleClick() {
        formStore.nextStep()
    }

    import Dialog from '$lib/components/Dialog.svelte'
</script>

<div class="form-header">
    <h1>How will you use this property?</h1>
    <Dialog page={'occupancy'} buttonText={'More on Occupancy Types'} />
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
