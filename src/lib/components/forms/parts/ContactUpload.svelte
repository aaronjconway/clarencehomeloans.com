<script lang="ts">
	import ContactForm from './ContactForm.svelte';

	let { formStore = $bindable(), hasHeader = true } = $props();
</script>

{#if hasHeader}
	<div class="form-header">
		<h1>Next please upload your loan estimate</h1>
		<div>
			We respect your privacy —
			<b>we do not share or sell information.</b>
		</div>
		<ul>
			<li>
				<div>
					<i class="fa fa-check"></i>
				</div>

				<div>No bait and switch</div>
			</li>
			<li>
				<div>
					<i class="fa fa-check"></i>
				</div>

				<div>No origination or processing fees</div>
			</li>
			<li>
				<div>
					<i class="fa fa-check"></i>
				</div>
				<div>No credit check till you're happy.</div>
			</li>
		</ul>
	</div>
{/if}

<ContactForm {formStore} />

<style lang="scss">
	ul {
		padding: 0 var(--space-lg);
		font-size: var(--text-md);
		text-align: left;
		max-width: 400px;
		margin: 0 auto;
		li {
			display: flex;
			i {
				color: green;
				margin-right: var(--space-sm);
			}
		}
	}
</style>
