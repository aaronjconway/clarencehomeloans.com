<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Healthcare',
			id: 'healthcare',
			subtext: 'Nurses, doctors, and other medical professionals'
		},
		{
			text: 'Education',
			id: 'education',
			subtext: 'Teachers, school staff, and educational administrators'
		},
		{
			text: 'Public Safety',
			id: 'public-safety',
			subtext: 'Police, firefighters, and emergency responders'
		},
		{
			text: 'Military',
			id: 'military',
			subtext: 'Active duty, veterans, and reservists'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Which kind of Hero are you?</h1>
	<div>This short form will help us understand your situation and goals.</div>
	<div>
		We respect your privacy — <b>we do not share or sell informtion..</b>
	</div>
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
					<div class="subtext">
						{item.subtext}
					</div>
				</label>
			</div>
		{/each}
	</div>
</div>
<GetStartedArrow />

<style lang="scss">
	.subtext {
		font-size: var(--text-sm);
	}
	ul {
		text-align: left;
		margin: 0 auto;
		i {
			color: green;
			margin-right: var(--space-sm);
		}
	}
</style>
