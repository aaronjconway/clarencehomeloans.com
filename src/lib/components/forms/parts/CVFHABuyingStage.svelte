<script lang="ts">
    import GetStartedArrow from '$lib/components/GetStartedArrow.svelte'

    const { stepName = '', formStore = $bindable() } = $props()
    const data = [
        {
            text: 'Just doing research',
            id: 'research',
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
    <h1>Where are you at in the home buying process?</h1>
    <div>
        This short form will help us navigate you to the right <b
            >FHA or Conventional</b
        > choice.
    </div>
    <div>
        We respect your privacy — <b
            >your information is never shared or sold.</b
        >
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
                    />
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
</div>
<GetStartedArrow />
