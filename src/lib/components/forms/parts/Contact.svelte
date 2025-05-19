<script lang="ts">
	import ContactForm from './ContactForm.svelte';
	let { formStore = $bindable(), hasHeader = true } = $props();
</script>

{#if hasHeader}
	<div class="form-header">
		<h1>Let's get you some answers.</h1>
	</div>
{/if}
<ContactForm {formStore} />

<style lang="scss">
	div {
		font-size: var(--text-lg);
	}
</style>
