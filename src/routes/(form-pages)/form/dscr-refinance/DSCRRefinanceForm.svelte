<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	// import parts
	import RefinanceType from '$lib/components/forms/parts/DSCRRefinanceType.svelte';
	import PropertyType from '$lib/components/forms/parts/DSCRPropertyType.svelte';
	import LoanType from '$lib/components/forms/parts/DSCRLoanType.svelte';
	import LoanAmount from '$lib/components/forms/parts/LoanAmount.svelte';
	import Location from '$lib/components/forms/parts/LocationExact.svelte';
	import HomeValue from '$lib/components/forms/parts/HomeValue.svelte';
	import DSCRIncome from '$lib/components/forms/parts/DSCRincome.svelte';
	import DscrOccupancy from '$lib/components/forms/parts/DSCROccupancy.svelte';
	import DSCRTenants from '$lib/components/forms/parts/DSCRTenants.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		{ id: 0, name: 'dscr_refi_goal', component: RefinanceType },
		{ id: 1, name: '', component: DscrOccupancy },
		{ id: 2, name: 'property_type', component: PropertyType },
		{ id: 3, name: 'loan_type', component: LoanType },
		{ id: 4, name: 'loan_amount', component: LoanAmount },
		{ id: 5, name: 'home_value', component: HomeValue },
		{ id: 6, name: 'location', component: Location },
		{ id: 7, name: 'has_tenants', component: DSCRTenants },
		{ id: 8, name: 'dscr_current_income', component: DSCRIncome },
		{ id: 9, name: 'credit', component: Credit },
		{ id: 10, name: 'derogatory_events', component: Derog },
		{ id: 11, name: 'contact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();

	// add some specific data
	form.data['loan_type'] = 'dscr';
	form.data['page_source'] = 'dscr-refinance';
	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<!-- // pass into the form -->
<MultiForm
	{formStore}
	{steps}
/>
