<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();

	function handleClick() {
		formStore.nextStep();
	}

	import { formatToUSD } from '$lib/utils';
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
	<div class="button-wrapper">
		<button
			class="primary"
			onclick={() => {
				handleClick();
			}}
		>
			Next
		</button>
	</div>
</div>
