<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'Phone Call',
			id: 'phone'
		},
		{
			text: 'Text',
			id: 'text'
		},
		{
			text: 'Email Only',
			id: 'email'
		},
		{
			text: 'Any of the above',
			id: 'any'
		},
		{
			text: "I don't want to be contacted",
			id: 'no_contact'
		}
	];

	function handleClick(e: Event) {
		const selectedValue = e.target.value;
		if (selectedValue != 'no_contact') {
			formStore.nextStep();
		}
	}
</script>

{#if formStore.data['contact_preference'] == 'no_contact'}
	<div class="form-header-annoying">
		<h1>
			We know you you just want answers and don't want to talk with an annoying
			sales person you don't trust.
		</h1>
		<div>How can we help you get the answers you're looking for?</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['contact_preference'] = '';
				}}
			>
				<span class="btn-label">Back to Preferences</span>
			</button>
		</div>
		<div>
			We're experts—and genuinely excited to help you succeed. Please reachout
			when you're ready.
		</div>
	</div>
{:else}
	<div class="form-header">
		<h1>Do you have a contact preference?</h1>
		<div style="font-size: var(--text-md);">
			<u>We do not sell or share information.</u>
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
							onclick={(e) => handleClick(e)}
						/>
						{item.text}
					</label>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.form-header-annoying {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space);

		margin: 0 auto;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-md);
		max-width: 800px;

		text-align: center;
		font-size: var(--text-md);

		h1 {
			margin: 0;
		}
	}
</style>
