<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	if (!formStore.data['price']) {
		formStore.data['price'] = 1000000;
	}
</script>

<div class="form-header">
	<h1>What price range are you looking at roughly?</h1>
	<p>Jumbo Loans are over 806,000 for the majority of the US</p>
	<p>Some areas are "High Balance". We can, of course, help with both.</p>
</div>

<div class="range-input">
	<label for="priceRange">
		{#if formStore.data[stepName] == 3000000}
			{formatToUSD(formStore.data[stepName])}+
		{:else}
			{formatToUSD(formStore.data[stepName])}
		{/if}
	</label>
	<input
		class="custom-slider"
		name="priceRange"
		type="range"
		min="800000"
		max="3000000"
		step="5000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
