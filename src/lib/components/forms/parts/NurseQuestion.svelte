<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'The cafeteria had a line for coffee',
			id: 'a'
		},
		{
			text: 'I dropped it on the floor, and couldn’t find it for a while.',
			id: 'b'
		},
		{
			text: 'Patient went on rant and refused (NICU)',
			id: 'c'
		},
		{
			text: 'I am doing my best ok?',
			id: 'd'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Please specify why the medication is being documented late.</h1>
	<div class="card">
		<div class="card-title">aspirin</div>
		<div class="card-text">
			81 mg = 1 tab, indication; Thrombosis prophylaxis, Tab-Chew, Chewed, Start
			Date 07/31/24 7:30:00 CDT
		</div>
	</div>
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
	.card {
		padding: var(--space-xs);
		text-align: left;
		border: solid 3px #98b7f0;
		border-radius: 4px;
		background: #ebf8ff;
		max-width: 400px;
		margin: 0 auto;

		.card-title {
			font-weight: bold;
		}
	}
</style>
