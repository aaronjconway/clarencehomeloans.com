<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	formStore.data[stepName] = 150000;
</script>

<div class="form-header">
	<h1>How much do you make roughly?</h1>
	<div>Annually</div>
</div>

<div class="range-input">
	<label for="income_amount">
		{#if formStore.data[stepName] == 400000}
			{formatToUSD(formStore.data[stepName])}+
		{:else}
			{formatToUSD(formStore.data[stepName])}
		{/if}
	</label>
	<input
		class="custom-slider"
		name="income_amount"
		type="range"
		min="100000"
		max="400000"
		step="1000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
