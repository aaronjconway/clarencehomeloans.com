<script lang="ts">
    //import form component and the store
    import MultiForm from '$lib/components/forms/MultiForm.svelte'
    import { FormStore } from '$lib/stores/formStore.svelte'

    // import parts
    import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte'
    import PropertyType from '$lib/components/forms/parts/DSCRPropertyType.svelte'
    import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte'
    import PriceRange from '$lib/components/forms/parts/PriceRange.svelte'
    import DownPayment from '$lib/components/forms/parts/DownPayment.svelte'
    import Location from '$lib/components/forms/parts/LocationRefinance.svelte'
    import DSCRIncome from '$lib/components/forms/parts/DSCRincome.svelte'
    import DscrOccupancy from '$lib/components/forms/parts/DSCROccupancy.svelte'
    import DSCRTenants from '$lib/components/forms/parts/DSCRTenants.svelte'
    import Credit from '$lib/components/forms/parts/Credit.svelte'
    import Derog from '$lib/components/forms/parts/Derog.svelte'
    import NextSteps from '$lib/components/forms/parts/NextSteps.svelte'
    import Contact from '$lib/components/forms/parts/Contact.svelte'

    const steps = $state([
        { id: 0, name: 'buying_stage', component: BuyingStage },
        { id: 1, name: '', component: DscrOccupancy },
        { id: 2, name: 'property_type', component: PropertyType },
        { id: 3, name: 'fthb', component: FirstTimeHomeBuyer },
        { id: 4, name: 'price', component: PriceRange },
        { id: 5, name: 'down_payment', component: DownPayment },
        { id: 6, name: 'location', component: Location },
        { id: 7, name: 'has_tenants', component: DSCRTenants },
        { id: 8, name: 'predicted_income', component: DSCRIncome },
        { id: 9, name: 'credit', component: Credit },
        { id: 10, name: 'derogatory_events', component: Derog },
        { id: 11, name: '', component: NextSteps },
        { id: 12, name: 'contact', component: Contact },
    ])

    // create a new form
    let form = new FormStore()

    // add some specific data
    form.data['loan_type'] = 'dscr'
    form.data['page_source'] = 'dscr-purchase'
    form.totalSteps = steps.length - 1

    //make state
    let formStore = $state(form)
</script>

<!-- // pass into the form -->
<MultiForm {formStore} {steps} />
