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
    <h1>Let's get started! 😃 Do you work in healthcare?</h1>
    <div>This short form will help us understand your situation and goals.</div>
    <div>
        FYI: We're much better in options and pricing than the "Next Door" or
        "Home for Heroes" programs. :)
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
                        ontouchend={handleClick}
                    />
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
</div>
