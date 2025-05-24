<script lang="ts">
	//import form component and the store
	import MultiForm from '$lib/components/forms/MultiForm.svelte';
	import { FormStore } from '$lib/stores/formStore.svelte';

	// import parts
	import JumboConfirm from '$lib/components/forms/parts/JumboConfirm.svelte';
	// import JumboQuestion from '$lib/components/forms/parts/JumboQuestion.svelte';
	import BuyingStage from '$lib/components/forms/parts/BuyingStage.svelte';
	import PropertyType from '$lib/components/forms/parts/PropertyType.svelte';
	import OccupancyType from '$lib/components/forms/parts/OccupancyType.svelte';
	import FirstTimeHomeBuyer from '$lib/components/forms/parts/FirstTimeHomeBuyer.svelte';
	import PriceRange from '$lib/components/forms/parts/JumboPrice.svelte';
	import DownPayment from '$lib/components/forms/parts/DownPayment.svelte';
	import Location from '$lib/components/forms/parts/Location.svelte';
	import IncomeType from '$lib/components/forms/parts/IncomeType.svelte';
	import IncomeAmount from '$lib/components/forms/parts/JumboIncome.svelte';
	import Credit from '$lib/components/forms/parts/Credit.svelte';
	import Derog from '$lib/components/forms/parts/Derog.svelte';
	import Contact from '$lib/components/forms/parts/JumboContact.svelte';
	// import ContactPreference from '$lib/components/forms/parts/ContactPreference.svelte';
	// import Explain from '$lib/components/forms/parts/Explain.svelte';

	const steps = $state([
		{ name: 'confirm', component: JumboConfirm },
		{ name: 'location', component: Location },
		{ name: 'buying_stage', component: BuyingStage },
		{ name: 'property_type', component: PropertyType },
		{ name: 'occupancy', component: OccupancyType },
		{ name: 'fthb', component: FirstTimeHomeBuyer },
		{ name: 'price', component: PriceRange },
		{ name: 'down_payment', component: DownPayment },
		{ name: 'income_type', component: IncomeType },
		{ name: 'income_amount', component: IncomeAmount },
		{ name: 'credit', component: Credit },
		{ name: 'derogatory_events', component: Derog },
		// { name: 'contact_preference', component: ContactPreference },
		// { name: '', component: Explain },
		{ name: 'contact', component: Contact }
	]);

	// create a new form
	let form = new FormStore();
	//todo:-- I don't think there's any readson to have form name.
	//it's for the local storage unique id  - but we can just use th
	//form.data['page_source'] if we're setting that first.
	form.formName = 'jumbo';
	form.data['loan_type'] = 'jumbo';
	form.data['page_source'] = 'jumbo-purchase';
	form.totalSteps = steps.length - 1;

	//make state
	let formStore = $state(form);
</script>

<!-- // pass into the form -->
<MultiForm
	{formStore}
	{steps}
/>
