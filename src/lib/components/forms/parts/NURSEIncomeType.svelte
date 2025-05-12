<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Salary/Full-time hourly (36+hrs)',
			id: 'salary'
		},
		{
			text: 'Variable Hourly or Part Time',
			id: 'variable'
		},
		{
			text: 'Travel Nurse',
			id: 'commission'
		},
		{
			text: 'Retired/Benefit Income',
			id: 'retirement/benefit'
		},
		{
			text: 'Self Employment',
			id: 'self employment'
		},
		{
			text: 'Other',
			id: 'other'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>What type of income do you receive as a Nurse?</h1>
	<div>
		This is not an exhaustive list. We have options available for everyone and
		we know that Nurses can receive interesting pay types at non-standard
		schedules.
	</div>
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
