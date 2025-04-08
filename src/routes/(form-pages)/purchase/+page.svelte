<script lang="ts">
    import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte'
    import PropertyType from '$lib/components/forms/parts/PropertyType.svelte'
    import { FormStore } from '$lib/stores/formStore.svelte'
    import { crossfade, fade } from 'svelte/transition'
    const [send, recieve] = crossfade({
        duration: 100,
    })

    let formStore = new FormStore()

    const steps = $state([
        { id: 0, name: 'buying_stage', component: BuyingStage },
        { id: 1, name: 'property_type', component: PropertyType },
    ])
</script>

<div class="form-container">
    <div class="form-wrapper">
        {#each steps as step}
            <div in:recieve={{ key: step.id }} out:send={{ key: step.id }}>
                {#if formStore.currentStep == step.id}
                    <div class="form-step" transition:fade={{ duration: 150 }}>
                        <div class="form-step-inner">
                            <step.component
                                bind:formStore
                                stepName={step.name}
                            />
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    <div class="nav">
        {#if formStore.currentStep > 0}
            <button
                onclick={() => {
                    formStore.previousStep()
                }}
            >
                <i class="fa fa-arrow-left"></i>
                Back
            </button>
        {/if}
    </div>
</div>
