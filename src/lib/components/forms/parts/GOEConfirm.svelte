<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';
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
		formStore.nextStep();
	}
</script>

<div class="form-header">
	<h1>Will you be buying from a family member?😃</h1>
	<Dialog
		page={'family-members'}
		buttonText={'More on which Family members count'}
	/>
	<div>
		The seller must be a direct family member. This program is exclusively for
		family-to-family transactions. If you're unsure whether your relationship
		qualifies, feel free to give us a call.
	</div>
	<div>This short form will help us understand your situation and goals.</div>
	<div>
		We respect your privacy — <b>your information is never shared or sold.</b>
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
					/>
					{item.text}
				</label>
			</div>
		{/each}
	</div>
</div>
<GetStartedArrow />
