<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();

	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';
</script>

<div class="form-header">
	<h1>How much do you estimate the property to be worth?</h1>
</div>

<div class="range-input">
	<label for="home_value">
		{formatToUSD(formStore.data[stepName])}
	</label>
	<input
		class="custom-slider"
		name="home_value"
		type="range"
		min="0"
		max="1500000"
		step="5000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
