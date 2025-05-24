<script lang="ts">
	import { formatToUSD } from '$lib/utils';
	import NextButton from '../NextButton.svelte';
	let downPaymentMessage = $state('');

	const { stepName = '', formStore = $bindable() } = $props();

	if (!formStore.data['down_payment']) {
		formStore.data['down_payment'] = 10;
	}
	formStore.data['loan_type'] = 'dscr';
	console.log(formStore.data);
	const downOptions = {
		jumbo: [
			{
				downpayment: 10.01,
				message: 'The (weird) minimum down for jumbo loans. Still no PMI.'
			},
			{
				downpayment: 20,
				message:
					'Standard jumbo loan down payment. Better rates and terms may apply.'
			},
			{
				downpayment: 30,
				message: 'Higher down payment can help bypass stricter underwriting.'
			}
		],
		dscr: [
			{
				downpayment: 20,
				message: 'Recommended down payment for broader lender acceptance.'
			},
			{
				downpayment: 25,
				message:
					'Preferred by lenders for investors with limited rental history.'
			}
		],
		va: [
			{
				downpayment: 0,
				message:
					'VA loans offer 100% financing for eligible veterans with no down payment.'
			},
			{
				downpayment: 5,
				message:
					'Optional down payment can reduce VA funding fee and monthly payments.'
			}
		],
		fha: [
			{
				downpayment: 3.5,
				message:
					'Minimum FHA down payment for borrowers with credit scores of 580 or higher.'
			},
			{
				downpayment: 10,
				message: 'Required down payment if credit score is between 500–579.'
			}
		],
		conventional: [
			{
				downpayment: 3,
				message:
					'Available for first-time homebuyers or income-qualified borrowers.'
			},
			{
				downpayment: 5,
				message: 'Standard minimum for many conventional loan programs.'
			},
			{
				downpayment: 10,
				message: 'Improves loan terms and may reduce PMI costs.'
			},
			{
				downpayment: 20,
				message:
					'Avoids private mortgage insurance (PMI) and improves loan terms.'
			}
		]
	};
</script>

<div class="form-header">
	<h1>
		How much would you like to put down on {formatToUSD(
			formStore.data['price']
		)}?
	</h1>

	{#if formStore.data['loan_type'] == 'jumbo'}
		<p>
			Bear in mind that jumbo loans do not have PMI and get significanly better
			pricing over 20% down.
		</p>
	{/if}

	<div class="options-wrapper">
		{#if downOptions[formStore.data['loan_type']]}
			{#each downOptions[formStore.data['loan_type']] as item}
				<button
					class="primary"
					onclick={() => {
						formStore.data[stepName] = item.downpayment;
						downPaymentMessage = item.message;
					}}
				>
					<span class="btn-label">{item.downpayment}%</span>
				</button>
			{/each}
		{/if}
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
