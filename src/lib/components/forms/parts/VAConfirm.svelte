<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	import Dialog from '$lib/components/Dialog.svelte';

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
	<h1>Get same day rate quote and expert advice.</h1>
	<Dialog
		page={'va-rates'}
		buttonText="How are we able to be so much better?"
	/>
	<div><u>We do not sell or share information</u></div>
	<ul>
		<li>
			<i class="fa fa-check"></i>
			No bait and switch
		</li>
		<li>
			<i class="fa fa-check"></i>
			No origination fees
		</li>
		<li>
			<i class="fa fa-check"></i>
			No credit check
		</li>
	</ul>
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

<style lang="scss">
	ul {
		text-align: left;
		margin: 0 auto;
		i {
			color: green;
			margin-right: var(--space-sm);
		}
	}
</style>
