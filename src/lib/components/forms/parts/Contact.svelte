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
		<h1>We know you hate this part.</h1>
		<!-- <h1> -->
		<!-- 	Almost -->
		<!-- 	<u>90%</u> -->
		<!-- 	of nurses leave without answers. -->
		<!-- </h1> -->
		<div>
			We know this is annoying, that you just want answers and don't want to
			give out your information or talk to a salesperson you don't trust.
		</div>
		<div>You made it this far. Let's get you some answers.</div>
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
