<script lang="ts">
	import GetStartedArrow from '$lib/components/GetStartedArrow.svelte';
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Coninue',
			id: 'yes'
		}
	];

	function handleClick() {
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>We Specialize in Serving High-Net-Worth Clients</h1>
	<div>This short form will help us understand your situation and goals.</div>
	<div>
		We respect your privacy — <b>we do not share or sell information.</b>
	</div>
	<ul>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>

			<div>Excellent rates</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>

			<div>Experts in complicated income</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>

			<div>No bait and switch</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>
			<div>No origination or processing fees</div>
		</li>
		<li>
			<div>
				<i class="fa fa-check"></i>
			</div>
			<div>No credit check till you're happy.</div>
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
		padding: 0 var(--space-lg);
		font-size: var(--text-md);
		text-align: left;
		max-width: 400px;
		margin: 0 auto;
		li {
			display: flex;
			i {
				color: green;
				margin-right: var(--space-sm);
			}
		}
	}
</style>
