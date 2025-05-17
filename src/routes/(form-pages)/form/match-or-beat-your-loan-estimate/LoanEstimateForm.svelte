<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	// import parts
	import LoanEstimateConfirm from '$lib/components/forms/parts/LoanEstimateConfirm.svelte';
	import PropertyType from '$lib/components/forms/parts/PropertyType.svelte';
	import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte';
	import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte';
	import IncomeType from '$lib/components/forms/parts/IncomeType.svelte';
	import IncomeAmount from '$lib/components/forms/parts/IncomeAmount.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import NextSteps from '$lib/components/forms/parts/NextSteps.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		{
			id: 0,
			name: 'confirm_loan_estimate',
			component: LoanEstimateConfirm
		},
		{ id: 1, name: 'property_type', component: PropertyType },
		{ id: 2, name: 'occupancy', component: OccupancyType },
		{ id: 3, name: 'fthb', component: FirstTimeHomeBuyer },
		{ id: 4, name: 'income_type', component: IncomeType },
		{ id: 5, name: 'income_amount', component: IncomeAmount },
		{ id: 6, name: 'credit', component: Credit },
		{ id: 7, name: 'derogatory_events', component: Derog },
		{ id: 8, name: '', component: NextSteps },
		{ id: 9, name: 'LEcontact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();

	// add some specific data
	form.data['loan_type'] = 'loan-estimate-unknown';
	//the lead type
	form.data['page_source'] = 'loan-estimate';

	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<!-- // pass into the form -->
<MultiForm
	{formStore}
	{steps}
/>
