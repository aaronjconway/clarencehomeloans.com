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
		<h1>
			You just spent the time to fill that out. Let's get you some answers
		</h1>
		<div>We promise, we are not annoying.</div>
		<div>
			<b>We do not share or sell informtion..</b>
		</div>
	</div>
{/if}
<ContactForm
	{formStore}
	{stepName}
/>
