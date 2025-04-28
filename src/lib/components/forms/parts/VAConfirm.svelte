<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';

	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Army',
			id: 'army'
		},
		{
			text: 'Navy',
			id: 'navy'
		},
		{
			text: 'Air Force',
			id: 'air-force'
		},
		{
			text: 'Marine Corps',
			id: 'marine-corps'
		},
		{
			text: 'Coast Guard',
			id: 'coast-guard'
		},
		{
			text: 'National Guard',
			id: 'national-guard'
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
	<h1>Thank you for your service! 😃 Let's get started.</h1>
	<div>
		We have the best rates and options for veterans. We will crush companies
		like Rocket Mortgage, Veterans United and Homes for Heroes in terms of Rates
		and personalized service.
	</div>
	<div>
		We respect your privacy — <b>your information is never shared or sold.</b>
	</div>
	<div><u>We do not spam with calls.</u></div>
	<h3>What branch did you serve in?</h3>
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
