<script lang="ts">
    import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte'
    import PropertyType from '$lib/components/forms/parts/PropertyType.svelte'
    import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte'
    import Location from '$lib/components/forms/parts/Location.svelte'
    import { FormStore } from '$lib/stores/formStore.svelte'
    import { crossfade, fade } from 'svelte/transition'
    // import PriceRange from '$lib/components/forms/parts/PriceRange.svelte'
    const [send, recieve] = crossfade({
        duration: 100,
    })

    let formStore = $state(new FormStore())

    const steps = $state([
        { id: 0, name: 'buying_stage', component: BuyingStage },
        { id: 1, name: 'property_type', component: PropertyType },
        { id: 2, name: 'occupancy_type', component: OccupancyType },
        { id: 3, name: 'location', component: Location },
        // { id: 4, name: 'price', component: PriceRange },
    ])
</script>

<div class="floating-data">
    <pre>{JSON.stringify(formStore.data, null, 4)}</pre>
</div>
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
