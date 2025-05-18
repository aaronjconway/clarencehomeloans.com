<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';
	let downPaymentMessage = $state('');

	const { stepName = '', formStore = $bindable() } = $props();

	// TODO:-- setup a local testing form so we can see all at the same time.
	// while testing - sice price isn't previously set
	if (!formStore.data['price']) {
		formStore.data['price'] = 400000;
	}
</script>

<div class="form-header">
	<h1>
		How much would you like to put down on {formatToUSD(
			formStore.data['price']
		)}?
	</h1>
	<p>
		Don't stress on the details if you don't know what's best for you. Here are
		some helpful presets, although you can adjust this however you want.
	</p>
	<div class="options-wrapper">
		{#if formStore.data['loan_type'] != 'dscr' && formStore.data['occupancy'] != 'investment'}
			{#if formStore.data['loan_type'] == 'va'}
				<button
					class="primary"
					onclick={() => {
						formStore.data[stepName] = 0;
						downPaymentMessage = 'Veterans are allowed to put 0% down.';
					}}
				>
					<span class="btn-label">0%</span>
				</button>
			{/if}
			<button
				class="primary"
				onclick={() => {
					formStore.data[stepName] = 3.0;
					downPaymentMessage =
						'The minimum you can put down on conventional as a first time home buyer or low income.';
				}}
			>
				<span class="btn-label">3%</span>
			</button>
			<button
				class="primary"
				onclick={() => {
					formStore.data[stepName] = 3.5;
					downPaymentMessage =
						'The minimum you can put down on FHA. Great for credit below 700.';
				}}
			>
				<span class="btn-label">3.5%</span>
			</button>
			<button
				class="primary"
				onclick={() => {
					formStore.data[stepName] = 5.0;
					downPaymentMessage =
						'The minimum a non first time home buyer can put down on conventional when income is high.';
				}}
			>
				<span class="btn-label">5%</span>
			</button>
			<button
				class="primary"
				onclick={() => {
					formStore.data[stepName] = 10;
					downPaymentMessage =
						'Great option for high income, good credit borrowers wanting to put less than 20% down.';
				}}
			>
				<span class="btn-label">10%</span>
			</button>
		{/if}
		<button
			class="primary"
			onclick={() => {
				formStore.data[stepName] = 20;
				downPaymentMessage = '';
			}}
		>
			<span class="btn-label">20%</span>
		</button>
	</div>
	<p>
		{downPaymentMessage}
	</p>
</div>

<div class="range-input">
	<label for="down_payment">
		{formatToUSD((formStore.data[stepName] * formStore.data['price']) / 100)} ({formStore
			.data[stepName]}%)
	</label>
	<input
		class="custom-slider"
		name="down_payment"
		type="range"
		min="0"
		max="100"
		bind:value={formStore.data[stepName]}
		onchange={() => (downPaymentMessage = '')}
	/>
	<NextButton {formStore} />
</div>

<style lang="scss">
	.range-input {
		margin: 0;
	}
	.options-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
	}
</style>
