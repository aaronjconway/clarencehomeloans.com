<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	// import parts
	import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte';
	import NurseConfirm from '$lib/components/forms/parts/NurseConfirm.svelte';
	import PropertyType from '$lib/components/forms/parts/PropertyType.svelte';
	import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte';
	import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte';
	import PriceRange from '$lib/components/forms/parts/PriceRange.svelte';
	import DownPayment from '$lib/components/forms/parts/DownPayment.svelte';
	import Location from '$lib/components/forms/parts/Location.svelte';
	import IncomeType from '$lib/components/forms/parts/NURSEIncomeType.svelte';
	import IncomeAmount from '$lib/components/forms/parts/IncomeAmount.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		// { id: 0, name: 'confirm_healthcare', component: NurseConfirm },
		{ id: 0, name: 'buying_stage', component: BuyingStage },
		{ id: 1, name: 'property_type', component: PropertyType },
		{ id: 2, name: 'occupancy', component: OccupancyType },
		{ id: 3, name: 'fthb', component: FirstTimeHomeBuyer },
		{ id: 4, name: 'price', component: PriceRange },
		{ id: 5, name: 'down_payment', component: DownPayment },
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
	form.data['page_source'] = 'nurse-purchase';

	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<!-- // pass into the form -->
<MultiForm
	{formStore}
	{steps}
/>
