<script lang="ts">
    import { FormStore } from '$lib/stores/formStore.svelte'
    //
    import RefinanceType from '$lib/components/forms/parts/RefinanceType.svelte'
    import PropertyType from '$lib/components/forms/parts/PropertyTypeRefinance.svelte'
    import LoanType from '$lib/components/forms/parts/LoanType.svelte'
    import LoanAmount from '$lib/components/forms/parts/LoanAmount.svelte'
    import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte'
    import Location from '$lib/components/forms/parts/LocationRefinance.svelte'
    import HomeValue from '$lib/components/forms/parts/HomeValue.svelte'
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
        { id: 0, name: 'refinance_type', component: RefinanceType },
        { id: 1, name: 'property_type', component: PropertyType },
        { id: 2, name: 'occupancy', component: OccupancyType },
        { id: 3, name: 'loan_type', component: LoanType },
        { id: 4, name: 'loan_amount', component: LoanAmount },
        { id: 5, name: 'home_value', component: HomeValue },
        { id: 6, name: 'location', component: Location },
        { id: 7, name: 'veteran', component: Veteran },
        { id: 8, name: 'income_type', component: IncomeType },
        { id: 9, name: 'income_amount', component: IncomeAmount },
        { id: 10, name: 'credit', component: Credit },
        { id: 11, name: 'derogatory_events', component: Derog },
        { id: 12, name: '', component: NextSteps },
        { id: 13, name: 'contact', component: Contact },
    ])

    formStore.data['loan_type'] = 'refinance'
    formStore.data['page_source'] = 'general-refinance'

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
                    class="back-button"
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
