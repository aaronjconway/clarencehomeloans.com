<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	//
	import GOEConfirm from '$lib/components/forms/parts/GOEConfirm.svelte';
	import GOELiveIn from '$lib/components/forms/parts/GOELiveIn.svelte';
	// how much is the home worth
	import PropertyType from '$lib/components/forms/parts/PropertyTypeRefinance.svelte';
	import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte';
	import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte';
	import HomeValue from '$lib/components/forms/parts/HomeValue.svelte';
	// how much does
	import Location from '$lib/components/forms/parts/LocationExact.svelte';

	//
	import IncomeType from '$lib/components/forms/parts/IncomeType.svelte';
	import IncomeAmount from '$lib/components/forms/parts/IncomeAmount.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		{ id: 0, name: 'confirm_buying_from_family', component: GOEConfirm },
		{ id: 1, name: 'live_in_property', component: GOELiveIn },
		{ id: 2, name: 'property_type', component: PropertyType },
		{ id: 3, name: 'occupancy', component: OccupancyType },
		{ id: 4, name: 'fthb', component: FirstTimeHomeBuyer },
		{ id: 5, name: 'price', component: HomeValue },
		{ id: 6, name: 'location', component: Location },
		{ id: 7, name: 'income_type', component: IncomeType },
		{ id: 8, name: 'income_amount', component: IncomeAmount },
		{ id: 9, name: 'credit', component: Credit },
		{ id: 10, name: 'derogatory_events', component: Derog },
		{ id: 11, name: 'contact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();

	// add some specific data
	form.data['loan_type'] = 'purchase';
	//the lead type
	form.data['page_source'] = 'goe-purchase';

	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<!-- // pass into the form -->
<MultiForm
	{formStore}
	{steps}
/>
