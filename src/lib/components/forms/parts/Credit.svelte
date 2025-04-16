<script lang="ts">
    const { stepName = '', formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Excellent 740+',
            id: '740+',
        },
        {
            text: 'Good 680-720',
            id: '680-720',
        },
        {
            text: 'Fair 640-680',
            id: '640-680',
        },
        {
            text: 'Rebuilding 600-640',
            id: '600-640',
        },
        {
            text: 'Under 600',
            id: 'under 600',
        },
    ]

    function handleClick() {
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>What is your estimated credit?</h1>
    <div>
        We have options from 500+ so no worries regardless of where you're at.
    </div>
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

<style>
</style>
