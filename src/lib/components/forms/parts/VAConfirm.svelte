<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import { format } from 'date-fns';

	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Confirm',
			id: 'confirm'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>
		Our average rate at <u>no points</u>
		as of today is 6.125% on a 30 year fixed VA loan
	</h1>
	<!-- <Dialog -->
	<!-- 	page={'va-rates'} -->
	<!-- 	buttonText="Read More: How are we able to be so much better?" -->
	<!-- /> -->
	<Dialog
		page={'va-rate-comparison'}
		buttonText="Read More: But this other company said X.XX rate??!??"
	/>
	<!-- <div><u>We do not sell or share information</u></div> -->
	<!-- <ul> -->
	<!-- 	<li> -->
	<!-- 		<i class="fa fa-check"></i> -->
	<!-- 		Possibility to buy down the rate to under 5.875 -->
	<!-- 	</li> -->
	<!-- 	<li> -->
	<!-- 		<i class="fa fa-check"></i> -->
	<!-- 		No origination fee -->
	<!-- 	</li> -->
	<!-- 	<li> -->
	<!-- 		<i class="fa fa-check"></i> -->
	<!-- 		No processing or underwriting -->
	<!-- 	</li> -->
	<!-- 	<li> -->
	<!-- 		<i class="fa fa-check"></i> -->
	<!-- 		No credit check -->
	<!-- 	</li> -->
	<!-- </ul> -->
	<h3>Please confirm you served in the military</h3>
</div>

<div class="radio-wrapper">
	<div class="radio-inner">
		{#each data as item}
			<div class="radio-button">
				<label
					for={item.id}
					class:selected={item.id == formStore.data[stepName]}
				>
					<input
						type="radio"
						value={item.id}
						id={item.id}
						bind:group={formStore.data[stepName]}
						onclick={handleClick}
					/>
					{item.text}
				</label>
			</div>
		{/each}
	</div>
</div>
<GetStartedArrow />

<p class="disclaimer">
	Rates and terms effective as of {format(new Date(), 'EEEE, MMM dd yyyy')} and subject
	to change without notice. The 6.125% interest rate (6.125% APR) is based on a $500,000
	VA loan with 0% down payment, a 30-year fixed term, and assumes a borrower with
	excellent credit. This would be a P.I payment of $3,038.05 There are no points,
	origination or processing fees at this rate. Rate may vary based on credit score,
	loan amount, property type, and other factors. VA loans may require a one-time
	VA funding fee, which may be financed into the loan. Not all applicants will qualify.
</p>

<style lang="scss">
	h3 {
		margin-top: var(--space-sm);
	}
	.disclaimer {
		width: 100%;
		font-size: var(--text-sm);
		color: var(--ink);
		text-align: justify;
		max-width: 800px;
		margin: 0 auto;
		margin-top: var(--space-lg);
	}
	ul {
		text-align: left;
		margin: 0 auto;
		i {
			color: green;
			margin-right: var(--space-sm);
		}
	}
</style>
