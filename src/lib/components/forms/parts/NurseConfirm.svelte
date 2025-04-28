<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
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
	<h1>Do you work in healthcare? 🏥</h1>
	<div>This short form will help us understand your situation and goals.</div>
	<div>
		We respect your privacy — <b>your information is never shared or sold.</b>
	</div>
	<div><u>We do not spam with calls.</u></div>
	<div>
		<b>FYI</b>
		- We're much better in options and pricing than the "Next Door" or "Home for
		Heroes" programs. :)
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
						ontouchend={handleClick}
					/>
					{item.text}
				</label>
			</div>
		{/each}
	</div>
</div>
<GetStartedArrow />
