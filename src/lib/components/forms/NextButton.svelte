<script lang="ts">
	let { formStore } = $props();
</script>

<div class="button-wrapper">
	<button
		class="primary"
		onclick={() => {
			formStore.nextStep();
		}}
	>
		<span class="btn-label">Next</span>
	</button>
</div>
