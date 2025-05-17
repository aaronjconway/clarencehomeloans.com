<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	formStore.data[stepName] = 400000;
</script>

<div class="form-header">
	<h1>What price range are you looking at roughly?</h1>
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
		max="1500000"
		step="5000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
