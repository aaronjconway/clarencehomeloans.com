<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Confirm',
			id: 'yes'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Are you a Nurse or Healthcare worker?</h1>
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
