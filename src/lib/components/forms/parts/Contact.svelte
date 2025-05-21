<script lang="ts">
	import ContactForm from './ContactForm.svelte';
	let { formStore = $bindable(), hasHeader = true } = $props();
</script>

{#if hasHeader}
	<div class="form-header">
		<h1>It looks like you're eligible!</h1>
		<h1>Let's dial in the rates and options for you.</h1>
		<div>
			We respect your privacy —
			<b>we do not share or sell information.</b>
		</div>

		<ul>
			<li>
				<i class="fa fa-check"></i>
				No bait and switch
			</li>
			<li>
				<i class="fa fa-check"></i>
				No origination, processing, or underwriting fees
			</li>
			<li>
				<i class="fa fa-check"></i>
				No credit check till you're happy.
			</li>
		</ul>
	</div>
{/if}

<ContactForm {formStore} />

<style lang="scss">
	ul {
		font-size: var(--text-md);
		text-align: left;
		margin: 0 auto;
		i {
			color: green;
			margin-right: var(--space-sm);
		}
	}
	div {
		font-size: var(--text-lg);
	}
</style>
