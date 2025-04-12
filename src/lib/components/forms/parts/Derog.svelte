<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Chapter 13 Bankruptcy',
            id: 'chapter-13',
        },
        {
            text: 'Chapter 7 Bankruptcy',
            id: 'chapter-7',
        },
        {
            text: 'Foreclosure',
            id: 'foreclosure',
        },
        {
            text: 'Short Sale',
            id: 'short-sale',
        },
        {
            text: 'Late Payments on a Mortgage',
            id: 'late-payments',
        },
        {
            text: 'Nope!',
            id: 'none',
        },
    ]

    function handleClick() {
        if (formStore.data[stepName].length > 0) {
            formStore.nextStep()
        } else {
            alert('Please select an item!')
        }
    }
</script>

<div class="form-header">
    <h1>Have you had any of these events?</h1>
    <div>You can select none, one, or more.</div>
    <div>Again, we have tons of options available for everyone.</div>
</div>

<div class="radio-wrapper">
    <div class="radio-inner">
        {#each data as item}
            <div class="radio-button">
                <input
                    type="checkbox"
                    multiple
                    value={item.id}
                    id={item.id}
                    bind:group={formStore.data[stepName]}
                />
                <label
                    for={item.id}
                    class:selected={formStore.data[stepName]?.includes(item.id)}
                >
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
</div>
<div class="button-wrapper">
    <button
        class="primary"
        onclick={() => {
            handleClick()
        }}>Next</button
    >
</div>

<style>
</style>
