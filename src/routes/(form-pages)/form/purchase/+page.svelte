<script lang="ts">
    import { FormStore } from '$lib/stores/formStore.svelte'
    //
    import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte'
    import PropertyType from '$lib/components/forms/parts/PropertyType.svelte'
    import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte'
    import Location from '$lib/components/forms/parts/Location.svelte'
    import PriceRange from '$lib/components/forms/parts/PriceRange.svelte'
    import DownPayment from '$lib/components/forms/parts/DownPayment.svelte'
    import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte'
    import Veteran from '$lib/components/forms/parts/Veteran.svelte'
    import IncomeType from '$lib/components/forms/parts/IncomeType.svelte'
    import IncomeAmount from '$lib/components/forms/parts/IncomeAmount.svelte'
    import Credit from '$lib/components/forms/parts/Credit.svelte'
    import Derog from '$lib/components/forms/parts/Derog.svelte'
    import NextSteps from '$lib/components/forms/parts/NextSteps.svelte'
    import Contact from '$lib/components/forms/parts/Contact.svelte'
    import ProgressBar from '$lib/components/forms/ProgressBar.svelte'
    //
    import type { ActionData } from './$types'
    let { form }: { form: ActionData } = $props()

    let formStore = $state(new FormStore())

    const steps = $state([
        { id: 0, name: 'buying_stage', component: BuyingStage },
        { id: 1, name: 'property_type', component: PropertyType },
        { id: 2, name: 'occupancy', component: OccupancyType },
        { id: 3, name: 'fthb', component: FirstTimeHomeBuyer },
        { id: 4, name: 'veteran', component: Veteran },
        { id: 5, name: 'location', component: Location },
        { id: 6, name: 'price', component: PriceRange },
        { id: 7, name: 'down_payment', component: DownPayment },
        { id: 8, name: 'income_type', component: IncomeType },
        { id: 9, name: 'income_amount', component: IncomeAmount },
        { id: 10, name: 'credit', component: Credit },
        { id: 11, name: 'derogatory_events', component: Derog },
        { id: 12, name: '', component: NextSteps },
        { id: 13, name: 'contact', component: Contact },
    ])
    formStore.data['loan_type'] = 'purchase'
    formStore.data['page_source'] = 'general-purchase'
    formStore.totalSteps = steps.length - 1
</script>

<!-- <div class="floating-data"> -->
<!--     <pre>{JSON.stringify(formStore.data, null, 4)}</pre> -->
<!-- </div> -->
{#if form?.success}
    <div class="submission">
        <h1>Thank you!</h1>
        <div>We'll reach out shortly.</div>
        <a href="/">back to home page</a>
    </div>
{:else}
    <ProgressBar {formStore} />
    <div class="form-container">
        <div class="form-wrapper">
            {#each steps as step}
                <div>
                    {#if formStore.currentStep == step.id}
                        <div class="form-step">
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
{/if}
