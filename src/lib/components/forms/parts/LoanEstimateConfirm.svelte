<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Continue',
			id: 'continue'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>
		Answer a few questions, upload your loan estimate, and get a same day quote.
	</h1>
	<a
		href="https://www.consumerfinance.gov/static/apps/owning-a-home/img/loan-estimate-H24B-1.639aeb7e50d5.png"
	>
		<i class="fa fa-arrow-right"></i>
		loan estimate example
	</a>
	<ul>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>

			<div>No bait and switch</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>
			<div>No origination or processing fees</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>
			<div>No credit check till you're happy.</div>
		</li>
	</ul>
	<div>We will beat large lenders by a significant amount.</div>
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

<style lang="scss">
	ul {
		padding: 0 var(--space-lg);
		font-size: var(--text-md);
		text-align: left;
		max-width: 400px;
		margin: 0 auto;
		li {
			display: flex;
			i {
				color: green;
				margin-right: var(--space-sm);
			}
		}
	}
</style>
