<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
</script>

<div class="form-header">
	<h1>How much is the outstanding balance?</h1>
</div>

<div class="range-input">
	<label for="loanAmount">
		{formatToUSD(formStore.data[stepName])}
	</label>
	<input
		class="custom-slider"
		name="loanAmount"
		type="range"
		min="0"
		max="1000000"
		step="5000"
		bind:value={formStore.data[stepName]}
	/>
	<NextButton {formStore} />
</div>
