<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';

	const { stepName = '', formStore = $bindable() } = $props();

	const data = [
		{
			text: 'I have a large expense coming up.',
			id: 'large expense'
		},
		{
			text: 'None ya business',
			id: 'non-ya-business'
		},
		{
			text: 'Consolidate Debt',
			id: 'consolidate_debts'
		},
		{
			text: 'Life event (Divorce, probate etc)',
			id: 'life event'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>We have the best cash out interest rates and options.</h1>
	<div>This short form will help us understand your situation and goals.</div>
	<div>
		We respect your privacy — <b>your information is never shared or sold.</b>
	</div>
	<div><u>We do not spam with calls.</u></div>
	<div>
		<b>FYI</b>
		- As a broker we have tons of options others don't as well as the best pricing.
	</div>
	<h1>How will you use the cash?</h1>
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

<style lang="scss">
	.form-header {
		max-width: 600px;
	}
</style>
