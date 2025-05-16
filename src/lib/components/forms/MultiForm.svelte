<script lang="ts">
	/*
	 * A Generic
	 *
	 * */
	import ProgressBar from '$lib/components/forms/ProgressBar.svelte';

	let { formStore = $bindable(), steps } = $props();
</script>

<ProgressBar {formStore} />
<div class="form-container">
	<div class="form-wrapper">
		{#each steps as step}
			<div>
				{#if formStore.currentStep == step.id}
					<div class="form-step">
						<step.component
							bind:formStore
							stepName={step.name}
						/>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="nav">
		{#if formStore.currentStep > 0 && !formStore.submitted}
			<button
				class="back-button"
				onclick={() => {
					formStore.previousStep();
				}}
			>
				<i class="fa fa-arrow-left"></i>
				Back
			</button>
		{/if}
	</div>
</div>
