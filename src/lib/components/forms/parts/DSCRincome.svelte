<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();

	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';
	formStore.data[stepName] = (formStore.data['price'] * 0.02) / 2;
</script>

<div class="form-header">
	<h1>What is the current or expected rent for the property?</h1>
</div>

<div class="range-input">
	<label for="priceRange">
		{formatToUSD(formStore.data[stepName])}
	</label>
	<input
		class="custom-slider"
		name="priceRange"
		type="range"
		min="0"
		max={formStore.data['price'] * 0.025}
		step="100"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
