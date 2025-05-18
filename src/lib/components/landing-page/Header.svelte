<script>
	import Logo from '../Logo.svelte';
</script>

<div class="container">
	<div class="header">
		<Logo href={''} />
		<div class="contact-wrapper">
			<a href="tel:6027372576">(602) 737-2576</a>
		</div>
	</div>
</div>

<style lang="scss">
	@use '/src/styles//base';

	.contact-wrapper {
		display: flex;
		gap: var(--space);
		align-items: center;
		white-space: nowrap;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space) 0;
		font-size: var(--text-sm);
	}

	@media (min-width: base.$sm) {
		.header {
			font-size: var(--text);
		}
	}

	@media (min-width: base.$md) {
		.header {
			font-size: var(--text);
		}
	}

	@media (min-width: base.$lg) {
		.header {
			font-size: var(--text);
		}
	}
</style>
