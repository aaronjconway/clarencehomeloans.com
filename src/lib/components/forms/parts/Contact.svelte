<script lang="ts">
	import ContactForm from './ContactForm.svelte';
	let {
		formStore = $bindable(),
		stepName = 'contact',
		hasHeader = true
	} = $props();
</script>

{#if hasHeader}
	<div class="form-header">
		<h1>Let's get you some answers.</h1>
		<div>
			We typically reach out same day. We don't sell or share information and
			are looking forward to working with you regardless of the stage you're in.
		</div>
	</div>
{/if}
<ContactForm
	{formStore}
	{stepName}
/>

<style lang="scss">
	div {
		font-size: var(--text-lg);
	}
</style>
