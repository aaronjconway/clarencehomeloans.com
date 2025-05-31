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
		{ name: 'cashout_type', component: CashOutUsage },
		{ name: 'property_type', component: PropertyType },
		{ name: 'occupancy', component: OccupancyType },
		{ name: 'loan_type', component: LoanType },
		{ name: 'loan_amount', component: LoanAmount },
		{ name: 'home_value', component: HomeValue },
		{ name: 'location', component: Location },
		{ name: 'veteran', component: Veteran },
		{ name: 'income_type', component: IncomeType },
		{ name: 'income_amount', component: IncomeAmount },
		{ name: 'credit', component: Credit },
		{ name: 'derogatory_events', component: Derog },
		{ name: 'contact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();

	form.formName = 'cashout';
	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<MultiForm
	{formStore}
	{steps}
/>
