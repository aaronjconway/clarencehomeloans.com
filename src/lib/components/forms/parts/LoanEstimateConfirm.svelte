<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'I have a loan estimate',
			id: 'loan_estimate'
		},
		{
			text: 'I just want a quote',
			id: 'quote_just'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Your a few questions and an email away from a same day quote.</h1>
	<a
		href="https://www.consumerfinance.gov/static/apps/owning-a-home/img/loan-estimate-H24B-1.639aeb7e50d5.png"
	>
		[click for loan estimate example image]
	</a>
	<div>We typically beat most lenders</div>
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
