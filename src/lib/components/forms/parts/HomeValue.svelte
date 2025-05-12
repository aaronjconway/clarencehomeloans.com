<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();

	function handleClick() {
		formStore.nextStep();
	}

	import { formatToUSD } from '$lib/utils';
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
