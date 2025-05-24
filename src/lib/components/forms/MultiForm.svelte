<script lang="ts">
	/*
	 * Generic handler of multi form-step
	 * DO NOT ADD ANY NON GENERIC CONTENT
	 *
	 * */

	import ProgressBar from '$lib/components/forms/ProgressBar.svelte';

	let { formStore = $bindable(), steps } = $props();
	let loading = $state(true);

	$effect(() => {
		formStore.initializeFromStorage();
		loading = false;
	});
</script>

<ProgressBar {formStore} />
{#if loading}
	<div class="loader-overlay">
		<div class="loader-wrapper">
			<div class="loader"></div>
		</div>
	</div>
{:else}
	<div class="form-container">
		<div class="form-wrapper">
			{#each steps as step, i}
				<div>
					{#if formStore.currentStep == i}
						<div class="form-step">
							<div class="form-step-inner">
								<step.component
									bind:formStore
									stepName={step.name}
								/>
							</div>
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
			{#if formStore.currentStep > 0 && !formStore.submitted}
				<button
					class="back-button"
					onclick={() => {
						formStore.clearStorage();
						formStore.currentStep = 0;
					}}
				>
					Start Over
				</button>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	//loader overlay
	.loader-overlay {
		display: flex;
		justify-content: center;
		height: 50vh;
	}

	//loading wrappek to place the loader
	.loader-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* HTML: <div class="loader"></div> */
	.loader {
		width: 50px;
		aspect-ratio: 1;
		display: grid;
		border: 4px solid #0000;
		border-radius: 50%;
		border-right-color: var(--green-400);
		animation: l15 1s infinite linear;
	}
	.loader::before,
	.loader::after {
		content: '';
		grid-area: 1/1;
		margin: 2px;
		border: inherit;
		border-radius: 50%;
		animation: l15 2s infinite;
	}
	.loader::after {
		margin: 8px;
		animation-duration: 3s;
	}
	@keyframes l15 {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
