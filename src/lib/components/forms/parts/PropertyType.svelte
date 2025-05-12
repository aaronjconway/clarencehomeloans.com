<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Single Family',
			id: 'single_family'
		},
		{
			text: 'Condo',
			id: 'condo'
		},
		{
			text: 'Multi Family',
			id: 'multi_family'
		},
		{
			text: 'Townhome',
			id: 'townhome'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
	import Dialog from '$lib/components/Dialog.svelte';
</script>

<div class="form-header">
	<h1>Great! What kind of property are you looking for?</h1>
	<Dialog
		page={'property'}
		buttonText={"More on Condo's and Townhomes"}
	/>
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
