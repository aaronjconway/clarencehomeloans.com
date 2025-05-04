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
		gtag('event', 'form_step_progress', {
			step_name: stepName,
			step_number: formStore.currentStep,
			selected_option: formStore.data[stepName],
			form_name: formStore.data['page_source']
		});
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>We have the best rates and options for Veterans.</h1>
	<Dialog
		page={'va-rates'}
		buttonText="How are we able to be so much better?"
	/>
	<div><u>We do not sell or share information</u></div>
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
