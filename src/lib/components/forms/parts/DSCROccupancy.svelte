<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Continue',
			id: 'yes'
		}
	];

	function handleClick() {
		formStore.data['loan_type'] = 'dscr';
		formStore.data['page_source'] = 'dscr-purchase';
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>This short form will help us understand your DSCR needs.</h1>
	<div>
		We're experts at DSCR loans and happy to get you a quote or educate.
	</div>
	<div>
		We respect your privacy — <b>we do not share or sell informtion..</b>
	</div>
	<Dialog
		page={'dscr'}
		buttonText={'Read more on DSCR loans first'}
	/>
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
