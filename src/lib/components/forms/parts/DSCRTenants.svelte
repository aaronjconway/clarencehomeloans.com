<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Yes',
			id: 'yes'
		},
		{
			text: 'No',
			id: 'no'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Are there current tenants?</h1>
</div>

<div class="radio-wrapper">
	<div class="radio-inner">
		{#each data as item}
			<div class="radio-button">
				<input
					type="radio"
					value={item.id}
					id={item.id}
					bind:group={formStore.data[stepName]}
					onclick={handleClick}
				/>
				<label
					for={item.id}
					class:selected={item.id == formStore.data[stepName]}
				>
					{item.text}
				</label>
			</div>
		{/each}
	</div>
</div>
