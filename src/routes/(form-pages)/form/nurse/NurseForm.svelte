<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	// import parts
	import NurseConfirm from '$lib/components/forms/parts/NurseConfirm.svelte';
	import NurseQuestion from '$lib/components/forms/parts/NurseQuestion.svelte';
	import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte';
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
	import ContactPreference from '$lib/components/forms/parts/ContactPreference.svelte';
	import Contact from '$lib/components/forms/parts/Contact.svelte';

	const steps = $state([
		{ id: 0, name: 'confirm_healthcare', component: NurseConfirm },
		{ id: 1, name: '', component: NurseQuestion },
		{ id: 2, name: 'buying_stage', component: BuyingStage },
		{ id: 3, name: 'property_type', component: PropertyType },
		{ id: 4, name: 'occupancy', component: OccupancyType },
		{ id: 5, name: 'fthb', component: FirstTimeHomeBuyer },
		{ id: 6, name: 'price', component: PriceRange },
		{ id: 7, name: 'down_payment', component: DownPayment },
		{ id: 8, name: 'location', component: Location },
		{ id: 9, name: 'income_type', component: IncomeType },
		{ id: 10, name: 'income_amount', component: IncomeAmount },
		{ id: 11, name: 'credit', component: Credit },
		{ id: 12, name: 'derogatory_events', component: Derog },
		{ id: 13, name: 'contact_preference', component: ContactPreference },
		{ id: 14, name: 'contact', component: Contact }
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
