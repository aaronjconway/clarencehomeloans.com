<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	formStore.data[stepName] = 70000;
</script>

<div class="form-header">
	<h1>How much do you make roughly?</h1>
	<div>Annually</div>
</div>

<div class="range-input">
	<label for="income_amount">
		{formatToUSD(formStore.data[stepName])}
	</label>
	<input
		class="custom-slider"
		name="income_amount"
		type="range"
		min="0"
		max="300000"
		step="1000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
