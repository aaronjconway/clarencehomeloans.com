<script lang="ts">
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';
	//
	import CashOutUsage from '$lib/components/forms/parts/CashOutUsage.svelte';
	import PropertyType from '$lib/components/forms/parts/PropertyTypeRefinance.svelte';
	import LoanType from '$lib/components/forms/parts/LoanType.svelte';
	import LoanAmount from '$lib/components/forms/parts/LoanAmount.svelte';
	import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte';
	import Location from '$lib/components/forms/parts/LocationExact.svelte';
	import HomeValue from '$lib/components/forms/parts/HomeValue.svelte';
	import Veteran from '$lib/components/forms/parts/Veteran.svelte';
	import IncomeType from '$lib/components/forms/parts/IncomeType.svelte';
	import IncomeAmount from '$lib/components/forms/parts/IncomeAmount.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		{ id: 0, name: 'cashout_type', component: CashOutUsage },
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
		{ id: 12, name: 'contact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();

	// add some specific data
	form.data['loan_type'] = 'cashout';
	//the lead type
	form.data['page_source'] = 'general-cashout';

	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<MultiForm
	{formStore}
	{steps}
/>
