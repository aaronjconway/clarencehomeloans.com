<script lang="ts">
    import { FormStore } from '$lib/stores/formStore.svelte'
    //
    import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte'
    import PropertyType from '$lib/components/forms/parts/DSCRPropertyType.svelte'
    import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte'
    import PriceRange from '$lib/components/forms/parts/PriceRange.svelte'
    import DownPayment from '$lib/components/forms/parts/DownPayment.svelte'
    import Location from '$lib/components/forms/parts/LocationRefinance.svelte'
    import HomeValue from '$lib/components/forms/parts/HomeValue.svelte'
    import DSCRIncome from '$lib/components/forms/parts/DSCRincome.svelte'
    import DscrOccupancy from '$lib/components/forms/parts/DSCROccupancy.svelte'
    import DSCRTenants from '$lib/components/forms/parts/DSCRTenants.svelte'
    import Credit from '$lib/components/forms/parts/Credit.svelte'
    import Derog from '$lib/components/forms/parts/Derog.svelte'
    import NextSteps from '$lib/components/forms/parts/NextSteps.svelte'
    import Contact from '$lib/components/forms/parts/Contact.svelte'
    import ProgressBar from '$lib/components/forms/ProgressBar.svelte'
    //
    let { form } = $props()

    let formStore = $state(new FormStore())

    const steps = $state([
        { id: 0, name: 'buying_stage', component: BuyingStage },
        { id: 1, name: '', component: DscrOccupancy },
        { id: 2, name: 'property_type', component: PropertyType },
        { id: 3, name: 'fthb', component: FirstTimeHomeBuyer },
        { id: 4, name: 'price', component: PriceRange },
        { id: 5, name: 'down_payment', component: DownPayment },
        { id: 6, name: 'home_value', component: HomeValue },
        { id: 7, name: 'location', component: Location },
        { id: 8, name: 'has_tenants', component: DSCRTenants },
        { id: 9, name: 'predicted_income', component: DSCRIncome },
        { id: 10, name: 'credit', component: Credit },
        { id: 11, name: 'derogatory_events', component: Derog },
        { id: 12, name: '', component: NextSteps },
        { id: 13, name: 'contact', component: Contact },
    ])

    formStore.data['loan_type'] = 'dscr'
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
