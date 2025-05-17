<script lang="ts">
	import NextButton from '../NextButton.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Chapter 13 Bankruptcy',
			id: 'chapter-13'
		},
		{
			text: 'Chapter 7 Bankruptcy',
			id: 'chapter-7'
		},
		{
			text: 'Foreclosure',
			id: 'foreclosure'
		},
		{
			text: 'Short Sale',
			id: 'short-sale'
		},
		{
			text: 'Late Payments on a Mortgage',
			id: 'late-payments'
		},
		{
			text: 'Nope!',
			id: 'none'
		}
	];
</script>

<div class="form-header">
	<h1>Have you had any of these events?</h1>
	<div>
		You can select none, one, or more. Again, we have tons of options available
		for everyone.
	</div>
</div>

<div class="radio-wrapper">
	<div class="radio-inner">
		{#each data as item}
			<div class="radio-button">
				<input
					type="checkbox"
					multiple
					value={item.id}
					id={item.id}
					bind:group={formStore.data[stepName]}
				/>
				<label
					for={item.id}
					class:selected={formStore.data[stepName]?.includes(item.id)}
				>
					{item.text}
				</label>
			</div>
		{/each}
	</div>
</div>

{#if formStore.data[stepName]?.length > 0}
	<NextButton {formStore} />
{/if}

<style>
</style>
